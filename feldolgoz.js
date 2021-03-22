
$(function () {
    $('#varos').keyup(adatBeolvas); //referencia a metodusra
});


var tomb = [];

function adatBeolvas() {
    var varosErtek = $('#varos').val();
    //console.log(x);

    $.ajax({
        type: 'GET',
        url: "feldolgoz.php?varos=" + varosErtek,
        success: function (eredmeny) {
            tomb = JSON.parse(eredmeny);
            console.log(eredmeny);
            $("article").empty();
            for (var i = 0; i < tomb.length; i++) {
                $("article").append(tomb[i].nev).append("<br>");
            }
        }});

}

