/*
 * DYS email subscription plugin ajax handler
 *
 * @author dpiquet <piqudam@gmail.com>
 *
 */

/*
 * Attach ajax handler to subscribe form
 */
jQuery(document).ready(function() {
	jQuery('#dys-email-subscription-form').on('submit', function(e) {
		e.preventDefault();
		emailAddress = jQuery('#email').val();

		jQuery.ajax({
			type: "post",
			url: "wp-admin/admin-ajax.php",
			data: {
				action: 'dys_email_subscribe',
				email: emailAddress,
				subscriber_action: 'subscribe'
			},
			beforeSend: function() {
				return true;
			},
			success: function(data) {
				json = jQuery.parseJSON(data);

				if(json.code == 'success') {
					DYS_success(json.msg);
				}
				else {
					DYS_error(json.msg);
				}
			}
		})
	})
});


