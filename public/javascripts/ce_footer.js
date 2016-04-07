(function(){
    updateStats();
    $('.ui.embed').embed();
})();

function updateStats(){
    $('.circles-stats')
        .visibility({
            once: false,
            onTopVisible: function(calculations) {
                timing = setInterval(fillCircles, 10);
            }
        });
}
function fillCircles(){
    //get the dom elements
    var circles = $('.c100');
    var percent =$(circles).data('percent');
    //var users_text = $('.total-users');
    //var hired_text = $('.total-hired');
    //var teams_text = $('.total-teams');
    //var visits_text = $('.total-visits');

    //check if it's full
    if(percent >= 100) {
        window.clearInterval(timing);
        return;
    }

    //get the increments
    //var users_inc = $(users_text).data('total') / 100;
    //var hired_inc = $(hired_text).data('total') / 100;
    //var teams_inc = $(teams_text).data('total') / 100;
    //var visits_inc = $(visits_text).data('total') / 100;

    //update the view
    $(circles).toggleClass('p'+percent++);
    $(circles).data('percent',percent);
    $(circles).addClass('p'+percent);

    //$(users_text).text(users_inc.toFixed());
    //$(hired_text).text(hired_inc.toFixed());
    //$(teams_text).text(teams_inc.toFixed());
    //$(visits_text).text(visits_inc.toFixed());
}
