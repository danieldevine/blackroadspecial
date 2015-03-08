<?php
/** Add shortcodes in widgets */
if ( !is_admin() ){
    add_filter('widget_text', 'do_shortcode', 11);
}

add_filter('the_content', 'do_shortcode');
