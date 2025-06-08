(function (global, $) {

    var $menu     = $('.menu-list'),
        $contents = $('.scroll'),
        $doc      = $('html, body');
    $(function () {

        $menu.on('click','a', function(e){
            var $target = $(this).parent(),
                idx     = $target.index(),
                section = $contents.eq(idx),
                offsetTop = (section.offset().top)-89;

            $doc.stop()
                    .animate({
                        scrollTop :offsetTop
                    }, 300);
            return false;
        });
    });

    $(window).scroll(function(){
        
        var scltop = $(window).scrollTop();
        
        if(scltop > 450){
            $('.btn_top').stop().fadeIn();
        }else{
            $('.btn_top').stop().fadeOut();
        }
    });

    
    $('.btn_top').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0}, 800);
    });

}(window, window.jQuery));
