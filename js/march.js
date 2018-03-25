var intro = document.getElementById('intro');
var s = ['March ', 'For ', 'Our ', 'Lives '];
var i = 0;

(function loop() {
  console.log(i);
  intro.innerHTML += s [i];
  if (++i < s.length) {
      setTimeout(loop, 1000);
  }
})();
function navnext( next ) {
    $( ":mobile-pagecontainer" ).pagecontainer( "change", next, {
        transition: "slide"
    });
}
function navprev( prev ) {
    $( ":mobile-pagecontainer" ).pagecontainer( "change", prev, {
        transition: "slide",
        reverse: true
    });
}


$(document).one( "pagecreate", "#page1", function() {
    // Handler for navigating to the next page
    // Navigate to the next page on swipeleft
    $( document ).on( "swipeleft", ".ui-page", function( event ) {
        // Get the filename of the next page. We stored that in the data-next
        // attribute in the original markup.
        var next = $( this ).jqmData( "next" );
        if ( next ) {
            navnext( next );
        }
    });
    // The same for the navigating to the previous page
    $( document ).on( "swiperight", ".ui-page", function( event ) {
        var prev = $( this ).jqmData( "prev" );
        if (prev) {
            navprev( prev );
        }
    });
});
