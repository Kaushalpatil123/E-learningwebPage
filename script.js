// Script for Sourses page
let upload = document.getElementById("upload-btn");
upload.addEventListener("click", addfile);
let fileList = document.getElementById("files");
let input = document.getElementById("input");
let link = document.getElementById("link");
let Home = document.getElementById("Home")

function addfile() {
  alert("Document uploaded successful");
  link.innerText = input.files[0].name;
  link.href = `books/${input.files[0].name}`;
  link.classList.add("link");
}






