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




 document.addEventListener('click',(e) => {

   let listaTerminos = document.querySelectorAll('.services__item');
   
   listaTerminos.forEach((termino)=>{
      const $divTermino = termino.firstElementChild,
         $termEspaniol = $divTermino.firstElementChild,
         $termIngles = $divTermino.lastElementChild;
      if(e.target == termino ||
         e.target == $divTermino  || 
         e.target == $termEspaniol ||
         e.target == $termIngles) {
           
         const $loader = document.querySelector('.loader'),
            $btnSalir = $loader.firstElementChild,
            $contContenido = $loader.lastElementChild,
            $contenido = $contContenido.firstElementChild,
            $titulo =  $contenido.firstElementChild,
            $tituloIngles = $contenido.lastElementChild,
            $descripcion = $contContenido.lastElementChild;
         console.log($loader);
         $loader.classList.remove('loader');
         $loader.classList.add('loader2');

         const $tituloTermino = termino.firstElementChild,
            $tituloES = $tituloTermino.firstElementChild,
            $tituloEN = $tituloTermino.lastElementChild,
            $banner = termino.lastElementChild;
         $titulo.innerText = $tituloES.innerText;
         $tituloIngles.innerText = $tituloEN.innerText;
         $descripcion.innerText = $banner.innerText;
      
         $btnSalir.addEventListener('click',()=>{
            $loader.classList.remove('loader2');
         $loader.classList.add('loader');
         })
      }
   });
   
});


// setTimeout(() => {
//       $image.classList.replace('loader__img','loader2__img');
//    }, 50);
//    setInterval(() => {
//       $enterCount.textContent = `${timeLeft--} seconds to go!`;
//    }, 1000);
//    setTimeout(() => {
//       $loader.classList.toggle('loader2');
//    }, 6500);

