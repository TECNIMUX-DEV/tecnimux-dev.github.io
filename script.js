// Add type of language
let languageState = document.getElementById('language-state')
function changeTextES () {
    languageState.innerHTML = 'Español 🇪🇸';
}
function changeTextEN () {
    languageState.innerHTML = 'English 🇺🇸';
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
    let contentSkillHTML = document.getElementById('content-skill-HTML')

function showTap() {
    contentSkill.style.display = 'block';
    }


function showTapHTML() {
    contentSkillHTML.style.display = 'block';
    }



// let hT = function HiddenShowTap() {
//     contentSkill.style.display = 'none';
//     contentSkillHTML.style.display = 'none';
// }
//     window.addEventListener('click', (hT))

    function removeBoxContentSkill() {
        contentSkill.style.display = 'none';
        contentSkillHTML.style.display = 'none';
    }

    // let sideRight = document.getElementById('portfolio')

    // let hR = function hiddeSideR() {
    //     sideRight.classList.add('hidden-side-Right');
    // }
    // sideRight.addEventListener('mousemove', (hR))



let resizeImgs = document.getElementById('resize-imgs')
let show = document.getElementById('show')
show.addEventListener( 'click', function(){
let certImgs = document.querySelectorAll('.cert-imgs')
certImgs.forEach(function(img){
img.style.width = '500px';
img.style.height = 'auto';
});
});