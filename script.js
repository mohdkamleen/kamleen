

var nav = document.getElementsByClassName("navigaition")[0];
var pera_animation = document.getElementsByTagName("p")[0]; 
var hamburger = document.getElementById("demo");
var loder = document.getElementsByClassName("loder")[0];


//*//////////navbar show////////*//
hamburger.addEventListener("click", function(){

   pera_animation.classList.remove("animate");

 if(nav.style.display == "block"){
   nav.style.display = "none"; 
   hamburger.classList.replace("fa-times", "fa-bars");
 }else{
   nav.style.display = "block";
   hamburger.classList.replace("fa-bars", "fa-times");
 }

});

 
//*//////////navbar position////////*// 
var windowPosition = window.pageYOffset;
window.onscroll =  function(){
   var windo = window.pageYOffset; 

  if(windowPosition > windo){
   document.getElementById("nav").style.top = "0%";
   nav.style.display = "none";
   hamburger.classList.replace("fa-times", "fa-bars");
  }else{
     document.getElementById("nav").style.top = "-30%"; 
  }
  windowPosition = windo; 
}


//  loder 
window.onload = () => {
   loder.style.height = "0vh";
}







 













































