$(function(){
    $("#show-contacts").sideNav();
    includeNumber();
    sendSMS();
});

function includeNumber(){
    $('.chip').click(function(){
        var numbers = $(this).data('number');
        $('#label_number').addClass("active");
        $('#phone_number').attr("value", parseInt(numbers));
    })
}
function sendSMS() {
    $('#send').click(function () {
        var number = $('#phone_number').val();
        var message = $('#body_message').val();
        var data = {number: '+' + number, message: message};
        $.ajax({
            url: '/api/sendSMS',
            dataType: "json",
            data: data,
            timeout: 10000
        }).done(function (data) {
            Materialize.toast("Your message was sent correctly", 2000);
        }).fail(function (data) {
            Materialize.toast("Error! Your message couldn't be sent. Message: " + data.responseText, 2000);
        });
    });
}
