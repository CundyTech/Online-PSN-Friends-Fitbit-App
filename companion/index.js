import { outbox } from "file-transfer";

function getFriends(){
  
  let data = StrToArrayBuffer("0");
  
  for (let counter = 0; counter < data.length; counter++) {
    data[counter] = "a".charCodeAt(0) + counter;
  }
    
   console.log("Getting Friends file...");
   outbox.enqueue("friends.txt", data);
}

setTimeout(getFriends, 2000);

function ArrayBufferToStr(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function StrToArrayBuffer(str) {
  var buf = new ArrayBuffer(str.length*2);
  var bufView = new Uint16Array(buf);
  for (var i=0, strLen=str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}