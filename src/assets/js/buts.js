$(function () {
  window.buts = function () {
    var $window = $(window),
      $header = $('.header');

    function sticky() {
      if ($window.width() < 900) {
        $header.addClass('fixed');
      } else {
        $window.scrollTop() > 35 ? $header.addClass('fixed') : $header.removeClass('fixed');
      }
    }

    $window.on('scroll', function () {
      sticky();
    });

    var $menuLi = $('.menu-li'),
      $subMenu = $('.sub-menu'),
      $subMenuBg = $('.sub-menu-bg');
    $.each($menuLi, function (idx, el) {
      $(el)
        .on('mouseenter', function (e) {
          $subMenu.hide().eq(idx).show();
          $subMenuBg.show();
        })
        .on('mouseleave', function () {
          $subMenu.hide();
          $subMenuBg.hide();
        });
    });

    var $user = $('.header-user'),
      $right = $('.header-right'),
      $profile = $('.header-profile');
    $user.on('click', function (e) {
      e.preventDefault();
      $profile.show();
    });
    $window.on('click', function (e) {
      if (!$right.has(e.target).length) {
        $profile.hide();
      }
    });
  };
  buts();
});
