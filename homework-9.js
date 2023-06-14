// 1
$(function(){
    $("h2.head").css("background-color", "green");
    $("h2.head .inner").css("font-size", "35px");

//   2

    $("a[href^='https://']").attr("target", "_blank");
 
//   3

    $("h3").each(function() {
      $(this).prev("div").insertBefore(this);
    });
  
//   4

    let checkboxCount = 0;
  
    $("input[type='checkbox']").change(function() {
      if ($(this).prop("checked")) {
        checkboxCount++;
      } else {
        checkboxCount--;
      }
  
      if (checkboxCount >= 3) {
        $("input[type='checkbox']").prop("disabled", true);
      }
    });
  });
  