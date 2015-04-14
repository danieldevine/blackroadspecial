<div class="liquid-slider" id="work-slider">

    <?php //Ok, let's set up a WP Query loop to grab some posts from a particular post type and dump them into the slider.

      $args=array(
        'posts_per_page'=>'2',
      );

      $category_posts = new WP_Query($args);

      if($category_posts->have_posts()) :

      while($category_posts->have_posts()) :

      $category_posts->the_post();

    ?>

     <div><!--start of the slide-->


   <div class="slider-excerpt"><?php the_excerpt(); ?></div>


     </div><!--end of the slide -->
     <?php endwhile; else: ?>
      I'm afraid that there are no posts.
     <?php endif; ?>


</div>
