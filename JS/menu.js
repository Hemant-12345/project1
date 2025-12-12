
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
       });
    });
