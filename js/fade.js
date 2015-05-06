/*
 * Fade transition effect
 *
 */

function DYS_success(msg) {
	jQuery('#dys-email-subscription-cube > div.origin-face').fadeOut(
			1000,
			function() {
				face = jQuery('#dys-email-subscription-cube > div.face-success');
				face.html('<p>'+msg+'</p>');
				face.fadeIn(
					1000,
					function() {
						DYS_returnToForm(face);
					}
				);
			}
		);
}

function DYS_error(msg) {
	jQuery('#dys-email-subscription-cube > div.origin-face').fadeOut(
			1000,
			function() {
				face = jQuery('#dys-email-subscription-cube > div.face-error');
				face.html('<p>'+msg+'</p>');
				face.fadeIn(
					1000,
					function() {
						/** Callback to return to form */
						DYS_returnToForm(face);
					}
				);
			}
		);
}

function DYS_returnToForm(currentFace) {
	currentFace.delay(5000).fadeOut(
			1000,
			function() {
				jQuery('#dys-email-subscription-cube > div.origin-face').fadeIn(1000);
			}
	);
}
