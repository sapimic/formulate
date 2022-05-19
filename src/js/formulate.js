const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const dropdownItems = document.querySelectorAll(".dropdown-item")
const dropdownMenus = document.querySelectorAll(".dropdown-menu")

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
})

function showDropdown (e){

    let dd = e.target.parentNode.querySelector('.dropdown-menu') 

    dd.classList.toggle('dropdown-active')  
  }
  
 dropdownItems.forEach(element => {    element.addEventListener('click', showDropdown)
  })
