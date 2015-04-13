<?php
add_action( 'admin_menu', 'BRS_add_admin_menu' );
add_action( 'admin_init', 'BRS_settings_init' );


function BRS_add_admin_menu(  ) {

	add_menu_page( 'blackroadspecial', 'blackroadspecial', 'manage_options', 'blackroadspecial', 'BRS_options_page' );

}


function BRS_settings_init(  ) {

	register_setting( 'pluginPage', 'BRS_settings' );

	add_settings_section(
		'BRS_pluginPage_section',
		__( 'Your section description', 'wordpress' ),
		'BRS_settings_section_callback',
		'pluginPage'
	);

	add_settings_field(
		'BRS_text_field_0',
		__( 'Settings field description', 'wordpress' ),
		'BRS_text_field_0_render',
		'pluginPage',
		'BRS_pluginPage_section'
	);


}


function BRS_text_field_0_render(  ) {

	$options = get_option( 'BRS_settings' );
	?>
	<input type='text' name='BRS_settings[BRS_text_field_0]' value='<?php echo $options['BRS_text_field_0']; ?>'>
	<?php

}


function BRS_settings_section_callback(  ) {

	echo __( 'This section description', 'wordpress' );

}


function BRS_options_page(  ) {

	?>
	<form action='options.php' method='post'>

		<h2>blackroadspecial</h2>

		<?php
		settings_fields( 'pluginPage' );
		do_settings_sections( 'pluginPage' );
		submit_button();
		?>

	</form>
	<?php

}
