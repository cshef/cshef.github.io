var image = new Array();
image[1] = "https://pp.userapi.com/c851532/v851532508/15281f/HID0UQTAJGM.jpg"
image[2] = "https://pp.userapi.com/c851532/v851532508/152826/wjzAUrH-pdw.jpg"
image[3] = "https://pp.userapi.com/c851532/v851532508/15282d/vovZIefw-pU.jpg"
image[4] = "https://pp.userapi.com/c851532/v851532508/152834/UuRT1wYIYRA.jpg"
image[5] = "https://pp.userapi.com/c851532/v851532508/15283b/aPRqEZjQyBs.jpg"
image[6] = "https://pp.userapi.com/c851532/v851532508/152842/wx6nV0vdCSY.jpg"
image[7] = "https://pp.userapi.com/c851532/v851532508/152849/I6lkylgXSXM.jpg"
image[8] = "https://raw.githubusercontent.com/skryshtafovych/Lottery-html5/master/star.png"
image[9] = "https://raw.githubusercontent.com/skryshtafovych/Lottery-html5/master/flower.png"
image[10] = "https://raw.githubusercontent.com/skryshtafovych/Lottery-html5/master/coin.png"
image[11] = "https://raw.githubusercontent.com/skryshtafovych/Lottery-html5/master/mshroom.png"
image[12] = "https://raw.githubusercontent.com/skryshtafovych/Lottery-html5/master/chomp.png"
image[13] = "https://icon-icons.com/icons2/206/PNG/128/Flower_-_Fire_24653.png"
image[14] = "http://img.informer.com/icons_mac/png/128/218/218340.png"
image[15] = "http://www.iconninja.com/files/817/63/651/orange-monster-icon.png"

for (let i = 1; i < image.length; i++) {
$("#boxes").append("<li class='tape'><img src="+image[i]+" alt="+i+" class='tape-img'></li>");
}

function start()	{

var boxed = 1; // начинаем считать кейсы
var righ = 0;   // делаем анимацию увеличивая позицию в право
var speed = Math.floor(Math.random() * (20 - 25 + 1)) + 25;  // Скорость прокрутки рулетки
var delbox = 164; //Ширина кейса для удаления его
var tim = setInterval(animated,10); 
 
$("button").css("opacity","0.5");
$(".mainbutt").removeAttr("onclick");

function animated() {
var imgs = Math.floor(Math.random() * (15 - 1 + 1)) + 1; //Случайная картинка

var child3 = $(".tape:nth-child(1) img");
var firS = $(".tape:first-child");
var cons = righ - delbox;	 //считаем на сколько блок зашел за границу

if (righ >= delbox) { 		//если блок за границей
 firS.remove();			// удаляем его
  
$("#boxes").append("<li class='tape'><img src='"+child3.attr("src")+"' title="+imgs+" alt="+child3.attr("alt")+" class='tape-img'></li>"); //Вывод изображения без рандома

//$("#boxes").append("<li class='tape'><img src='"+image[imgs]+"' title="+imgs+" alt="+imgs+" class='tape-img'></li>"); //Вывод изображения с рандома

$('.tape').removeClass('tape_center');
  righ = cons + speed; 
  $(".tape").css("right",righ + "px");
 boxed++; // Считаем кол-во блоков		 
 
} else {
if(speed <= 2) {
    speed -= 0.003;
} else if (speed <= 6) {
    speed -= 0.007;
} else {
       speed -= 0.02;
}
righ += speed;
 $(".tape").css("right",righ + "px");
}
if (speed <= 0) {
clearInterval(tim);
  $(".tape").animate({right: "78px"},2400);
$(".addimg img").attr("src"	, child3.attr("src"));
setTimeout(swi,2500);
}
                     
}
}
function swi() {

 var nnu = $(".tape:nth-child(3) img").attr("alt");
 $(".mainbutt").attr("onclick","start()");
  //$(".blscreen").toggle(400);
  $("button").css("opacity","1");	

$('.tape').addClass('tape_center'); // Выделяем выигрышный вариант

     switch(nnu) {
    case "1":
        $(".winblock h4").text("VIP'ка");
        $(".winblock span").text("300р");
    break;
     case "2":
        $(".winblock h4").text("ADM + VIP");
        $(".winblock span").text("600р");
    break;
     case "3":
        $(".winblock h4").text("Повышение звания");
        $(".winblock span").text("100р");
    break;
     case "4":
        $(".winblock h4").text("Префикс");
        $(".winblock span").text("50р");
    break;
     case "5":
        $(".winblock h4").text("Ник под пароль");
        $(".winblock span").text("75р");
    break;
     case "6":
        $(".winblock h4").text("Смотритель");
        $(".winblock span").text("800р");
    break;
     case "7":
        $(".winblock h4").text("Админка");
        $(".winblock span").text("400р");
    break;
     case "8":
        $(".winblock h4").text("111");
        $(".winblock span").text("300р");
    break;
     case "9":
        $(".winblock h4").text("222");
        $(".winblock span").text("600р");
    break;
     case "10":
        $(".winblock h4").text("333");
        $(".winblock span").text("100р");
    break;
     case "11":
        $(".winblock h4").text("444");
        $(".winblock span").text("50р");
    break;
     case "12":
        $(".winblock h4").text("555");
        $(".winblock span").text("75р");
    break;
    case "13":
        $(".winblock h4").text("666");
        $(".winblock span").text("75р");
    break;
}
}
//делаем список что выпадает
$(function () {
$("span").click(function () {
     $(".opn").toggle(300);
});
$(".close,.winbutt").click(function () {
$(".blscreen").toggle(400);
})
});
