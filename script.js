// Add type of language
let languageState = document.getElementById('language-state')
function changeTextES () {
    languageState.innerHTML = 'Español';
}
function changeTextEN () {
    languageState.innerHTML = 'English';
}


let es = document.getElementById('es')
let en = document.getElementById('en')
es.addEventListener('click', (changeTextES))
en.addEventListener('click', (changeTextEN))



// Hidden nav language
let hL = function hiddenLanguage () {
    if (window.scrollY > 1) {
            language.style.opacity = '0';
            language.classList.remove('show-a')
            language.classList.add('show-r')
        } else {
            language.style.opacity = '1';
            language.classList.remove('show-r')
            language.classList.add('show-a')
        }
    }

let language = document.getElementById('language')
window.addEventListener('scroll', (hL))


let contentSkill = document.getElementById('content-skill')
function showTap() {
    contentSkill.style.display = 'block';
}


let hT = function HiddenShowTap() {
    contentSkill.style.display = 'none';
}
    window.addEventListener('click', (hT))


    // let sideRight = document.getElementById('portfolio')

    // let hR = function hiddeSideR() {
    //     sideRight.classList.add('hidden-side-Right');
    // }
    // sideRight.addEventListener('mousemove', (hR))