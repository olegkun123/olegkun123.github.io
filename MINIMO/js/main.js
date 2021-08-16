$(document).ready(function() {

    let num = 0;
    $(".more").click(function() {
        num++;
        if (num % 2 != 0) {
            $(".row-switch").toggleClass("row_hidden");
            $(this).text("Load less");
        }

        else {
            $(".row-switch").toggleClass("row_hidden");
            $(this).text("Load more");
        }
    });
});