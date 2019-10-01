// click heart
$(document).ready(function () {
    $('.fa-heart').click(function (e) {
        console.log('ready');
        e.preventDefault();
        $(this).toggleClass('far');
        $(this).toggleClass('fas');
    });
});