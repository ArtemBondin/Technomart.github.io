var pictureIndex = 1;
    showPictures(pictureIndex);

function currentPicture(n) {
    showPictures(pictureIndex = n);
}

function showPictures(n) {
    var i;
    var pictures = document.getElementsByClassName("information");
    var rects = document.getElementsByClassName("curent-image");
    if (n > pictures.length) {pictureIndex = 1}    
    if (n < 1) {pictureIndex = pictures.length}
    for (i = 0; i < pictures.length; i++) {
      pictures[i].style.display = "none";  
}
    for (i = 0; i < rects.length; i++) {
      rects[i].className = rects[i].className.replace(" active", "");
}
    pictures[pictureIndex-1].style.display = "block";  
    rects[pictureIndex-1].className += " active";
}