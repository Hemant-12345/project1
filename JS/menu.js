 fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
          document.getElementById("header").innerHTML = data;

       let currentPage = window.location.pathname.split("/").pop();
            if ( !currentPage || currentPage == "#"){
                currentPage = "index.html";
            }
       let links = document.querySelectorAll(".menu .menubar ul li a");
      
       links.forEach(link => {
           console.log("current page:", currentPage);
           let linkPage = link.getAttribute("href");
           console.log("Attribute Value:", linkPage);
           if(!linkPage) return;
           if(linkPage == currentPage){
               link.closest("li").classList.add("underline_current");
           }
           if (window.innerWidth <= 576) {
               const menu = document.querySelector(".menu");
               const menuBar = document.querySelector(".menu .menubar");
               const mobileBar = document.querySelector(".menu .mobilebar");

                if (mobileBar && !mobileBar.querySelector(".hamburger")){
                   const dv = document.createElement("div")
                   dv.className = "hamburger";
                   dv.setAttribute("aria-label", "Toggle menu");
                   dv.setAttribute("tabindex", "0");
                   dv.innerHTML = '<span></span>';
                   mobileBar.appendChild(dv)


                   dv.addEventListener("click", function(e){
                      e.stopPropagation();
                      menu.classList.toggle("mobile-open");
                   });
                }

           }
       });
    });
