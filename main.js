// dropdownmeny
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
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

// gör så popup fönstret visas
function visaHelText(text) {
  var popUpDiv = document.getElementById("popupWindow");
  popUpDiv.style.display = "block";
  var popUpBodyText = document.getElementById("popupBodyText");
  popUpBodyText.innerHTML="<p>" + text + "</p>";
}
// Gör så popup fönstret stängs
function closePopUp() {
  var popUpDiv = document.getElementById("popupWindow");
  popUpDiv.style.display = "none";
}