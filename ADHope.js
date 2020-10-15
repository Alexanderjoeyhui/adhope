// Initialize and add the map
function initMap() {
    // The location of A&D Hope
    var adHope = {lat: 51.658470, lng: -0.256827};
    // The map, centered at A&D Hope
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: adHope});
    // The marker, positioned at A&D Hope
    var marker = new google.maps.Marker({position: adHope, map: map});
  }

  var backToTop = document.querySelector("#back-to-top");
    
  window.addEventListener("scroll", scrollFunction);

  function scrollFunction(){
      if (window.pageYOffset > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
  };

  backToTop.addEventListener("click", scrollToTop);

  function scrollToTop() {
      window.scrollTo(0,0);
  }

