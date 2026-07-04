// Elements
const input = document.getElementById("userInput");
const output = document.getElementById("output");

const fontSelect = document.getElementById("fontSelect");
const fontSize = document.getElementById("fontSize");
const fontWeight = document.getElementById("fontWeight");
const fontStyle = document.getElementById("fontStyle");
const textDecoration = document.getElementById("textDecoration");
const inkColor = document.getElementById("inkColor");

const textAlign = document.getElementById("textAlign");
const lineHeight = document.getElementById("lineHeight");

const paperType = document.getElementById("paperType");

const imageInput = document.getElementById("handwritingImage");
const previewImage = document.getElementById("previewImage");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

const paper = document.getElementById("paper");

// Default Settings
function applyDefaults(){

output.style.fontFamily = fontSelect.value;
output.style.fontSize = fontSize.value + "px";
output.style.fontWeight = fontWeight.value;
output.style.fontStyle = fontStyle.value;
output.style.textDecoration = textDecoration.value;
output.style.color = inkColor.value;
output.style.textAlign = textAlign.value;
output.style.lineHeight = lineHeight.value;

}

applyDefaults();

// Live Preview
function updatePreview(){

output.innerText = input.value;

output.style.fontFamily = fontSelect.value;
output.style.fontSize = fontSize.value + "px";
output.style.fontWeight = fontWeight.value;
output.style.fontStyle = fontStyle.value;
output.style.textDecoration = textDecoration.value;
output.style.color = inkColor.value;
output.style.textAlign = textAlign.value;
output.style.lineHeight = lineHeight.value;

// Character Count
charCount.innerText = input.value.length;

// Word Count
let words = input.value.trim();

if(words===""){
wordCount.innerText=0;
}else{
wordCount.innerText = words.split(/\s+/).length;
}

}

// Live Events
input.addEventListener("input", updatePreview);

fontSelect.addEventListener("change", updatePreview);
fontSize.addEventListener("change", updatePreview);
fontWeight.addEventListener("change", updatePreview);
fontStyle.addEventListener("change", updatePreview);
textDecoration.addEventListener("change", updatePreview);
inkColor.addEventListener("input", updatePreview);
textAlign.addEventListener("change", updatePreview);
lineHeight.addEventListener("change", updatePreview);

// Paper Type
paperType.addEventListener("change", function(){

paper.classList.remove(
"paper-ruled",
"paper-yellow",
"paper-graph"
);

switch(this.value){

case "ruled":
paper.classList.add("paper-ruled");
break;

case "yellow":
paper.classList.add("paper-yellow");
break;

case "graph":
paper.classList.add("paper-graph");
break;

}

});

// Upload Handwriting Image
imageInput.addEventListener("change", function(){

const file=this.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(e){

previewImage.src=e.target.result;
previewImage.style.display="block";

};

reader.readAsDataURL(file);

});

// Zoom
const zoomRange=document.getElementById("zoomRange");
const zoomValue=document.getElementById("zoomValue");

zoomRange.addEventListener("input",function(){

paper.style.transform="scale("+this.value/100+")";
paper.style.transformOrigin="top center";

zoomValue.innerText=this.value+"%";

});

// Dark Mode
const darkMode=document.getElementById("darkMode");

darkMode.addEventListener("change",function(){

document.body.classList.toggle("dark");

});

// Auto Save
input.addEventListener("input",function(){

localStorage.setItem(
"Hand

// Copy Button
document.getElementById("copyBtn").addEventListener("click", function () {

    navigator.clipboard.writeText(input.value);

    alert("Text copied successfully!");

});

// Clear Button
document.getElementById("clearBtn").addEventListener("click", function () {

    input.value = "";

    updatePreview();

});

// Reset Button
document.getElementById("resetBtn").addEventListener("click", function () {

    input.value = "";

    fontSelect.selectedIndex = 0;
    fontSize.value = "28";
    fontWeight.value = "
