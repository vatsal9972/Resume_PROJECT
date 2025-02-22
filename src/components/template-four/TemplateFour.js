import React from "react";
import "./TemplateFour.css";
// import photo from '../images/vatsal.png'
// import ProfileSelectFile from "../profile-select-file/ProfileSelectFile";

const TemplateFour = ({ data, imageContainerDisplay }) => {
  return (
    <div id="resume-form" class="resumee">
      <div className="image-containerr">
        <div style={{ display: imageContainerDisplay }} id="imageContainer">
          <img
            id="selectedImage"
            src={data.profile_image}
            alt="Selected Image"
            height={125}
            width={110}
          />
        </div>
      </div>
      <div class="headerr">
        <h1>
          <span className="first-name">{data.first_name}</span>{" "}
          <span className="last-name">{data.last_name}</span>
        </h1>
      </div>
      <div class="contactt">
        <p>
          <span style={{ color: "#999" }}>Email:</span> {data.email}
          <span className="separator" />
          <span style={{ color: "#999" }}>Phone:</span> {data.contact_number}
        </p>
        <p>
          <span style={{ color: "#999" }}>Address:</span> {data.address}
        </p>
        <div class="languagee">
          <span style={{ color: "#999" }}>Languages:</span>
          <div className="languages-list">
            {data.languages.map((language, i) => (
              <div key={i}>{language}</div>
            ))}
          </div>
        </div>
      </div>

      {data.about_me.length > 0 && (
        <div class="summaryy">
          <h2>ABOUT ME</h2>
          <p>{data.about_me}</p>
        </div>
      )}

      {(data.soft_skills.length > 0 || data.technical_skills.length > 0) && (
        <div class="skiill">
          <h2>SKILLS</h2>
          <div className="skiills-container">
            {data.technical_skills.length > 0 && (
              <div class="Techskiill" style={{ marginBottom: "20px" }}>
                <h3>Technical Skills</h3>
                <ol>
                  {data.technical_skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ol>
              </div>
            )}
            {data.soft_skills.length > 0 && (
              <div class="Softskiill" style={{ marginBottom: "20px" }}>
                <h3>Soft Skills</h3>
                <ol>
                  {data.soft_skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      )}
      <div class="experience-education-container">
        {data.educations.length > 0 && (
          <div class="educaation">
            <h2>EDUCATION</h2>
            {data.educations.map((education, i) => (
              <div key={i}>
                <h4>
                  <span style={{ color: "#227c9d" }}>University Name:</span>
                  {education.college_name}
                </h4>
                <p class="date">
                  <span style={{ color: "#227c9d" }}> Duration:</span>{" "}
                  {education.start_year + "-" + education.end_year}
                </p>
                <p>
                  <span style={{ color: "#227c9d" }}>Grade:</span>{" "}
                  {education.grade}
                </p>
              </div>
            ))}
          </div>
        )}
        {data.experiences.length > 0 && (
          <div class="experiencee">
            <h2>EXPERIENCE</h2>
            {data.experiences.map((experience, i) => (
              <div key={i}>
                <h4>
                  <span style={{ color: "#227c9d" }}>Company Name:</span>
                  {experience.company_name}
                </h4>
                <p class="date">
                  <span style={{ color: "#227c9d" }}>Duration:</span>
                  {experience.start_year + "-" + experience.end_year}
                </p>
                <span style={{ color: "#227c9d" }}>Discription:</span>
                {experience.description}
              </div>
            ))}
          </div>
        )}
      </div>
      <div class="projects-achievements-container">
        {data.projects.length > 0 && (
          <div class="projects">
            <h2>PROJECTS</h2>
            {data.projects.map((project, i) => (
              <div key={i}>
                <h4>
                  <span style={{ color: "#227c9d" }}>project Name:</span>
                  {project.project_name}
                </h4>
                <p>
                  <span style={{ color: "#227c9d" }}>Discription:</span>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {data.achivements.length > 0 && (
          <div class="achivements">
            <h2>ACHIVEMENTS</h2>
            {data.achivements.map((achivement, i) => (
              <div key={i}>
                <ul>
                  <li>
                    <p>{achivement}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateFour;
