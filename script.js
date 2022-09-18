function isem() {
 var cor = document.getElementById("cor").value;
 var dec = document.getElementById("dec").value;
 var all = document.getElementById("all").value
 
 if(cor !=="" && dec !== ""  && all !== "") {
 document.getElementById("butt").disabled = false;
   }else{
      butt.disabled = true;
   } 
  }
function cal() {
 var cor = document.getElementById("cor").value;
 var dec = document.getElementById("dec").value;
 var all = document.getElementById("all") .value;
 p.innerHTML = ((cor*3) - dec) / (all* 3) * 100 + "%"; }
