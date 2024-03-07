// jsnack 1 ///////////////
const zucchine = [
    {
        varietà : 'trombetta',
        peso : 700,
        lunghezza : 20 
    },

    {
        varietà : 'napoletana',
        peso : 479,
        lunghezza : 15
    },

    {
        varietà : 'tonda',
        peso : 655,
        lunghezza : 19
    },

    {
        varietà : 'fiorentina',
        peso : 512,
        lunghezza : 13
    },
    
    {
        varietà : 'romanesca',
        peso : 698,
        lunghezza : 24
    },
    
    {
        varietà : 'gialla',
        peso : 762,
        lunghezza : 23
    },
    
    {
        varietà : 'spinosa',
        peso : 390,
        lunghezza : 14
    },
    
    {
        varietà : 'ad alberello',
        peso : 520,
        lunghezza : 17
    },
    
    {
        varietà : 'a buccia chiara',
        peso : 436,
        lunghezza : 15
    },
    
    {
        varietà : 'afrodite',
        peso : 645,
        lunghezza : 21
    },
];
const output1 = document.querySelector('.output1');

const pesoFinaleZucchine = CalcoloPesoZucchine(zucchine);
const pesoFinaleZucchineKg = pesoFinaleZucchine / 1000;

output1.innerHTML = 'Il peso totale delle zucchine è: ' + pesoFinaleZucchine + ' grammi. Ovvero ' + pesoFinaleZucchineKg + ' Kg';


function CalcoloPesoZucchine(array){
    let pesoTotZucchine = 0;
    for(let i = 0; i < array.length; i++){
        pesoTotZucchine += array[i].peso;
    }
    return pesoTotZucchine;
}


// jsnack 2 ///////////////

// const zucchina1 = {
//     peso : 700,
//     lunghezza : 20 
// };

// const zucchina2 = {
//     peso : 479,
//     lunghezza : 15 
// };

// const zucchina3 = {
//     peso : 655,
//     lunghezza : 19 
// };

// const zucchina4 = {
//     peso : 512,
//     lunghezza : 13 
// };

// const zucchina5 = {
//     peso : 698,
//     lunghezza : 24 
// };

// const zucchina6 = {
//     peso : 762,
//     lunghezza : 23 
// };

// const zucchina7 = {
//     peso : 390,
//     lunghezza : 14 
// };

// const zucchina8 = {
//     peso : 520,
//     lunghezza : 17 
// };

// const zucchina9 = {
//     peso : 436,
//     lunghezza : 15 
// };

// const zucchina10 = {
//     peso : 645,
//     lunghezza : 21
// };

