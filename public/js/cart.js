let sn;
function sadd() {
  $('.numplus').on('click', function () {
    let an = Number($(this).prev().html());
    an++;
    $(this).prev().html(an);
    samount($(this));
    $.get('../images/php/updateGoodsCount.php',
      { "vipName": getCookie('username'), "goodsId": $(this).parents('li').attr('index'), "goodsCount": an },
      function (data) {
        console.log(data);
      }
    )
  })

}
function sminus() {
  $('.numminus').on('click', function () {
    let an = Number($(this).next().html());
    an--;
    if (an < 1) {
      an = 1;
    }
    $(this).next().html(an);
    samount($(this));
    $.get('../images/php/updateGoodsCount.php',
      { "vipName": getCookie('username'), "goodsId": $(this).parents('li').attr('index'), "goodsCount": an },
      function (data) {
        console.log(data);
      }
    )
  })

}
function samount(obj) {
  let num = Number(obj.parent().children('.num').html());
  let price = Number(obj.parents('.cart-count').prev().html().split('￥')[1]);
  obj.parents('.cart-count').next().html('￥' + num * price);
  sxj();
}

function schecked() {
  // 全选
  $('.all').on('click', function () {
    $(this).toggleClass('checked');
    if ($(this).hasClass('checked')) {
      $('.go').each(function (index, item) {
        $(item).addClass('checked');
        let a = $(this).parents('.cart-header-left');
        a.next().children('.cart-amount').addClass('disabled');
        a.next().children('.cart-count').children().children().eq(1).addClass('disabled');
        sxj();
      })
    } else {
      $('.go').each(function (index, item) {
        $(item).removeClass('checked');
        let a = $(this).parents('.cart-header-left');
        a.next().children('.cart-amount').removeClass('disabled');
        a.next().children('.cart-count').children().children().eq(1).removeClass('disabled');
        sxj();
      })
    }
  })

  $('.go').on('click', function () {
    $(this).toggleClass('checked');
    let a = $(this).parents('.cart-header-left');
    a.next().children('.cart-amount').toggleClass('disabled');
    a.next().children('.cart-count').children().children().eq(1).toggleClass('disabled');
    console.log($('.cart-checkbox .checked').length, $('.cart-checkbox .go').length);
    if ($('.checkinner .checked').length == $('.cart-checkbox .go').length) {
      $('.all').addClass('checked');
    } else {
      $('.all').removeClass('checked');
    }
    sxj();
    $('.icon-option').each(function (index, item) {
      if (!$(item).hasClass('checked')) {
        $('.cart-summary-submit>a').addClass('disabled');
      } else {
        $('.cart-summary-submit>a').removeClass('disabled');
      }
    })
  })

}
function sxj() {
  let xj = 0;
  let sum = 0;
  $('.cart-count .disabled').each(function (index, item) {
    xj += Number($(item).html());
  })
  $('.cart-header-right>.disabled').each(function (index, item) {
    sum += Number($(item).html().replace('￥', ''));
  })
  $('.tatal').html(xj);
  $('.cart-summary-amount').children('span').html('￥ ' + sum);
}
function delLi() {
  $('.cart-action>a').on('click', function () {
    $(this).parents('li').remove();
    $.get('../images/php/deleteGoods.php',
      { "vipName": getCookie('username'), "goodsId": $(this).parents('li').attr('index')},
      function (data) {
        console.log(data);
      }
    )
  })
}