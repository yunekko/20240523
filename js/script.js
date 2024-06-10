jQuery(function ($) {
  // ページトップボタン
  var topBtn = $(".js-pagetop");
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  // ハンバーガーメニュー;
  $(".c-hamburger-button").click(function () {
    $(this).toggleClass("is-active");
    // bodyに「.active」class付け外し
    $("body").toggleClass("active");
    $(".js-drawer").fadeToggle();
  });
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".p-header__logo, .p-header__nav-item a").click(function () {
      $(".c-hamburger-button").removeClass("is-active");
      $("body").removeClass("active");
      $(".js-drawer").fadeOut();
    });
  }

  // アコーディオンメニュー
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(function () {
      $(".js-accordion-title").on("click", function () {
        $(".p-header__sub-list").slideToggle(200);
        $(this).toggleClass("open", 200);
      });
      $(".p-header__sub-item a").on("click", function () {
        $(".p-header__sub-list").slideUp();
        $(".p-header__nav-arrow").removeClass("open");
      });
    });
  }

  // フロートインフォメーション
  var float = $(".p-float");
  float.hide();
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 6900) {
        float.fadeOut();
      } else {
        float.fadeIn();
      }
    });
  }
});

// フェードイン別バージョン
jQuery(function ($) {
  var fadeIn = $(".fade-in");
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});

// swiper
const mySwiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  spaceBetween: 10, //スライド間の余白
  slidesPerView: 1.5, //一度に表示するスライド枚数
  centeredSlides: true, //スライダーの最初と最後に余白を追加せずスライドが真ん中に配置される
  centeredSlidesBounds: false,

  breakpoints: {
    768: {
      slidesPerView: 2.3,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },

    1400: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },

    1700: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
