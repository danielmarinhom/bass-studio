let qtd = 1
var defaultp = '123456'
function plus(){
    qtd ++
    document.getElementById('qntInput').value = qtd
}
function minus(){
    if(qtd > 1){
        qtd --
        document.getElementById('qntInput').value = qtd
    }
}
function login(){
    let user = document.getElementById('user').value
    let pass = document.getElementById('senha').value
    if(user === 'admin' && pass === defaultp){
      alert("CONECTADO")
      window.location.href = "logado.html"
    }else{
      alert("USUARIO OU SENHA INVALIDO")
    }
}
function salvar(){
    let senha1 = document.getElementById('newpass1').value
    let senha2 = document.getElementById('newpass2').value
    if(senha1 == senha2){
      let senhafinal = senha1
      defaultp = senhafinal
      alert("SENHA TROCADA!")
    }else{
      alert("SENHAS NAO COMBINAM")
    }
}


$('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    pauseOnHover: false
  });

  
  $('.center').slick();
