<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usertype</title>
    <link rel="stylesheet" href="css/usertype.css">
    <script src="js/usertype.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Select User Type</h1>
        <div class="user-options">
            <div class="user-option" onclick="redirectTo('signup.php')">
                <img src="img/student-512.png" alt="Student">
                <p>Student</p>
            </div>
            <div class="user-option" onclick="redirectTo('adminlogin.html')">
                <img src="img/admin.png" alt="Admin">
                <p>Admin</p>
            </div>
            <div class="user-option" onclick="redirectTo('mentorlogin.html')">
                <img src="img/mentor.jpg" alt="Mentor">
                <p>Mentor</p>
            </div>
        </div>
    </div>

  
</body>
</html>
