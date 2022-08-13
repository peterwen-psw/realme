let dn = Number($('.goods-select-count .num').html());
let pri;
let id;

export function addCart() {
  $('.goods-summary-btns>.btn').on('click', function () {
    console.log(getCookie('username'), id, dn);
    $.get('../images/php/addShoppingCart.php',
      { "vipName": getCookie('username'), "goodsId": id, "goodsCount": dn },
      function(data) {
        if (data.trim() == '1') {
          setTimeout(() => {
            location.href = 'cart.html';
          }, 1000);
        } else {
          alert('加入购物车失败');
        }
      }
    )
  })
}
export function dAdd() {
  let pl = $('.goods-select-count .plus');
  var nu = $('.goods-select-count .num');
  pl.on('click', function () {
    dn++;
    nu.html(dn);
    dsum();
  })

}
export function dminus() {
  let mi = $('.goods-select-count .minus');
  var nu = $('.goods-select-count .num');
  mi.on('click', function () {
    dn--;
    if (dn < 1) {
      dn = 1;
    }
    nu.html(dn);
    dsum();
  })

}
export function dsum() {
  $('.goods-summary-count .price').html(pri * dn);
}
export function enlarge() {
  let ebox = $('.swiper-container');
  let esmall = $('.swiper-img');
  let ebig = $('.swiper-big');
  let emask = $('.swiper-mask');
  let ebigImg = $('.swiper-big>img');
  let esmallImg = $('.swiper-img>img');
  let eoption = $('.swiper-thumb');
  esmall.hover(function () {
    emask.css('display', 'block');
    ebig.css('display', 'block');
  }, function () {
    emask.css('display', 'none');
    ebig.css('display', 'none');
  })
  esmall.on('mousemove', function (e) {
    let x = (e.pageX - ebox.offset().left) - emask.width() / 2;
    let y = (e.pageY - ebox.offset().top) - emask.width() / 2;
    if (x <= 0) {
      x = 0;
    }
    if (x >= ebox.innerWidth() - emask.width()) {
      x = ebox.innerWidth() - emask.width();
    }
    if (y <= 0) {
      y = 0;
    }
    if (y >= ebox.innerHeight() - emask.height()) {
      y = ebox.innerHeight() - emask.height();
    }
    emask.css({
      top: y + 'PX',
      left: x + 'PX'
    })
    let scaleX = (ebigImg.outerWidth() - ebig.width()) / (esmall.width() - emask.outerWidth());
    let scaleY = (ebigImg.outerHeight() - ebig.height()) / (esmall.height() - emask.outerHeight());
    let bigX = scaleX * emask.position().left;
    let bigY = scaleY * emask.position().top;
    ebigImg.css({
      left: -bigX + 'PX',
      top: -bigY + 'PX'
    })
  })
  eoption.on('click', function () {
    $(this).addClass('select').siblings('div').removeClass('select');
    esmallImg.prop('src', $(this).children('img').eq(0).prop('src'));
    ebigImg.prop('src', $(this).children('img').eq(0).prop('src'));
  })
  // 滚动条滚动到吸顶效果
  window.onscroll = function () {
    var st = document.documentElement.scrollTop;
    if (st > 940) {
      $('.sticky-header').show();
      $('.back-top').show();
    } else {
      $('.sticky-header').hide();
      $('.back-top').hide();
    }
  }
  // 回到顶部
  $('.icon-back-top').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    })
  })
}


