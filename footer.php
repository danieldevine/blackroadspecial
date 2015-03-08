<?php
  /**
  * @Theme Name   :    blackroadspecial
  * @file         :    footer.php
  * @package      :    blackroadspecial
  * @author       :    Dan Devine
  * @license      :    GPLv3
  * @filesource   :    wp-content/themes/blackroadspecial/footer.php
  */
 ?>

    <footer>

      <div class="footer-wrapper">

        <div class="section group">

           <div class="col span_1_of_4">
            <div class="BRS-flex">
              <div class="footer-col">

              <?php get_template_part('inc/BRS_mailchimp'); ?>

            </div>
           </div>
          </div>

           <div class="col span_1_of_4">
            <div class="BRS-flex">
              <div class="footer-col">

                <h3 class="lined">BE SOCIABLE</h3>
                <!--and let me eat your juicy, juicy braaaaains-->

                <a href="https://www.facebook.com/pages/Black-Road/366545193418022?ref=hl">
                <i class="fa fa-facebook-official fa-2x"></i>&nbsp;
                </a>

                <a href="https://twitter.com/blackroaddesign">
                <i class="fa fa-twitter fa-2x"></i>&nbsp;
                </a>

                <a href="https://twitter.com/blackroaddesign">
                <i class="fa fa-github-alt fa-2x"></i>&nbsp;
                </a>
                <a href="https://twitter.com/blackroaddesign">
                <i class="fa fa-bitbucket fa-2x"></i>
                </a>

                <ul>
                  <li> <a href="/services">  Services  </a> </li>
                  <li> <a href="/enquiries"> Enquiries </a> </li>
                  <li> <a href="/contact">   Contact Us</a> </li>
                  <p>(LinkedIn is for weenies.)</p>
                </ul>

              </div>
            </div>
          </div>


          <div class="col span_1_of_4">
            <div class="BRS-flex">
              <div class="footer-col">

                <h3 class="lined">WHO ARE WE?</h3>

                We're a small and flexible design studio, building a big
                reputation for quality design. Black Road Design were founded in 2012 by
                Dan Devine, who has 650 years experience of designing for
                print, web and TV. Say hi on <a href="https://twitter.com/blackroaddesign" target="_blank">Twitter</a>

              </div>
            </div>
          </div>

           <div class="col span_1_of_4">
            <div class="BRS-flex">
              <div class="footer-col">

              <h3 class="lined">SAY HELLO</h3>

              <strong>BLACK ROAD DESIGN</strong>
              <!--plz send munny-->
              <br>
              Ardpatrick , Co.Limerick<br>
              Ireland<br>
              +353 85 1527761<br>
              <a href="mailto:dan@blackroad.ie">email Dan</a>

              </div>
            </div>
          </div>


        </div><!--end four columns-->

        <div class="footer-credits lined">

          © Daniel Devine / BLACK ROAD DESIGN 2012 - <?php echo date( "Y") ?> <br/>
          Fonts by <a href="http://typekit.com/colophons/jte0eum">Typekit</a> &nbsp;|&nbsp;
          Theme: <a href="https://github.com/danieldevine"> blackroadspecial </a> by Daniel Devine.<br/>
          Built with <a href="http://grunt.com">Grunt</a> &amp; <a href="http://sass.com">Sass</a> in Ireland.
          Powered by <a href="http://wordpress.org"> Wordpress </a>

        </div>

      </div><!--end footer-wrapper-->

    </footer>

  </body>

<?php wp_footer(); ?>
</html>
