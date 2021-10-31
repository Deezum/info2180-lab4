

function search(){
  var btn = document.querySelector("button");
   btn.addEventListener("click", alertnotif);
  
}

function alertnotif(){
  const inputting = document.querySelector("input").value;
  var result = document.getElementById("result");
  var dhttp = new XMLHttpRequest();
  dhttp.onreadystatechange = function(){
      if(this.readyState == XMLHttpRequest.DONE && this.status ==200){
          result.innerHTML = dhttp.responseText; 
      }
  }


  var url = "http://localhost:/info2180-lab4/superheroes.php?inputting=";
  dhttp.open("GET", url+inputting, true);
  dhttp.send();
}


window.addEventListener("DOMContentLoaded",function(){
  search();
})