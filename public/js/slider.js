let secwidth = $('section .sec-wrapper');
// 菜单箭头滑动
 function slider(pre, next) {
  let sUl = pre.parent().prev().children('ul');
  let i = 0;
  let liL = sUl.children();
  next.on('click', function () {
    i++;
    if (i >= Math.ceil(liL.length / 4) - 1) {
      i = Math.ceil(liL.length / 4) - 1;
    }
    sUl.stop().animate({ left: - i * secwidth.width() });
  })
  pre.on('click', function () {
    i--;
    if (i < 1) {
      i = 0;
    }
    sUl.stop().animate({ left: - i * secwidth.width() });
  })
}

let switch1 = $('section .sec-wrapper .sec-header .sec-headerL .switch1>li');
let switch2 = $('section .sec-wrapper .sec-header .sec-headerL .switch2>li');
// 菜单滑动
 function menuSwitch(sw,ul) {
  sw.on('click', function() {
    $(this).addClass('active').siblings('li').removeClass('active');
    let n = $(this).index();
    ul.stop().animate({ left: - n * secwidth.width() });
  })
  
}
menuSwitch(switch1, $('.menuslide1'));
menuSwitch(switch2, $('.menuslide2'));
// 二三级菜单hover效果
let headerMenu = $('header .wrapper .nav>ul>li');
headerMenu.hover(function(){
    $(this).children('.nav-submenu').addClass('visible').siblings('.nav-submenu').removeClass('visible');
}, function () {
  $(this).children('.nav-submenu').removeClass('visible');
})
let trdMenu = $('header .wrapper .nav .nav-submenu .nav-submenu-wrapper .submenu-tabs .secondary-menu');
let trdContainer = $('header .wrapper .nav .nav-submenu .nav-submenu-wrapper .submenu-container>ul');
trdMenu.hover(function(){
  $(this).addClass('hover').siblings(trdMenu).removeClass('hover');
  $(this).children('i').addClass('visible')
  $(this).siblings(trdMenu).children('i').removeClass('visible');
  // let data = [1,3,2,3,23,3];
  // $(data).each(function(index, item) {
  //   trdContainer.append(`<li>
  //   <a href="#">
  //     <div class="nav-submenu-img">
  //       <img src="../images/nav-GT${index + 1}.png" alt="">
  //     </div>
  //     <div class="nav-submenu-info">
  //       <p style="color: #2eb4cb;">新品</p>
  //       <p>真我GT Neo2T</p>
  //       <p class="nav-submenu-price">￥ 1,899</p>
  //     </div>
  //   </a>
  // </li>`)
  // })
})

//登录隐藏栏
let loginhide = $('header .wrapper .nav-right');
let loginUl = $('header .wrapper .nav-right>ul');
loginhide.on('click', function() {
  loginUl.addClass('visible');
})
loginUl.hover(function() {
  $(this).addClass('visible');
}, function() {
  $(this).removeClass('visible');
})

export {slider};
export {menuSwitch};
