1 //Validar nombre
    /**
     * Verificar que lo que se está introduciendo es un String
     * Verificar que todo lo q hay en el String son solo letras (ni números. ni carácteres especiales)
     */

/**
 * Función para validar un texto y que no sea vacío
 * @param {string} nombre 
 * @return {boolean} boolean true or false
 */
function validarNombre(nombre){
    const name = nombre.trim();
    //const pattern = new RegExp('^[A-Z]+$', 'i');
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
    //console.log(pattern.test(name))
    console.log("sin limpiar: ", nombre, " y limpio: ", name)
    if (typeof name !== 'string' || name === "" || !pattern.test(name) ){
        //console.log("entro en el if")
        
        return false
    } else {
        return true
    }
}

console.log(validarNombre("   Maria jose  "))
console.log(validarNombre("     "))
console.log(validarNombre("  G0rd illo "))

2 //Validar email
    /**
     * Localizar que el @ esté bien colocado (nombreusuario@servidor)
     * Que termine en "." + extensión del servidor (buscar listado)
     * ¿? Como se gestiona ¿? con Verificación por correo ¿? listado de servidores ¿?
     */

function validarEmail(correo){
    const email = correo.trim()
    const pattern =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    //console.log("sin limpiar: ", correo, "y limpio: ", email)
    if (typeof email !== 'string' || email === "" || !pattern.test(email) ){
        //console.log("entro en el if")
        
        return false
    } else {
        return true
    }
}

console.log(validarEmail("hugogordillo@gmail.com"))
console.log(validarEmail("  hugogordillo@gmail.com   "))
console.log(validarEmail("hugog&rdillo@gmail.com"))
console.log(validarEmail("hugogordillo00@gmail.com"))
console.log(validarEmail(" a@g.com"))


3 //Validar URL

function validarUrl(enlace){
    const url = enlace.trim()
    //const pattern = /^(www)?.+\.[a-z]{2,6}(\.[a-z]{2,6})?.+\.[a-z]{2,4}$/; la ultima la coge
    const pattern = /^(ht|f)tps?:\/\/\w+([\.\-\w]+)?\.[a-z]{2,10}(:\d{2,5})?(\/.*)?$/i;
    //console.log("sin limpiar: ", enlace, "y limpio: ", url)
    if (typeof url !== 'string' || url === "" || !pattern.test(url) ){
        //console.log("entro en el if")
        
        return false
    } else {
        return true
    }
}

console.log(validarUrl("http://www.algunlugar.com"))
console.log(validarUrl("http://www.algun  lugar.com"))
console.log(validarUrl("http://blog.algunlugar.com/libros/donquijote.htm"))
console.log(validarUrl("https://www.algunlugar.com   op"))

4 //Validar fecha de control
/**
 * 
 */

function validarFecha(fecha){
    const date = fecha.trim()
    //const pattern =  /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})(\s)([0-1][1-9]|[2][0-3])(:)([0-5][0-9])$/;
    const pattern =  /^\d{4}([\-/. ])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
    //console.log("sin limpiar: ", correo, "y limpio: ", date)
    if (typeof date !== 'string' || date === "" || !pattern.test(date) ){
        //console.log("entro en el if")
        
        return false
    } else {
        return true
    }
}

function mirarFecha() {
    console.log(document.querySelector("[type=date]").value);
}

console.log(validarFecha("12/02/2023"))
console.log(validarFecha("12/31/2022"))
console.log(validarFecha("2022/12/31"))
console.log(validarFecha("2022-12-31"))
console.log(validarFecha("12   31  2022"))
console.log(validarFecha("12-06/2022"))
//console.log(document.querySelector("[type=date]").value)


5 //Validar el tiempo en formato de hora

function validarTiempo(hora) {
    const tiempo = hora.trim()
    const pattern =  /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    //console.log("sin limpiar: ", correo, "y limpio: ", tiempo)
    if (typeof tiempo !== 'string' || tiempo === "" || !pattern.test(tiempo) ){
        //console.log("entro en el if")
        
        return false
    } else {
        return true
    }
}

console.log(validarTiempo("14:55"))
console.log(validarTiempo("14/55"))
console.log(validarTiempo("14-55"))
console.log(validarTiempo("14 55"))
console.log(validarTiempo("14:55:00"))
console.log(validarTiempo("48:00"))
console.log(validarTiempo("00:76"))

function mirarHora() {
    console.log(document.querySelector("[type=time]").value);
}

6 //Validar fecha y hora de nacimiento

7 //Validar mes

8 //Validar semana

9 //Validar un número entre los límites puestos

10 //Validar rango de número entre 0 y 10

11 //Validar número de teléfono 
    /**
     * Verificar que son numeros
     * Limitar la entrada de números a 9
     * 
     */

function validarNum(numero){

}


12 //Validar termino de búsqueda

13 //Validar color
