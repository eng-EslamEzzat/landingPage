document.addEventListener('DOMContentLoaded', function(){

    // build sections dynamically
    const sections = document.querySelectorAll('section');
    const ul = document.querySelector('#navbar__list');
    // make a loop for every section
    sections.forEach((section)=>{
        // make a list of anchor link for every section
        const li = document.createElement('li'),
        a = document.createElement('a');
        a.setAttribute('class',"menu__link");
        a.setAttribute('href',"#"+ section.getAttribute('id'));
        a.textContent = section.getAttribute('data-nav');
        li.appendChild(a);
        ul.appendChild(li);
    });

    //active links in nav bar on click
    const links = document.querySelectorAll('.menu__link');
    links.forEach((link)=>{
        link.addEventListener('click', ()=>{
            removeActiveLink(); 
            link.classList.add('active');       
        });
        
    });

    // add scroll to top button
    const scrollButton = document.querySelector('#scroll-up'),
    footer = document.querySelector('footer');
    scrollButton.addEventListener('click',()=>{scrollTo(0,0)});
    
    var Checker = null;
    document.addEventListener('scroll', (e) => {
        const scrollPos = window.scrollY;
        links.forEach((link)=>{
            //active links and sections on scroll
            const sectionLink = document.querySelector(link.getAttribute('href'));
            if( scrollPos >= sectionLink.offsetTop && scrollPos < sectionLink.offsetTop+ sectionLink.offsetHeight){
                removeActiveLink();
                link.classList.add('active');
                removeActiveSection();
                document.querySelector(link.getAttribute('href')).classList.add('your-active-class');

            }
            else{
                link.classList.remove("active");
                document.querySelector(link.getAttribute('href')).classList.remove('your-active-class');
            }

            //visibility of scroll butoon
            if(window.scrollY + window.innerHeight >= footer.offsetTop){
                scrollButton.style.visibility = "visible";
            }
            else{
                scrollButton.style.visibility = "hidden";
            }
        });

        barPosition("fixed");
        //Hide fixed navigation bar while not scrolling 
        if(Checker !== null) {
            clearTimeout(Checker);        
        }
        Checker = setTimeout(function() {
            barPosition("static");
        }, 5000);
    });
    
    //function for bar position
    function barPosition(position){
        const varBar = document.querySelector('.page__header');
                    varBar.style.position = position;
    }
  
    // function for remove all active classes links 
    function removeActiveLink(){ 
        document.querySelectorAll('.active').forEach((classname)=>{
            classname.classList.remove("active");
        });
    };

    // function for remove all active classes of sections 
    function removeActiveSection(){ 
        document.querySelectorAll('.your-active-class').forEach((classname)=>{
            classname.classList.remove("your-active-class");
        });
    };
});
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


