// Add type of language
// let languageState = document.getElementById('language-state')
// function changeTextES () {
//     languageState.innerHTML = 'Español 🇪🇸';
// }
// function changeTextEN () {
//     languageState.innerHTML = 'English 🇺🇸';
// }

// let imgLanguage = document.getElementById('img-languages')
// let optionsLanguages = document.getElementById('options-languages')
// imgLanguage.addEventListener('click', showOptions)
// function showOptions() {
//     imgLanguage.style.display = 'none'
//     optionsLanguages.style.display = 'inline-flex'
// }

// let es = document.getElementById('es')
// let en = document.getElementById('en')
// es.addEventListener('click', (changeTextES))
// en.addEventListener('click', (changeTextEN))



// Hidden nav language
// let hL = function hiddenLanguage () {
//     if (window.scrollY > 1) {
//             language.style.opacity = '0';
//             language.classList.remove('show-a')
//             language.classList.add('show-r')
//         } else {
//             language.style.opacity = '1';
//             language.classList.remove('show-r')
//             language.classList.add('show-a')
//         }
//     }

// let language = document.getElementById('language')
// window.addEventListener('scroll', (hL))


// let contentSkill = document.getElementById('content-skill') 
//     let contentSkillHTML = document.getElementById('content-skill-HTML')

// function showTap() {
//     contentSkill.style.display = 'block';
//     }


// function showTapHTML() {
//     contentSkillHTML.style.display = 'block';
//     }


// Click on skills
// let hT = function HiddenShowTap() {
//     contentSkill.style.display = 'none';
//     contentSkillHTML.style.display = 'none';
// }
//     window.addEventListener('click', (hT))

    // function removeBoxContentSkill() {
    //     contentSkill.style.display = 'none';
    //     contentSkillHTML.style.display = 'none';
    // }

    // Add style filter blur to nav
    // let navHome = document.getElementById('nav-home')
    // let hS = function addStylesNav() {
    //     if (window.scrollY > 1) {
    //         navHome.classList.add('nav-style')
    // }
    // else {
    //     navHome.classList.remove('nav-style')
    // }
    // }
    // window.addEventListener('scroll', (hS))

        // Hidden side rigth
        // let portfolioContent = document.getElementById('portfolio-content')
        // let containerPortfolio = document.getElementById('portfolio')
        // let hR = function hiddeSideR() {
        //     containerPortfolio.classList.add('container-portfolio')
        //     containerPortfolio.classList.add('container-portfolio-animation')
        // }
        // portfolioContent.addEventListener('mousemove', (hR), { once: true })

        // Add space to name 
        let nameMe = document.getElementById('name-me')
        let forwardRight = document.getElementById('forward-right').addEventListener('click', () => {
            nameMe.classList.add('space-name');
        });
        

    // Add animation welcome message
    let filterWelcome = document.getElementById('filter-welcome');
    let capaWelcome = document.getElementById('capa-welcome');
    let welcome = document.getElementById('welcome');
    document.addEventListener("DOMContentLoaded", () => {
        if (!localStorage.getItem("visited")) {
            capaWelcome.style.display = 'flex';
            welcome.style.display = 'flex';
            filterWelcome.classList.add('show-a');
            document.body.classList.add('overflow-hidden');
        setTimeout(function() {
            filterWelcome.style.display = 'none';
            filterWelcome.classList.add('show-r');
            document.body.classList.remove('overflow-hidden');
        }, 3000);
        localStorage.setItem("visited", "true");
        } else {
             filterWelcome.style.display = 'none'
        }
    });

