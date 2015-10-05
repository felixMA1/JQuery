var url = "https://alumnoscurso.azure-mobile.net/Tables/Curso";

function procesarDatos(res) {
    var tbody = $("table");
    var n = "";
    for (var i = 0; i < res.length; i++) {
        n += "<tr>";
        n += "<td>" + res[i].nombre + "</td>";
        n += "<td>" + res[i].duracion + "</td>";
        n += "<td><button type='button' class='borrar' onclick='conAjaxDel(\"" + res[i].id + "\")'>Borrar</button></td>";
        n += "</tr>";
    }
    $("table").html(n);

}

function conGet() {

    $.get(url, procesarDatos);

}


function conAjaxAdd(e) {
    console.log(e);
        e.preventDefault();
        var obj = {
            nombre: $("#nombre").val(),
            duracion: $("#duracion").val()
        }

        $.ajax({
            method: "post",
            url: url,
            success: conGet,
            error: function(err) {
                console.log(err);
                alert("Datos erroneos");
            },
            data: JSON.stringify(obj),
            dataType: "json",
            headers: {
                "Content-Type": "application/json"
            }

        });
}

function conAjaxDel(id) {

    $.ajax({
        method: "delete",
        url: url+"/"+id,
        success: conGet,
        error: function (err) {
            console.log(err);
        }
    });

}

function buscar() {
    var search = $("#buscar").val() || undefined;
    var urlFilt = url;
    console.log(buscar);
    (search) ? urlFilt += "?$filter=nombre eq '" + search + "'" : urlFilt;
    console.log(url);
    $.get(urlFilt, procesarDatos);
    urlFilt = "";
}

$(document).ready(function () {

    conGet();
    $("#nuevo").click(conAjaxAdd);
    //$("#nuevo").bind("click",conAjaxAdd);
    $("#aceptar").click(buscar);
    $("#abrirCapa").click(function () {

        $("#capaNuevo").css("display", "block");

    });
    $("#nuevo").click(function () {

        $("#capaNuevo").css("display", "none");

    });
});
