window.scwTogglesPlugin = window.scwTogglesPlugin || {};

window.SEMICOLON_togglesInit = function( $toggleEl ){

	$toggleEl = $toggleEl.filter(':not(.customjs)');

	if( $toggleEl.length < 1 ){
		return true;
	}

	$toggleEl.each( function(){
		let element = $(this),
			elSpeed = element.attr('data-speed') || 300,
			elState = element.attr('data-state');

		if( elState != 'open' ){
			element.find('.toggle-content').hide();
		} else {
			element.addClass('toggle-active').find('.toggle-content').slideDown( Number(elSpeed) );
		}

		element.find('.toggle-header').off( 'click' ).on( 'click', function(){
			element.toggleClass('toggle-active').find('.toggle-content').slideToggle( Number(elSpeed) );
			return true;
		});
	});

};




function toggleInfo(moreInfoId) {
    const moreInfo = document.getElementById(moreInfoId);
    const arrow = document.querySelector(`.expandable.arrow[onclick="toggleInfo('${moreInfoId}')"]`);
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        arrow.classList.add('expanded');
    } else {
        moreInfo.style.display = 'none';
        arrow.classList.remove('expanded');
    }
}



