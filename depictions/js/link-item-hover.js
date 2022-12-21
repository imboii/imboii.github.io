$(function() {
    console.log("link-item-hover.js debug message!");
    var item = $('.link-item.list-group-item');
    console.log(item);
    var orig_color = item.css("border-bottom");
    console.log(orig_color);

    item.hover(function() {
        //$('#b').css('background-color', 'yellow');
        item.prev(".link-item.list-group-item").css("border-bottom", "3px solid white");
    }, function() {
        // on mouseout, reset the background colour
        //$('#b').css('background-color', '');
        item.prev(".link-item.list-group-item").css("border-bottom", orig_color);
    });
});