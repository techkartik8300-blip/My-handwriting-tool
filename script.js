const input = document.getElementById("userInput");
const output = document.getElementById("output");
const fontSelect = document.getElementById("fontSelect");
const imageInput = document.getElementById("handwritingImage");
const previewImage = document.getElementById("previewImage");

// Default Font
output.style.fontFamily = fontSelect.value;

// Live Preview
input.addEventListener("input", function () {
    output.innerText = input.value;
});

// Change Font
fontSelect.addEventListener("change", function () {
    output.style.fontFamily = this.value;
});

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