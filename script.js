$(document).ready(function () {
    var width = $(window).width();
    $("body").append("<div id='sizeDiv'>" + $(window).width() + " X " + $(window).height() + " (" + getViewPortClass(width) + ")"+"</div>")
    $(window).resize(function () {
        var width = $(window).width();
        var height = $(window).height();
        $('#sizeDiv').text(width + " X " + height + " (" + getViewPortClass(width)+")")
    });
});
function getViewPortClass(value) {
    if (value >= 0 && value <= 575)
        return "xs";
    if (value >= 576 && value <= 767)
        return "sm";
    if (value >= 768 && value <=991)
        return "md";
    if (value >= 992 && value <= 1199)
        return "lg";
    if (value >= 1200 && value <= 1399)
        return "xl";
    if (value >= 1400)
        return "xxl";
    
}