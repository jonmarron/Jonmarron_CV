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
        } else if (window.innerWidth > 768){
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


});