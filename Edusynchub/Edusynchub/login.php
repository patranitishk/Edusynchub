<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="css/signup.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
</head>
<body>
    <div class="container">
        <header>Login</header>
        <div class="form-outer">
            <form action="login.php" method="POST">
                <div class="page slide-page">
                    <div class="field">
                        <div class="label">Email Address</div>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="field">
                        <div class="label">Password</div>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <div class="show-password-checkbox">
                        <input type="checkbox" id="showPassword">
                        <label for="showPassword">Show Password</label>
                    </div>
                    <div class="field">
                        <p>Don't have an account?</p>
                        <a href="signup.php">Sign up</a>
                    </div>
                    <div class="field">
                        <button type="submit" class="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script src="js/login.js"></script>
</body>
</html>
<?php

    require "db.php";
    
    if($_SERVER['REQUEST_METHOD']=='POST'){
        // Retrieve email and password from the form
        $email = $_POST['email'];
        $password = $_POST['pass'];

        // Sanitize input to prevent SQL injection
        $email = mysqli_real_escape_string($con, $email);
        $password = mysqli_real_escape_string($con, $password);

        // Query to check if there is a user with the provided email and password
        $query = "SELECT * FROM `students` WHERE `email`='$email' AND `password`='$password'";
        
        // Execute the query
        $result = mysqli_query($con, $query);

        // Check if a single row is returned, indicating successful login
        if(mysqli_num_rows($result) == 1){
            session_start();
            // Fetch user data
            $userData = mysqli_fetch_assoc($result);

            // Store user data in session variables
            $_SESSION['firstName'] = $userData['firstName'];
            $_SESSION['email'] = $userData['email'];
            // Add more session variables as needed
            
            // Redirect to dashboard or desired page
            header("Location:EdusyncHub.php");
            exit; // Stop further execution
        } else {
            // Login unsuccessful
            echo '<script>alert("Sorry!! Login Unsuccessful!");</script>';
        }
    }
?>

