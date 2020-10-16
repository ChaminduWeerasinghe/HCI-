$(document).ready(function(){
    var btndashBoard = document.getElementById("dashboard");
    var btnEdit = document.getElementById("editItem");
    var container = document.getElementById("mainContainer");
    var productid = $("#productid").hide();
    var productName = $("#productName").hide();
    var description = $("#description").hide();
            var isValid = false;


    
    btndashBoard.click(function(){
        console.log("Clicked");
        container.load("dashboard.html");
    });

    
    function ValidateForm() {
                    var prodctIDText = $("#productidText").val();
        var productNameText = $("#productNameText").val();
        var descriptionText = $("#exampleFormControlTextarea1").val();

        
        var productName = $("#productName");
        var productid = $("#productid");
        var description = $("#description");
        
        if(prodctIDText == "" || prodctIDText == null){
                productid.show();
            isValid = false
        }
        else{
            productid.hide();
            isValid = true;
        }
        if(productNameText == "" || productNameText == null)
            {
                 productName.show();
                isValid = false;
            }else{
                 productName.hide();
                isValid = true;
                
            }
        
        if(descriptionText == "" || descriptionText == null)
            {
                description.show();
                isValid = false;
            }else{
                description.hide();
                isValid = true;
            }
        

          
      }

     

      $("#submit-button").click(function(e) {
        e.preventDefault();
        ValidateForm();
          
          
                  if(isValid == true)
           {
                         $("#submit-button").attr("href", "#myModal");
          var href = $("#submit-button").attr('href');
               
               $("#productidText").val('');
               $("#productNameText").val('');
               $("#exampleFormControlTextarea1").val('');
           }
        

          
    });  

    
      $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });
    
});

