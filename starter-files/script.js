// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
function getAnswer (){
    fetch(API_ENDPOINT)
    .then(answer => { return answer.json()})
    .then(data =>{
        let p = `<p>${data.answer}</p>`;
        lugar.innerHTML = p;
        
    });
}


const lugar = document.getElementById('answer');
let button = document.getElementById('button');
button.addEventListener("click", getAnswer);

