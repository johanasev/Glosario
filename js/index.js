//IIFE (Inmediatly Invoked Function Expretions) for the letter status highlight

   const menuItems = document.querySelectorAll('.alphabet-letter'); 
   const secciones = document.querySelectorAll('.container-letter');
   const callback = (entries) => {
      entries.forEach(entry => {
         if(entry.isIntersecting) {
            const id = entry.target.id;
            let idLetra ='word-' + id[id.length - 1];
            itemActual = document.getElementById(idLetra);
            itemActual.classList.add('active');
            for(const item of menuItems) {
               if(item != itemActual) {
                  item.classList.remove('active');
               }
            }
         }
      })
   }
   const observer = new IntersectionObserver(callback);
   secciones.forEach(element => observer.observe(element));


//IIFE (Inmediatly Invoked Function Expretions) for the scroll 

   const letrasAlfabeto = document.getElementsByClassName('alphabet-letter');
   document.addEventListener('click',(target)=>{
      for(letra of letrasAlfabeto) {
         if(letra == target.path[0]) {
            setTimeout(()=>{
               let scrollY = window.scrollY;
               window.scrollTo(0,scrollY - 150);
            },1000);
         }
      }
   })

//IIFE (Inmediatly Invoked Function Expretions) for the search 
   const inputBusqueda = document.getElementById('input-search');
   const terminos = document.querySelectorAll('.services__item');
   inputBusqueda.addEventListener('keyup',(e)=>{
      let terminoBuscar = e.target.value.toLowerCase();
      if(terminoBuscar != ""){
         terminos.forEach((termino)=>{
            const titulo = termino.firstElementChild.innerText.toLowerCase();
            console.log(titulo);
            console.log(terminoBuscar);
            if(!titulo.includes(terminoBuscar)){
               termino.style.display = "none";
            } 
         });
      } else {
         terminos.forEach((termino)=>{
            termino.style.display = "inherit";
         });
      }   
   })



//    document.addEventListener('click', (e) => {
//    console.log(e.target);
//    e.target.style.width= '100%';
// })




 window.addEventListener('load',() => {
   const $loader = d.querySelector('.loader'),
      $image = d.querySelector('.loader__img'),
      $enterCount = d.querySelector('.enter-count');
   let timeLeft = 5;   //-->5

   $image.setAttribute('src','img/website-construction.jpg');
   setTimeout(() => {
      $image.classList.replace('loader__img','loader2__img');
   }, 50);
   setInterval(() => {
      $enterCount.textContent = `${timeLeft--} seconds to go!`;
   }, 1000);
   setTimeout(() => {
      $loader.classList.toggle('loader2');
   }, 6500);
});

