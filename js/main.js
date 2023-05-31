$(function(){
    //animation
    new WOW().init();

    //languages
    const langType = document.querySelector('.languages-change');
    langType.addEventListener('click', changeLang);

    function changeLang() {
        let lang = langType.value;
        for (let key in languageText) {
            let elems = document.querySelectorAll('.lng-' + key);
            elems.forEach((elem) => {
              if (elem) {
                elem.innerHTML = languageText[key][lang];
              }
            })
            
          }
    }

    //hover on works items
    const hoverItems = document.querySelectorAll('.works__item');
    hoverItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
        // item.style.transform = "translateX(5%)"; 
      })
      item.addEventListener('mouseout', () => {
        item.style.transform = "";
      })
    })

    //scroll and fixed menu
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      const scrollHeight = window.pageYOffset;
      const headerHeight = header.getBoundingClientRect().height;
      if(scrollHeight > headerHeight) {
        header.classList.add('fixed-header')
      } else {
        header.classList.remove('fixed-header')
      }
    })

    //navbar
    const menuBtn = document.querySelector('.menu__btn'),
          menu = document.querySelector('.menu__list');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu__list-active');
    })
        
    
    
});