$(document).ready(function(){
     var y = $('#year').text();
     var thisy = new Date().getFullYear();
     if (y < thisy){
          var now = document.createTextNode('-'+thisy+' ');
          y.append(now);
     }
});