function login() {

    var errorCount = 0;
    if (CheckIsNull("username", "lblUsername", "Please enter username")) {
        errorCount = errorCount + 1;
    }

    if (CheckIsNull("password", "lblPassword", "Please enter password")) {
        errorCount = errorCount + 1;
    }

    //if (CheckIsNull("hidLoc", "lblLocation", "Unable to find location. Make sure you allow location sharing.")) {
    //    errorCount = errorCount + 1;
    //}

    if (errorCount == 0) {
        swal({
            title: "",
            text: "Please wait..",
            imageUrl: "../content/MiscImages/Processing.gif",
            showConfirmButton: false
        });
        $.ajax({
            type: "POST",
            url: "/Home/Login?username=" +
                $("#username").val().trim() +
                "&password=" +
                $("#password").val().trim() +
                "&hidLoc=" +
                $("#hidLoc").val().trim() +
                "&response=" +
                $("#captchaCode").val().trim() +
                "&RememberMe=" +
                $("#Remember").is(":checked"),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                if (response == "administrator") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    if (getURL != null && getURL.length > 0) {
                        window.location.href = decodeURIComponent(getURL.returnUrl);
                    }
                    window.location.href = "../PleaseWait/";
                } else if (response == "ad" || response == "md" || response == "zbp") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    if (getURL != null && getURL.length > 0) {
                        window.location.href = decodeURIComponent(getURL.returnUrl);
                    }
                    window.location.href = "../Retail/";
                } else if (response == "retailer") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    window.location.href = "../Retail/services";
                } else if (response == "otp") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    window.location.href = "../Home/OTP";
                } else if (response == "fos") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    window.location.href = "../FOS/";
                } else if (response == "api") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    window.location.href = "../Retail/";
                } else {
                    ShowErrorMessage(response);
                    swal.close();
                }
            },
            failure: function(response) {
                ShowErrorMessage(response);
                swal.close();
            },
            error: function(response) {
                ShowErrorMessage(response);
                swal.close();
            }
        });

        $("#username").val("");
        $("#password").val("");
    }
}

function loginAdmin() {

    var errorCount = 0;
    if (CheckIsNull("username", "lblUsername", "Please enter username")) {
        errorCount = errorCount + 1;
    }

    if (CheckIsNull("password", "lblPassword", "Please enter password")) {
        errorCount = errorCount + 1;
    }

    if (errorCount == 0) {
        swal({
            title: "",
            text: "Please wait..",
            imageUrl: "../content/MiscImages/Processing.gif",
            showConfirmButton: false
        });
        $.ajax({
            type: "POST",
            url: "/AdminLogin/Login?username=" +
                $("#username").val().trim() +
                "&password=" +
                $("#password").val().trim() +
                "&RememberMe=" +
                $("#Remember").is(":checked"),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                if (response == "administrator") {
                    ShowSuccessMessage("Admin Login Not Supported");
                    swal.close();
                } else if (response == "ad" || response == "md" || response == "zbp") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    if (getURL != null && getURL.length > 0) {
                        window.location.href = decodeURIComponent(getURL.returnUrl);
                    }
                    window.location.href = "../Retail/";
                } else if (response == "retailer") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    window.location.href = "../Retail/Mobile";
                } else if (response == "fos") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    window.location.href = "../FOS/";
                } else if (response == "api") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    window.location.href = "../Retail/";
                } else {
                    ShowErrorMessage(response);
                    swal.close();
                }
            },
            failure: function(response) {
                ShowErrorMessage(response);
                swal.close();
            },
            error: function(response) {
                ShowErrorMessage(response);
                swal.close();
            }
        });

        $("#username").val("");
        $("#password").val("");
    }
}

function OTP() {

    var errorCount = 0;
    if (CheckIsNull("username", "lblUsername", "Please enter username")) {
        errorCount = errorCount + 1;
    }

    if (CheckIsNull("otp", "lblotp", "Please enter password")) {
        errorCount = errorCount + 1;
    }

    if (errorCount == 0) {
        swal({
            title: "",
            text: "Please wait..",
            imageUrl: "../content/MiscImages/Processing.gif",
            showConfirmButton: false
        });
        $.ajax({
            type: "POST",
            url: "/Home/OTP?username=" + $("#username").val().trim() + "&otp=" + $("#otp").val().trim(),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                if (response == "redirect") {
                    ShowErrorMessage("Timeout. Please login again.");
                    var getURL = getUrlVars();
                    if (getURL != null && getURL.length > 0) {
                        window.location.href = decodeURIComponent(getURL.returnUrl);
                    }
                    window.location.href = "login";
                }
                if (response == "administrator") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    if (getURL != null && getURL.length > 0) {
                        window.location.href = decodeURIComponent(getURL.returnUrl);
                    }
                    window.location.href = "../PleaseWait/";
                } else if (response == "ad" || response == "md" || response == "zbp") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    if (getURL != null && getURL.length > 0) {
                        window.location.href = decodeURIComponent(getURL.returnUrl);
                    }
                    window.location.href = "../Retail/";
                } else if (response == "retailer") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    window.location.href = "../Retail/Mobile";
                } else if (response == "otp") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    window.location.href = "../Home/OTP";
                } else if (response == "fos") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    window.location.href = "../FOS/";
                } else if (response == "api") {
                    ShowSuccessMessage("Loggin in please wait");
                    var getURL = getUrlVars();
                    window.location.href = "../Retail/";
                } else {
                    ShowErrorMessage(response);
                    swal.close();
                }
            },
            failure: function(response) {
                ShowErrorMessage(response);
                swal.close();
            },
            error: function(response) {
                ShowErrorMessage(response);
                swal.close();
            }
        });

        $("#password").val("");
    }
}

function ForgotPassword() {

    var errorCount = 0;
    if (CheckIsNull("username", "lblFUsername", "Please enter username")) {
        errorCount = errorCount + 1;
    }

    if (errorCount == 0) {
        swal({
            title: "",
            text: "Please wait..",
            imageUrl: "../content/MiscImages/Processing.gif",
            showConfirmButton: false
        });

        $.ajax({
            type: "POST",
            url: "/Home/ForgotPassword?username=" + $("#username").val().trim(),
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                if (response == true) {
                    ShowSuccessMessage("Password sent on your registered mobile number and email");
                    swal.close();
                } else {
                    ShowErrorMessage(response);
                    swal.close();
                }
            },
            failure: function(response) {
                ShowErrorMessage(response);
                swal.close();
            },
            error: function(response) {
                ShowErrorMessage(response);
                swal.close();
            }
        });
        $("#username").val("");
    }
}


function ResendOTP() {

    var errorCount = 0;
    if (errorCount == 0) {
        swal({
            title: "",
            text: "Please wait..",
            imageUrl: "../content/MiscImages/Processing.gif",
            showConfirmButton: false
        });
        $.ajax({
            type: "POST",
            url: "/Home/ResendOTP",
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                if (response == "redirect") {
                    ShowErrorMessage("Timeout. Please login again.");
                    var getURL = getUrlVars();
                    if (getURL != null && getURL.length > 0) {
                        window.location.href = decodeURIComponent(getURL.returnUrl);
                    }
                    window.location.href = "login";
                } else if (response == "success") {
                    ShowSuccessMessage("OTP Sent successfully.");
                    swal.close();
                }
            },
            failure: function(response) {
                ShowErrorMessage(response);
                swal.close();
            },
            error: function(response) {
                ShowErrorMessage(response);
                swal.close();
            }
        });

        $("#password").val("");
    }
}