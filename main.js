import { textFaq } from "./data/faqs.js";


//const faQuestion1 = document.querySelector('.faq-question1');

const faQuestion = document.querySelectorAll('.faq-question');


faQuestion.forEach((faq, index) => faq.addEventListener("click", (event) => {
    const answer = faq.closest('.faq-card-parent').querySelector('.faq-answer');
    const btnPlus = faq.querySelector('.plus');
    const btnMinus = faq.querySelector('.minus');

    btnPlus.classList.toggle("btn-deactivate");
    btnMinus.classList.toggle("active-btn");

    if(answer.classList.contains('active')){       
        answer.classList.remove('active');
    } else {
        answer.classList.add('active');
        answer.textContent = textFaq[index];
    }
})); 








































// esta es una de las muchas soluciones pero sería mas eficiente si en lugar de crear y eliminar un elemento p, tenermos el p en display none en css
/*faQuestion.forEach((faq, index) => faq.addEventListener("click", (event) => {
    const newP = document.createElement('p'); 
    newP.textContent = textFaq[index];
    const nodeFaq = faq.closest('.faq-card-parent').querySelector('p');
    if(nodeFaq){       
        faq.closest('.faq-card-parent').removeChild(nodeFaq);
    } else {
            faq.closest('.faq-card-parent').appendChild(newP)
    }
}));*/

//opción más eficiente


/* faQuestion.forEach((faq) => faq.addEventListener("click", (event) => {
    const newP = document.createElement('p'); 
    newP.textContent = textFaq1;
    if(faq.closest('.faq-card-parent').querySelector('p')){
        const nodeFaq = faq.closest('.faq-card-parent').querySelector('p');
        faq.closest('.faq-card-parent').removeChild(nodeFaq);
    } else {
            faq.closest('.faq-card-parent').appendChild(newP)
    }
})); */

/* faQuestion1.addEventListener("click", ()=>{
    //const faqChildren = faQuestion1.child([child]);
    const parrafoExistente = faQuestion1.querySelector('p');
    if(parrafoExistente){
        faQuestion1.removeChild(parrafoExistente);
    } else {
        const nuevoElemento = document.createElement('p');
        nuevoElemento.textContent = textFaq1;
        faQuestion1.appendChild(nuevoElemento)
    }
}) */

