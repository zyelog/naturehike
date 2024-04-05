$(document).ready(function () {
  $('header').load('include/header.html',function(){
    $("html").click(function (e) {
      console.log(e.target);
  
      if (!$(e.target).hasClass("choice")) {
        $(".language").hide();
      }
      if (!$(e.target).hasClass("title")) {
        $(".title_list").slideUp();
      }
    });

    $(".lang").click(function () {
      $(".language").toggle();
    });
  
    $(".language li").click(function () {
      let langChoice = $(this).text();
      $(".choice").text(langChoice);
    });
    let navTop = $("header nav").offset().top;

    $(window).scroll(function () {
      let scrT = $(window).scrollTop();
      console.log(scrT);
  
      $("#visual").css({ backgroundSize: 100 + scrT / 10 + "%" });
      $("#visual .model").css({ top: 100 - scrT / 5 + "px" });
  
      if (scrT >= navTop) {
        $("header nav").addClass("on");
      } else {
        $("header nav").removeClass("on");
      }
    });
    //현재 페이지 표시 스크립트
  let url = window.location.href
  
  $('.gnb a').each(function(){
    let gnbText = $(this).text();
    $(this).html('<span>'+gnbText+'</span>')
  })

  $('.gnb a').each(function(){
    let gnbHref = $(this).attr('href')

    if(url.indexOf(gnbHref) >= 0){
      // $(this).css({color:'red'});
      $(this).parent('li').addClass('on')

      let gnbHtml = $(this).parents('.lnb').html();
      let h2Text = $(this).text();
      //비주얼 글씨 바꾸는거
      // let gnbPage = $(this).parents('lnb').siblings().text();
      // $('#visual_sub .text strong').text(gnbPage)

      $('.snb').html(gnbHtml)
      $('#content_box h2').text(h2Text)
    }
  })


  // snb 새로고침 위치
  function snbAction(){
    let snbPosi = $('.snb li.on span').position().left;
    let snbPosiW = $('.snb li.on span').width();
  
    $('.line').css({left:snbPosi, width:snbPosiW});
  }

  snbAction();

  $(window).resize(function(){
    snbAction();
  })

  // snb
  $('.snb li').mouseenter(function(){
    let snbLiW = $(this).find('span').width()
    let snbLiL = $(this).find('span').position().left 
  //   //position().left 부모로부터의 왼쪽거리값 / .top 부모로부터의 위쪽거리 값
  //   //offset().left 브라우저부터의 왼쪽거리값
    
    // let snbLiw = $(this).find('span').css('width')
    $('.line').width(snbLiW)
    $('.line').css({left:snbLiL})
  })
  $('.snb').mouseleave(function(){
    snbAction();
  });
  })
  
 

  // 로고이미지 src 값 글자변경
  // $('header h1').mouseover(function(){
  // 1번 let h1Img = $('header h1 img').attr('src');
  // console.log(h1Img);

  // let h1ImgOver = h1Img.replace('1.png','2.png');
  // console.log(h1ImgOver);

  // $('header h1 img').attr('src', h1ImgOver);

  // 2번  $('header h1 img').attr('src', 'images/bohun2.png');
  // })
  // $('header h1').mouseout(function(){
  //     $('header h1 img').attr('src', 'images/bohun1.png');
  // })
 

  /* notice 롤링 */
  // let kkk = setInterval(함수, 반복시간)
  // clearInterval(kkk)

  // let mmm = setTimeout(함수, 예약시간)
  // clearTimeout(mmm)

  // let notiRoll = setInterval(noticeRolling, 1000)

  // function noticeRolling(){
  //     $('.notice ul').animate({top:'-100%'}, function(){
  //         $('.notice ul li').eq(0).appendTo($('.notice ul'))
  //         $('.notice ul').css({top:0})
  //     })
  // }

  // $('.notice').mouseenter(function(){
  //     clearInterval(notiRoll)
  // });
  // $('.notice').mouseleave(function(){
  //     notiRoll = setInterval(noticeRolling, 2000)
  // })

  let notiRoll;
  let interval = 3000; // 초기 간격 설정

  function startNoticeRolling() {
    notiRoll = setInterval(noticeRolling, interval);
  }

  function noticeRolling() {
    $(".notice ul").animate({ top: "-100%" }, function () {
      $(".notice ul li").eq(0).appendTo($(".notice ul"));
      $(".notice ul").css({ top: 0 });
    });
  }

  $(".notice").mouseover(function () {
    clearInterval(notiRoll);
  });

  $(".notice").mouseout(function () {
    startNoticeRolling(); // 이전 간격 설정을 유지하고 다시 시작
  });

  $(document).on("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      // 브라우저가 다시 활성화되면 현재 간격으로 애니메이션을 다시 시작
      startNoticeRolling();
    } else {
      // 브라우저가 비활성화되면 애니메이션을 일시 중지
      clearInterval(notiRoll);
    }
  });

  // 초기 애니메이션 시작
  startNoticeRolling();


      // 메인 section5 번호 넣기1 for문
    // for(let i=0; i<9; i++){
    //     $('#section5 li').eq(i).find('span.num').text('0'+(i+1))
    // }
    
    // 메인 section5 번호 넣기2 each()
    // $('#section5 li').each(function(){
    //     let liIndex = $(this).index()
    //     $(this).find('.num').text('0'+(liIndex+1))
    // })

    // 메인 section5 번호 넣기3 each()
    $('#section5 li').each(function(index,item){
      if(index+1 < 10){
          $(item).find('.num').text('0'+(index+1))
      } else {
          $(item).find('.num').text(index+1)
      }
  })

 //로고 아래에 선 두기
  // function snbAction(){
  //   let logoPosi = $('header h1').offset().left;
  //   let logoPosit = $('header h1').offset().top;
  //   let logoWid = $('header h1').width();
  //   let logoHei = $('header h1').height();
  //   $('.line').css({left:logoPosi, top:logoPosit+logoHei, width:logoWid});
  // }
  // snbAction()

  // $(window).resize(function(){
  //   snbAction()
  // })

  


  // 로그인 페이지 현재페이지 표시
  let url = window.location.href
  $('.member a').each(function(){
    let memHref = $(this).attr('href');

    if(url.indexOf(memHref) > -1){
      $(this).css({color:'#343a2f'}).parent('li').addClass('on')
      let memH2 = $(this).text()
      $('#content_box h2').text(memH2)
    } else if(url.indexOf('join') > -1){
      $('.member a').eq(2).css({color:'#343a2f'}).parent('li').addClass('on')
      let memH2 = $('.member a').eq(2).text()
      $('#content_box h2').text(memH2)
    }
  })

  // // 로그인 패스워드 눈 아이콘
  // $('.eye_on').click(function(){
  //   $(this).hide()
  //   $('.eye_off').show()
  //   $('.login_box input[name=pw]').attr('type', 'text')
  // })
  // $('.eye_off').click(function(){
  //   $(this).hide()
  //   $('.eye_on').show()
  //   $('.login_box input[name=pw]').attr('type', 'password')
  // })

  $('.eye_box').click(function(){
    let $eyeInput = $(this).prev('input')
    $eyeInput.toggleClass('active');
    
    if($eyeInput.hasClass('active')){
      $('.eye_off').show()
      $('.eye_on').hide()
      $('.login_box input[name=pw]').attr('type', 'text')
    } else {
      $('.eye_off').hide()
      $('.eye_on').show()
      $('.login_box input[name=pw]').attr('type', 'password')
    }
  })

  // 회원가입페이지 구분
  if(url.indexOf('join_people') > -1){ //url에 join_people 이 있으면 실행하라 , -1 뜻은 없다는것, 찾ㅈ고싶은 글자의 첫자가 전체글자중 몇번째 글자인지 순서를 알아내는 매소드 = indexOf
    $('.join_people').show()
  }
  if(url.indexOf('join_company') > -1){
    $('.join_company').show()
  }


  // 회원가입 버튼
  $('.join_ok').click(function(){
    let joinAgree = $('#rule_agree').is(':checked')
    let ruleAgreeTop = $('.rule_box').offset().top
    
    if(!joinAgree) {
      // alert('이용약관에 동의해 주셔야 합니다.');
      $('html').animate({scrollTop:ruleAgreeTop})
      $('.rule_box label').css({border:'2px dotted crimson'})
      return false;
    }
    
  });

// 게시판
$('.board_page .title').click(function(){
  $('.title_list').slideToggle(200)
  $('.selectbox').toggleClass('on')
});

const urlSearch = new URLSearchParams(location.search);
if(urlSearch.get('board_num') == '02'){
  let leg = $('.content legend').text()
  $('.board_page h2').text(leg)
  
  console.log(leg);
};

if(urlSearch.get('board_num') == '01'){
  let leg = $('.content legend').text()
  $('.board_page h2').text(leg)
  
  console.log(leg);
};

$('#file_select').change(function(){
  var fileName = $(this).val().split('\\').pop();
  $('.filezone').text(fileName || '파일을 선택해주세요.');
});

$('.input_area input').each(function(){
  let memHref = $(this).attr('type');
  console.log(memHref);
});

});
