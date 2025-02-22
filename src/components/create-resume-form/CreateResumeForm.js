import React, { useState } from "react";
import Modal from "react-modal";
import Input from "../input/Input";
import TextArea from "../textarea/TextArea";
import MultiAdd from "../multi-add/MultiAdd";
import MultiEducation from "../multi-education/MultiEducation";
import MultiExperience from "../multi-experience/MultiExperience";
import MultiProjects from "../multi-projects/MultiProjects";
import TemplateOne from "../template-one/TemplateOne";
import "./CreateResumeForm.css";
import Select from "../select/Select";
import ProfileSelectFile from "../profile-select-file/ProfileSelectFile";
import TemplateTwo from "../template-two/TemplateTwo";
import TemplateThree from "../template-three/TemplateThree";
import TemplateFour from "../template-four/TemplateFour";
import TemplateFive from "../template-five/TemplateFive";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CreateResumeForm = () => {
  const [open, setOpen] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  
  const languages = [
    { label: "Hindi", value: "hindi" },
    { label: "English", value: "English" },
  ];

  const [resumeDetails, setResumeDetails] = useState({
    profile_image: "",
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    address: "",
    about_me: "",
    soft_skills: [],
    technical_skills: [],
    languages: [],
    educations: [],
    experiences: [],
    projects: [],
    achivements: [],
  });

  const [resumeNum, setResumeNum] = useState(1);

  const openModal = () => {
    if (!resumeDetails.first_name) {
      alert("First name is required. Please provide First name.");
      return;
    } else if (!resumeDetails.last_name) {
      alert("Last name is required. Please provide last name.");
      return;
    } else if (!resumeDetails.contact_number) {
      alert("Contact number is required. Please provide contact number.");
      return;
    } else if (!resumeDetails.email) {
      alert("Email is required. Please provide your email.");
      return;
    } else if (!resumeDetails.address) {
      alert("Address is required. Please provide your address.");
      return;
    } else if (resumeDetails.languages.length === 0) {
      alert("Languages are required. Please provide at least one language.");
      return;
    } else if (resumeDetails.educations.length === 0) {
      alert("Education details are required. Please provide at least one education entry.");
      return;
    }

    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const onGeneratePDF = async (e) => {
    e.preventDefault();
    setIsGeneratingPDF(true);
    
    try {
      const resumeElement = document.getElementById("resume-form");
      if (!resumeElement) {
        throw new Error("Resume element not found!");
      }

      const canvas = await html2canvas(resumeElement, {
        scale: 2, 
        useCORS: true,
        logging: false,
        windowWidth: resumeElement.scrollWidth,
        windowHeight: resumeElement.scrollHeight,
        backgroundColor: "#ffffff"
      });

   
      const imgWidth = 210; 
      const pageHeight = 297; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

  
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });


      pdf.addImage(
        canvas.toDataURL("image/jpeg", 1.0),
        "JPEG",
        0,
        0,
        imgWidth,
        imgHeight,
        "",
        "FAST"
      );


      if (imgHeight > pageHeight) {
        let remainingHeight = imgHeight;
        let position = -pageHeight;
        
        while (remainingHeight > pageHeight) {
          pdf.addPage();
          pdf.addImage(
            canvas.toDataURL("image/jpeg", 1.0),
            "JPEG",
            0,
            position,
            imgWidth,
            imgHeight,
            "",
            "FAST"
          );
          remainingHeight -= pageHeight;
          position -= pageHeight;
        }
      }

      pdf.save(`${resumeDetails.first_name}-${resumeDetails.last_name}-resume.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("There was an error generating the PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <>
      <div className="wrapper">
        <h4 className="resume-title">Resume Form</h4>
        <ProfileSelectFile
          name="profile_image"
          setResumeDetails={setResumeDetails}
        />
        <h6 className="block-title">Personal Details</h6>
        <Input
          label={<>First Name<span className="mandatory">*</span></>}
          type="text"
          setResumeDetails={setResumeDetails}
          name="first_name"
          required
        />
        <Input
          label={<>Last Name<span className="mandatory">*</span></>}
          type="text"
          setResumeDetails={setResumeDetails}
          name="last_name"
          required
        />
        <Input
          label={<>Contact Number<span className="mandatory">*</span></>}
          type="number"
          setResumeDetails={setResumeDetails}
          name="contact_number"
          required
        />
        <Input
          label={<>E-mail<span className="mandatory">*</span></>}
          type="email"
          setResumeDetails={setResumeDetails}
          name="email"
          required
        />
        <TextArea
          label={<>Address<span className="mandatory">*</span></>}
          setResumeDetails={setResumeDetails}
          name="address"
          required
        />
        <TextArea
          label="About Me"
          setResumeDetails={setResumeDetails}
          name="about_me"
        />
        <h6 className="block-title">Skills</h6>
        <MultiAdd
          label="Soft Skills"
          setResumeDetails={setResumeDetails}
          name="soft_skills"
        />
        <MultiAdd
          label="Technical Skills"
          setResumeDetails={setResumeDetails}
          name="technical_skills"
        />
        <h6 className="block-title">
          <>Known Languages<span className="mandatory">*</span></>
        </h6>
        <MultiAdd
          placeholder="Languages"
          setResumeDetails={setResumeDetails}
          name="languages"
        />
        <h6 className="block-title">
          <>Education<span className="mandatory">*</span></>
        </h6>
        <MultiEducation setResumeDetails={setResumeDetails} name="educations" />
        <h6 className="block-title">Experience</h6>
        <MultiExperience setResumeDetails={setResumeDetails} name="experiences" />
        <h6 className="block-title">Projects</h6>
        <MultiProjects setResumeDetails={setResumeDetails} name="projects" />
        <h6 className="block-title">Achievements</h6>
        <MultiAdd
          placeholder="Achievements"
          setResumeDetails={setResumeDetails}
          name="achivements"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            openModal();
          }}
          className="submit-btn"
        >
          Submit
        </button>
      </div>

      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        contentLabel="Resume Preview"
      >
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "20%" }}>
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                style={{
                  height: "100px",
                  width: "100px",
                  border: "1px solid black",
                  marginBottom: "20px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: resumeNum === num ? "cornflowerblue" : "none",
                  color: resumeNum === num ? "white" : "black",
                  cursor: "pointer"
                }}
                onClick={() => setResumeNum(num)}
              >
                {num}
              </div>
            ))}
          </div>
          <div style={{ width: "80%" }} id="resume-form">
            {resumeNum === 1 && <TemplateOne data={resumeDetails} />}
            {resumeNum === 2 && <TemplateTwo data={resumeDetails} />}
            {resumeNum === 3 && <TemplateThree data={resumeDetails} />}
            {resumeNum === 4 && <TemplateFour data={resumeDetails} />}
            {resumeNum === 5 && <TemplateFive data={resumeDetails} />}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button 
            className="DownloadPdf" 
            onClick={onGeneratePDF}
            disabled={isGeneratingPDF}
          >
            {isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CreateResumeForm;