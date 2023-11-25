<?php

if (isset($_POST['email']) && isset($_POST['message'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $suggestion = $_POST['suggestion'];

  
  echo "Email: " . $email . "<br>";
  echo "Message: " . $suggestion;

 
  mail('rickyralph@gmail.com.com', 'Subject: Contact Form Message', $suggestion, 'From: ' . $email);

  echo "<p>Your message has been sent successfully.</p>";
} else {
  echo "Please fill out the form.";
}

?>
