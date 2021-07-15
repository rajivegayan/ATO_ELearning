/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleUserMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.user-profile-img')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/* Logging out user and reload the page hope fully for a different user */
function logout() {
  // /confirm("Please confirm the logout");
  if (confirm("Are you logging out so soon !")) {
    window.location.reload();
    window.location.replace("http://localhost:8000/index.html#!/mylearning");
  } else {
    console.log("User cancelled the action");
  }
  // window.location.replace("http://localhost:8000/index.html#!/home");
  
}