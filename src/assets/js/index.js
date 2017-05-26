
$(function(){
    //alert($('.list button .iconfont').html())
    var $list = $('.list ul li:gt(4)');
    $list.hide();
    var $btn = $('.list button');
    $btn.click(function(){
        if($list.is(":visible")){
            $list.hide();
            $('.list button .iconfont').html('&#xf0118;');
        }else{
            $list.show();
            $('.list button .iconfont').html('&#xf0117;');
        }
    })
})

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);