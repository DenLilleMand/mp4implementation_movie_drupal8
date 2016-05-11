
(function($) {
    $(document).ready(function() {
        console.log('Greetings adventurer...');
        $('video').css("-webkit-transform-origin","50% 0 0");
        $('video').css("-webkit-transform","scaleY(0.75)");
    });

}(jQuery));










/**$("video").one($.support.transition.end, function() {
            var height = $('video').height() * 0.75  + "px";
            console.log('height:', height);
            $('div.video-container').height(height);
        });
$("video").one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
 function() {
    var height = $('video').height() * 0.75  + "px";
    console.log('height:', height);
    $('div.video-container').height(height);
});
 $('video').addEventListener('transitionend', function() {
            var height = $('video').height() * 0.75  + "px";
            console.log('height:', height);
            $('div.video-container').height(height);

        }, false)*/
