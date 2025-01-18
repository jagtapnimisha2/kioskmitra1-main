//Variable declaration
var ExceptionMessage = "Something went wrong. Please try after sometime.";

/********************************** Common utility functions *****************************[Start]******************************/
//End Variable declaration

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}

//function to check control value is null or not
//ele : id of the element whose value is going to check
//lbl : lable id where error messgae should display
//message : field for which validation is implemented
function CheckIsNull(ele, lbl, message) {
    var status = false;
    if ($('#' + ele).val() != "") {
        if ($('#' + ele).val().trim() == "") {
            $('#' + lbl).show();
            $('#' + lbl).html(message);
            status = true;
        } else {
            $('#' + lbl).hide();
            $('#' + lbl).html('');
            status = false;
        }
    } else {
        $('#' + lbl).show();
        $('#' + lbl).html(message);
        status = true;
    }
    return status;
}

//Method to add export to excel button on grid
function AddExportFromDatatable(myTable) {
    $.fn.dataTable.Buttons.defaults.dom.container.className = 'dt-buttons btn-overlap btn-group btn-overlap';

    new $.fn.dataTable.Buttons(myTable, {
        buttons: [
            {
                "extend": "excelHtml5",
                "text": "<i class='fa fa-download bigger-100 white' title='Export to Excel'></i> <span class='hidden'>Export to Excel</span>",
                "className": "btn btn-white btn-primary btn-bold",
                exportOptions: {
                    columns: "thead th:not(.noExport)"
                }
            }
        ]
    });
    myTable.buttons().container().appendTo($('.tableTools-container'));
}

//Method to check length of textbox value
function CheckLength(txt, lbl, length, message) {
    if ($('#' + txt).val() != "") {
        if ($('#' + txt).val().length < length) {
            $('#' + lbl).show();
            $('#' + lbl).html(message);
            return false;
        } else {
            $('#' + lbl).hide();
            $('#' + lbl).html('');
            return true;
        }
    } else {
        return true;
    }

}



//function to validate email
//ele : id of the element whose value is going to validate
//lbl : lable id where error messgae should display
//message : field for which validation is implemented
function CheckIsValidEmail(ele, lbl, message) {
    var status = false;
    if (ValidateEmail($('#' + ele).val().trim())) {
        $('#' + lbl).hide();
        $('#' + lbl).html('');
        status = true;
    } else {
        $('#' + lbl).show();
        $('#' + lbl).html(message);
        status = false;
    }
    return status;
}

//Method to show success message auto hide
function ShowSuccessMessage(msg) {
    ClearMessages();
    $('.alert-danger').hide();
    $('.alert-success').show();
    $('.alert-success > span.messageSpan').html(msg);
    //$('.alert-success').delay(5000).fadeOut();
    $('.modal-body').scrollTop(0);
}


//Method to show success message
function ShowSuccessMessageNoHide(msg) {
    ClearMessages();
    $('.alert-danger').hide();
    $('.alert-success').show();
    $('.alert-success > span.messageSpan').html(msg);
    $('.modal-body').scrollTop(0);
}

//Method to show error message with auto hide
function ShowErrorMessage(msg) {
    ClearMessages();
    $('.alert-success').hide();
    $('.alert-danger').show();
    $('.alert-danger > span.messageSpan').html(msg);
    //$('.alert-danger').delay(5000).fadeOut();
    $('.modal-body').scrollTop(0);
}


//Method to show error message and no hide
function ShowErrorMessageNoHide(msg) {
    ClearMessages();
    $('.alert-success').hide();
    $('.alert-danger').show();
    $('.alert-danger > span.messageSpan').html(msg);
    $('.modal-body').scrollTop(0);
}

//method to hide error message
function HideErrorMessage() {
    $('.close-error').click(function () { $('.alert-danger').hide(); $('.alert-danger > span.messageSpan').html(''); });
}

//method to hide error message
function HideSuccessMessage() {
    $('.close-success').click(function () { $('.alert-success').hide(); $('.alert-success > span.messageSpan').html(''); });
}


//method to hide error message
function HideErrorMessageClick() {
    $('.alert-danger').hide(); $('.alert-danger > span.messageSpan').html('');
}

//method to hide success message
function HideSuccessMessageClick() {
    $('.alert-success').hide(); $('.alert-success > span.messageSpan').html('');
}

//method to hide warning message
function HideInfoMessageClick() {
    $('.alert-info').hide(); $('.alert-info > span.messageSpan').html('');
}

//method to hide warning message
function HideWarningMessageClick() {
    $('.alert-warning').hide(); $('.alert-warning > span.messageSpan').html('');
}

//Method to hide the success or error messages
function ClearMessages() {
    $('.validationLabel').hide();
    $('.alert-success').hide();
    $('.alert-danger').hide();
}

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}