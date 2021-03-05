// jshint esversion:6
const selectElement = function(element){
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let menuItem = selectElement('.nav-item');
let body = selectElement('body');
const items = document.querySelectorAll('.nav-link');

menuToggler.addEventListener('click', function(){
  body.classList.toggle('open');
});

items.forEach(clickedItem => {
  clickedItem.addEventListener('click', ()=>{
    body.classList.remove('open');
  });
});

$(".signup-form").hide();

$(".tab.registrar").click(function(){
  $(".signup-form").show();
  $(".login-form").hide();
});

$(".tab.entrar").click(function(){
  $(".signup-form").hide();
  $(".login-form").show();
});

$(".btn").click(function(){
  $(".input").val("");
});

const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab => {
  clickedTab.addEventListener('click', ()=>{
    tabs.forEach(tab=>{
      tab.classList.remove('active');
    });
    clickedTab.classList.add('active');
  });
});

//jquery para login sin recargar

$('#form-usuario').on('click', '#botonlg', function(event){
	let correo = $('#fcorreo').val();
        let clave = $('#fclave').val();
        if(correo != '' && clave != ''){
          $.ajax({
                url: "backend/entrar.php",
                method: "POST",
                data: {correo:correo, clave:clave},
                success:function(datos){
                  let data = JSON.parse(datos);
                  if(!data.error){
                        var url = '#';
                        $('#form-usuario').load(' #form-usuario > *');
                  }else{
                        console.log(data.errorDescripcion);
                  }
                }
          });
        }
});

$('#form-usuario').on('click', '#botonreg', function(event){
	let pnombre = $('#pnombre').val();
	let papellido = $('#papellido').val();
	let pnacimiento = $('#pnacimiento').val();
	let pcorreo = $('#pcorreo').val();
	let ptelefono = $('#ptelefono').val();
	let pclave = $('#pclave').val();
	let ppclave = $('#ppclave').val();
	
	if(pnombre != '' && papellido != '' && pnacimiento != '' && ptelefono != '' && pcorreo != '' && pclave != '' && ppclave != ''){
	  $.ajax({
		url: "backend/registrar.php",
		method: "POST",
		data: {pnombre:pnombre, papellido:papellido, pnacimiento:pnacimiento, ptelefono:ptelefono, pcorreo:pcorreo, pclave:pclave, ppclave:ppclave},
		success: function(datos){
		  let data = JSON.parse(datos);
		  if(!data.error){
			console.log(data);
			$('#pnombre').val('');
			$('#papellido').val('');
			$('#pnacimiento').val('');
			$('#ptelefono').val('');
			$('#pcorreo').val('');
			$('#pclave').val('');
			$('#ppclave').val('');
		  }else{
			console.log(data.errorDescripcion);
		  }
		}
	  });
	}else{
	  console.log('todos los campos son obligatorios');
	}
});

$('#form-usuario').on('click', '.tabs-usuario', function(event){
	//$(".signup-form").hide();
	$(".tab.registrar").click(function(){
	$(".signup-form").show();
	$(".login-form").hide();
	});

	$(".tab.entrar").click(function(){
	  $(".signup-form").hide();
	  $(".login-form").show();
	});
	
	const tabs = document.querySelectorAll('.tab');

	tabs.forEach(clickedTab => {
	  clickedTab.addEventListener('click', ()=>{
	    tabs.forEach(tab=>{
	      tab.classList.remove('active');
	    });
	    clickedTab.classList.add('active');
	  });
	});
});

$('#form-usuario').on('click', '#salir', function(event){
	let accion = "salir";
        $.ajax({
          url: "backend/salir.php",
          method: "POST",
          data:{accion:accion},
          success:function(datos){
		$('.signup-form').hide();
                $('#form-usuario').load(' #form-usuario > *');
		$('.signup-form').hide();
          }
        });
});

//Ver al desplazar

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 500
});

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 500
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 400
});
