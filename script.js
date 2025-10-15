document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.brandsSwiper', {
        slidesPerView: 'auto', // Автоматическое количество слайдов
        
        spaceBetween: 10,      // Отступ между слайдами
        
       
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        }
      
       
        },
    );
});


document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.servicesSwiper', {
        slidesPerView: 'auto', // Автоматическое количество слайдов
        
        spaceBetween: 10,      // Отступ между слайдами
        
       
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        }
      
       
        },
    );
});



document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.pricesSwiper', {
        slidesPerView: 'auto', // Автоматическое количество слайдов
        
        spaceBetween: 50,      // Отступ между слайдами
        
       
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        }
      
       
        },
    );
});




function setupBrandsToggle() {
    const showAllButton = document.getElementById('showAllButton');
    const hideAllButton = document.getElementById('hideAllButton');
    const bottomContainer = document.querySelector('.brands__container--bottom');
    
    // Добавляем CSS классы для управления видимостью
    bottomContainer.classList.add('hidden');
    hideAllButton.classList.add('hidden');
    
    showAllButton.addEventListener('click', () => {
        bottomContainer.classList.remove('hidden');
        showAllButton.classList.add('hidden');
        hideAllButton.classList.remove('hidden');
    });
    
    hideAllButton.addEventListener('click', () => {
        bottomContainer.classList.add('hidden');
        showAllButton.classList.remove('hidden');
        hideAllButton.classList.add('hidden');
    });
}



document.addEventListener('DOMContentLoaded', setupBrandsToggle);



function setupBrandsToggleMax() {
    const showAllButton = document.getElementById('showAllButtonMax');
    const hideAllButton = document.getElementById('hideAllButtonMax');
    const bottomContainer = document.querySelector('.brands__container--bottom--max');
    
    // Добавляем CSS классы для управления видимостью
    bottomContainer.classList.add('hidden');
    hideAllButton.classList.add('hidden');
    
    showAllButton.addEventListener('click', () => {
        bottomContainer.classList.remove('hidden');
        showAllButton.classList.add('hidden');
        hideAllButton.classList.remove('hidden');
    });
    
    hideAllButton.addEventListener('click', () => {
        bottomContainer.classList.add('hidden');
        showAllButton.classList.remove('hidden');
        hideAllButton.classList.add('hidden');
    });
}



document.addEventListener('DOMContentLoaded', setupBrandsToggleMax);


function servicesShow(){
    const showServisBTN = document.getElementById('showServisBTN-midl')
    const hideServisBTN = document.getElementById('hideServisBTN-midl')
    const servicesHidden = document.getElementById('services--midl-hidden')


    showServisBTN.addEventListener('click', ()=>{
        servicesHidden.classList.remove('hidden');
        hideServisBTN.classList.remove('hidden');
        showServisBTN.classList.add('hidden')
    });
    
    hideServisBTN.addEventListener('click', ()=>{
        servicesHidden.classList.add('hidden');
        hideServisBTN.classList.add('hidden');
        showServisBTN.classList.remove('hidden')
    });
}

document.addEventListener('DOMContentLoaded', servicesShow);


function servicesShowMax(){
    const showServisBTN = document.getElementById('showServisBTN-max')
    const hideServisBTN = document.getElementById('hideServisBTN-max')
    // const servicesHidden = document.getElementById('services--midl-hidden')


    showServisBTN.addEventListener('click', ()=>{
        // servicesHidden.classList.remove('hidden');
        hideServisBTN.classList.remove('hidden');
        showServisBTN.classList.add('hidden')
    });
    
    hideServisBTN.addEventListener('click', ()=>{
       // servicesHidden.classList.add('hidden');
        hideServisBTN.classList.add('hidden');
        showServisBTN.classList.remove('hidden')
    });
}

document.addEventListener('DOMContentLoaded', servicesShowMax);