if(window.innerWidth < 768) {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
}


let addShowAllBrandsClickHandler = function(brands) {
  let brandsList = brands.querySelector('.brands__list');
  let buttonMore = brands.querySelector('.more-button');
  let buttonIcon = buttonMore.querySelector('.icon');
  let buttonText = buttonMore.querySelector('.more-button__text');
  

  buttonMore.addEventListener('click', function(e) {
    e.preventDefault();

    if(buttonMore.dataset.mode == 'show')  {
      brandsList.classList.remove('brands__list--hide-items-overflow');

      buttonMore.dataset.mode = 'hide';

      buttonText.textContent = 'Скрыть';

      buttonIcon.classList.remove('icon--more');
      buttonIcon.classList.add('icon--less');
    } else if(buttonMore.dataset.mode == 'hide')  {
      brandsList.classList.add('brands__list--hide-items-overflow');

      buttonMore.dataset.mode = 'show';

      buttonText.textContent = 'Показать все';
      
      buttonIcon.classList.remove('icon--less');
      buttonIcon.classList.add('icon--more');
    }
  });
}

let brands = document.querySelector('.brands');
addShowAllBrandsClickHandler(brands);
