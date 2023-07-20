let verso = document.querySelector('#verso')
const letra = {
    0:[`Solo en Jesús está mi fe<br>
    Mi esperanza y mi canción<br>
    Piedra angular, firme sostén<br>
    Inconmovible en la aflicción`,
    `Cuán grande amor, inmensa paz<br>
    En el temor o adversidad<br>
    Consolador, amigo fiel<br>
    Yo en Su amor me sostendré`,
    `Solo en Jesús, Hijo de Dios<br>
    Quien se humilló por nuestro bien<br>
    Cordero de mi salvación<br>
    Por este mundo herido fue`,
    `En una cruz fue a morir<br>
    Y Dios mostró Su gracia ahí<br>
    Pues mi pecado Él llevó<br>
    En Su aflicción vida me dio`,
    `En un sepulcro, Él yació<br>
    El cuerpo inerte de Jesús<br>
    Mas el tercer día llegó<br>
    ¡Resucitó en gloriosa luz!`,
    `Y al triunfar sobre el mal<br>
    Perdió el pecado potestad<br>
    De Él suyo soy, Él mío es<br>
    Pues con Su sangre me compró`,
    `Desde el nacer hasta el morir<br>
    Sea el poder de Cristo en mí<br>
    No temeré, seguro estoy<br>
    Mi vida yo a Él le doy`,
    `Ningún poder, ningún afán<br>
    De Él me arrebatará<br>
    Hasta que Él venga otra vez<br>
    En Su poder me sostendré`],
    1:[`verso 1 canción 2<br>
        verso 1 canción 2<br>
        verso 1 canción 2<br>
        verso 1 canción 2`,
        `verso 2 canción 2<br>
        verso 2 canción 2<br>
        verso 2 canción 2<br>
        verso 2 canción 2`]
}
let indexCanciones = 0
let indexVersos = 0
verso.innerHTML = letra[indexCanciones][indexVersos]
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        if(indexVersos < letra[indexCanciones].length - 1){
            indexVersos ++
            verso.innerHTML = letra[indexCanciones][indexVersos]
        }
    }else if (event.key === 'ArrowUp') {
        if(indexVersos > 0){
            indexVersos --
            verso.innerHTML = letra[indexCanciones][indexVersos]
        }
    }else if (event.key === 'ArrowRight'){
        if(indexCanciones < Object.keys(letra).length - 1){
            indexCanciones ++
            indexVersos = 0
            verso.innerHTML = letra[indexCanciones][indexVersos]
        }
    }else if (event.key === 'ArrowLeft'){
        if(indexCanciones > 0){
            indexCanciones --
            indexVersos = 0
            verso.innerHTML = letra[indexCanciones][indexVersos]
        }
    }
})