<?php
//lets make a custom contact form as part of the theme then.

function html_form_code() {
    echo '<form action="' . esc_url( $_SERVER['REQUEST_URI'] ) . '" method="post">';
    echo '<p>';
    echo '<label>Your Name * <br/></label>';
    echo '<input type="text" class="BRS_field-input" name="BRS-name" pattern="[a-zA-Z0-9 ]+" value="' . ( isset( $_POST["BRS-name"] ) ? esc_attr( $_POST["BRS-name"] ) : '' ) . '" size="40" />';
    echo '</p>';
    echo '<p>';
    echo '<label>Your Email * <br/></label>';
    echo '<input type="email" class="BRS_field-input" name="BRS-email" value="' . ( isset( $_POST["BRS-email"] ) ? esc_attr( $_POST["BRS-email"] ) : '' ) . '" size="40" />';
    echo '</p>';
    echo '<p>';
    echo '<label>Subject * <br/></label>';
    echo '<input type="text" class="BRS_field-input" name="BRS-subject" pattern="[a-zA-Z ]+" value="' . ( isset( $_POST["BRS-subject"] ) ? esc_attr( $_POST["BRS-subject"] ) : '' ) . '" size="40" />';
    echo '</p>';
    echo '<p>';
    echo '<label>Your Message * <br/></label>';
    echo '<textarea class="BRS_field-input" rows="10" cols="35" name="BRS-message">' . ( isset( $_POST["BRS-message"] ) ? esc_attr( $_POST["BRS-message"] ) : '' ) . '</textarea>';
    echo '</p>';
    echo '<p><input type="submit" class="BRS-submit-button" name="BRS-submitted" value="Send"></p>';
    echo '</form>';
}

function deliver_mail() {

    // if the submit button is clicked, send the email
    if ( isset( $_POST['BRS-submitted'] ) ) {

        // sanitize form values
        $name    = sanitize_text_field( $_POST["BRS-name"] );
        $email   = sanitize_email( $_POST["BRS-email"] );
        $subject = sanitize_text_field( $_POST["BRS-subject"] );
        $message = esc_textarea( $_POST["BRS-message"] );

        // get the blog administrator's email address
        $to = get_option( 'admin_email' );

        $headers = "From: $name <$email>" . "\r\n";

        // show a nice success message
        if ( wp_mail( $to, $subject, $message, $headers ) ) {
            echo '<div>';
            echo '<p>Thanks for contacting me, Ill get back to you with a reply as soon as I can.</p>';
            echo '</div>';
        } else {
            echo 'An error has occured with your submission, please try again.'; // or a nice failure message...
        }
    }
}

function BRS_shortcode() {
    ob_start();
    deliver_mail();
    html_form_code();

    return ob_get_clean();
}

//add the freaking shortcode already.
add_shortcode( 'BRS_contact-form', 'BRS_shortcode' );

//we'll turn this into a little button on the TinyMCE elsewhere.
?>
