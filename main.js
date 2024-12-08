//service worker
if('serviceWorker' in navigator){
    console.log('puedes usar los serviceWorker del navegador');

    navigator.serviceWorker.register('./sw.js')
                                            .then(res => console.log('serviceWorker cargado correctamente', res))
                                            .catch(err => console.log('serviceWorker no se ha podido registrar', err))
}else{
    console.log('No puedes usar los serviceWorker del navegador');
}

// scroll suavisado
$(document).ready(function(){
    //console.log("hola mundo");
    $("#menu a").click(function(e){
        //cancela el evento si este es cancelable
        e.preventDefault();
        //animate es un metodo de instancia crea una nueva animacion
        $("html, body").animate({
            //establece el numero de pixeles que el contenido de un elemento ha sido desplazado
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
});
