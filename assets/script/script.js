let titleP = Array.from(document.querySelectorAll('.title_page'));
let errorP = Array.from(document.querySelectorAll('.error_page'));

titleP.forEach(el => {
    let ind = titleP.indexOf(el);
    el.addEventListener('click', () => {
        errorP[ind].classList.toggle('error_page-open');
    })
});

let choiceElem = Array.from(document.querySelectorAll('.choice_section-elem'));
let choiceBtn = Array.from(document.querySelectorAll('.choice_btn'));

choiceBtn.forEach(el => {
    let ind = choiceBtn.indexOf(el);
    el.addEventListener('click', () => {
        choiceElem.forEach(clos => {
            clos.classList.add('v-h');
        });
        choiceElem[ind].classList.toggle('v-h');
    })
});