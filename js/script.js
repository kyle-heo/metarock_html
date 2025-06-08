// 스크롤 이벤트 처리
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    let lastScrollY = window.scrollY;

    // 스크롤에 따른 헤더 표시/숨김
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // 스무스 스크롤 구현
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // 모바일 메뉴가 열려있으면 닫기
                document.body.classList.remove('mobile-menu-open');
                
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 모바일 메뉴 토글
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const body = document.body;

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            body.classList.toggle('mobile-menu-open');
        });
    }

    // 스크롤 애니메이션
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // 윈도우 리사이즈 이벤트 처리
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                createMobileMenu();
            }
        } else {
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (toggle) {
                toggle.remove();
            }
            document.querySelector('.main-nav').classList.remove('active');
        }
    });

    // Swiper 초기화
    const swiper = new Swiper('.swiper', {
        // 기본 설정
        direction: 'horizontal',
        loop: true,

        // 자동 재생
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        // 페이지네이션
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // 네비게이션 화살표
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 스크롤바
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    // 메인 메뉴 Swiper 초기화
    new Swiper('.menu-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });
}); 