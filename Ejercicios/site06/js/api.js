$(document).ready(function(){
    $("#enviar").click(function(){
        $.get("https://www.themealdb.com/api/json/v1/1/categories.php",
            function(data){
            // En data se capturan todos los datos provenientes desde el servivio
            $.each(data.categories, function(i, item){
            //Por cada elemento agregaremos una nueva fila en la tabla categorias
            $("#categoria").append("<tr><td>"+item.idCategory+"</td>"+
                                    "<td>"+item.strCategory+"</td>"+
                                  '<td> <img src="'+item.strCategoryThumb+'"></img>'+"</td>"+
                                  "<td>"+item.strCategoryDescription+"</td></tr>");
                                  
        });
    });
});
})