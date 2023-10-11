const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
];

var image = document.getElementById("image");
image.addEventListener("click", switch_image);

function switch_image() {
    let current_image = image.getAttribute("src");
    let current_index = images.indexOf(current_image);
    console.log(current_index)
    if (current_index >= images.length - 1) {
        current_index = 0;
    } else {
        current_index++;
    }
    image.setAttribute("src", images[current_index]);
}