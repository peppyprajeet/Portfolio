$(window).load(function(){
  var sections = $(".work");

  var mql = window.matchMedia("(min-width: 992px)");

  mql.addListener(resizeSections);
  resizeSections(mql);

  // Fade the sections onto the page
  sections.each(function(index){
    var el = this;
    setTimeout(function(){
      $(el).animate({'opacity': '1'}, 1000);
    }, 200*index);
  });

  /**
   * Resizes the sections on the page to ensure they are the same height
   * @param mql {object} - The Media Query List object
   */
  function resizeSections(mql){
    if (mql.matches) {
      var max = 0;
      sections.each(function() {
        var height = $(this).height();
        if (height > max) {
          max = height;
        }
      });
      sections.each(function() {
        $(this).height(max);
      });
    } else {
      sections.each(function() {
        $(this).height('initial');
      })
    }
  }

});