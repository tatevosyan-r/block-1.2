document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.brandsSwiper', {
        slidesPerView: 'auto', // Автоматическое количество слайдов
        centeredSlides: true,  // Центрирование активного слайда
        spaceBetween: 20,      // Отступ между слайдами
        
       
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
    const bottomContainer = document.querySelector('.brands__conteiner--bottom');
    
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