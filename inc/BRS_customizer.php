 <?php

function BRS_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
	$wp_customize->add_setting( 'BRS_logo' ); // Add setting for logo uploader
	$wp_customize->add_setting( 'BRS_banner' ); // Home Banner Image
	$wp_customize->add_setting( 'BRS_banner_text' ); // Home Banner Text
	$wp_customize->add_setting( 'BRS_banner_checkbox' ); // Home Banner Checkbox
	$wp_customize->add_setting( 'BRS_social_fb' ); // Facebook url
	$wp_customize->add_setting( 'BRS_social_tw' ); // Twitter url
	$wp_customize->add_setting( 'BRS_social_email' ); // Email
	$wp_customize->add_setting( 'BRS_social_g' ); // Google Plus
	$wp_customize->add_setting( 'BRS_social_li' ); // LinkedIn
	$wp_customize->add_setting( 'BRS_social_pin' ); // Pinterest
	$wp_customize->add_setting( 'BRS_social_rss' ); // RSS
	$wp_customize->add_setting( 'BRS_social_yt' ); // Youtube
	$wp_customize->add_setting( 'BRS_footer_credits' ); // Footer Credits

	// Create custom textarea control
	class BRS_textarea_control extends WP_Customize_Control {
    public $type = 'textarea';

    public function render_content() {
        ?>
        <label>
        <span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
        <textarea rows="5" style="width:100%;" <?php $this->link(); ?>><?php echo esc_textarea( $this->value() ); ?></textarea>
        </label>
        <?php
		}
	}

	// Create logo upload control
	class BRS_pro_control extends WP_Customize_Control {
    public $type = 'pro_only';

    public function render_content() {
        ?>
        <label>
			<span class="customize-control-title">Upload Custom Logo</span>
		</label>
        <p><a href="http://BRSthemes.com/themes/BRS" target="_blank">Upgrade to Pro</a> for this feature and lots more!</p>
        <?php
		}
	}

	// Create new section for footer credits
	$wp_customize->add_section( 'BRS_credits_section' , array(
    'title'       => __( 'Footer Credits', 'BRS' ),
    'priority'    => 195,
	) );

	// Add text field for footer credits
	$wp_customize->add_control( new BRS_textarea_control( $wp_customize, 'BRS_footer_credits', array(
    'label'   => __( 'Footer Credits (HTML allowed)', 'BRS' ),
    'section' => 'BRS_credits_section',
    'default' => '',
    'settings' => 'BRS_footer_credits',
    ) ) );

	// Create new section for front page banner
	$wp_customize->add_section( 'BRS_home_banner_section' , array(
    'title'       => __( 'Home Banner', 'BRS' ),
    'priority'    => 30,
    'description' => 'Upload a banner to display on your front page template.',
	) );

	// Hide banner checkbox
	$wp_customize->add_control( 'BRS_banner_checkbox', array(
    'settings' => 'BRS_banner_checkbox',
    'label'    => __( 'Display Banner (shows on Front Page Template)', 'BRS' ),
    'section'  => 'BRS_home_banner_section',
    'type'     => 'checkbox',
	) );

	// Add upload control for front page banner
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'BRS_banner', array(
    'label'    => __( 'Home Banner Image (1100px by 350px)', 'BRS' ),
    'section'  => 'BRS_home_banner_section',
    'settings' => 'BRS_banner',
	) ) );

	// Add text field for front page banner
	$wp_customize->add_control( new BRS_textarea_control( $wp_customize, 'BRS_banner_text', array(
    'label'   => __( 'Home Banner Text (HTML allowed)', 'BRS' ),
    'section' => 'BRS_home_banner_section',
    'settings' => 'BRS_banner_text',
    ) ) );

	/* =Social Icons
	----------------------------------------------- */

	// Create new section for social icons
	$wp_customize->add_section( 'BRS_social_section' , array(
    'title'       => __( 'Social Icons', 'BRS' ),
    'priority'    => 45,
    'description' => 'Enter your full profile urls to display an icon at the top of your site.',
	) );

	// Add text field for Facebook
	$wp_customize->add_control( 'BRS_social_fb', array(
    'type'     => 'text',
    'label'    => __( 'Facebook Profile URL', 'BRS' ),
    'section'  => 'BRS_social_section',
    'settings' => 'BRS_social_fb',
	) );

	// Add text field for Twitter
	$wp_customize->add_control( 'BRS_social_tw', array(
    'type'     => 'text',
    'label'    => __( 'Twitter Profile URL', 'BRS' ),
    'section'  => 'BRS_social_section',
    'settings' => 'BRS_social_tw',
	) );

	// Add text field for Email
	$wp_customize->add_control( 'BRS_social_email', array(
    'type'     => 'text',
    'label'    => __( 'Email Address', 'BRS' ),
    'section'  => 'BRS_social_section',
    'settings' => 'BRS_social_email',
	) );

	// Add text field for RSS
	$wp_customize->add_control( 'BRS_social_rss', array(
    'type'     => 'text',
    'label'    => __( 'RSS Feed URL', 'BRS' ),
    'section'  => 'BRS_social_section',
    'settings' => 'BRS_social_rss',
	) );

	// Add text field for LinkedIn
	$wp_customize->add_control( 'BRS_social_li', array(
    'type'     => 'text',
    'label'    => __( 'LinkedIn URL', 'BRS' ),
    'section'  => 'BRS_social_section',
    'settings' => 'BRS_social_li',
	) );

	// Add text field for Google Plus
	$wp_customize->add_control( 'BRS_social_g', array(
    'type'     => 'text',
    'label'    => __( 'Google Plus URL', 'BRS' ),
    'section'  => 'BRS_social_section',
    'settings' => 'BRS_social_g',
	) );

	// Add text field for Pinterest
	$wp_customize->add_control( 'BRS_social_pin', array(
    'type'     => 'text',
    'label'    => __( 'Pinterest URL', 'BRS' ),
    'section'  => 'BRS_social_section',
    'settings' => 'BRS_social_pin',
	) );

	// Add text field for Youtube
	$wp_customize->add_control( 'BRS_social_yt', array(
    'type'     => 'text',
    'label'    => __( 'YouTube URL', 'BRS' ),
    'section'  => 'BRS_social_section',
    'settings' => 'BRS_social_yt',
	) );

	// Add text field for front page banner
	$wp_customize->add_control( new BRS_pro_control( $wp_customize, 'BRS_logo', array(
    'label'   => __( 'Upload Custom Logo', 'BRS' ),
    'section' => 'title_tagline',
    'settings' => 'BRS_logo',
    ) ) );

	// Add control for logo uploader (actual uploader)
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'BRS_logo', array(
    'label'    => __( 'Upload Logo (replaces text)', 'BRS' ),
    'section'  => 'title_tagline',
    'settings' => 'BRS_logo',
	) ) );


}
add_action( 'customize_register', 'BRS_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function BRS_customize_preview_js() {
	wp_enqueue_script( 'BRS_customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20130508', true );
}
add_action( 'customize_preview_init', 'BRS_customize_preview_js' );


/*
 * Now that the controls are set, add code to wp_head
 */


add_action( 'wp_head', 'BRS_customizer_css', 210 );
