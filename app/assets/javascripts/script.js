$(document).ready(function(){
  Paloma.start();
});

Paloma.controller('Users', {
  new: function(){
    // Executes when Rails Users#new is executed.
    alert('Hello Sexy User!');
  }
});