/* global window, Reveal */

(function() {
	'use strict';

	var header;
	var footer;
	var banner;

	/**
	* Callback invoked upon a `slidechanged` event.
	*
	* @private
	* @param {Event} event - event
	*/
	function onChange( event ) {
		if ( event.currentSlide === banner ) {
			header.classList.add( 'hidden' );
			footer.classList.add( 'hidden' );
		} else if ( event.previousSlide === banner ) {
			header.classList.remove( 'hidden' );
			footer.classList.remove( 'hidden' );
		}
	}

	header = document.querySelector( 'header' );
	footer = document.querySelector( 'footer' );
	banner = document.querySelector( '#banner' );

	Reveal.addEventListener( 'slidechanged', onChange );
})();
