
//*//////////navbar show////////*//

var a = document.getElementById("demo");
a.addEventListener("click", function(){

        var s = document.getElementsByClassName("navigaition")[0];
 if(s.style.display === "none"){
    s.style.display = "block";
 }else{
    s.style.display = "none";
 }

});


//*//////////peragrap animation////////*//
    
var pera = document.getElementsByTagName("p")[0];
 a.addEventListener("click", function(){
    pera.classList.remove("animate");
 })


//*//////////navbar position////////*//

var windowPosition = window.pageYOffset;
window.onscroll =  function(){
   var windo = window.pageYOffset;
   // var nav = document.getElementById("nav");

  if(windowPosition > windo){
   document.getElementById("nav").style.top = "0%";
  }else{
   document.getElementById("nav").style.top = "-20%";

  }
  windowPosition = windo;

}

// $(document).ready(function(){
//     $("window").on("scroll", function(){
//        if(window.scrollTop){
//           $("#head").addClass("fixed");
//        }else{
//          $("nav").removeClass("fixed");
//        }
//     });
// });















































