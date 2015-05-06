/*
 * DYS email subscription form flipbox
 *
 * @author dpiquet <piqudam@gmail.com>
 *
 */

/*
 * Display the success face
 */
function DYS_success(msg) {

	jQuery('#dys-email-subscription-cube > div.face-success').html('<p>'+msg+'</p>');

	cube = jQuery('#dys-email-subscription-cube');
	cube.addClass('rotate-right');

	cube.delay(5000).queue(
			function() {
				cube.removeClass('rotate-right').dequeue();
			}
		);
}

/*
 * Display the error face
 */
function DYS_error(msg) {

	jQuery('#dys-email-subscription-cube > div.face-error').html('<p>'+msg+'</p>');
	cube = jQuery('#dys-email-subscription-cube');
	cube.addClass('rotate-left');

	cube.delay(5000).queue(
			function() {
				cube.removeClass('rotate-left').dequeue();
			}
		);

}
