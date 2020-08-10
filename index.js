function collapseDropdown(sectionNum) {
    var section = document.querySelectorAll(".resume-section");
    var dropdown = document.querySelectorAll(".dropdown");

    section[sectionNum].classList.toggle("collapsed");
    dropdown[sectionNum].classList.toggle("collapsed");
}

function photoSwitch(directionNum) {
    var Images = document.querySelectorAll("img");
    var numImages = Images.length;
    var currentImage = document.querySelector(".current-image");
    var imageNum = currentImage.classList[0].slice(3,4);
    if (directionNum == -1) {
        var newImageNum = parseInt(imageNum) - 1;
        if (newImageNum == -1) {
            var newImage = Images[numImages - 1];
        } else {
            var newImage = Images[newImageNum];
        }
    } else {
        var newImageNum = parseInt(imageNum) + 1;
        if (newImageNum == numImages) {
            var newImage = Images[0];
        } else {
            var newImage = Images[newImageNum];
        }
    }
    newImage.classList.toggle("current-image");
    currentImage.classList.toggle("current-image");
}