// 지금부터 여기는 DOM HTML JS 영역이다
document.addEventListener("DOMContentLoaded", () => {});
// 지금부터 여기는 JQuery Script 영역이다
$(document).ready(function () {});
$(function () {});
$(() => {
  $("div.home").html("반갑습니다");
  $("div.bbs").css("color", "blue");

  //   document.querySelectorAll()
  const divs = $("div.main");
  divs.on("click", function (e) {
    const text = this.innerText;
    alert(text);
  });

  // 아래코드 대신 jquery 쓰거나 event bubbling 이용하거나
  //   const divs1 = document.querySelectorAll("div.main");
  //   const onClickHandler = (e) => {
  //     const text = e.currentTarget.innerText;
  //     alert(text);
  //   };
  //   for (let i = 0; i < divs1.length; i++) {
  //     divs[i].addEventListener(onClickHandler);
  //   }
});
