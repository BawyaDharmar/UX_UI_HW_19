/*Logo*/
$("#change").hover(function(){
   
$("#change").attr("src","images/Component7.png");
$("#change").width(150);
},
function(){

    $("#change").attr("src","images/Logo1.png");
})
/*Nav link*/

$('body').css({'font-size':'1px'})
/*cards*/
$(".card1").hover(function(){
    $(".card1").html("<div> <b>PantryChef app</b></div>");
    $(".card1").css({'display' : 'block', 'text-align' : 'center'});
    $(".card1").css("background-color" ,"#ffffff");
    $(".card1").css("opacity",0.2);
  
    
    
},
    function(){

    $('.card1').css("background-color" ,"#ffffff");
    $(".card1").css("opacity",1);
    $(".card1").html(" ");
    });

 $(".card2").hover(function(){
        $(".card2").html("<div> <b>Toys for tots app</b></div>");
        $(".card2").css({'display' : 'block', 'text-align' : 'center'});
        $(".card2").css("background-color" ,"#ffffff");
        $(".card2").css("opacity",0.2);
      
        
        
    },
    function(){

    $('.card2').css("background-color" ,"#ffffff");
    $(".card2").css("opacity",1);
    $(".card2").html(" ");
    });
/*   const navSlide = () => {
const mobileMenu= document.querySelector('.mobileMenu');
const mobileHam= document.querySelector('.mobileHam');
mobileMenu.addEventListener("click", () =>{
    mobileHam.classList.toggle("nav-active");
});
    }

navSlide();*/