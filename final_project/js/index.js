/**
 * http://pixelhunter.me/
 * 
 * text {String} - printing text
 * n {Number} - from what letter to start
 */
function typeWriter(text, n) {
  if (n < (text.length)) {
    $('.test').html(text.substring(0, n+1));
    n++;
    setTimeout(function() {
      typeWriter(text, n)
    }, 50);
  }
}

$('.start').click(function(e) {
  e.stopPropagation();
  
  var text = $('.test').data('text');
  
  typeWriter(text, 0);
});


/*
      //date//
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth()+1;
      var year = currentDate.getFullYear();
      document.write(day + "/" + month + "/" + year + "_")

      //time//
      var currentTime = new Date ();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();

      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      document.write(hours + ":" + minutes + ":" + seconds)
*/

