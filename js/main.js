$(function() {
  
  function setWrapperMargin(navSelector, wrapperSelector) {
    var topOffset = $(navSelector).outerHeight();

    $(wrapperSelector).css({ marginTop: topOffset + 'px' });
  }


  $(document).ready(function() {
    setWrapperMargin('.nav-bar', '.wrapper');
  });

});