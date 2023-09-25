//? Declarar variável e atribuir valor, para esconder a barra de progresso
var barraProgresso = document.querySelector(".progress");
barraProgresso.style.display = "none";

function Enviar(){
    var nomeCompleto = document.getElementById('nomeCompleto').value
    var idade = parseInt(document.getElementById('idade').value) 
    var cidade = document.getElementById('cidade').value

    var progresso = 0;
    var barra = document.querySelector(".progress-bar");
    barraProgresso.style.display = "block";

    var intervalo = setInterval(function(){
        if(progresso > 100){
            //? Limpar valor variavel
            clearInterval(intervalo);
            barraProgresso.style.display = "none";
            
            if ( idade == "" || nomeCompleto == "" || cidade == "" ){
                document.querySelector("#mostrar").innerHTML = 
                `<div class="alert alert-danger fade show" role="alert">
                    <span> Certifique-se de que todos os campos foram preenchidos.</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>            
                </div>`
            } else if (idade > 120 || idade < 10){
                document.querySelector("#mostrar").innerHTML = 
                `<div class="alert alert-danger fade show" role="alert">
                    <span> Idade inválida.</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>            
                </div>`
            } else {
                document.querySelector("#mostrar").innerHTML = 
                `<div class="alert alert-success fade show" role="alert">
                    <span> Olá ${nomeCompleto} de idade ${idade} residente em ${cidade}. </span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>            
                </div>`
            }
            
            
        } else {
            document.querySelector(".progress-bar").innerHTML = `${progresso}%`;
            progresso++; //? Incrementa na variável progresso
            barra.style.width = progresso + "%";
        }
    }, 50); //? Percorre o tempo em milisegundos
}