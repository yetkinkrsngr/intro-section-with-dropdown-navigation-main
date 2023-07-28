// JavaScript

if (window.matchMedia("(max-width: 500px)").matches) {
  document.addEventListener("DOMContentLoaded", function () {
    const Features = document.querySelector(".features");
    const company = document.querySelector(".company");
    const submenu = document.querySelector(".sub-links");
    const submenu2 = document.querySelector(".sub-links-second");
    const featuresArrow = document.querySelector("#features-arrow");
    const companyArrow = document.querySelector("#company-arrow");
    const closebtn = document.querySelector(".close-btn");
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");
    const overlay = document.querySelector(".overlay");
    let isFeaturesSubMenuVisible = false;
    let isCompanySubMenuVisible = false;

    Features.addEventListener("click", function () {
      if (!isFeaturesSubMenuVisible) {
        submenu.style.display = "block";
        isFeaturesSubMenuVisible = true;
      } else {
        submenu.style.display = "none";
        isFeaturesSubMenuVisible = false;
      }
      toggleArrowIcon(featuresArrow, isFeaturesSubMenuVisible);
      toggleBackgroundBlur(isFeaturesSubMenuVisible);
    });

    company.addEventListener("click", function () {
      if (!isCompanySubMenuVisible) {
        submenu2.style.display = "block";
        isCompanySubMenuVisible = true;
      } else {
        submenu2.style.display = "none";
        isCompanySubMenuVisible = false;
      }
      toggleArrowIcon(companyArrow, isCompanySubMenuVisible);
      toggleBackgroundBlur(isCompanySubMenuVisible);
    });

    function toggleArrowIcon(arrowElement, isVisible) {
      arrowElement.classList.toggle("rotate-up", isVisible);
    }

    hamburger.addEventListener("click", function () {
      menu.style.display = "block";
      menu.classList.add("show");
      overlay.style.display = "block";
    });

    closebtn.addEventListener("click", function () {
      menu.style.display = "none";
      menu.classList.remove("show");
      overlay.style.display = "none";
    });
  });
} else if (window.matchMedia("(min-width: 501px)").matches) {
  document.addEventListener("DOMContentLoaded", function () {
    const Features = document.querySelector(".features");
    const company = document.querySelector(".company");
    const submenu = document.querySelector(".sub-links");
    const submenu2 = document.querySelector(".sub-links-second");
    const featuresArrow = document.querySelector("#features-arrow");
    const companyArrow = document.querySelector("#company-arrow");
    const navigationContainer = document.querySelector("nav"); // Add this line
    let isFeaturesSubMenuVisible = false;
    let isCompanySubMenuVisible = false;
    let hideSubMenuTimeout;
    let hideSubMenu2Timeout;

    Features.addEventListener("mouseenter", function () {
      submenu2.classList.add("hidden"); // Hide the second submenu
      isCompanySubMenuVisible = false;
      clearTimeout(hideSubMenuTimeout);
      submenu.style.display = "block"; // Display the first submenu
      isFeaturesSubMenuVisible = true;

      featuresArrow.style.transform = "rotate(180deg)"; // Rotate the arrow
      toggleArrowIcon(featuresArrow, isFeaturesSubMenuVisible);
    });

    company.addEventListener("mouseenter", function () {
      submenu.classList.add("hidden"); // Hide the first submenu
      isFeaturesSubMenuVisible = false;
      clearTimeout(hideSubMenu2Timeout);
      submenu2.style.display = "block"; // Display the second submenu
      isCompanySubMenuVisible = true;

      companyArrow.style.transform = "rotate(180deg)"; // Rotate the arrow
      toggleArrowIcon(companyArrow, isCompanySubMenuVisible);
    });

    navigationContainer.addEventListener("mouseleave", function () {
      // Set a new timeout to hide both submenus after 1 second (1000 milliseconds)
      hideSubMenuTimeout = setTimeout(function () {
        submenu.style.display = "none";
        isFeaturesSubMenuVisible = false;

        featuresArrow.style.transform = "rotate(0deg)";
        toggleArrowIcon(featuresArrow, isFeaturesSubMenuVisible);
      }, 100);

      hideSubMenu2Timeout = setTimeout(function () {
        submenu2.style.display = "none";
        isCompanySubMenuVisible = false;
        companyArrow.style.transform = "rotate(0deg)";
        toggleArrowIcon(companyArrow, isCompanySubMenuVisible);
      }, 100);
    });

    function toggleArrowIcon(arrowElement, isVisible) {
      arrowElement.classList.toggle("rotate-up", isVisible);
    }
  });
}
