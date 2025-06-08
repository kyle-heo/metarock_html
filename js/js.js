$(function () {
  $(document).on("click", ".pagination_wrap>li", function (e) {
    e.preventDefault();
    // 탭메뉴동장
    let num = $(this).index();
    $("html").scrollTop("0");
    $("#newsCont .container_wrap>.contents").removeClass("hide");
    $("#newsCont .container_wrap>.contents").eq(num).addClass("hide");
  });
  //header
  // $("header").mouseenter(function (e) {
  //   $("header h1 img").attr("src", "images/logo/logo.png");
  //   $(this).addClass("bg-white");
  //   $(this).children(".gnb_pc").stop().delay(200).slideDown();

  // });
  // $("header").mouseleave(function () {
  //   $("header h1 img").stop().delay(300).attr("src", "images/logo/logo-white.png");
  //   $(this).removeClass("bg-white")
  //   $(this).stop().addClass("bg-transparent");
  //   $(this).find(".dropdown").stop().delay(300).slideUp();
  // });
  //gnb
  // $("header .gnb_pc .menu").mouseenter(function () {
  //   $(this).siblings(".dropdown").stop().delay(200).slideDown();
  // });

  $(document).on("click", ".js-menu_toggle.closed", function (e) {
    e.preventDefault();
    $(".list_load, .list_item").stop();
    $(this).removeClass("closed").addClass("opened");

    $(".side_menu").css({ right: "0px" });

    var count = $(".list_item").length;
    $(".list_load").slideDown(count * 0.6 * 100);
    $(".list_item").each(function (i) {
      var thisLI = $(this);
      timeOut = 100 * i;
      setTimeout(function () {
        thisLI.css({
          opacity: "1",
          "margin-right": "0",
        });
      }, 100 * i);
    });
  });

  $(document).on("click", ".js-menu_toggle.opened", function (e) {
    e.preventDefault();
    $(".list_load, .list_item").stop();
    $(this).removeClass("opened").addClass("closed");

    $(".side_menu").css({ right: "-250px" });

    var count = $(".list_item").length;
    $(".list_item").css({
      opacity: "0",
      "margin-right": "-20px",
    });
    $(".list_load").slideUp(300);
  });

  var speed = 700;
  function scrolling(obj) {
    if (!obj) {
      $("html,body").animate({ scrollTop: 0 }, speed);
    } else {
      var posTop = $(obj).offset().top - 89;
      $("html,body").animate({ scrollTop: posTop }, speed);
    }
  }
  
  //header
  // $(window).scroll(function (e) {
  //   var windTop = $(this).scrollTop();
  //   if (windTop > 100) {
  //     $("header h1 img").attr("src", "images/logo/logo.png");
  //     $("header").css("height", "100px");
  //     $("header").css({
  //       "background-color": "rgba(255, 255, 255, 1)",
  //       "box-shadow": "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
  //       "border-bottom": "1px solid rgba(255, 255, 255, 0.18)"
  //     });
  //   } else {
  //     // $("header").removeClass("bg-white");
  //     // $("header h1 img").attr("src", "images/logo/logo-white.png");
  //   }
  // });

  $(document).on(
    "click",
    "header .gnb_m > ul > .has_dropdown > a",
    function (e) {
      e.preventDefault();
      $(this).siblings(".dropdown").stop().slideToggle();
      $(this).children("i").toggleClass("fa-chevron-up");
      $(this).parent("li").siblings("li").children(".dropdown").stop().slideUp();
    }
  );


  $(".btn_wait").click(function (e) {
    e.preventDefault();
    alert("준비중입니다!");
  });

  //#case
  $("#case .tab li").click(function (e) {
    e.preventDefault();
    $(this).addClass("on").siblings().removeClass("on");

    if ($("#case .tab li:eq(0)").hasClass("on")) {
      $("#case .box").css("display", "none");
      $("#case .box1").css("display", "block");
    } else if ($("#case .tab li:eq(1)").hasClass("on")) {
      $("#case .box").css("display", "none");
      $("#case .box2").css("display", "block");
    } else if ($("#case .tab li:eq(2)").hasClass("on")) {
      $("#case .box").css("display", "none");
      $("#case .box3").css("display", "block");
    } else {
      $("#case .box").css("display", "none");
      $("#case .box4").css("display", "block");
    }
  });

  //#game
  // $("#game .fir .col-lg-4 li").click(function (e) {
  //   e.preventDefault();
  //   $(this).addClass("on").siblings().removeClass("on");

  //   if ($("#game .fir .col-lg-4 li:eq(0)").hasClass("on")) {
  //     $(this)
  //       .parents(".col-lg-4")
  //       .siblings(".col-lg-8")
  //       .children("img")
  //       .attr("src", "images/game/game1.png");
  //     $(this)
  //       .parents(".col-lg-4")
  //       .siblings(".col-lg-8")
  //       .children("img")
  //       .attr("alt", "Esports Betting Game 서비스");
  //   } else if ($("#game .fir .col-lg-4 li:eq(1)").hasClass("on")) {
  //     $(this)
  //       .parents(".col-lg-4")
  //       .siblings(".col-lg-8")
  //       .children("img")
  //       .attr("src", "images/game/game2.png");
  //     $(this)
  //       .parents(".col-lg-4")
  //       .siblings(".col-lg-8")
  //       .children("img")
  //       .attr("alt", "Pro Esports 구단 전적 관리 시스템 구축");
  //   } else {
  //     $(this)
  //       .parents(".col-lg-4")
  //       .siblings(".col-lg-8")
  //       .children("img")
  //       .attr("src", "images/game/game3.png");
  //     $(this)
  //       .parents(".col-lg-4")
  //       .siblings(".col-lg-8")
  //       .children("img")
  //       .attr("alt", "전문 Esports News Journal 서비스");
  //   }
  // });

  $("#faq li dt").click(function (e) {
    e.preventDefault();
    $(this).siblings("dd").slideToggle();
    $(this).find("i:eq(0)").toggleClass("fa-plus");
  });

  $("#faq li:eq(0) dt").trigger("click");
});
