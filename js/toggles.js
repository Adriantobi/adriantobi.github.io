window.onload = mobileMenuGone();

function mobileMenuGone() {
    if (window.innerWidth < 800) {
        document.getElementById('menu-section').style.display = "none";
    }
}

function toggle(requiredDiv) {
    if (document.getElementById(requiredDiv).style.display === "none") {
        document.getElementById(requiredDiv).style.display = "flex"
    }

    else {
        document.getElementById(requiredDiv).style.display = "none"
    }
}

function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expanded-image");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Show the container element (hidden with CSS)
    expandImg.style.display = "flex";
}

function bodyOverflowYHidden() {
    var contentSection = document.getElementById("content-section");
    contentSection.style.overflowY = "hidden";
}

function bodyOverflowYScroll() {
    var contentSectionScroll = document.getElementById("content-section");
    contentSectionScroll.style.overflowY = "scroll";
}

function removeImage() {
    var expandImg = document.getElementById("expanded-image");
    expandImg.style.display = "none";
}