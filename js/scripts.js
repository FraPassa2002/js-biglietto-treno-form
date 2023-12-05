
/*
1) Creo la struttura HTML necessaria a svolgere l'esercizio (2 input e 1 bottone)
2) Recuperare tutti gli elementi che mi servono dall'HTML
3) Intercettare il click sul bottone
    - Recupero i valori dagli input
    - Calcolo il prezzo del biglietto
    - Lo stampo in console

*/


const km = document.getElementById('km');
console.log('km', km, typeof km);

const age = document.getElementById('age');
console.log('age', age, typeof age);

const calcButton = document.getElementById('calc-button');
console.log('calcButton', calcButton, typeof calcButton);

const calcForm = document.querySelector('form');
console.log('calcForm', calcForm, typeof calcForm);

// calcButton.addEventListener('click', function() {
calcForm.addEventListener('submit', function(eventt) {
    console.log('eventt', eventt, typeof eventt);
    eventt.preventDefault();

    console.log('km.value', km.value, typeof km.value);
    console.log('age.value', age.value, typeof age.value);
    
    const kmInNumber = parseInt(km.value);

    if (isNaN(kmInNumber)) {
        alert('Valore dei KM non valido!');
    }
    else {
        const ageInNumber = parseInt(age.value);

        if (isNaN(ageInNumber)) {
            alert('Valore età non valido!');
        }
        else {
            let price = (kmInNumber * 0.21);

            if (ageInNumber < 18){
                price *= 0.8;
            }
            else if (ageInNumber > 65) {
                price *= 0.6;
            }
            
            console.log('price', price, typeof price);
    
            price = price.toFixed(2);
    
            console.log('price DOPO toFixed', price, typeof price);
    
            // Selettore con querySelector
            const resultContainer = document.querySelector('h2');
            // OPPURE
            // Selettore con getElementById
            // const resultContainer = document.getElementById('result-container');
            console.log('resultContainer', resultContainer, typeof resultContainer);
            resultContainer.innerHTML = 'Il prezzo del tuo biglietto è $' + price;
        }

        
    }    
});
