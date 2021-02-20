// let dictionary = []; // die array daten werden in die angehängte lang.js dazu kommen
document.addEventListener('DOMContentLoaded', function () {

    // declare and assign variables
    let navbar = document.querySelector('nav'),
        burger = document.querySelector('.burger'),
        mobMenu = document.querySelector('.menu'),
        menuArray = mobMenu.querySelectorAll('li'),
        separators = Array.from(document.querySelectorAll('.j-sep')),
        containerChildren = Array.from(document.querySelectorAll('.container div:not(:last-child)'));


    // // Set language of the site
    // // Function to insert the translated text
    // const changeLanguage = function (language) {

    //     let allElements = Array.from(document.querySelectorAll('[data-multilang]'));
    //     console.log('you chose ' + language);
    //     for (let i of allElements) {

    //         let attr = i.getAttribute('data-multilang');
    //         i.innerHTML = dictionary[language][attr];
    //     }
    // }
    // // functions to trigger insertion and change the language select buttons
    // const langEN = () => {
    //     // document.querySelector('.lang #spanish').style.display = 'flex';
    //     // document.querySelector('.lang #english').style.display = 'none';
    //     // document.querySelector('.lang #deutsch').style.display = 'flex';
    //     changeLanguage('EN');
    // }
    // const langES = () => {
    //     // document.querySelector('.lang #spanish').style.display = 'none';
    //     // document.querySelector('.lang #english').style.display = 'flex';
    //     // document.querySelector('.lang #deutsch').style.display = 'flex';
    //     changeLanguage('ES');
    // }
    // const langDE = () => {
    //     // document.querySelector('.lang #spanish').style.display = 'flex';
    //     // document.querySelector('.lang #english').style.display = 'flex';
    //     // document.querySelector('.lang #deutsch').style.display = 'none';
    //     changeLanguage('DE');
    // }
    // // Check navigator language and adapt the site
    // if (navigator.language.includes('en')) {
    //     langEN();
    // } else if (navigator.language.includes('es')) {
    //     langES();
    // } else if (navigator.language.includes('de')) {
    //     langDE();
    // } else {
    //     langEN();
    // }
    // // Event Listeners to language select buttons
    // // document.querySelector('#spanish').addEventListener('click', function(){
    // //     langES();
    // // });

    // document.querySelector('#english').addEventListener('click', function () {
    //     langEN();
    // });

    // document.querySelector('#deutsch').addEventListener('click', function () {
    //     langDE();
    // });


    // show or hide menu bar when clicking the burger menu
    burger.addEventListener('click', function () {
        mobMenu.classList.toggle('show');

    });

    // Menu items should close the menu when clicked BUT ONLY if the width is less than 768px, if bigger remove Event Listener

    const closeMenu = () => {
        mobMenu.classList.remove('show');
    }

    const menuMobileFunction = () => {
        if (window.innerWidth <= 768) {
            for (let i of menuArray) {
                i.addEventListener('click', closeMenu);
            }
        } else if (window.innerWidth > 768) {
            for (let i of menuArray) {
                i.removeEventListener('click', closeMenu);
            }
        }
    }


    // function for changing the height of the navbar when scrolled
    const navBarCollapse = () => {
        if (window.scrollY >= 100) {
            navbar.classList.add('scrolled');
            document.querySelector('.scroll-cta').classList.add('hidden');
        } else {
            navbar.classList.remove('scrolled');
            document.querySelector('.scroll-cta').classList.remove('hidden');
        }
    }

    // Function for the separator animations
    const sepAnimation = () => {
        for (let i in separators) {
            let spaceToTop = separators[i].getBoundingClientRect();
            if (window.innerHeight - 100 > spaceToTop.y && spaceToTop.y >= 0) {
                separators[i].classList.add('in-window');
            } else {
                separators[i].classList.remove('in-window');

            }
        }
    }
    // Make all containers invisible
    // if (window.innerWidth >= 576) {
    //     for (let i in containerChildren) {
    //         containerChildren[i].style.opacity = 0;
    //     }
    // }
    // function to make containers appear when coming into the viewport
    const contAnimation = () => {
        if (window.innerWidth >= 576) {
            for (let i in containerChildren) {
                let spaceToTop = containerChildren[i].getBoundingClientRect();
                if (window.innerHeight - 200 > spaceToTop.y) {
                    containerChildren[i].style.opacity = 1;
                }
            }
        }
    }
    let navSize = navbar.getBoundingClientRect();
    // collect all scrollFunctions
    const scrollFunctions = () => {
        sepAnimation();
        // contAnimation();
        navBarCollapse();
        navSize = navbar.getBoundingClientRect();
    }
    const resizeFunctions = () => {
        menuMobileFunction();

    }

    // trigger all scrollFunctions
    window.addEventListener('scroll', scrollFunctions);

    // Trigger all resizeFunctions
    window.addEventListener('resize', resizeFunctions);

    // Trigger all functions needed on load
    menuMobileFunction();
    scrollFunctions();



    // ACTIVATE MODALS start
    let modalDiv = document.querySelector('.modal');
    let modalContent = document.querySelector('.modal .content');

    let salBtn = document.querySelector('#SAL-modal');
    let salModal = `<video src="assets/videos/SAL_film.mp4" controls></video>
    <i class="fas fa-times modal-close"></i>`;
    let aniBtn = document.querySelector('#ANI-modal');
    let aniModal = `<video src="assets/videos/Anima_Mentis_Website_Relaunch_Video.mp4" controls></video>
    <i class="fas fa-times modal-close"></i>`;

    const closeModalActivate = () => {
        const closeModal = () => {
            modalContent.innerHTML = '';
            modalDiv.style.display = 'none';
        }
        document.querySelector('.modal-close').addEventListener('click', closeModal);


    }

    salBtn.addEventListener('click', function () {
        console.log('clicked');
        modalContent.innerHTML = salModal;
        modalDiv.style.display = 'flex';
        closeModalActivate();
    })
    aniBtn.addEventListener('click', function () {
        console.log('clicked');
        modalContent.innerHTML = aniModal;
        modalDiv.style.display = 'flex';
        closeModalActivate();
    })


    // ACTIVATE MODALS end

});