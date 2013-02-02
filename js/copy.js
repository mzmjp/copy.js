$(document).ready(function(){
     var y = $('#year').text();
     var today = new Date().getFullYear();
     if (y < today){
          var now = document.createTextNode('-'+today+' ');
          $('#year').append(now);
     }
});