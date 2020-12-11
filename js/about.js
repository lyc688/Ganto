window.onload = function(){
  function themeBorderColorActive(){
      if(localStorage.getItem("theme") === "dark"){
        document.querySelector(".dark").style.borderColor = "#3888df";
        document.querySelector(".dark").getElementsByTagName("img")[0].style.borderColor = "#3888df";
        document.querySelector(".light").style.borderColor = "";
        document.querySelector(".light").getElementsByTagName("img")[0].style.borderColor = "";
        document.querySelector(".auto").style.borderColor = "";
        document.querySelector(".auto").getElementsByTagName("img")[0].style.borderColor = "";
      }else if(localStorage.getItem("theme") === "light"){
        document.querySelector(".light").style.borderColor = "#3888df";
        document.querySelector(".light").getElementsByTagName("img")[0].style.borderColor = "#3888df";
        document.querySelector(".dark").style.borderColor = "";
        document.querySelector(".dark").getElementsByTagName("img")[0].style.borderColor = "";
        document.querySelector(".auto").style.borderColor = "";
        document.querySelector(".auto").getElementsByTagName("img")[0].style.borderColor = "";
      }else if(localStorage.getItem("theme") === "auto"){
        document.querySelector(".auto").style.borderColor = "#3888df";
        document.querySelector(".auto").getElementsByTagName("img")[0].style.borderColor = "#3888df";
        document.querySelector(".dark").style.borderColor = "";
        document.querySelector(".dark").getElementsByTagName("img")[0].style.borderColor = "";
        document.querySelector(".light").style.borderColor = "";
        document.querySelector(".light").getElementsByTagName("img")[0].style.borderColor = "";

      }
    }
    themeBorderColorActive();

    //点击auto窗口，删除thml标签data-theme属性
    document.querySelector(".auto").onclick = function(){
      if (window.matchMedia('(prefers-color-scheme)').matches === true) {
        localStorage.setItem("theme","auto");
      }else{
        alert("抱歉！您的浏览器不支持prefers-color-scheme！即auto模式无法生效！");
        console.log("抱歉！您的浏览器不支持prefers-color-scheme！即auto模式无法生效！");
        if(localStorage.getItem("theme") === "dark"){
          document.getElementsByTagName("html")[0].setAttribute("data-theme","dark");
        }else if(localStorage.getItem("theme") === "light"){
          document.getElementsByTagName("html")[0].setAttribute("data-theme","light");
        }else{
          localStorage.setItem("theme","light");
        }
      }
      judge();
      themeBorderColorActive();
    }

    // 点击切换深色/浅色模式
    document.querySelector(".light").onclick = function(){
      localStorage.setItem("theme","light");
      judge();
      themeBorderColorActive();
    }
    document.querySelector(".dark").onclick = function(){
      localStorage.setItem("theme","dark");
      judge();
      themeBorderColorActive();
    }
}
