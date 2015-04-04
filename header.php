<?php
  /**
  * @Theme Name   :    blackroadspecial
  * @file         :    header.php
  * @package      :    blackroadspecial
  * @author       :    Dan Devine
  * @license      :    GPLv3
  * @filesource   :    wp-content/themes/blackroadspecial/header.php
  */
  get_header();?>

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="author"   content="Black Road Design">

<title><?php wp_title('|','true','right'); ?><?php bloginfo('name'); ?></title>

<!--//favicon soup-->
<link href="<?php echo  get_template_directory_uri();?>/icons/favicon.ico"                              rel="shortcut icon">
<link href="<?php echo  get_template_directory_uri();?>/icons/apple-touch-icon.png"                     rel="apple-touch-icon">
<link href="<?php echo  get_template_directory_uri();?>/icons/apple-touch-icon-72x72-precomposed.png"   rel="apple-touch-icon" sizes="72x72">
<link href="<?php echo  get_template_directory_uri();?>/icons/apple-touch-icon-114x114-precomposed.png" rel="apple-touch-icon" sizes="114x114">
<link href="<?php echo  get_template_directory_uri();?>/icons/apple-touch-icon-144x144-precomposed.png" rel="apple-touch-icon" sizes="144x144">

<?php wp_head(); ?>

<script type="text/javascript" src="//use.typekit.net/jte0eum.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

<script type="text/javascript">
var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-34594474-1"]),_gaq.push(["_trackPageview"]),function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src ("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();
</script>

</head>

<body>

  <header>

    <?php get_template_part('inc/BRS_nav'); ?>

    <div class="logo3">
     <!--//this logo visible at smaller sizes-->
      <a href="/">
        <img height="20" src="<?php echo  get_template_directory_uri();?>/img/build/logo6.png">
      </a>
    </div>

  </header>

