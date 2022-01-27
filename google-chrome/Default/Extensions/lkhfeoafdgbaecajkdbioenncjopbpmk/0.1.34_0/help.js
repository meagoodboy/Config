function checkAddress() {
    var chkBox = document.getElementById('litics');
    if (chkBox.checked) {
        //alert("Analytics on");
        localStorage["ga"] = "on";
    } else {
        localStorage["ga"] = "off";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('litics').addEventListener('click', checkAddress);
    if (localStorage["ga"] === undefined) {
        localStorage["ga"] = "off";
        document.getElementById('litics').checked = false;
    }
    if (localStorage["ga"] === "on") {
        document.getElementById('litics').checked = true;
    }
});