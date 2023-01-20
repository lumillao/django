$(document).ready(function(){
    $("#error").hide();
    $("#formulario").submit(function(){
        var mensaje = "";
        if($("#nombre").val().trim().length == 0) {
            mensaje = "El nombre esta en blanco";
        }
        if($("#email").val().trim().length == 0) {
            mensaje = "El email esta en blanco";
        }
        // Evitamos que se envien los datos del formulario
        if(mensaje != "") {
            $("#error").html(mensaje);
            $("#error").show();
            event.preventDefault();
        }

    });
})