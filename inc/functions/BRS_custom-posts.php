<?php
  /**
  * @Theme Name   :    blackroadspecial
  * @file         :    BRS_custom-posts.php
  * @package      :    blackroadspecial
  * @author       :    Dan Devine
  * @license      :    GPLv3
  * @filesource   :    wp-content/themes/blackroadspecial/inc/functions/BRS_custom-posts.php
  *
  *Adds custom post types and makes categories and tags available to all.
  *
  */

//WORK
function BRS_works() {
    $labels = array(
        'name'               => _x( 'works', 'post type general name' ),
        'singular_name'      => _x( 'work', 'post type singular name' ),
        'add_new'            => _x( 'Add New', 'book' ),
        'add_new_item'       => __( 'Add New work' ),
        'edit_item'          => __( 'Edit work' ),
        'new_item'           => __( 'New work' ),
        'all_items'          => __( 'All works' ),
        'view_item'          => __( 'View work' ),
        'search_items'       => __( 'Search works' ),
        'not_found'          => __( 'No works found' ),
        'not_found_in_trash' => __( 'No works found in the Trash' ),
        'parent_item_colon'  => '',
        'menu_name'          => 'Work'
    );
    $args = array(
        'labels'        => $labels,
        'description'   => 'Holds our works and work specific data',
        'public'        => true,
        'menu_position' => 5,
        'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' ),
        'has_archive'   => true,
        // Set the available taxonomies here
        'taxonomies' => array('category', 'post_tag')
    );
    register_post_type( 'work', $args );
}
add_action( 'init', 'BRS_works' );


//SERVICES
function BRS_services() {
    $labels = array(
        'name'               => _x( 'services', 'post type general name' ),
        'singular_name'      => _x( 'service', 'post type singular name' ),
        'add_new'            => _x( 'Add New', 'book' ),
        'add_new_item'       => __( 'Add New service' ),
        'edit_item'          => __( 'Edit service' ),
        'new_item'           => __( 'New service' ),
        'all_items'          => __( 'All services' ),
        'view_item'          => __( 'View service' ),
        'search_items'       => __( 'Search services' ),
        'not_found'          => __( 'No services found' ),
        'not_found_in_trash' => __( 'No services found in the Trash' ),
        'parent_item_colon'  => '',
        'menu_name'          => 'Services'
    );
    $args = array(
        'labels'        => $labels,
        'description'   => 'Holds our services and service specific data',
        'public'        => true,
        'menu_position' => 6,// don't forgert to update this
        'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' ),
        'has_archive'   => true,
        // Set the available taxonomies here
        'taxonomies' => array('category', 'post_tag')
    );
    register_post_type( 'service', $args );
}
add_action( 'init', 'BRS_services' );

//add custom post types to regular categories
function add_custom_types_to_tax( $query ) {
if( is_category() || is_tag() && empty( $query->query_vars['suppress_filters'] ) ) {

$post_types = get_post_types();

$query->set( 'post_type', $post_types );
return $query;
}
}
add_filter( 'pre_get_posts', 'add_custom_types_to_tax' );
