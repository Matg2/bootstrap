var nav = document.querySelector('nav')
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 100){
     nav.classList.add('bg-dark','shadow');

    } 

    
    else{
        nav.classList.remove('bg-dark','shadow')
    }
});


ScrollReveal().reveal(' #img-text', { delay: 500 });
ScrollReveal().reveal(' .col', { delay: 500 });
ScrollReveal().reveal(' #ms', { delay: 500 });
ScrollReveal().reveal(' .contact', { delay: 500 });
