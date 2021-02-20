$("#scroll_down").click(function() {
  if ($(window).width() >= 1400) {
    $("html, body").animate(
      {
        scrollTop: $("#meet-makers").offset().top + 30
      },
      2000
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $("#meet-makers").offset().top + 50
      },
      2000
    );
  }
});

AOS.init({
  duration: 1500
});

$(".input-fields").on("focusin", function() {
  $(this)
    .parent()
    .find("label")
    .addClass("active");
});

$(".input-fields").on("focusout", function() {
  if (!this.value) {
    $(this)
      .parent()
      .find("label")
      .removeClass("active");
  }
});


$(document).ready(function(){
  var current = 1,current_step,next_step,steps;
  steps = $("fieldset").length;
  $(".next").click(function(){


    
      current_step = $(this).parent();
      next_step = $(this).parent().next();
      $(next_step).animate({
              height: 'toggle'
              }, 1300, function() {
          });
      next_step.show();
      current_step.hide();
      // setProgressBar(++current);
    
  });
  $(".previous").click(function(){
    current_step = $(this).parent();
    next_step = $(this).parent().prev();
      $(next_step).animate({
            height: 'toggle'
            }, 1300, function() {
        });
    next_step.show();
    current_step.hide();
    // setProgressBar(--current);
  });
  setProgressBar(current);
  // Change progress bar action
  function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
      .css("width",percent+"%")
      .html(percent+"%");   
  }
});


function validateForm(flag){
  var name = $("#answer_1").val();
  var age = $("#answer_2").val();
  var mobileNo = $("#answer_3").val();
  var email = $("#answer_4").val();
  
  if(name.length == 0)
  {
      return false;
  }
  else if(age.length == "")
      {
      $("#p2").text("Kindly enter the above field");
      $("#answer_2").focus();
      return false;
      }
  else if(mobileNo.length == "")
      {
      $("#p3").text("Kindly enter the above field");
      $("#answer_3").focus();
      return false;
      }
  else if(email.length == "")
  {
      $("#p4").text("Kindly enter the above field");
      $("#answer_4").focus();
      return false;
  }

  if(name.length != "" && age.length != "" && mobileNo.length != "" && email.length != "")
  {
      return true;
  }
      
}