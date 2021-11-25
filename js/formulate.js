const navOpen = document.getElementById("burger-container");
const navDropdown = document.getElementById("nav-dropdown");
const dropdownAnchor = document.getElementById("dropdown-anchor");
const dropdownBlock = document.getElementsByClassName("dropdown-block");
const accordion = document.getElementsByClassName("accordion");
const panel = document.getElementsByClassName("panel");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function () {
    var setClasses = !this.classList.contains("active");
    setClass(accordion, "active", "remove");
    setClass(panel, "show", "remove");

    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  };
}

function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}

navOpen.addEventListener("click", function () {
  navOpen.classList.toggle("change");

  navDropdown.classList.toggle("nav-active");
});

if (dropdownAnchor) {
  dropdownAnchor.addEventListener("click", function () {
    dropdownBlock[0].classList.toggle("dropdown-block-active");
  });

  window.onclick = function (e) {
    if (!e.target.matches("#dropdown-anchor, .dropdown-caret")) {
      dropdownBlock[0].classList.remove("dropdown-block-active");
    }
  };
}
