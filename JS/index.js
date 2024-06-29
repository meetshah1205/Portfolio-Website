document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link");
  
    links.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
  
        const href = this.getAttribute("href");
  
        // Remove zoom-in class to reset animation
        document.body.classList.remove("zoom-in");
  
        // Timeout to trigger the class addition after reset
        setTimeout(() => {
          document.body.classList.add("zoom-in");
          setTimeout(() => {
            window.location.href = href;
          }, 600); // Adjust this value to match animation duration
        }, 50); // Ensure animation reset occurs before re-adding the class
      });
    });
  
    // Remove zoom-in class after animation ends
    document.body.addEventListener("animationend", function() {
      document.body.classList.remove("zoom-in");
    });
  });
  
