function changeToTd() {
    document.getElementById('last-name').innerHTML = '.TD'
    document.getElementById('last-name').style.marginLeft = '0px'
}

function changeToTobi() {
    document.getElementById('last-name').innerHTML = 'TOBI'
    document.getElementById('last-name').style.marginLeft = '5px'
}

function removeAllImages() {
    var selectedImages = document.getElementById("gallery");
    selectedImages.style.display = "none";
}

function showAllImages() {
    var selectedImagesToSee = document.getElementById("gallery");
    selectedImagesToSee.style.display = "flex";
}