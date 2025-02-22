import React from "react";
import "./TemplateTwo.css";

const TemplateTwo = ({ data, imageDisplay }) => {
  return (
    <div id="resume-form" class="Resume">
      <div className="headerContainer">
        <div className="textContainer">
          <h1>{data.first_name + " " + data.last_name}</h1>
          <p>Contact_number: {data.contact_number}</p>
          <p>Email: {data.email}</p>
          <p>Address: {data.address}</p>
        </div>
        <div className="imageContainer">
          <div style={{ display: imageDisplay }} id="image">
            <img
              id="selectedImage"
              src={data.profile_image}
              alt="Selected Image"
              height={125}
              width={110}
            />
          </div>
        </div>
      </div>

      {data.about_me.length > 0 && (
        <div class="aboutme">
          <h2>About Me</h2>
          <p>{data.about_me}</p>
        </div>
      )}
      {data.educations.length > 0 && (
        <div className="educationclass">
          <h2>Education</h2>
          {data.educations.map((education, i) => (
            <div key={i}>
              <div className="collegename">
                <p>{education.college_name} </p>
              </div>
              <p>
                {" "}
                {"(" + education.start_year + "-" + education.end_year + ")"}
              </p>

              <p>Grade: {education.grade}</p>
            </div>
          ))}
        </div>
      )}
      {(data.soft_skills.length > 0 || data.technical_skills.length > 0) && (
        <div className="skillclass">
          <h2>Skills</h2>
          <div className="skillclass">
            {data.technical_skills.length > 0 && (
              <div className="skill1">
                <h4>Technical Skills</h4>
                <p>
                  {data.technical_skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </p>
              </div>
            )}
            {data.soft_skills.length > 0 && (
              <div className="skill2">
                <h4>Soft Skills</h4>
                <p>
                  {data.soft_skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      {data.experiences.length > 0 && (
        <div className="experienceclass">
          <h2>Experience</h2>
          {data.experiences.map((experience, i) => (
            <div key={i}>
              <div className="companyname">
                <p>{experience.company_name}</p>
              </div>
              <p>
                {"(" + experience.start_year + "-" + experience.end_year + ")"}
              </p>
              <div className="expDescription">
              <p>
                <li>{experience.description}</li>
              </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {data.languages.length > 0 && (
        <div className="languageclass">
          <h2>Language</h2>
          {data.languages.map((language, i) => (
            <div key={i}>
              <p>{language}</p>
            </div>
          ))}
        </div>
      )}
      {data.projects.length > 0 && (
        <div className="project">
          <h2>Project</h2>
          {data.projects.map((project, i) => (
            <div key={i}>
              <h3>{project.project_name}</h3>
              <p> {project.description}</p>
            </div>
          ))}
        </div>
      )}
      {data.achivements.length > 0 && (
        <div className="achivement">
          <h2>Achivements</h2>
          {data.achivements.map((achivement, i) => (
            <div key={i}>
              <p>{achivement}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateTwo;