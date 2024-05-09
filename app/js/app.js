


/*********************************************************************** */
const navbarFNScrollPosition = (navbar) => {
    if (window.scrollY > 100) {
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
    } else {
        navbar.classList.remove('navbar-light');
        navbar.classList.add('navbar-dark');
    }
}
const navbarFN = () => {
    const navbar = document.querySelector('.navbar');
    navbarFNScrollPosition(navbar)
    if(window.location.pathname=='/' || window.location.pathname=='/index.html'){
        window.addEventListener('scroll', ()=> {
                navbarFNScrollPosition(navbar)
            });
    } else {
        document.body.classList.add('internal-section')
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
    }
}


/*********************************************************************** */
const languageFN = () => {
    setTimeout(()=>{
        MicroLang(['es', 'en'])
    }, 200)
}
/*********************************************************************** */
const cookiesFN = () => {
    const information = '<div data-l="This website uses cookies to improve your experience. Continue to use the site as normal if you agree to the use of cookies. If you’d like to find out more about the cookies we use or to opt-out, please see our Privacy Policy"> Este sitio web utiliza cookies para mejorar tu experiencia. Si continúas navegando en el sitio, significa que aceptas el uso de las cookies. Si deseas más información sobre las cookies que empleamos y cómo manejarlas visita nuestra Política de Privacidad. <a href="#" style="color: #061E41" data-toggle="modal" data-target="#aviso" data-l="Privacy Policy.">Leer más.</a></div>'
    const button = '<span data-l="Accept">Aceptar</span>'
    BlueCookies(information, "✔ Cookies", button, 'background-color: #8bb8e8; color:#fff;')
}
/*********************************************************************** */
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


function uneteBtn(){
    $('#unete .btn-group .btn').click(function(){
      setTimeout(()=>{
        var val = $('#unete input:checked').val();
        $('.joinbtn').attr('href', 'mailto:info@bluepureloyalty.com?subject=Estoy interesado en formar parte del área de '+val);
        $('.joinbtn').show()
        //gtag('event', 'click', {'event_category' : 'Click en botÃƒÂ³n', 'event_label': 'Unete al blue team mail'});
      }, 250)
    });
  }


const homeVideoFN = () => {
    if(!document.getElementById('blueplayer')){ return false }
    const player = new Plyr('#blueplayer');

}
const onStart = () => {
    languageFN()
    navbarFN()
    cookiesFN()
    bannerFN()
    uneteBtn()
    homeVideoFN()

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


