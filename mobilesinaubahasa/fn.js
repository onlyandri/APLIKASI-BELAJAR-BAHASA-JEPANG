

// function buka menu
window.fn={};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

// function membuka page

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
  .then(menu.close.bind(menu));
  if(page == 'video.html'){
    upcoming();
  }
};

// play untuk responsive voice
function play (pp,tts){
 responsiveVoice.speak(
   document.querySelectorAll(pp)[tts].innerText,
   "Japanese Female",
   {
     pitch: 1, 
     rate: 1, 
     volume: 1
   }
   );
}


