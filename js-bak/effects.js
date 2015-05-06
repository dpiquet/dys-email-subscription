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

	jQuery('#dys-email-subscription-cube').css("transform", "rotateY(-90deg) translateZ(0px)");
}

/*
 * Display the error face
 */
function DYS_error(msg) {

	jQuery('#dys-email-subscription-cube > div.face-error').html('<p>'+msg+'</p>');

	jQuery('#dys-email-subscription-cube').css("transform", "rotateY(90deg) translateZ(0px)");
}
