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

$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.btn_top').addClass('on');
    } else {
        $('.btn_top').removeClass('on');
    }
});

$('.btn_top').click(function(e) {
        e.preventDefault(); // 링크 기본 이동 막기
        $('html, body').stop().animate({ scrollTop: 0 }, 500);
    });

