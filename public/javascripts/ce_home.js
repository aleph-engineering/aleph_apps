'use strict';
(function(){
    $('.ui.embed').embed();
    activatePlay();
})();

function activatePlay(){
    $('.terminal-input').keypress(function(event) {
        if (event.keyCode == 13) {
            var word = $(this).val();
            var terminal = $(this);
            var formContainer = $('.panel-container');
            var videoContainer = $('.video-container');
            var secondLine = $('.second-line');
            var zoomOutClass = "animated zoomOut";
            var zoomInClass = "animated zoomIn";
            var hidedClass = "hided";
            var playComment = "# type 'play' to see more";
            var returnComment = "# type 'return' to see the form";
            $(terminal).val("");
            if(word  === 'play' && $(videoContainer).hasClass(hidedClass)){
                $(formContainer).addClass(zoomOutClass);
                $(secondLine).text(returnComment);
                window.setTimeout(function(){
                    $(videoContainer).removeClass(hidedClass).addClass(zoomInClass);
                    $(formContainer).addClass(hidedClass);
                    $(formContainer).removeClass(zoomOutClass);
                },1000);
            }
            else if(word === 'return' && $(formContainer).hasClass(hidedClass)){
                $(videoContainer).removeClass(zoomInClass).addClass(zoomOutClass);
                $(secondLine).text(playComment);
                window.setTimeout(function(){
                    $(formContainer).removeClass(hidedClass).addClass(zoomInClass);
                    $(videoContainer).addClass(hidedClass).removeClass(zoomOutClass);
                },1000);
            }
        }
    });
}
