window.MOOCJS = window.MOOCJS || {};

MOOCJS['13_Ajax'] = (function() {
  return {
    example1: (function() {
      var current_li = null;

      return {
        li_listener: function (e) {
          var request;
          if ( e.target !== current_li ) {
            current_li = e.target;
            request = new XMLHttpRequest();
            request.onload = function() {
              console.log(this.responseText);
            };
            request.onerror = function(e) {
              console.log('an error occured');
            };

            request.open("GET", "http://dmolinarius.github.io/MOOCJS/", true);
            request.send();
          }
        }
      };
    })()
  };
})();
