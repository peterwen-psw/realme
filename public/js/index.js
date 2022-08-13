
function esc() {
  $('.esc').on('click', function () {
    delCookie('username');
    location.reload();
  })
}



