$(function () {
  window.buts = function () {
    var mobileWidth = 943;
    var $window = $(window),
      $body = $('body'),
      $header = $('.header'),
      $topper = $('.topper');

    function sticky() {
      if ($window.width() < mobileWidth) {
        $header.addClass('fixed');
      } else {
        $window.scrollTop() > $topper.height() ? $header.addClass('fixed') : $header.removeClass('fixed');
      }
    }

    $window.on('scroll', function () {
      sticky();
    });

    var $menuLi = $('.header-menu.pc .menu-li'),
      $subMenu = $('.header-menu.pc .sub-menu');
    $.each($menuLi, function (idx, el) {
      $(el)
        .on('mouseenter', function (e) {
          $subMenu.hide().eq(idx).show();
        })
        .on('mouseleave', function () {
          $subMenu.hide();
        });
    });

    var $hamberger = $('.header-hamberger'),
      $right = $('.header-right'),
      $profile = $('.header-profile'),
      $shade = $('.header-shade');

    $right
      .on('mouseenter', function (e) {
        e.preventDefault();
        if ($window.width() > mobileWidth) $profile.css({ left: 'auto' }).fadeIn(100);
      })
      .on('mouseleave', function (e) {
        e.preventDefault();
        if ($window.width() > mobileWidth) $profile.fadeOut(100);
      });

    $hamberger.on('click', function (e) {
      e.preventDefault();
      $profile.show().css({ left: '-250px' }).animate({ left: 0 }, 300);
      $shade.fadeIn(200);
      $body.css({ overflow: 'hidden' });
    });

    $shade.on('click', function (e) {
      $profile.animate({ left: '-250px' }, 200, function () {
        $profile.hide();
        $shade.fadeOut(100);
        $body.css({ overflow: '' });
      });
    });

    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
    });

    $('.popup-inline').magnificPopup({
      type: 'inline',
      preloader: false,
    });

    $(document).on('click', '.magnific-close', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
    });
  };

  buts();
});
