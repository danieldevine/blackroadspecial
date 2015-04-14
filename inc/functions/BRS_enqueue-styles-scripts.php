<?php
/** enqueue the junk */
function BRS_styles()
{

// Register styles:
wp_register_style( 'BRS-main-style', get_template_directory_uri() . '/css/global.min.css', array(), 'all' );

// Register scripts:
wp_register_script( 'BRS-production-script', get_template_directory_uri() . '/js/build/production.min.js', array( 'jquery' ) );

//  enqueue style:
wp_enqueue_style( 'BRS-main-style' );

//  enqueue script:
wp_enqueue_script( 'BRS-production-script' );

}

add_action( 'wp_enqueue_scripts', 'BRS_styles' );
