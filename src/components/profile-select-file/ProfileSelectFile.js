import React, { useState } from "react";
import "./ProfileSelectFile.css";

function ProfileSelectFile({ name, setResumeDetails }) {
  const [selectedImageSrc, setSelectedImageSrc] = useState("");
  const [imageContainerDisplay, setImageContainerDisplay] = useState("none");

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImageSrc(e.target.result);
        setImageContainerDisplay("block");
        setResumeDetails((prev) => ({ ...prev, [name]: e.target.result }));
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form>
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
        />
      </form>
      <div style={{ display: imageContainerDisplay }} id="imageContainer">
        <img
          id="selectedImage"
          src={selectedImageSrc}
          alt="Selected Image"
          style={{ width: 70 }}
        />
      </div>
    </div>
  );
}
export default ProfileSelectFile;
