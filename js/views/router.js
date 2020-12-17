document.addEventListener('DOMContentLoaded', function(){
    let siteContainer = document.querySelector('.site-container');
    let nav = {
        home: document.querySelector('nav .brand')
    }

    
    const goTo = page => {
        actualSite = page;
        siteContainer.innerHTML = actualSite;
    };
    
    let actualSite = header;
    goTo(actualSite);

    nav.home.addEventListener('click', goTo(header));





});