<?php
  /**
  * @Theme Name   :    blackroadspecial
  * @file         :    work.php
  * @package      :    blackroadspecial
  * @author       :    Dan Devine
  * @license      :    GPLv3
  * @filesource   :    wp-content/themes/blackroadspecial/work.php
  */
  get_header();?>

<div class="mainwrapper">
  <div class="single-wrapper">
      <div id="rules">
        <hr />
        <hr />
      </div>

  <div class="section group">

      <?php while ( have_posts() ) : the_post(); ?>
      <?php get_template_part('content', 'work'); ?>
      <?php endwhile; // end of the loop. ?>

    <div class="col span_7_of_12">
      <?php get_template_part('inc/BRS_work-slider'); ?>
    </div>



   </div>
  </div>
</div>

<?php get_footer(); ?>
