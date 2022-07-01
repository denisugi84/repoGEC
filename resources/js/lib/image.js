function checkImage(url) {

    return url;

    let imageExists = require('image-exists');

  // First check if club logo exists
    let src = "";
    console.log("FIRST "+src);
    imageExists(url, function(exists) {
        // Then get league logo
        if (exists) {
            src = url;
        } else {
            src = "/assets/img/avatar.jpg";
        }
    });
    return src;

    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    request.onload = function() {
        if (request.status == 200) {
            return url;
        } else {
            return "/assets/img/avatar.jpg";
        }
    }
}

export default checkImage;