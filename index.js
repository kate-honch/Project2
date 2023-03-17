const flagUkr = document.querySelector('.form__flag--Ukr');
const flagTur = document.querySelector('.form__flag--Tur');
const flagPol = document.querySelector('.form__flag--Pol');
const flagBel = document.querySelector('.form__flag--Bel');
const select = document.querySelector('.form__select');
const openArrow = document.querySelector('.problem__open');
const solutionBlock = document.querySelector('.solution');
const stepsBlock = document.querySelector('.steps');

select.addEventListener ('change', () => {
    if(select.value === 'UKR') {
        flagUkr.classList.add('active');
        flagTur.classList.remove('active');
        flagPol.classList.remove('active');
        flagBel.classList.remove('active');
    } else if (select.value === 'TUR') {
        flagUkr.classList.remove('active');
        flagTur.classList.add('active');
        flagPol.classList.remove('active');
        flagBel.classList.remove('active');
    } else if (select.value === 'POL') {
        flagUkr.classList.remove('active');
        flagTur.classList.remove('active');
        flagPol.classList.add('active');
        flagBel.classList.remove('active');
    } else if (select.value === 'BEL') {
        flagUkr.classList.remove('active');
        flagTur.classList.remove('active');
        flagPol.classList.remove('active');
        flagBel.classList.add('active');
    }
});

openArrow.addEventListener ('click', () => {
    solutionBlock.classList.add('active');
    stepsBlock.classList.add('active');
})
