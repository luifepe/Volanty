


let marcas = [];


fetch("https://volanty-price-api.herokuapp.com/brands")
.then(response => response.json())
.then(dados => {
    
    marcas = dados;

    for(let marca of marcas) {

    document.getElementById("marcas")
    .innerHTML += `<option value="${marca}">${marca}</option>`;

    mostrarModelos();

    
    
    }
});




function mostrarModelos() {
 
    let marca = document.getElementById('marcas').value;

    fetch("https://volanty-price-api.herokuapp.com/brands/" + marca + "/models")

    .then( response => response.json())

    .then( dados => {
        
        modelos = dados;
        
        for(let modelo of modelo) {
        
        document.getElementById("modelo")
        .innerHTML += `<option value="${modelo}">${modelo}</option>`;
        
        mostrarAno();
        
            
            
            }
        });

        


}

function mostrarAno() {
 
    let marca = document.getElementById('ano').value;

    fetch("https://volanty-price-api.herokuapp.com/brands/" + marca + "/models" + model + "/years")

    .then( response => response.json())

    .then( dados => {
        
        ano = dados;
        
        for(let ano of ano) {
        
        document.getElementById("modelo")
        .innerHTML += `<option value="${ano}">${ano}</option>`;
        
        mostrarVersao();
        
            
            
            }
    });

}


function mostrarVersao() {
 
    let marca = document.getElementById('versao').value;
    
    fetch("https://volanty-price-api.herokuapp.com/brands/" + marca + "/models" + model + "/years" + ano + "/versions")
    
    .then( response => response.json())
   
    .then( dados => {
            
        versao = dados;
            
        for(let versao of versao) {
            
        document.getElementById("modelo")
        .innerHTML += `<option value="${versao}">${versao}</option>`;
            
        mostrarVersao();
            
                
                
          }
    });
    
}


        



