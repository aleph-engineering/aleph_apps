(function(){
    activateForm();
    validateForm();
})();

function activateForm(){
    $('.social-link').click(function(){
        var registerPanel = $('.register-panel');
        var registerForm = $('.register-form');
        var hidedClass = 'hided';
        $(registerPanel).addClass('animated zoomOut');
        window.setTimeout(function(){
            $(registerPanel).addClass(hidedClass);
            $(registerForm).removeClass(hidedClass).addClass('animated zoomIn');
        },1000);
    })
}
function validateForm(){
    $('.register-form .form').form({
        on: 'blur',
        inline: true,
        fields: {
            username: {
                identifier  : 'username',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter a value'
                    }
                ]
            },
            email: {
                identifier  : 'email',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter a value'
                    },
                    {
                        type   : 'email',
                        prompt : 'Please enter a correct email address'
                    }
                ]
            }
        }
    })
}
