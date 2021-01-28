//frame  que envolve os campos

var frame = document.getElementById('content')
frame.style.display='flex'
frame.style.flexDirection='column'
frame.style.margin=' 0 auto'
frame.style.backgroundImage='linear-gradient(black, yellow)'
frame.style.height='210px'
frame.style.width='280px'
frame.style.borderRadius='14px'
frame.style.alignItems='center'
frame.style.justifyContent='center'


// Esta é a parte interna aonde insere os valores
var form = document.getElementById('form')
form.style.margin='auto'
form.style.color='white'
form.style.justifyContent='center'
form.style.fontSize='14pt'

// Botão e chamada do HTML para executar o calculo 
var result =document.getElementById('calc')
result.addEventListener('click',combustivel)
result.style.background='yellow'
result.style.color='black'
result.style.height='40px'
result.style.borderRadius='8px'
result.style.width='100%'
result.style.fontSize='16pt'
 
//A parte que vai funcinar o calculo
function combustivel(){
    var comb_alcool = document.getElementById("alcool")
    var comb_gasolina = document.getElementById("gasolina")
    var alc =Number(comb_alcool.value)
    var gas =Number(comb_gasolina.value)
    var resultado = alc/gas
    var respo = document.getElementById('respo')
    if(resultado < 0.7){
      respo.innerHTML=`O Alcool é a melhor opção ${resultado}`
     
   }else if(resultado>=0.7){
      respo.innerHTML=`A gasolina é a melhor opção ${resultado}`
      
   }
   
}
