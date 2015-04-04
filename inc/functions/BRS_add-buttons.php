<?php

  /**
  * @Theme Name   :    blackroadspecial
  * @file         :    BRS_add-buttons.php
  * @package      :    blackroadspecial
  * @author       :    Dan Devine
  * @license      :    GPLv3
  * @filesource   :    wp-content/themes/blackroadspecial/inc/functions/BRS_add-buttons.php
  *
  * this sets up a custom button in the TinyMCE editor so that we can inject a shortcode for our simple contact form,
  * thereby avoiding a lot of HTTP requests and bloat. This reduces portability, but oh well, tell it to a WP moderator :-(
  *
  */

// Hooks your functions into the correct filters
function BRS_add_mce_button() {
	// check user permissions
	if ( !current_user_can( 'edit_posts' ) && !current_user_can( 'edit_pages' ) ) {
		return;
	}
	// check if WYSIWYG is enabled
	if ( 'true' == get_user_option( 'rich_editing' ) ) {
		add_filter( 'mce_external_plugins', 'BRS_add_tinymce_plugin' );
		add_filter( 'mce_buttons', 'BRS_register_mce_button' );
	}
}
add_action('admin_head', 'BRS_add_mce_button');

// Declare script for new button
function BRS_add_tinymce_plugin( $plugin_array ) {
	$plugin_array['BRS_mce_button'] = get_template_directory_uri() .'/js/BRS_new-button.js';
	return $plugin_array;
}

// Register new button in the editor
function BRS_register_mce_button( $buttons ) {
	array_push( $buttons, 'BRS_mce_button' );
	return $buttons;
}
