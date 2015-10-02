//function ocultarDivs(e) {

//    $("div").hide();

//}

//$(document).ready(function () {
//    alert("Cargado");   
//    $("#uno").click(ocultarDivs);
//    $("a").click(
//        function (e) {
//            e.preventDefault();
//            console.log(e);
//            $("div").show();
//        }
//    );

//});


$(document).ready(function () {
    //alert("Cargado");
    $("div").click(
        function (e) {
            console.log($(this));
            $("#" + e.target.id).hide();
        }
        );
    $("a").click(
        function (e) {
            e.preventDefault();
            
            $("div").show(3000);
        }
    );

});


//function ocultarDivs() {
//    console.log($(this));
//    $(this).hide(2000,mostrarDivs);
//}
//function mostrarDivs() {
//    console.log($(this));
//    $(this).hide(2000,ocultarDivs);
//}

//$(document).ready(function () {
//    //alert("Cargado");
//    $("div").click();
//    $("a").click(
//        function (e) {
//            e.preventDefault();
//            ocultarDivs();
//        }
//    );

//});

