<?php
  /**
  * @Theme Name   :    blackroadspecial
  * @file         :    BRS_post-link-classes.php
  * @package      :    blackroadspecial
  * @author       :    Dan Devine
  * @license      :    GPLv3
  * @filesource   :    wp-content/themes/blackroadspecial/inc/functions/BRS_post-link-classes.php
  *
  *these functions allow you to add a class to the next and previous post(singular!) links on single posts.
  *this also means that you dont get empty 'links' at the start and end of the cycle.
  *
  */

//previous post link
add_filter('next_post_link', 'next_post_link_attributes');

function next_post_link_attributes($output) {
    $BRS_post_class = 'class="right_arrow_box"';
    return str_replace('<a href=', '<a '.$BRS_post_class.' href=', $output);
}

//next post link
add_filter('previous_post_link', 'previous_post_link_attributes');

function previous_post_link_attributes($output) {
    $BRS_post_class = 'class="left_arrow_box"';
    return str_replace('<a href=', '<a '.$BRS_post_class.' href=', $output);
}
