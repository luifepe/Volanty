const search_marca = document.querySelector("#marca input[type=search]");
const search_modelo = document.querySelector("#modelo input [type=search]");
const search_ano = document.querySelector("#ano input [type=search]");
const search_button = document.querySelector("#botao button");

let preço_data = {};


search_button.addEventListener('click', searchPreço);
search_button.addEventListener('keyup', (event) => (event.key == 'Enter') ? searchPreço ():null);


function searchPreço() {
    console.log;
        
    const marca = "https://leonardodavila-price-api.glitch.me/brands";
    const modelo = "https://leonardodavila-price-api.glitch.me//brands/:brand/models";
    const ano = "https://leonardodavila-price-api.glitch.me//brands/:brand/models/:model/years";
;
    console.log(marca);
    console.log(modelo);
    console.log(ano);
    search_marca.value = ''
    search_modelo.value =  ''
    search_ano.value = ''


    fetch(marca)
    .then(response => response.json())
    .then(data => {
        
        console.log
        preço_data.forEach(carrega_Preço);
      
    })

    fetch(modelo)
    .then(response => response.json())
    .then(data => {
        
        console.log
        preço_data.forEach(carrega_Preço);
      
    })

    fetch(ano)
    .then(response => response.json())
    .then(data => {
        
        console.log
        preço_data.forEach(carrega_Preço);
      
    })
   
}

function carrega_Preço (value, index,array){
    var model = document.createElement ("h2", 'resultados');
    var year = document.createElement ("h2", 'resultados');
    var price = document.createElement ("h2", 'resultados');
 
   
    model.textContent = value.title;
    year.textContent = value.title;
    price.textContent = value.title;


    console.log(value);
}








