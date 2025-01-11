// import { type PutBlobResult } from '@vercel/blob';
import { useState } from "react";

export default function UploadImage() {
  const [blob, setBlob] = useState(null);
  return (
    <>
      <h1>Upload Your image</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          console.log(Object.values(files));
        }}
      >
        <input name="file" ref={inputFileRef} type="file" required multiple />
        <button type="submit">Upload</button>
      </form>
      {/* {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )} */}
    </>
  );
}
