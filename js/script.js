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

function ShowMenu(id) {

  var dropdowns = document.getElementsByClassName("footer-dropdown-list");
  var i;
  var elementId;
  var x = document.getElementById(id);
  var y = document.getElementById(id+"_arrow");
  

  var arrow = document.getElementsByClassName("dropdown-arrow");
  for(i=0;i<arrow.length;i++){
    arrow[i].classList.remove("arrow-down");
  }
  
  for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
        openDropdown.style.height="0px";    
      
  }
  
  
  if (x.offsetHeight === 90) {
      x.style.height = "0px";
      y.classList.remove("arrow-down");
  } else {
      x.style.height = "90px";
      y.classList.add("arrow-down");
  }
  }


  function ToggleMenuContent(id){
    var acc = document.getElementsByClassName("menu_item");
    var el = document.getElementById(id);
    var content = document.getElementById("content_"+id);
    if(el.classList.contains('active')){
      
      el.classList.remove("active");
      return 0;
    }
    var i;
    for (i = 0; i < acc.length; i++) {
        if(acc[i].classList.contains('active')){
          acc[i].classList.remove('active');
        }  

    }
    
    el.classList.add('active');
    
  }

  function ToggleMenu(x){
    x.classList.toggle("active");
    
    var element = document.getElementById("mobile-menu-id");
    var elDisplay = window.getComputedStyle(element, null).display;
    var header = document.getElementById("header");
    if(elDisplay==="none"){
      document.getElementById("mobile-menu-id").style.display = 'block';
      header.classList.add('gray');
    }else{
      document.getElementById("mobile-menu-id").style.display = 'none';
      header.classList.remove('gray');
    }
  }

  function hideMobileMenu(){
    let w = window.outerWidth;
    let element = document.getElementById("mobile-menu-id").style.display;
    if(w>991){
        console.log(element);
        document.getElementById("mobile-menu-id").style.display='none';
        document.getElementById("mobile-menu-button").classList.remove("active");
        document.getElementById("header").classList.remove("gray");
    }
    
  }
  
 