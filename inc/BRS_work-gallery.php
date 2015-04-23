<?php $images = get_field('galleries'); ?>

<?php if($images): ?>

<div class="popup-gallery ">
  <?php foreach( $images as $image ): ?>

      <a href="<?php echo $image['url']; ?>"
         class="lightbox-link"
         title="<?php echo $image['caption']; ?>"
         data-description="<?php echo $image['description']; ?>">

        <div class="image-wrap">
            <img src="<?php echo $image['sizes']['killernail']; ?>">
        </div>

      </a>

  <?php endforeach; ?>
</div>

<?php endif; ?>



