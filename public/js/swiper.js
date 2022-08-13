
// 轮播图
let box = $('section .swiper');
let arr = $('section .swiper .arr');
let ul = $('section .swiper .screen>ul');
let olLi = $('section .swiper .screen ol>li');
let swidth = $('section .swiper .screen');
let timer = null;
let index = 0;
let picNum = olLi.length;
 arr.hover(function () {
  $('section .swiper .arr span').css({
    backgroundColor: 'rgba(160, 154, 154, 0.3)',
    color: '#666666'
  })
}, function () {
  $('section .swiper .arr span').css({
    backgroundColor: '',
    color: '#d2d2d2'
  })
})
box.on('click', '#right', function () {
  if (index == picNum) {
    ul.css({ left: 0 });
    index = 0;
  }
  index++;
  ul.stop().animate({ left: - index * swidth.width() });
  if (index == picNum) {
    olLi.eq(0).addClass('current').siblings('li').removeClass('current');
  } else {
    olLi.eq(index).addClass('current').siblings('li').removeClass('current');
  }
})
box.on('click', '#left', function () {
  if (index == 0) {
    index = picNum;
    ul.css({ left: - index * swidth.width() });
  }
  index--;
  ul.stop().animate({ left: - index * swidth.width() });
  if (index == 0) {
    olLi.eq(0).addClass('current').siblings('li').removeClass('current');
  } else {
    olLi.eq(index).addClass('current').siblings('li').removeClass('current');
  }
})
olLi.on('click', function () {
  index = $(this).index();
  ul.stop().animate({ left: - index * swidth.width() });
  if (index == picNum) {
    olLi.eq(0).addClass('current').siblings('li').removeClass('current');
  } else {
    olLi.eq(index).addClass('current').siblings('li').removeClass('current');
  }
})
autoplay();
 function autoplay() {
  timer = setInterval(function () {
    $('#right').trigger('click');
  }, 4000)
}

export {autoplay};

