import React from "react";
import "./TemplateOne.css";

const TemplateOne = ({ data, imageContainerDisplay }) => {
  return (
    <div id="resume-form" class="resume">
      <div class="uppercontainer">
        <div className="leftcontainer">
          <div style={{ display: imageContainerDisplay }} id="imageContainer">
            <img
              id="selectedImage"
              src={data.profile_image}
              alt="Selected Profile"
              height={125}
              width={110}
            />
          </div>
        </div>

        <div className="rightcontainer">
          <div class="header">
            <h1>{data.first_name + " " + data.last_name}</h1>
          </div>
          <div class="contact">
            <p>Email: {data.email}</p>
            <p>Phone: {data.contact_number}</p>
            <p>Address: {data.address}</p>
          </div>
        </div>
      </div>
      <div className="lowercontainer">
        {data.about_me.length > 0 && (
          <div class="summary">
            <h2>ABOUT ME</h2>
            <p>{data.about_me}</p>
          </div>
        )}

        {(data.soft_skills.length > 0 || data.technical_skills.length > 0) && (
          <div class="skill">
            <h2>SKILLS</h2>
            <div className="skills-container">
              {data.technical_skills.length > 0 && (
                <div class="Techskill">
                  <h3>Technical Skills</h3>
                  <ul>
                    {data.technical_skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.soft_skills.length > 0 && (
                <div class="Softskill">
                  <h3>Soft Skills</h3>
                  <ul>
                    {data.soft_skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
        {data.experiences.length > 0 && (
          <div class="experience">
            <h2>EXPERIENCE</h2>
            {data.experiences.map((experience, i) => (
              <div key={i} className="experience_des">
                <h3>{experience.company_name}</h3>
                <p class="date">
                  {experience.start_year + "-" + experience.end_year}
                </p>
                <ul>
                  <li>{experience.description}</li>
                </ul>
              </div>
            ))}
          </div>
        )}
        {data.educations.length > 0 && (
          <div class="education">
            <h2>EDUCATION</h2>
            {data.educations.map((education, i) => (
              <div key={i}>
                <h3>{education.college_name}</h3>
                <p class="date">
                  {education.start_year + "-" + education.end_year}
                </p>
                <h4>Grade: {education.grade}</h4>
              </div>
            ))}
          </div>
        )}

        {data.projects.length > 0 && (
          <div class="education">
            <h2>PROJECTS</h2>
            {data.projects.map((project, i) => (
              <div key={i}>
                <h3>{project.project_name}</h3>
                <p> {project.description}</p>
              </div>
            ))}
          </div>
        )}

        {data.languages.length > 0 && (
          <div class="language">
            <h2>LANGUAGES</h2>
            {data.languages.map((language, i) => (
              <div key={i}>
                <ul>
                  <li>
                    <p>{language}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}

        {data.achivements.length > 0 && (
          <div class="language">
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

export default TemplateOne;
