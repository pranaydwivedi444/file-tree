import React from "react";
import File from "../File/File.component";
import Folder from "../Folder/Folder.component";

export default function FolderStructure() {
  return (
    <>
      <Folder name="desktop">
        <Folder name="pictures">
          <File name={"papa"} extension={".png"} />
          <File name={"Deepali"} extension={".jpg"} />
          <File name={"song"} extension={".mp3"} />
        </Folder>
        <Folder name={"documents"}>
          <File name={"englishSong"} extension={".mp3"} />
          <File name={"resume"} extension={".docx"} />
        </Folder>
      </Folder>
    </>
  );
}
