// FolderUpload Component : Uploads a Folder to IPFS and returns the URL
import React, { useState } from "react";
import { FolderUpload } from "react-ipfs-uploader";

const App = () => {
  const [folderUrl, setFolderUrl] = useState("");

  return (
    
    <div class="container" style={{ justifyContent:'center', alignItems:'center', height: '500vh', scrollMargin:true}}>
      <FolderUpload setUrl={setFolderUrl} />
      FolderUrl :{" "}
      <a href={folderUrl} target="_blank" rel="noopener noreferrer">
        {folderUrl}
      </a>
    </div>
  );
};

export default App;
