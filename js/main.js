// let dictionary = []; // die array daten werden in die angehängte lang.js dazu kommen
document.addEventListener('DOMContentLoaded', function () {

    // declare and assign variables
    let navbar = document.querySelector('nav'),
        burger = document.querySelector('.burger'),
        mobMenu = document.querySelector('.menu'),
        menuArray = mobMenu.querySelectorAll('li'),
        separators = Array.from(document.querySelectorAll('.j-sep')),
        containerChildren = Array.from(document.querySelectorAll('.container div:not(:last-child)'));

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
    let salModal = `<video src="assets/videos/SAL_film.mp4" controls poster="assets/videos/SAL_film_poster.jpg"></video>
    <i class="fas fa-times modal-close"></i>`;


    let aniBtn = document.querySelector('#ANI-modal');
    let aniModal = `<video src="assets/videos/ANI_film.mp4" controls poster="assets/videos/ANI_film_poster.jpg"></video>
    <i class="fas fa-times modal-close"></i>`;
    
    
    let ani2Btn = document.querySelector('#ANI2-modal');
    let ani2Modal = `<video src="assets/videos/ANI_SoM_Blog.mp4" controls poster="assets/videos/ANI_SoM_Blog_poster.jpg"></video>
    <i class="fas fa-times modal-close"></i>`;


    let htbBtn = document.querySelector('#HTB-modal');
    let htbModal = ` <img src="assets/SJ_Hartner_Brot_Packaging-1.jpg" alt="">
    <i class="fas fa-times modal-close"></i>`;


    let wenBtn = document.querySelector('#WEN-modal');
    let wenModal = `<video src="assets/videos/WEN_infoscreen.mp4" controls poster="assets/videos/WEN_infoscreen_poster.jpg"></video>
    <i class="fas fa-times modal-close"></i>`;


    let wen2Btn = document.querySelector('#WEN2-modal');
    let wen2Modal = `<video src="assets/videos/WEN_wetterbanner.mp4" controls poster="assets/videos/WEN_wetterbanner_poster.jpg"></video>
    <i class="fas fa-times modal-close"></i>`;
    
    
    let unqBtn = document.querySelector('#UNQ-modal');
    let unqModal = `<video src="assets/videos/UNQ_preroll.mp4" controls poster="assets/videos/UNQ_PreRoll_poster0.jpg"></video>
    <i class="fas fa-times modal-close"></i>`;

    const closeModalActivate = () => {
        const closeModal = () => {
            modalContent.innerHTML = '';
            modalDiv.style.display = 'none';
        }
        document.querySelector('.modal-close').addEventListener('click', closeModal);
        document.querySelector('.modal .background').addEventListener('click', closeModal);

    }

    salBtn.addEventListener('click', function () {
        modalContent.innerHTML = salModal;
        modalDiv.style.display = 'flex';
        closeModalActivate();
    })
    aniBtn.addEventListener('click', function () {
        modalContent.innerHTML = aniModal;
        modalDiv.style.display = 'flex';
        closeModalActivate();
    })
    ani2Btn.addEventListener('click', function () {
        modalContent.innerHTML = ani2Modal;
        modalDiv.style.display = 'flex';
        closeModalActivate();
    })
    htbBtn.addEventListener('click', function () {
        modalContent.innerHTML = htbModal;
        modalDiv.style.display = 'flex';
        closeModalActivate();
    })
    wenBtn.addEventListener('click', function () {
        modalContent.innerHTML = wenModal;
        modalDiv.style.display = 'flex';
        closeModalActivate();
    })
    wen2Btn.addEventListener('click', function () {
        modalContent.innerHTML = wen2Modal;
        modalDiv.style.display = 'flex';
        closeModalActivate();
    })
    unqBtn.addEventListener('click', function () {
        modalContent.innerHTML = unqModal;
        modalDiv.style.display = 'flex';
        closeModalActivate();
    })


    // ACTIVATE MODALS end

});