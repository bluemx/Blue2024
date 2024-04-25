



const navbarFN = () => {


    window.addEventListener('scroll', ()=> {

            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.classList.remove('navbar-dark');
                navbar.classList.add('navbar-light');
            } else {
                navbar.classList.remove('navbar-light');
                navbar.classList.add('navbar-dark');
            }

    });
}

const languageFN = () => {
    setTimeout(()=>{
        MicroLang(['es', 'en'])
    }, 200)
}

const cookiesFN = () => {
    const information = '<div data-l="This website uses cookies to improve your experience. Continue to use the site as normal if you agree to the use of cookies. If you’d like to find out more about the cookies we use or to opt-out, please see our Privacy Policy"> Este sitio web utiliza cookies para mejorar tu experiencia. Si continúas navegando en el sitio, significa que aceptas el uso de las cookies. Si deseas más información sobre las cookies que empleamos y cómo manejarlas visita nuestra Política de Privacidad. <a href="#" style="color: #061E41" data-toggle="modal" data-target="#aviso" data-l="Privacy Policy.">Leer más.</a></div>'
    const button = '<span data-l="Accept">Aceptar</span>'
    BlueCookies(information, "✔ Cookies", button, 'background-color: #8bb8e8; color:#fff;')
}

const bannerFN = () => {
    if(!document.querySelector('.bluebanner')){ return false }
    var banner = new Glide('.glide',{
        type: 'carousel',
        gap:0,
        //autoplay: 6000,
    }).mount()
    banner.on('move', ()=>{
        document.querySelector('.bluebanner').classList.add('moving')
    })
    banner.on('move.after', ()=>{
        document.querySelector('.bluebanner').classList.remove('moving')
    })
}


const onStart = () => {
    languageFN()
    navbarFN()
    cookiesFN()
    bannerFN()


}



function waitForVariables() {
    const interval = setInterval(() => {
        if (typeof Glide !== 'undefined' && typeof BlueCookies !== 'undefined') {
            clearInterval(interval);
            // Variables Glide and BlueCookies are now available, you can perform actions here
            console.log('READY.');
            onStart()
        }
    }, 100); // Check every 100 milliseconds
}






loadImports().then(() => {
    // Code to execute after all imports are finished
    console.log('File imports completed.');
    
    waitForVariables();
    

    
}).catch(error => {
    console.error('Error loading imports:', error);
});


