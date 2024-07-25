function ShowdropdownMenu(id){
    
   var menuItems = document.getElementsByClassName("navbar_item");
   var i;
   for(i=0; i<menuItems.length; i++){
      if(menuItems[i].classList.contains('active')){
        menuItems[i].classList.remove('active');
      }
   }

   document.getElementById("main-dropdown").classList.add("show");
   document.getElementById(id).classList.add("active");

}

window.onclick = function(event) {
    if (!event.target.matches('.navbar_item')) {
        
      var dropdowns = document.getElementsByClassName("navbar_item");
      
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('active')) {
          openDropdown.classList.remove('active');

        }
          document.getElementById("main-dropdown").classList.remove("show");
      }
    }
  }