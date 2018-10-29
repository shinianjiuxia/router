/*banner图*/
 window.onload = function() {
        var mySwiper = new Swiper('#banner_frist', {
			   direction: 'horizontal', // 垂直切换选项
			   pagination: {
                    el: '.swiper-pagination',
                   },
               autoplay: true,//可选选项，自动滑动
		});
}
