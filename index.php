<?php
session_start();

if (isset($_SESSION['isLoggedIn']) && $_SESSION['isLoggedIn']) {
  // User is logged in, redirect to the main page
  header('Location: index.php');
  exit;
} else {
  // User is not logged in, display the sign-up/login form
  include_once 'auth-form.php';
}
?>
