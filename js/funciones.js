
var num=  document.getElementById("password");
var mont = document.getElementById("monto");
function add(n){
    
        var x = num.value;
    num.value= x + n;   
   
    

}



function okey(){
    var pantalla1= document.getElementById("p1")
    var pass =document.getElementById("password").value;
    var valor= document.getElementById("monto").value;
    var pantalla7= document.getElementById("p7");
    
    if ( pantalla1.style.display=="block" && pass == 87654321) {
        document.getElementById("p1").style.display="none";
        document.getElementById("p2").style.display="block";

    }else if (pantalla7.style.display=="block") {
        document.getElementById("p7").style.display="none";
        document.getElementById("p1").style.display="block";
        borrar();

    }   
}
function borrar(){
    document.getElementById('password').value="";

}

 function cancel(){
     var pantalla2= document.getElementById("p2");
     var pantalla3= document.getElementById("p3");
     var pantalla4= document.getElementById("p4");
     var pantalla5= document.getElementById("p5");
     var pantalla6= document.getElementById("p6");
     var pantalla7= document.getElementById("p7");
      if(pantalla2.style.display=="block"){
        document.getElementById('p2').style.display="none";
        document.getElementById('p1').style.display="block";
        borrar();
         
     } else if(pantalla3.style.display=="block"){
        document.getElementById('p3').style.display="none";
        document.getElementById('p1').style.display="block";
        borrar();

     }else if(pantalla4.style.display=="block"){
        document.getElementById('p4').style.display="none";
        document.getElementById('p1').style.display="block";
        borrar();

     }else if(pantalla5.style.display=="block"){
        document.getElementById('p5').style.display="none";
        document.getElementById('p1').style.display="block";
        borrar();

    }else if(pantalla6.style.display=="block"){
        document.getElementById('p6').style.display="none";
        document.getElementById('p1').style.display="block";
        borrar();

    }else if(pantalla7.style.display=="block"){
        document.getElementById('p7').style.display="none";
        document.getElementById('p1').style.display="block";
        borrar();

    }
    


     

}

function b1(){
    var pantalla2= document.getElementById("p2");
    var pantalla3= document.getElementById("p3");
    
    
    if (pantalla2.style.display=="block") {
        document.getElementById("p2").style.display="none";
        document.getElementById("p3").style.display="block";  
        
    }else if (pantalla3.style.display=="block") {
        document.getElementById("p3").style.display="none";
        document.getElementById("p4").style.display="block";   
    }   
} 
function  b5(){
    var pantalla4=document.getElementById("p4");
    if (pantalla4.style.display=="block") {
        document.getElementById("p4").style.display="none";
        document.getElementById("p5").style.display="block";            
    }
    
}
function b6(){
    var pantalla5=document.getElementById("p5");
    if (pantalla5.style.display=="block") {
        document.getElementById("p5").style.display="none";
        document.getElementById("p6").style.display="block";            
    }
}
function b7(){
    var pantalla6=document.getElementById("p6");
    if (pantalla6.style.display=="block") {
        document.getElementById("p6").style.display="none";
        document.getElementById("p5").style.display="block";            
    }
}
function b8(){
    var pantalla6=document.getElementById("p6");
    var pantalla3= document.getElementById("p3");
    var pantalla4= document.getElementById("p4")
    if (pantalla6.style.display=="block") {
        document.getElementById("p6").style.display="none";
        document.getElementById("p7").style.display="block";            
    }else if (pantalla4.style.display=="block") {
        document.getElementById("p4").style.display="none";
        document.getElementById("p3").style.display="block";  
    }
}

function evaluarmonto(){
     var montototal= parseInt(document.getElementById("monto"));
     var resto= montototal/10;
     if (resto == 0 ) {
         
         return alert("si es multiplo")
         
     } else{
          
         
         return alert("no es multiplo de 10");
         
     }    
}






