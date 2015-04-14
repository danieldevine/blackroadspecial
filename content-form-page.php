<?php
  /**
  * @Theme Name   :    blackroadspecial
  * @file         :    content-form-page.php
  * @package      :    blackroadspecial
  * @author       :    Dan Devine
  * @license      :    GPLv3
  * @filesource   :    wp-content/themes/blackroadspecial/content-form-page.php
  */
 ?>

<div class="section group">
  <div class="col span_7_of_12">
    <h2 class="single-title lined"><?php the_title(); ?></h2>

    <div class="single-content">
      <?php the_content(); ?>
    </div>

  </div>

  <div class="col span_5_of_12">

    <div class="contact-blurb">
    Fill out the form to start the conversation. If you can give us a general idea of your budget and the scope of your project, we're happy to provide a quotation. We're currently available for freelance web-based work, so trade enquiries are most welcome.
    </div>

    <?php get_template_part('inc/BRS_page-contact'); ?>
    <?php get_template_part('inc/BRS_sharing-is-caring'); ?>

  </div>

</div>


