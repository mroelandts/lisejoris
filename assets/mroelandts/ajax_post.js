function ajaxpost () {
    // (A) GET FORM DATA
    var form = document.getElementById("FormThingy");
    var data = new FormData(form);

    // disable submit button to indicate sending
    document.getElementById('formGoGo').disabled = true;
    document.getElementById('LoadingMessage').removeAttribute("hidden");

    // (B) AJAX REQUEST
    // (B1) POST DATA TO SERVER, RETURN RESPONSE AS TEXT
    fetch("https://mroelandts.pythonanywhere.com/lisejoris", { method:"POST", body:data })
    .then(res=>res.text())

    // (B2) SHOW MESSAGE ON SERVER RESPONSE
    .then((response) => {
        console.log(response);
        if (response == "OK") {
            document.getElementById('LoadingMessage').setAttribute("hidden", "hidden");
            document.getElementById('JeejMessage').removeAttribute("hidden");
        }
        else if (response == "OK-sad") {
            document.getElementById('LoadingMessage').setAttribute("hidden", "hidden");
            document.getElementById('SadMessage').removeAttribute("hidden");
        }
        else {
            document.getElementById('LoadingMessage').setAttribute("hidden", "hidden");
            document.getElementById('FuckMessage').removeAttribute("hidden");
        }
    })

    // (B3) OPTIONAL - HANDLE FETCH ERROR
    .catch((err) => {
        document.getElementById('LoadingMessage').setAttribute("hidden", "hidden");
        document.getElementById('FuckMessage').removeAttribute("hidden");
        console.error(err);
    });

    // (C) PREVENT FORM SUBMIT
    return false;
}
