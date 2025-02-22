import React from "react";
import "./TemplateFive.css";

const TemplateFive = ({ data, imageContainerDisplay }) => {
  return (
    <div id="resume-form" class="resume1">
      <div className="sidepages">
        <div className="lside">
          <div
            className="myimg"
            style={{ display: imageContainerDisplay }}
            id="imageContainer"
          >
            <img
              id="selectedImage"
              src={data.profile_image}
              alt="Selected Image"
              height={125}
              width={110}
            />
          </div>
          <div class="head">
            <h1>{data.first_name + " " + data.last_name}</h1>
          </div>

          <div class="cont">
            <span>Email : {data.email}</span>
            <br></br>
            <span> phone :{data.contact_number}</span>
            <br></br>
            <span>Address :{data.address}</span>
          </div>

          {(data.soft_skills.length > 0 ||
            data.technical_skills.length > 0) && (
            <div class="skll">
              <h2>SKILLS</h2>
              {data.technical_skills.length > 0 && (
                <div class="Tskill">
                  <h3>Technical Skills</h3>
                  <ul>
                    {data.technical_skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.soft_skills.length > 0 && (
                <div class="Sskill">
                  <h3>Soft Skills</h3>
                  <ul>
                    {data.soft_skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          {data.educations.length > 0 && (
            <div class="edu">
              <h2>EDUCATION</h2>
              {data.educations.map((education, i) => (
                <div key={i}>
                  <h3>{education.college_name}</h3>
                  <p class="dates">
                    {education.start_year + "-" + education.end_year}
                  </p>
                  <p>Grade: {education.grade}</p>
                </div>
              ))}
            </div>
          )}

          {data.languages.length > 0 && (
            <div class="lang">
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
        </div>

        <div className="rside">
          {data.about_me.length > 0 && (
            <div class="sum">
              <h2>ABOUT ME</h2>
              <p>{data.about_me}</p>
            </div>
          )}

          {data.experiences.length > 0 && (
            <div class="exp">
              <h2>EXPERIENCE</h2>
              {data.experiences.map((experience, i) => (
                <div key={i}>
                  <h3>{experience.company_name}</h3>
                  <p class="dates">
                    {experience.start_year + "-" + experience.end_year}
                  </p>
                  <ul>
                    <li>{experience.description}</li>
                  </ul>
                </div>
              ))}
            </div>
          )}

          {data.projects.length > 0 && (
            <div class="edu">
              <h2>PROJECTS</h2>
              {data.projects.map((project, i) => (
                <div key={i}>
                  <h3>{project.project_name}</h3>
                  <ul>
                    <li>{project.description}</li>
                  </ul>
                </div>
              ))}
            </div>
          )}

          {data.achivements.length > 0 && (
            <div class="lang">
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
    </div>
  );
};

export default TemplateFive;
