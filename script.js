var bnt2 = document.querySelector('.bnt2')
var bloco1 = document.querySelector('.maior')
var bloco2 = document.querySelector('.maior2')
var main = document.querySelector('main')


function GerarNumero() {
  return Math.floor(Math.random() * 5) * 20
}

function Nao() {
  var n1 = GerarNumero()
  var n2 = GerarNumero()
  //bnt2.style.transform = `translate(${n1}px, ${n2}px)`
  bnt2.style.position = 'absolute'
  bnt2.style.top = `${n1}%`
  bnt2.style.left = `${n2}%`
  //alert(n1)
}

function Sim() {
  bloco1.style.display = 'none'
  bloco2.style.display = 'block'
  main.style.background = 'white'
  main.style.border = '5px solid black'
}