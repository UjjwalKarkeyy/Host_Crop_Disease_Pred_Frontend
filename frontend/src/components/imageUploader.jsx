import { useState } from "react";
import "./imageUploaderStyle.css";

const ImageUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    console.log("File Uploaded!");
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://13.62.98.66/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Upload failed:", error);
    }
  };

  return (
    <>
      {/* file input row (kept close to subtitle) */}
      <div className="input-group">
        <input id="file" type="file" onChange={handleFileChange} />
      </div>

      {/* details + preview row */}
      <div className="uploader-row">
        <div className="left-stack">
          <div className="file-details">
            {file && (
              <section>
                <div className="file-details-title">File details:</div>
                <ul className="file-details-list">
                  <li>Name: {file.name}</li>
                  <li>Type: {file.type}</li>
                  <li>Size: {file.size} bytes</li>
                </ul>

                {/* moved the button INSIDE the card for clean alignment */}
                <button onClick={handleUpload} className="submit">
                  Upload File
                </button>
              </section>
            )}
          </div>
        </div>

        <div className="img-preview">
          {file && (
            <div className="preview">
              <h2>Preview of Image</h2>
              <img src={URL.createObjectURL(file)} alt="preview" height={200} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageUploader;
