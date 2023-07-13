let verso = document.querySelector('#verso')
const letra = {
    0: [
    `primer verso <br>
    sigue el verso uno`,
    'segundo verso',
    'tercer verso'
    ],
    1: [
        `verso uno de cancion dos`
    ]
}

let index = 0
document.addEventListener('keydown', (event) => {
    if (event.key === 'g') {
        verso.innerHTML = letra[1][0]
        if (index < letra.length - 1) {
            index += 1
        }
        console.log(index);
    }
})



// document.querySelectorAll('#verso').innerHTML = "otro texto";