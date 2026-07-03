const input = document.getElementById("userInput");
const output = document.getElementById("output");
const fontSelect = document.getElementById("fontSelect");
const fontSize = document.getElementById("fontSize");
const fontWeight = document.getElementById("fontWeight");
const inkColor = document.getElementById("inkColor");
const imageInput = document.getElementById("handwritingImage");
const previewImage = document.getElementById("previewImage");

// Default Settings
output.style.fontFamily = fontSelect.value;
output.style.fontSize = fontSize.value + "px";
output.style.fontWeight = fontWeight.value;
output.style.color = inkColor.value;

// Live Preview
function updatePreview() {
    output.innerText = input.value;
    output.style.fontFamily = fontSelect.value;
    output.style.fontSize = fontSize.value + "px";
    output.style.fontWeight = fontWeight.value;
    output.style.color = inkColor.value;
}

input.addEventListener("input", updatePreview);
fontSelect.addEventListener("change", updatePreview);
fontSize.addEventListener("change", updatePreview);
fontWeight.addEventListener("change", updatePreview);
inkColor.addEventListener("input", updatePreview);

// Image Preview
imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        previewImage.src = e.target.result;
        previewImage.style.display = "block";

    };

    reader.readAsDataURL(file);

});

// Download Preview
function downloadLetter() {

    html2canvas(document.getElementById("output")).then(function(canvas){

        const link = document.createElement("a");

        link.download = "HandScriptAI.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

    });

}

// Initial Preview
updatePreview();
