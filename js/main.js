const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this_year');
thisYear.textContent = new Date().getFullYear(); // 올해의 년도를 말함


// new Swiper('.promotion .swiper-container', {
//     slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
//     spaceBetween: 10, // 슬라이드 사이 여백
//     // centeredSlides: true, // 1번슬라이드가 가운대 보이기
//     loop: true,
//     autoplay: {
//         delay: 5000
//     },
//     pagination: {
//     el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
//     clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
//     },
//     navigation: {
//         prevEl: '.promotion .swiper-prev',
//         nextEl: '.promotion .swiper-next'
//     }
// });