const parrafos = document.querySelector('section');
const btn = document.querySelector('.container-btn');
const container_img = document.querySelector('.container-img')
const body =  document.querySelector('body')

btn.children[0].addEventListener('click',()=>{
    if (parrafos.children[0].classList.contains('estilos-parrafos')){
        parrafos.children[0].classList.remove('estilos-parrafos');
        parrafos.children[1].classList.remove('estilos-parrafos');
        parrafos.children[2].classList.remove('estilos-parrafos');
    }else{
        parrafos.children[0].classList.add('estilos-parrafos');
        parrafos.children[1].classList.add('estilos-parrafos');
        parrafos.children[2].classList.add('estilos-parrafos');
    }   
})

btn.children[1].addEventListener('click',()=>{
    if (parrafos.children[1].classList.contains('estilos-pares')){
        parrafos.children[1].classList.remove('estilos-pares');
        
    }else{
        parrafos.children[1].classList.add('estilos-pares');
    }   
})

btn.children[2].addEventListener('click',()=>{
    if (parrafos.children[0].classList.contains('estilos-impares')){
        parrafos.children[0].classList.remove('estilos-impares');
        parrafos.children[2].classList.remove('estilos-impares');
    }else{
        parrafos.children[0].classList.add('estilos-impares');
        parrafos.children[2].classList.add('estilos-impares');
    }   
})

//boton imagen aparecer
btn.children[3].addEventListener('click',()=>{
    for (let index = 0; index < 3; index++) {
        const imagen = document.createElement('img');
        imagen.src ='nike.jpg';

        container_img.appendChild(imagen);  
    }
    

         
})

//boton quitar imagen
btn.children[4].addEventListener('click',()=>{
   
        const imagen = document.querySelectorAll('.container-img img');
        for (const i of imagen) {
            i.remove();
        }
  
   
    
     
})


//cambiar fondo
btn.children[5].addEventListener('click',()=>{
    if (body.classList.contains('fondo')){
        body.classList.remove('fondo');
    }else{
        body.classList.add('fondo');
    }
     
})


//titulos
btn.children[6].addEventListener('click',()=>{
    if (parrafos.children[0].children[0].classList.contains('titulos')){
        parrafos.children[0].children[0].classList.remove('titulos');
        parrafos.children[1].children[0].classList.remove('titulos');
        parrafos.children[2].children[0].classList.remove('titulos');
    }else{
        parrafos.children[0].children[0].classList.add('titulos');
        parrafos.children[1].children[0].classList.add('titulos');
        parrafos.children[2].children[0].classList.add('titulos');
    }   
})


