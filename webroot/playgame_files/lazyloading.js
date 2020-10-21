(function(){
        var lazyImgArray=[],
        fill_array = function(){
                lazyImgArray = [];
                $('img[lzimg="1"]').each(function(){
                        lazyImgArray.push({'img':$(this),'top':$(this).offset().top});
                });
        },
        load_img = function(o){
                if(o && o.attr('lz_src')){
                        o.attr('src',o.attr('lz_src')).removeAttr('lz_src');
                }
                o.removeAttr('lzimg');
        },
        scroll_handler = function(){
                var screenH = window.innerHeight || document.documentElement.clientHeight,
                        scrollT = document.body.scrollTop || document.documentElement.scrollTop;

                for(var i=0;i<lazyImgArray.length;i++){
                        if(screenH + scrollT + 200 >= lazyImgArray[i].top){
                                if(lazyImgArray[i].top != lazyImgArray[i].img.offset().top) {
                                        fill_array();
                                }
                                break;
                        }
                }

                for(var i=0;i<lazyImgArray.length;i++){
                        if(screenH + scrollT + 10 >= lazyImgArray[i].top){
                                load_img(lazyImgArray[i].img);
                                lazyImgArray[i].top = 99999999;
                        }
                }
        };
        window.lzimg_load = function(){
                fill_array();
                scroll_handler();
        };
        $(function(){
                fill_array();
                scroll_handler();
                $(window).bind("scroll", scroll_handler);
                $(window).bind("resize", scroll_handler);
        });
})();