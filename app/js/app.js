/*********************************************************************** */
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W2JSKS92');
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VTH8KZ2T6R');

/*********************************************************************** */
const localStorageKey = 'blue-country';
const defaultCountry = 'mx';


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
    if(window.location.pathname=='/' || window.location.pathname=='/index.html' || window.location.pathname=='/Blue2024/index.html'){
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
    const information = '<div data-en="This website uses cookies to improve your experience. Continue to use the site as normal if you agree to the use of cookies. If you’d like to find out more about the cookies we use or to opt-out, please see our Privacy Policy"> Este sitio web utiliza cookies para mejorar tu experiencia. Si continúas navegando en el sitio, significa que aceptas el uso de las cookies. Si deseas más información sobre las cookies que empleamos y cómo manejarlas visita nuestra Política de Privacidad. <a href="#" style="color: #061E41" data-toggle="modal" data-target="#aviso" data-en="Privacy Policy.">Leer más.</a></div>'
    const button = '<span data-en="Accept">Aceptar</span>'
    BlueCookies(information, "✔ Cookies", button, 'background-color: #8bb8e8; color:#fff;')
}
/*********************************************************************** */
const bannerFN = () => {
    if(!document.querySelector('.bluebanner')){ return false }
    var banner = new Glide('.glide',{
        type: 'carousel',
        gap:0,
        autoplay: 6000,
    }).mount()
    banner.on('move', ()=>{
        document.querySelector('.bluebanner').classList.add('moving')
    })
    banner.on('move.after', ()=>{
        document.querySelector('.bluebanner').classList.remove('moving')
    })
}

/*********************************************************************** */

function statisticsAnimation () {
    $.fn.isInViewport = function() {
        var t = $(this).offset().top,
            i = t + $(this).outerHeight(),
            n = $(window).scrollTop(),
            o = n + $(window).height();
        return i > n && t < o
    }, $(window).on("resize scroll", function() {
        $(".contadorzx").each(function() {
            if ($(this).isInViewport() && !$(this).attr("data-count")) {
                $(this).attr("data-count", "true");
                var t = $(this).attr("data-number"),
                    i = 0,
                    n = setInterval(() => {
                        i < t ? (i++, $(this).html(i)) : ($(this).html(t), clearInterval(n))
                    }, 10)
            } else $(this).isInViewport() || $(this).removeAttr("data-count")
        })
    });
}

/******************************************************************** */
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



// Function to handle changes in localStorage
function homeVideoLang(player) {
    console.log('changing')
    player.source = {
        type: 'video', title: 'Blue',
        sources: [
            {
                src: 'app/video/blue-'+localStorage.getItem('microlang-lang')+'.mp4',
            }
        ],
        poster: 'app/video/poster.png'
    }
}


const homeVideoFN = () => {
    let theplayer = document.getElementById('blueplayer')
    if(!theplayer){ return false }
    let player = new Plyr('#blueplayer');
    setInterval(()=>{
        const videolang = player.source.substring(player.source.indexOf('-') + 1, player.source.lastIndexOf('.mp4'));
        const thelang = localStorage.getItem('microlang-lang')
        if(videolang !== thelang){
            homeVideoLang(player)
        }
    }, 3000)
}


function handleStorageChange(event) {
    if (event.key === 'microlang-lang') {
        console.log('localStorage item "microlang-lang" has changed:', localStorage.getItem('microlang-lang'));
        // Perform any other actions here based on the change
    }
}

// Add event listener for storage changes
window.addEventListener('storage', handleStorageChange);

function etapasFN() {
    $('.etapas').click(function () {
      $('.etapastxt').slideUp()
      $($(this).attr('data-d')).slideDown()
      gtag('event', 'click', {'event_category' : 'Click en botÃƒÂ³n', 'event_label': 'Etapas'});
    })
  }
  function alcanceFN() {
    $('.alcancebutton').click(function () {
      $(this).siblings().removeClass('active')
      $(this).addClass('active')
      gtag('event', 'click', {'event_category' : 'Click en botÃƒÂ³n', 'event_label': 'Alcances'});
    })
  }

function setActiveLink() {
    var currentUrl = window.location.href.split('#')[0];
    var links = document.querySelectorAll('a[href]');
    links.forEach(function(link) {
        if(link.getAttribute('class') == 'navbar-brand'){return false}
        var href = link.getAttribute('href').replace(/^\//, '');
        if (currentUrl.endsWith(href)) {
            link.classList.add('active-link');
        }
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', setActiveLink);


function fadeOutAndRemove(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.transition = 'opacity 0.5s ease';
        element.style.opacity = '0';
        setTimeout(() => element.parentNode.removeChild(element), 500);
    } else {
        console.error("Element with id '" + elementId + "' not found.");
    }
}






const countryFN = () => {
    const urlHash = window.location.hash.slice(1).toLowerCase();
    const country = urlHash === 'mx' || urlHash === 'usa' ? urlHash : (localStorage.getItem(localStorageKey) || defaultCountry);
    localStorage.setItem(localStorageKey, country);
    return country;
};

const countryBTNFN = (country) => {
    document.querySelectorAll('.nav-link-country').forEach(navLink => {
        const countryData = navLink.getAttribute('href').replace('#', '');
        navLink.classList.toggle('active-country', countryData === country);
        navLink.addEventListener('click', e => {
            e.preventDefault();
            const clickedCountry = navLink.getAttribute('href').replace('#', '');
            localStorage.setItem(localStorageKey, clickedCountry);
            window.history.pushState(null, null, `#${clickedCountry}`);
            // Fade out the body and then update the country
            //document.body.classList.add('fade-out');
            
            //setTimeout(() => {
                //updateCountry();
                //document.body.classList.remove('fade-out');
            //}, 500); // The timeout should match the CSS transition duration
        
            location.reload()
        
        });
    });
};

const countryVisibilityFN = (country) => {
    document.querySelectorAll('.visible-usa, .visible-mx').forEach(element => {
        if (country === 'usa' && element.classList.contains('visible-usa')) {
            //element.style.display = 'block';
        } else if (country === 'mx' && element.classList.contains('visible-mx')) {
            //element.style.display = 'block';
        } else {
            element.style.display = 'none';
            if (element.classList.contains('glide__slide')) {
                element.parentNode.removeChild(element);
            }
        }
    });
};

const updateCountry = () => {
    const country = countryFN();
    countryBTNFN(country);
    countryVisibilityFN(country);
};

function shorten(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
  }
  function stripHTML(htmlString) {
    var stripedHtml = $("<div>").html(htmlString).text();
    return stripedHtml
  }


const newsLoadFN = () => {
    var baseUrl = "https://bluepureloyalty.com/";
    var post = baseUrl+'noticias/wp-json/wp/v2/posts?per_page=1&_embed'
    
    if($('#noticias').length>0) {
        $.get(post, function(data) {
            var rs = data[0]
            var estitle = rs.title.rendered
            var estext = rs.excerpt.rendered
            var entitle = rs.acf.mxen_titulo
            var entext = '<p>'+shorten(stripHTML(rs.acf.mxen_texto),55)+'[...]</p>'
            var image = rs._embedded['wp:featuredmedia'][0].source_url
            var mxen_img = rs.acf.mxen_img
            var usaes_img = rs.acf.usaes_img
            var usaen_img = rs.acf.usaen_img
            var link = baseUrl+'noticias/'+rs.slug
            $('.latestNew h4').text(estitle)
            $('.latestNew h4').attr('data-en', entitle)
            $('.latestNew .lnewtxt').html(estext)
            $('.latestNew .lnewtxt').attr('data-en', entext)
            $('.latestNew img').attr('src', image)
            $('.latestNew img').attr('data-lang-attr', 'src')
            $('.latestNew img').attr('data-en', mxen_img)
            $('.loadingnews').hide()
            languageFN()
        })
    }
}



const onStart = () => {
    
    navbarFN()
    cookiesFN()
    uneteBtn()
    homeVideoFN()
    statisticsAnimation()
    etapasFN()
    alcanceFN()
    setActiveLink()
    fadeOutAndRemove('transitioning');
    updateCountry()
    bannerFN()
    newsLoadFN()
    if($('#noticias').length==0) {
        languageFN()
    }
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





function loadImportsRecursive() {
    if (typeof loadImports === 'function') {
        loadImports()
            .then(() => {
                // Code to execute after all imports are finished
                console.log('File imports completed.');
                waitForVariables();
            })
            .catch(error => {
                console.error('Error loading imports:', error);
                // Retry after a delay
                setTimeout(loadImportsRecursive, 200);
            });
    } else {
        // Retry after a delay
        setTimeout(loadImportsRecursive, 200);
    }
}

loadImportsRecursive();



