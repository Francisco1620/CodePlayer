var windowsHeight = $(window).height();
var headersHeight = $("header").height();
$(".codeBox").height(windowsHeight - headersHeight + "px");

$(".toggle").click(function () {
    $(this).toggleClass("selected");
    var activeDiv = $(this).html();
    $("#" + activeDiv + "Code").toggle();
    var showingDivs = $(".codeBox").filter(function () {
        return ($(this).css("display") != "none");
    }).length;

    var width = 100 / showingDivs;
    $(".codeBox").width(width + "%");

});

$("#runButton").click(function () {
    $("iframe").contents().find("html").html('<style>' + $("#cssArea").val() + '</style>' + $("#htmlArea").val());

    document.getElementById("resultFrame").contentWindow.eval($("#jsArea").val());
});
