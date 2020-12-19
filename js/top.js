document.onscroll = function(e){
  if(e.path[1].visualViewport.pageTop >= 500){
    document.querySelector(".top").style.display = "block";
  }else{
    document.querySelector(".top").style.display = "none";
  }
}
function top(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
