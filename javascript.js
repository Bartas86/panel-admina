$(document).ready(function() {
    console.log("dupa");
    $('.dodaj').click(function() {
        $(".input-data, .input-button").toggleClass("show");
    });
    $('.zapisz').click(function() {
        row = $("<tr/>");
        row.append($("<td/>", {
            "scope": "row"
        }));
        row.append($("<td/>").html($(".input-data.name :input").val()));
        row.append($("<td/>").html($(".input-data.lastname :input").val()));
        row.append($("<td/>").html($(".input-data.username :input").val()));
        row.append($("<td/>").html($(".input-data.fillpesel :input").val()));
        row.append($("<td/>").html($("<button type='button' class='btn btn-danger usun'>usuń</button>" )));
        $('.table1 tbody').append(row);
        $('.filtrowanie1').addClass("show");
        bindRemoveRow(row);
    });

    function bindRemoveRow(row) {
        row.on('click', function() {
            $(this).hide();
            console.log('dupa2');
        });
    }
    $('.filtruj').click(function() {
        var pesel = $('.input-pesel').val();
        $('.table1 tbody tr td').each(function() {
          var td = $(this);
          // console.log(td)
            if (td.text() === pesel) {
                td.parent().addClass('highlight');
                console.log($(this))
            };
        });
    });
    $('.clean').on('click', function(){
        $(".table1 tbody tr").removeClass('highlight');
        $('.input-pesel').val("");
    });
    $('#filtr').on('click', function(){
        $('.filtrowanie1').toggleClass('show');
    });
});