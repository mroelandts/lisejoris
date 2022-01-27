function ajaxpost () {
    // (A) GET FORM DATA
    var form = document.getElementById("FormThingy");
    var data = new FormData(form);

    // disable submit button to indicate sending
    document.getElementById('formGoGo').disabled = true;

    // (B) AJAX REQUEST
    // (B1) POST DATA TO SERVER, RETURN RESPONSE AS TEXT
    fetch("https://mroelandts.pythonanywhere.com/lisejoris", { method:"POST", body:data })
    .then(res=>res.text())

    // (B2) SHOW MESSAGE ON SERVER RESPONSE
    .then((response) => {
        console.log(response);
        if (response == "OK") {
            document.getElementById('JeejMessage').removeAttribute("hidden");
            document.getElementById('formGoGo').disabled = true;
        }
        else if (response == "OK-sad") {
            document.getElementById('SadMessage').removeAttribute("hidden");
            document.getElementById('formGoGo').disabled = true;
        }
        else {
            document.getElementById('FuckMessage').removeAttribute("hidden");
            document.getElementById('formGoGo').disabled = true;
        }
    })

    // (B3) OPTIONAL - HANDLE FETCH ERROR
    .catch((err) => {
        document.getElementById('FuckMessage').removeAttribute("hidden");
        document.getElementById('formGoGo').disabled = true;
        console.error(err);
    });

    // (C) PREVENT FORM SUBMIT
    return false;
}
