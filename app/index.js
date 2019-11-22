import document from "document";
import { inbox } from "file-transfer";
import fs from "fs";

let title = document.getElementById("title");
title.text = "Retrieving Online Friends...";
let friendCount = document.getElementById("friendCount");
friendCount.text = "Waiting...";

let result;
// Event occurs when new file(s) are received
inbox.onnewfile = () => {
  console.log("Received Friends Count!");
  let data;
 
    // If there is a file, move it from staging into the application folder
    data = inbox.nextFile();
    if (data) {
      console.log(`Received File: <${data}>`);
      result = fs.readFileSync(data, "ascii");        
      console.log(`Showing File contents: ${result}`);   
      friendCount.text = result + " Friends online";
    }        
};