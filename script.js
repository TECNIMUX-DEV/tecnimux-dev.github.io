// Add type of language
let languageState = document.getElementById('language-state')
function changeTextES () {
    languageState.innerHTML = 'Español 🇪🇸';
}
function changeTextEN () {
    languageState.innerHTML = 'English 🇺🇸';
}

let imgLanguage = document.getElementById('img-languages')
let optionsLanguages = document.getElementById('options-languages')
imgLanguage.addEventListener('click', showOptions)
function showOptions() {
    imgLanguage.style.display = 'none'
    optionsLanguages.style.display = 'inline-flex'
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


// Click on skills
// let hT = function HiddenShowTap() {
//     contentSkill.style.display = 'none';
//     contentSkillHTML.style.display = 'none';
// }
//     window.addEventListener('click', (hT))

    function removeBoxContentSkill() {
        contentSkill.style.display = 'none';
        contentSkillHTML.style.display = 'none';
    }

    // Hidden side rigth
    let filterBody = document.getElementById('filter-body')
     let containerPortfolio = document.getElementById('portfolio')
     let hR = function hiddeSideR() {
         containerPortfolio.classList.add('container-portfolio')
         containerPortfolio.classList.add('container-portfolio-animation')
     }
     filterBody.addEventListener('mousemove', (hR), { once: true })

    // Add styles nav
    let navHome = document.getElementById('nav-home')
    let hS = function addStylesNav() {
        if (window.scrollY > 1) {
            navHome.classList.add('nav-style')
    }
    else {
        navHome.classList.remove('nav-style')
    }
    }
    window.addEventListener('scroll', (hS))

    // Add animation welcome message
    let filterWelcome = document.getElementById('filter-welcome')
    let capaWelcome = document.getElementById('capa-welcome')
    let welcome = document.getElementById('welcome')
    let hiddenContent = document.getElementById('hidden-content')
    filterWelcome.addEventListener('mousemove', hi)
    function hi() {
        capaWelcome.style.display = 'flex'
        welcome.style.display = 'flex'
        filterWelcome.classList.add('show-a')
        document.body.classList.add('overflow-hidden');
        hiddenContent.style.display = 'none'
    setTimeout(function() {
        filterWelcome.style.display = 'none'
        filterWelcome.classList.add('show-r')
        document.body.classList.remove('overflow-hidden');
                hiddenContent.style.display = 'block'
    }, 2000);
}

