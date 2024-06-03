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
    $(".p-header__nav-item a").click(function () {
      $(".c-hamburger-button").removeClass("is-active");
      $("body").removeClass("active");
      $(".js-drawer").fadeOut();
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

  // フェードイン
  $(".js-fadein-left").waypoint({
    handler: function (direction) {
      // 要素が画面中央に来るとここが実行される
      if (direction === "down") {
        /**
         * 下方向のスクロール
         * イベント発生元の要素に
         * fadeInLeftアニメーションを付けることで
         * アニメーションを開始
         */
        $(this.element).addClass("animate__fadeInLeft");
      }
    },
    // 要素が画面中央に来たらhandlerを実行
    offset: "50%",
  });

  $(".js-fadein-right").waypoint({
    handler: function (direction) {
      // 要素が画面中央に来るとここが実行される
      if (direction === "down") {
        /**
         * 下方向のスクロール
         * イベント発生元の要素に
         * fadeInLeftアニメーションを付けることで
         * アニメーションを開始
         */
        $(this.element).addClass("animate__fadeInRight");
      }
    },
    // 要素が画面中央に来たらhandlerを実行
    offset: "50%",
  });

  $(".js-fadein-up").waypoint({
    handler: function (direction) {
      // 要素が画面中央に来るとここが実行される
      if (direction === "down") {
        /**
         * 下方向のスクロール
         * イベント発生元の要素に
         * fadeInLeftアニメーションを付けることで
         * アニメーションを開始
         */
        $(this.element).addClass("animate__fadeInUp");
      }
    },
    // 要素が画面中央に来たらhandlerを実行
    offset: "50%",
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
      slidesPerView: 2.5,
      spaceBetween: 10,
    },

    1400: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },

    1920: {
      slidesPerView: 4.5,
      spaceBetween: 10, //スライド感の余白
    },
  },
});
