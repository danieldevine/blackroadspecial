<?php
  /**
  * @Theme Name   :    blackroadspecial
  * @file         :    ìndex.php
  * @package      :    blackroadspecial
  * @author       :    Dan Devine
  * @license      :    GPLv3
  * @filesource   :    wp-content/themes/blackroadspecial/archive-service.php
  */
  get_header();?>

<div class="mainwrapper">
 <div class="index-wrapper">
   <div id="rules"><hr><hr></div>

      <div class ="section group">

        <?php

          $args=array(
            'posts_per_page'=>'40',
            'post_type'=>'service'
          );

          $category_posts = new WP_Query($args);

          if($category_posts->have_posts()) :

          while($category_posts->have_posts()) :

          $category_posts->the_post();

        ?>

      <div class="col span_2_of_12">
        <div class="index-block">
          <a href="<?php the_permalink(); ?>">
            <?php the_post_thumbnail('tailnail'); ?>
             <h2 class="index-title lined"> <?php the_title(); ?> </h2>
          </a>
        </div>
      </div>

      <?php endwhile; else: ?>
      I'm afraid that there are no posts.
      <?php endif; ?>

      </div>
  </div>
</div>

<?php get_footer(); ?>
