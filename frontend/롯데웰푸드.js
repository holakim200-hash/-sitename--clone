$(function() {
    var $gnb = $('.gnb');
    var $dim = $('.dim');

    // 메뉴 열기
    $(".btn_all").on('click', function() {
        $dim.addClass("on");
        $gnb.show();
        TweenMax.to($gnb, 0.5, { left: 0, ease: Power4.easeOut });
        controlScroll(false);
    });

    // 메뉴 닫기 공통 로직
    function closeGnb() {
        $dim.removeClass('on');
        TweenMax.to($gnb, 0.5, { 
            left: '-1106px', 
            ease: Power4.easeOut, 
            onComplete: function() {
                $gnb.hide().removeClass("on");
            } 
        });
        $(".btn_all").focus();
        controlScroll(true);
    }

    $(".gnb_close, .bizBtn").on('click', closeGnb);

    // 닫기 버튼 회전 효과
    $(".gnb_close").on({
        'mouseenter': function() {
            TweenMax.to(this, 0.5, { rotation: "-90", ease: Power4.easeOut });
        },
        'mouseleave': function() {
            TweenMax.to(this, 0.5, { rotation: "0", ease: Power4.easeOut });
        }
    });
});

const slides = document.querySelectorAll('.service_slide li');
const nextBtn = document.querySelector('.bx-next');
const prevBtn = document.querySelector('.bx-prev');
const pager = document.querySelector('.bx-pager-link');

let current = 0;
