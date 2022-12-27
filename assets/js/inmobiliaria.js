function arreglo_habitaciones(){
    console.log('arreglo_habitaciones')
    /* CARGAR HABITACIONES */
    habitaciones = []
    habitacion1 = {
        nombre : 'Casa de campo',
        cuartos : 3,
        metros : 170,
        descripcion : 'Un lugar ideal para descansar de la ciudad',
        src : 'assets/img/01.jpeg'
    }
    habitaciones.push(habitacion1)
    habitacion2 = {
        nombre : 'Casa de campo',
        cuartos : 2,
        metros : 110,
        descripcion : 'Un lugar ideal para descansar de la ciudad',
        src : 'assets/img/02.jpeg'
    }
    habitaciones.push(habitacion2)
    habitacion3 = {
        nombre : 'Departamento en la playa',
        cuartos : 2,
        metros : 90,
        descripcion : 'Un lugar ideal para descansar de la ciudad',
        src : 'assets/img/03.jpeg'
    }
    habitaciones.push(habitacion3)
    habitacion4 = {
        nombre : 'Casa de campo',
        cuartos : 2,
        metros : 170,
        descripcion : 'Un lugar ideal para descansar de la ciudad',
        src : 'assets/img/04.jpeg'
    }
    habitaciones.push(habitacion4)
    habitacion5 = {
        nombre : 'Casa de campo',
        cuartos : 1,
        metros : 60,
        descripcion : 'Un lugar ideal para descansar de la ciudad',
        src : 'assets/img/05.jpeg'
    }
    habitaciones.push(habitacion5)
    habitacion6 = {
        nombre : 'Departamento en la playa',
        cuartos : 2,
        metros : 80,
        descripcion : 'Un lugar ideal para descansar de la ciudad',
        src : 'assets/img/06.jpeg'
    }
    habitaciones.push(habitacion6)
    return habitaciones
}

function cargar_habitaciones(habitaciones){
    console.log('cargar_habitaciones')
    console.log('habitaciones:', habitaciones.length)
    const main = document.getElementById('habitaciones')

    var secciones = ''
    /* RECORRER HABITACIONES*/
    habitaciones.forEach(function(habitacion) {
        /* INTERPOLACIÓN */
        const seccion =
        `<section> ` +
        `<div class="product"> ` +
        `    <p>${habitacion.nombre}</p>` +
        `    <img src="${habitacion.src}" alt=""> ` +
        `    <div class="price"> ` +
        `        <p class="mount">Cuartos: ${habitacion.cuartos} Metros: ${habitacion.metros}</p> ` +
        `        <p class="mount">${habitacion.descripcion}</p> ` +
        `        <div class="comprar">Ver más</div> `+
        `    </div> `+
        `</div> `+
        `</section> `
        /* CONCATENAR SECCIONES */
        secciones = secciones + seccion
    })
    /* MODIFICAR SECCIONES CON EL VALOR CREADO DE FORMA DINÁMICA MEDIANTE ARREGLO */
    total =  `<p>Total: ${habitaciones.length}</p> `
    main.innerHTML = total + secciones
}

function buscar(){
    console.log('buscar habitaciones')
    /* LEER DATOS DEL FORMULARIO*/
    const cuartos = document.getElementById('txt-cuartos')
    const metros_desde = document.getElementById('txt-metros-desde')
    const metros_hasta = document.getElementById('txt-metros-hasta')

    if (cuartos.value !== '' && metros_desde.value !== '' && metros_hasta.value !== ''){
        habitaciones = arreglo_habitaciones()
        habitaciones_filtradas = []
            /* RECORRER HABITACIONES*/
        habitaciones.forEach(function(habitacion) {

            if(habitacion.cuartos == cuartos.value){

                if(metros_desde.value <= habitacion.metros &&  habitacion.metros <= metros_hasta.value){
                    console.log('metros_hasta.value -> ', metros_hasta.value)

                    habitaciones_filtradas.push(habitacion)
                }
            }
        })

        cargar_habitaciones(habitaciones_filtradas)

    }else{
        alert('Faltan campos por llenar')
    }

}