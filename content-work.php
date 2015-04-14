<?php
  /**
  * @Theme Name   :    blackroadspecial
  * @file         :    content-work.php
  * @package      :    blackroadspecial
  * @author       :    Dan Devine
  * @license      :    GPLv3
  * @filesource   :    wp-content/themes/blackroadspecial/content-work.php
  */
  ?>

<div class="col span_5_of_12">

  <h2 class="single-title lined">
    <?php the_title(); ?>
  </h2>

  <div class="single-content">
    <?php the_content(); ?>
  </div>

  <?php get_template_part('inc/BRS_sharing-is-caring'); ?>
  <?php get_template_part('inc/BRS_next-prev'); ?>

</div>




