$(function() {
    var item = $('.link-item');
    var orig_color = item.css("border-bottom");

    item.hover(function() {
        //$('#b').css('background-color', 'yellow');
        item.prev(".link-item").css("border-bottom", "3px solid white");
    }, function() {
        // on mouseout, reset the background colour
        //$('#b').css('background-color', '');
        item.prev(".link-item").css("border-bottom", orig_color);
    });
});