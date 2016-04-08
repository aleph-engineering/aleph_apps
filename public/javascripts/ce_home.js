'use strict';
(function(){
    $('.ui.embed').embed();
    activatePlay();
})();

function activatePlay(){
    $('.terminal-input').keypress(function(event) {
        if (event.keyCode == 13) {
            var word = $(this).val();
            $(this).val("");
            if(word  === 'play'){
                $('.panel-container').addClass('animated zoomOut');
                window.setTimeout(function(){
                    $('.video-container').addClass('animated zoomIn');
                    $('.panel-container').addClass('hided');
                },1000);
            }
            else if(word === 'fuck'){
                var previousText = $('.second-line').text();
                $('.first-line').text(previousText);
                $('.second-line').text("root@nauta~:# " + word);
            }
        }
    });
}
