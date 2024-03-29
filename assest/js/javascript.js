function bot() {
    var x = $(".chatscreen");
    if (x.css('display') === "none") {
        x.css('display', 'block');
    } else {
        x.css('display', 'none');
    }
}


$(".submitformbtn").click(function SubForm() {
    if ($(".category").val() == "" || $("#category").val() == "" || $("#query").val() == "") {
        swal("Warning","Fill all the values in form","error");
    }
    else {
        $(".submitformbtn").attr("disabled","disabled");
        $.ajax({
            url: 'https://api.apispreadsheets.com/data/wqHz21sWfMGFjPoQ/',
            type: 'post',
            data: $("#myForm").serializeArray(),
            success: function () {
                swal("Hurray","Query Submitted Successfully","success");
                $(".container-fluid").css("filter", "blur(0px)");
                $(".form").css("display", "none");
                $("body").css("overflow", "visible");
                resetForm();
            },
            error: function () {
                swal("Warning","There is an issue try again later","error");
                $(".container-fluid").css("filter", "blur(0px)");
                $(".form").css("display", "none");
                $("body").css("overflow", "visible");
                resetForm();
            } 
        });
    }

})

$(".loginbtn").click(function () {
    $(".container-fluid").css("filter", "blur(3px)");
    $(".logincard").css("display", "block");
    $("body").css("overflow", "hidden");
})

$(".logincross").click(function () {
    $(".container-fluid").css("filter", "blur(0px)");
    $(".logincard").css("display", "none");
    $("body").css("overflow", "visible");
})

$(".formbtn").click(function () {
    var category = $(this).text();
    $(".container-fluid").css("filter", "blur(3px)");
    $(".form").css("display", "block");
    $("body").css("overflow", "hidden");
    $("#category").val(category);
})

$(".formcross").click(function () {
    $(".container-fluid").css("filter", "blur(0px)");
    $(".form").css("display", "none");
    $("body").css("overflow", "visible");
})


$(".forgot").click(function () {
    $(".container-fluid").css("filter", "blur(3px)");
    $(".logincard").css("display", "none");
    $(".forgotcard").css("display", "block");
    $("body").css("overflow", "hidden");
})

$(".forgotcross").click(function () {
    $(".container-fluid").css("filter", "blur(0px)");
    $(".forgotcard").css("display", "none");
    $("body").css("overflow", "visible");
})



$(".signupbtn").click(function () {
    $(".container-fluid").css("filter", "blur(3px)");
    $(".signupcard").css("display", "block");
    $("body").css("overflow", "hidden");
})

$(".signupcross").click(function () {
    $(".container-fluid").css("filter", "blur(0px)");
    $(".signupcard").css("display", "none");
    $("body").css("overflow", "visible");
})

var progress = 1;
switch (progress) {
    case 1:
        $(".progress-bar").css("width", "25%");
        $(".progress-bar").text("Query Posted");
        break;
    case 2:
        $(".progress-bar").css("width", "50%");
        $(".progress-bar").text("Expert read your Query");
        break;
    case 3:
        $(".progress-bar").css("width", "75%");
        $(".progress-bar").text("Expert Working");
        break;
    case 4:
        $(".progress-bar").css("width", "100%");
        $(".progress-bar").text("Solution Ready");
        break;
    default:
        $(".progress-bar").css("width", "0%");
        $(".progress").text("No Query Found");
        $(".progress").css("padding-left", "40%");
        break;
}


let resetForm = ()=>{
    $(".category").val("");
    $("#category").val("");
    $("#query").val("");
    $(".submitformbtn").removeAttr("disabled");
}