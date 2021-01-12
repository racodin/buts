$(function () {
  var $window = $(window);
  var mobileWidth = 943;
  var isMobile = $window.width() < mobileWidth ? true : false;

  /* item party list */
  var $itemSlideParty = $('.item-slide.party'),
    $itemPartyList = $itemSlideParty.find('.item-list'),
    $itemPartyRow = $itemSlideParty.find('.item-row');
  ($itemPartyNavi = $itemSlideParty.find('.slide-navi')), ($itemPartyIndicator = $itemSlideParty.find('.indicator')), ($itemPartyButton = null);

  var itemPartyInterval = null;
  var itemPartyRowWidth = $itemPartyRow.outerWidth(true);
  var itemPartyCurrent = 0;
  var itemPartySpeed = 500;
  var itemPartyTerm = 2000;
  var itemPartyLength = Math.round($itemPartyRow.length / 2);

  function itemPartInit() {
    if (!isMobile) {
      $itemPartyList
        .on('mouseenter', function () {
          clearInterval(itemPartyInterval);
        })
        .on('mouseleave', function () {
          itemPartyStart();
        });
      itemPartyStart();
      itemPartyNavi();
    } else {
      $itemPartyRow.addClass('user-select');
      $itemPartyList
        .on('swipeleft', function (event) {
          itemPartyMove(1);
        })
        .on('swiperight', function (event) {
          itemPartyMove(-1);
        });
    }
    itemPartyIndicator();
  }

  function itemPartyNavi() {
    $itemPartyNavi
      .show()
      .on('click', function (e) {
        e.preventDefault();
        $(this).hasClass('prev') ? itemPartyMove(-1) : itemPartyMove(1);
      })
      .on('mouseenter', function () {
        clearInterval(itemPartyInterval);
      })
      .on('mouseleave', function () {
        itemPartyStart();
      });
  }

  function itemPartyIndicator() {
    for (var i = 0; i < itemPartyLength; i++) {
      if (!i) {
        $itemPartyIndicator.append('<span class="on"></span>');
      } else {
        $itemPartyIndicator.append('<span></span>');
      }
    }
    $itemPartyButton = $itemSlideParty.find('.indicator span');
  }

  function itemPartyMove(direction) {
    if (direction > 0) {
      itemPartyCurrent = itemPartyCurrent >= itemPartyLength - 1 ? 0 : itemPartyCurrent + 1;
      $itemPartyList.animate({ left: itemPartyRowWidth * direction * -1 }, itemPartySpeed, function () {
        $itemPartyList.stop().append($('.item-slide.party .item-row').first()).append($('.item-slide.party .item-row').first()).css({ left: 0 });
      });
    } else {
      itemPartyCurrent = itemPartyCurrent == 0 ? itemPartyLength - 1 : itemPartyCurrent - 1;
      $itemPartyList
        .stop()
        .prepend($('.item-slide.party .item-row').last())
        .prepend($('.item-slide.party .item-row').last())
        .css({ left: -itemPartyRowWidth + 'px' });
      $itemPartyList.animate({ left: 0 }, itemPartySpeed);
    }
    $itemPartyButton.removeClass('on').eq(itemPartyCurrent).addClass('on');
  }

  function itemPartyStart() {
    itemPartyInterval = setInterval(function () {
      itemPartyMove(1);
    }, itemPartyTerm);
  }

  if (isMobile) {
    if (itemPartyLength > 2) {
      itemPartInit();
    }
  } else {
    if (itemPartyLength > 4) {
      itemPartInit();
    }
  }

  /* event banner list */
  var $eventSlide = $('.event-slide'),
    $eventList = $eventSlide.find('.event-list'),
    $eventRow = $eventSlide.find('.event-row');
  ($eventNavi = $eventSlide.find('.slide-navi')), ($eventIndicator = $eventSlide.find('.indicator')), ($eventButton = null);

  var eventInterval = null;
  var eventRowWidth = $eventRow.outerWidth(true);
  var eventCurrent = 0;
  var eventSpeed = 500;
  var eventTerm = 2000;
  var eventLength = $eventRow.length;

  function eventInit() {
    if (!isMobile) {
      $eventList
        .on('mouseenter', function () {
          clearInterval(eventInterval);
        })
        .on('mouseleave', function () {
          eventStart();
        });
      eventStart();
      eventNavi();
    } else {
      $eventRow.addClass('user-select');
      $eventList
        .on('swipeleft', function (event) {
          eventMove(1);
        })
        .on('swiperight', function (event) {
          eventMove(-1);
        });
    }
    eventIndicator();
  }

  function eventNavi() {
    $eventNavi
      .show()
      .on('click', function (e) {
        e.preventDefault();
        $(this).hasClass('prev') ? eventMove(-1) : eventMove(1);
      })
      .on('mouseenter', function () {
        clearInterval(eventInterval);
      })
      .on('mouseleave', function () {
        eventStart();
      });
  }

  function eventIndicator() {
    for (var i = 0; i < eventLength; i++) {
      if (!i) {
        $eventIndicator.append('<span class="on"></span>');
      } else {
        $eventIndicator.append('<span></span>');
      }
    }
    $eventButton = $eventSlide.find('.indicator span');
  }

  function eventMove(direction) {
    if (direction > 0) {
      eventCurrent = eventCurrent >= eventLength - 1 ? 0 : eventCurrent + 1;
      $eventList.animate({ left: eventRowWidth * direction * -1 }, eventSpeed, function () {
        $eventList.stop().append($('.event-slide .event-row').first()).css({ left: 0 });
      });
    } else {
      eventCurrent = eventCurrent == 0 ? eventLength - 1 : eventCurrent - 1;
      $eventList
        .stop()
        .prepend($('.event-slide .event-row').last())
        .css({ left: -eventRowWidth + 'px' });
      $eventList.animate({ left: 0 }, eventSpeed);
    }
    $eventButton.removeClass('on').eq(eventCurrent).addClass('on');
  }

  function eventStart() {
    eventInterval = setInterval(function () {
      eventMove(1);
    }, eventTerm);
  }

  if (isMobile) {
    if (eventLength > 1) {
      eventInit();
    }
  } else {
    if (eventLength > 2) {
      eventInit();
    }
  }

  /* item gift list */
  var $itemSlideGift = $('.item-slide.gift'),
    $itemGiftList = $itemSlideGift.find('.item-list'),
    $itemGiftRow = $itemSlideGift.find('.item-row');
  ($itemGiftNavi = $itemSlideGift.find('.slide-navi')), ($itemGiftIndicator = $itemSlideGift.find('.indicator')), ($itemGiftButton = null);

  var itemGiftInterval = null;
  var itemGiftRowWidth = $itemGiftRow.outerWidth(true);
  var itemGiftCurrent = 0;
  var itemGiftSpeed = 500;
  var itemGiftTerm = 2000;
  var itemGiftLength = $itemGiftRow.length;

  function itemGiftInit() {
    if (!isMobile) {
      $itemGiftList
        .on('mouseenter', function () {
          clearInterval(itemGiftInterval);
        })
        .on('mouseleave', function () {
          itemGiftStart();
        });
      itemGiftStart();
      itemGiftNavi();
    } else {
      $itemGiftRow.addClass('user-select');
      $itemGiftList
        .on('swipeleft', function (event) {
          itemGiftMove(1);
        })
        .on('swiperight', function (event) {
          itemGiftMove(-1);
        });
    }
    itemGiftIndicator();
  }

  function itemGiftNavi() {
    $itemGiftNavi
      .show()
      .on('click', function (e) {
        e.preventDefault();
        $(this).hasClass('prev') ? itemGiftMove(-1) : itemGiftMove(1);
      })
      .on('mouseenter', function () {
        clearInterval(itemGiftInterval);
      })
      .on('mouseleave', function () {
        itemGiftStart();
      });
  }

  function itemGiftIndicator() {
    for (var i = 0; i < itemGiftLength; i++) {
      if (!i) {
        $itemGiftIndicator.append('<span class="on"></span>');
      } else {
        $itemGiftIndicator.append('<span></span>');
      }
    }
    $itemGiftButton = $itemSlideGift.find('.indicator span');
  }

  function itemGiftMove(direction) {
    if (direction > 0) {
      itemGiftCurrent = itemGiftCurrent >= itemGiftLength - 1 ? 0 : itemGiftCurrent + 1;
      $itemGiftList.animate({ left: itemGiftRowWidth * direction * -1 }, itemGiftSpeed, function () {
        $itemGiftList.stop().append($('.item-slide.gift .item-row').first()).css({ left: 0 });
      });
    } else {
      itemGiftCurrent = itemGiftCurrent == 0 ? itemGiftLength - 1 : itemGiftCurrent - 1;
      $itemGiftList
        .stop()
        .prepend($('.item-slide.gift .item-row').last())
        .css({ left: -itemGiftRowWidth + 'px' });
      $itemGiftList.animate({ left: 0 }, itemGiftSpeed);
    }
    $itemGiftButton.removeClass('on').eq(itemGiftCurrent).addClass('on');
  }

  function itemGiftStart() {
    itemGiftInterval = setInterval(function () {
      itemGiftMove(1);
    }, itemGiftTerm);
  }

  if (isMobile) {
    if (itemGiftLength > 2) {
      itemGiftInit();
    }
  } else {
    if (itemGiftLength > 4) {
      itemGiftInit();
    }
  }

  $('.body .width-container').eq(0).addClass('main');
});
