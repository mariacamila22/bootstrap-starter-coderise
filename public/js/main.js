$(function() {

    var success = $(".alert-success");
    var error = $(".alert-danger");

    success.hide();
    error.hide();

    var signIn = $("#signin");

    signIn.on('click', function(e) {
        e.preventDefault();

        var username = $("#email").val();
        var password = $("#password").val();

        if (username == "camila" && password == "holi") {
            error.hide();
            success.show();
        }
        else {
            success.hide();
            error.show();
        }

        console.log(username, password);

    });

});
