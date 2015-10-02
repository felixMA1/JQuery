var url = "https://alumnoscurso.azure-mobile.net/Tables/Alumno";

function procesarDatos(res) {

    var n = "";
    for (var i = 0; i < res.length; i++) {
        n += res[i].nombre + "<br />";
    }
    $("#resultado").html(n);

}

function conGet(e) {

    e.preventDefault();
    $.get(url, procesarDatos);

}

function conGetJson(e) {

    e.preventDefault();
    $.getJSON(url, procesarDatos);

}

function conPost(e) {

    e.preventDefault();
    var obj = {
        nombre: "Pepe",
        apellidos: "Yo",
        edad: 22,
        nota: 7
    }
    $.post(url, JSON.stringify(obj), function(res) {
        console.log(res);
    });

}

function conLoad(e) {

    e.preventDefault();
    $("#resultado").load(url);

}

function conAjax(e) {

    e.preventDefault();
    var obj = {
        nombre: "Pepe",
        apellidos: "Yo",
        edad:  22,
        nota: 7
    }

    $.ajax({

        method: "post",
        url: url,
        success: function(res) {
            console.log(res);
        },
        error: function(err) {
            console.log(err);
        },
        data: JSON.stringify(obj),
        dataType: "json",
        headers: {
            "Content-Type":"application/json"
        }

    });

}

$(document).ready(function() {

    $("#lnkAjax").click(conAjax);
    $("#lnkGet").click(conGet);
    $("#lnkGetJson").click(conGetJson);
    $("#lnkPost").click(conPost);
    $("#lnkLoad").click(conLoad);

});
