export const ScrollSpy=()=>{
    const navLinkEls=document.querySelectorAll('.navLink');
    const appElements=document.querySelectorAll('.appElement');

    let currentSection='about';
    window.addEventListener('scroll',()=>{ 
        appElements.forEach(appElement => {
            if(window.scrollY>=appElement.offsetTop)
            {
                currentSection=appElement.sectionName;
            }
        })
    });
    navLinkEls.forEach(navElement=>{
        if(navElement.linkToSection===currentSection)
        {
            document.querySelector('.navItemActive').classList.remove('navItemActive');
            navElement.classList.add('navItemActive');
        }
    });
}