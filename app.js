function searchbtn(){
  var subbutton = document.querySelector("button");
   console.log(subbutton);
   subbutton.addEventListener("click", getemail);
}

function getemail(){
  var http = new XMLHttpRequest();
  http.onreadystatechange = function(){
      if(http.readyState == 4 && http.status ==200){
          alert(http.response);
      }
  }
  var url = "http://localhost:/info2180-lab4/superheroes.php";
  http.open('GET', url, true);
  http.send();
  console.log(http);
}


window.addEventListener("DOMContentLoaded",function(){
  searchbtn();
})