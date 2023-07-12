// const { hkdf } = require("crypto");

window.addEventListener('load', function(){
    //让navigator上的按钮点击可以变色
    var navitems = document.querySelector('.navitems');
    var lis = navitems.querySelectorAll('li');
    console.log(lis[0]);
    lis[0].className = 'shouye';
    for(i = 0; i < lis.length; i++){
        lis[i].addEventListener('click', function(){
            //console.log(lis[i]);
            for(i = 0; i < lis.length; i++){
                lis[i].className = '';
            }
            this.className = 'shouye';  
        })
    }
    //new-hd tab的切换
    var news_hd = document.querySelector('.news-hd');
    var yaowen = news_hd.querySelector('.yaowen');
    var huodong = news_hd.querySelector('.huodong');
    click_box(yaowen, huodong);

    //其余box的tab切换 box1
    var box1_hd = document.querySelector('.box1-hd');
    var quanti = box1_hd.querySelector('.quanti');
    var changwei = box1_hd.querySelector('.changwei');
    click_box(quanti, changwei);
    //box5
    var box5_hd = document.querySelector('.box5-hd');
    var dangjian = box5_hd.querySelector('.dangjian');
    var jiguan = box5_hd.querySelector('.jiguan');
    click_box(dangjian, jiguan);
    //box6
    var box6_hd = document.querySelector('.box6-hd');
    var fengcai = box6_hd.querySelector('.fengcai');
    var shouji = box6_hd.querySelector('.shouji');
    click_box(fengcai, shouji);

    function click_box(btn1, btn2){
        btn1.classList.add('news-hd-onpressed');
        btn2.classList.add('news-hd-unpressed');
        btn2.addEventListener('click', function(){
            btn1.classList.remove('news-hd-onpressed');
            btn1.classList.add('news-hd-unpressed');
            btn2.classList.add('news-hd-onpressed');
            btn2.classList.remove('news-hd-unpressed');
        })
        btn1.addEventListener('click', function(){
            btn2.classList.remove('news-hd-onpressed');
            btn2.classList.add('news-hd-unpressed');
            btn1.classList.add('news-hd-onpressed');
            btn1.classList.remove('news-hd-unpressed');
        })

    }

    
    //news-hd点击切换页面
    // var news_hd = document.querySelector('.news-hd');
    // var yaowen = news_hd.querySelector('.yaowen');
    // var huodong = news_hd.querySelector('.huodong');
    // yaowen.classList.add('news-hd-onpressed');
    // huodong.classList.add('news-hd-unpressed');
    // huodong.addEventListener('click', function(){
    //     yaowen.classList.remove('news-hd-onpressed');
    //     yaowen.classList.add('news-hd-unpressed');
    //     huodong.classList.add('news-hd-onpressed');
    //     huodong.classList.remove('news-hd-unpressed');
    // })
    // yaowen.addEventListener('click', function(){
    //     huodong.classList.remove('news-hd-onpressed');
    //     huodong.classList.add('news-hd-unpressed');
    //     yaowen.classList.add('news-hd-onpressed');
    //     yaowen.classList.remove('news-hd-unpressed');
    // })
})