mediaIcons = document.querySelector(".media-icons");
socialMedia = document.querySelector(".social-media");
shareIconWhite = document.querySelector(".share-icon-white");
shareIconBlack = document.querySelector(".share-icon");
mobileShareIcon = document.querySelector(".mobile-share-icon");
mobileIconsSection = document.querySelector(".mobile-icons-section");
userSection = document.querySelector(".user");
const screenWidth = window.innerWidth;




// Big screens
shareIconBlack.addEventListener("click", () => {
  if (window.innerWidth >= 1200) {
    mediaIcons.style.display = "flex";
    shareIconWhite.style.display = "block";
    shareIconBlack.style.display = "none";
    socialMedia.style.backgroundColor = "var(--Very-Dark-Grayish-Blue)";
  }
});

shareIconWhite.addEventListener("click", () => {
  if (window.innerWidth >= 1200) {
    mediaIcons.style.display = "none";
    shareIconWhite.style.display = "none";
    shareIconBlack.style.display = "block";
    socialMedia.style.backgroundColor = "var(--Light-Grayish-Blue)";
  }
});

// Small screens
shareIconBlack.addEventListener("click", () => {
  if (window.innerWidth < 1200) {
    mobileIconsSection.style.display = "flex";
    userSection.style.display = "none";
  }
});

mobileShareIcon.addEventListener("click", () => {
  if (window.innerWidth < 1200) {
    mobileIconsSection.style.display = "none";
    userSection.style.display = "flex";
  }
});
