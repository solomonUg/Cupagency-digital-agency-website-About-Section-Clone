const navBarEl = document.querySelector(".nav-bar");
const navBtnEl = document.querySelector(".nav-btn")
const navIconEl =  document.querySelector(".fa-solid")
const navBarDropdown = document.querySelector(".nav-bar-dropdown")


document.addEventListener ("scroll", ()=>{
    if (window.scrollY > 0 && window.scrollY < 5 ) {
        navBarEl.classList.add("scroll-effect");
        setTimeout(() => {
            navBarEl.classList.remove("scroll-effect");
        }, 200);
      }
    })


    // ======= Navigation Button ========


    
    navBtnEl.addEventListener("click", ()=>{
        if( navIconEl.classList.contains("fa-bars") ) {
            
            console.log(navBtnEl)
            navIconEl.classList.replace("fa-bars", "fa-xmark")
            navBarDropdown.style.display = "flex";
        } else  {
            navIconEl.classList.replace("fa-xmark", "fa-bars")
            navBarDropdown.style.display = "none";

        }
    });


