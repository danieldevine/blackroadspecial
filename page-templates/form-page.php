<?php
  /**
  * Template Name:     Form Page
  * @Theme Name   :    blackroadspecial
  * @file         :    form-page.php
  * @package      :    blackroadspecial
  * @author       :    Dan Devine
  * @license      :    GPLv3
  * @filesource   :    wp-content/themes/blackroadspecial/page-templates/form-page.php
  */
  get_header();?>

<div class="mainwrapper">
  <div class="single-wrapper">
      <div id="rules">
        <hr />
        <hr />
      </div>

      <?php while ( have_posts() ) : the_post(); ?>
      <?php get_template_part('content', 'form-page'); ?>
      <?php endwhile; // end of the loop. ?>

  </div>
</div>

<?php get_footer(); ?>
