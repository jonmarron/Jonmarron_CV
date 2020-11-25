document.addEventListener('DOMContentLoaded', function(){
    
        // code for the mobile rectangle
        var demoDataDamir = {
            headline: '<span id="dyn_1_1">.Produkte-immer-</span><br id="br_1"><span id="dyn_1_2">klickbereit</span>',
            personaStoerer: 'Damir_stoerer_1.png',
            personaBild: 'Damir_MR.png',
    
        };
        var demoDataEditha = {
            headline: '<span id="dyn_1_1">.darauf-kann-</span><br id="br_1"><span id="dyn_1_2">ich-mich-immer-</span><br id="br_2"><span id="dyn_1_3">verlassen</span>',
            personaStoerer: 'Editha_Stoerer_1.png',
            personaBild: 'Editha_MR.png',
    
        };
        var demoDataElisabeth = {
            headline: '<span id="dyn_1_1">.mit-nur-einem-Klick-</span><br id="br_1"><span id="dyn_1_2">erreichbar</span>',
            personaStoerer: 'Elisabeth_Stoerer_1.png',
            personaBild: 'Elisabeth_MR.png',
    
        };
        var demoDataLisa = {
            headline: '<span id="dyn_1_1">.Umwelt-sagt-</span><br id="br_1"><span id="dyn_1_2">danke</span>',
            personaStoerer: 'Lisa_Stoerer_1.png',
            personaBild: 'Lisa_MR.png',
    
        };
        var demoDataWalter = {
            headline: '<span id="dyn_1_1">.Tarife-vergleichen-</span><br id="br_1"><span id="dyn_1_2">und-sparen</span>',
            personaStoerer: 'Walter_Stoerer_1.png',
            personaBild: 'Walter_MR.png',
    
        };
    
        let tl; 
    
        const changeContent = persona => {
            document.querySelector('#animation-container').innerHTML = `
            <div class="logo">
                <img src="assets/banner-assets/WEN_Logo.png">
            </div>
            <div class="cta">
                <img src="assets/banner-assets/meineWEN-cta.png">
            </div>
            <div class="urlPos">
                <h2 class="wen_schraeg fix">Mein Kundenportal:</h2>
                <h2 class="wen_schraeg url">meine<span id="meine-url">${persona.headline}</span>.wienenergie.at</h2>
                <img src="assets/banner-assets/meineWEN-unterstrich.png">
            </div>
            <div class="hg-1">
                <img src="assets/banner-assets/HG_orange.png">
            </div>
            <div class="stoerer">
                <img src="assets/banner-assets/${persona.personaStoerer}" id="persona-stoerer">
            </div>
    
            <div class="bilder-unten">
                <img src="assets/banner-assets/${persona.personaBild}" id="persona-bild">
            </div>
            <div class="bilder-unten">
                <img src="assets/banner-assets/HG_blau.png" id="hg-blau-banner">
            </div>`
    
    
            let mySplitText = new SplitText('#dyn_1_1', { type: "chars", charsClass: "yourCharClass" });
            let mySplitText2 = new SplitText('#dyn_1_2', { type: "chars", charsClass: "yourCharClass2" });
            let mySplitText3 = new SplitText('#dyn_1_3', { type: "chars", charsClass: "yourCharClass3" });
            let mySplitText4 = new SplitText('#dyn_1_4', { type: "chars", charsClass: "yourCharClass4" });
            // let mySplitTextmain = new SplitText('.wen_schraeg', {type:"chars", charsClass: "yourCharClassMain"});
    
            // Animation starts:
            tl = gsap.timeline({ repeat: 2, repeatDelay: 2 });
    
            
            tl.to('.fix', { opacity: 0, duration: .3 }, 2)
                .set('.fix', { display: 'none' })
                .set('.url', { display: 'block' })
                .from('.url', { opacity: 0, duration: .3 })
                .from('.urlPos img', { opacity: 0, duration: .3 }, "-=.3")
                .to('.urlPos img', { opacity: 0, duration: .3 }, "+=.7")
                .from('#meine-url', { display: "none", duration: .5 }, "-=.2")
                .from('.yourCharClass', { display: "none", stagger: .05 }, "-=.5")
                .from('#br_1', { display: "none", duration: .01 }, "-=.5")
                .from('.yourCharClass2', { display: "none", stagger: .05 }, "-=.5")
                .from('#br_2', { display: "none", duration: .01 }, "-=.5")
                .from('.yourCharClass3', { display: "none", stagger: .05 }, "-=.5")
                .from('#br_3', { display: "none", duration: .01 }, "-=.5")
                .to('.urlPos', { opacity: 0, duration: .3 }, "+=1")
                .to('.hg-1 img', { y: "-=400", duration: 1 }, "-=.25")
                .to('#hg-blau-banner', { y: "+=150", duration: 1 }, "-=1")
                .from('.stoerer img', { opacity: 0 , scale: 2, duration:.2 }, "-=.75")
                .to('.cta img', { scale: 1.1, duration: .3 }, "+=.5")
                .to('.cta img', { scale: 1, duration: .3 })
                .to('.cta img', { scale: 1.1, duration: .3 }, "+=.5")
                .to('.cta img', { scale: 1, duration: .3 });
           
        }
        
        changeContent(demoDataDamir);
    
        let selectBanner = document.querySelector('#persona');

        selectBanner.addEventListener('change', function(){
            if(selectBanner.value == 'damir'){
                console.log('select damir');
                tl.pause();
                changeContent(demoDataDamir);
                tl.resume();
            }else if (selectBanner.value == 'editha') {
                console.log('select editha');
                tl.pause();
                changeContent(demoDataEditha);
                tl.resume();
            }else if (selectBanner.value == 'elisabeth') {
                console.log('select elisabeth');
                tl.pause();
                changeContent(demoDataElisabeth);
                tl.resume();
            }else if (selectBanner.value == 'lisa') {
                console.log('select lisa');
                tl.pause();
                changeContent(demoDataLisa);
                tl.resume();
            }else if (selectBanner.value == 'walter') {
                console.log('select walter');
                tl.pause();
                changeContent(demoDataWalter);
                tl.resume();
            }
            
        })

})