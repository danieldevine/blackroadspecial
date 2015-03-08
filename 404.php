<?php
  /**
  * @Theme Name   :    blackroadspecial
  * @file         :    404.php
  * @package      :    blackroadspecial
  * @author       :    Dan Devine
  * @license      :    GPLv3
  * @filesource   :    wp-content/themes/blackroadspecial/404.php
  */
 get_header();?>

<div class="mainwrapper">

  <div id="rules"><hr><hr></div>

  <div class="section group">

    <div class="col span_1_of_3">
      <img src="<?php echo  get_template_directory_uri();?>/img/build/dansaysh2i.png">
    </div>

    <div class="col span_2_of_3">
      <div class="megah lined">DOCUMENT NOT FOUND, SO SORRY! </div>
      That page doesn't exist, or has stopped existing! Head to our homepage, and I'm sure you'll find what you're looking for.
    </div>

    <a href="/">
      <div class="butthead2"> GO HOME </div>
    </a>

  </div>

  <div id="rules"><hr><hr></div>

</div>
<?php get_footer(); ?>
