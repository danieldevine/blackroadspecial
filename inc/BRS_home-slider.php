<div class="liquid-slider" id="home-slider">

    <?php //Ok, let's set up a WP Query loop to grab some posts from a particular post type and dump them into the slider.

      $args=array(
        'post_type'=>'service',
        'posts_per_page'=>'6',
      );

      $category_posts = new WP_Query($args);

      if($category_posts->have_posts()) :

      while($category_posts->have_posts()) :

      $category_posts->the_post();

    ?>

     <div><!--start of the slide-->

         <div class="section group">

           <div class="col span_5_of_12">
             <?php the_post_thumbnail('smallnail'); ?>
           </div>

           <div class="col span_7_of_12">
             <h2 class="title"><?php the_title(); ?></h2>
             <div class="slider-excerpt"><?php the_excerpt(); ?></div>
           </div>

         </div>

     </div><!--end of the slide -->

     <?php endwhile; else: ?>
      I'm afraid that there are no posts.
     <?php endif; ?>

</div>
