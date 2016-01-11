$(document).ready(function() {
    console.log("dupa");
    $('.dodaj').click(function() {
        $(".input-data, .input-button").toggleClass("show");
    });
    $('.zapisz').click(function() {
        row = $("<tr/>");
        row.append($("<th/>", {
            "scope": "row"
        }));
        row.append($("<td/>").html($(".input-data.name :input").val()));
        row.append($("<td/>").html($(".input-data.lastname :input").val()));
        row.append($("<td/>").html($(".input-data.username :input").val()));
        row.append($("<td/>").html($(".input-data.fillpesel :input").val()));
        $('.table1 tbody').append(row);
    });
});