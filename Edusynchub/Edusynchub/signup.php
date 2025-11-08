<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <title>Multi Step Form</title>
    <link rel="stylesheet" href="css/signup.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</head>
<body>
    <div class="container">
        <header>Signup</header>
        <div class="progress-bar">
            <div class="step">
                <p>Name</p>
                <div class="bullet">
                    <span>1</span>
                </div>
                <div class="check fas fa-check"></div>
            </div>
            <div class="step">
                <p>Contact</p>
                <div class="bullet">
                    <span>2</span>
                </div>
                <div class="check fas fa-check"></div>
            </div>
            <div class="step">
                <p>Academic</p>
                <div class="bullet">
                    <span>3</span>
                </div>
                <div class="check fas fa-check"></div>
            </div>
            <div class="step">
                <p>Submit</p>
                <div class="bullet">
                    <span>4</span>
                </div>
                <div class="check fas fa-check"></div>
            </div>
        </div>
        <div class="form-outer">
            <form action="signup.php" method="POST">
                <div class="page slide-page">
                    <div class="title">Basic Info:</div>
                    <div class="field">
                        <div class="label">First Name</div>
                        <input type="text" id="firstName" name="firstName" required placeholder="First Name">
                    </div>
                    <div class="field">
                        <div class="label">Last Name</div>
                        <input type="text" id="lastName" name="lastName" required placeholder="Last Name">
                    </div>
                    <div class="field">
                        <button class="firstNext next">Next</button>
                    </div>
                </div>
                <div class="page">
                    <div class="title">Contact Info:</div>
                    <div class="field">
                        <div class="label">Email Address</div>
                        <input type="email" id="email" name="email" required placeholder="Email address">
                    </div>
                    <div class="field">
                        <div class="label">Phone Number</div>
                        <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder="Phone Number">
                    </div>
                    <div class="field btns">
                        <button class="prev-1 prev">Previous</button>
                        <button class="next-1 next">Next</button>
                    </div>
                </div>
                <div class="page">
                    <div class="title">Academic Info:</div>
                    <div class="field">
                        <div class="label">Branch</div>
                        <select id="branch" name="branch" required>
                            <option value="select branch">Select Branch</option>
                            <option value="MCA">MCA</option>
                            <option value="B.tech">B.tech</option>
                            <option value="M.tech">M.tech</option>
                            <option value="BCA">BCA</option>
                        </select>
                    </div>
                    <div class="field">
                        <div class="label">Semester</div>
                        <select id="semester" name="semester" required>
                            <option value="select semester">Select Semester</option>
                            <option value="1">1st</option>
                            <option value="2">2nd</option>
                            <option value="3">3rd</option>
                            <option value="4">4th</option>
                            <option value="5">5th</option>
                            <option value="6">6th</option>
                            <option value="7">7th</option>
                            <option value="8">8th</option>
                        </select>
                    </div>
                    <div class="field btns">
                        <button class="prev-2 prev">Previous</button>
                        <button class="next-2 next">Next</button>
                    </div>
                </div>
                <div class="page">
                    <div class="title">Login Details:</div>
                    <div class="field">
                        <div class="label">Password</div>
                        <input type="password" name="password" id="password" required placeholder="Password">
                    </div>
                    <div class="field">
                        <div class="label">Confirm Password</div>
                        <input type="password" name="confirmPassword" id="confirmPassword" required placeholder="Confirm Password">
                    </div>
                    <div class="show-password-checkbox">
                        <input type="checkbox" id="showPasswords">
                        <label for="showPasswords">Show Passwords</label>
                    </div>
                    <div class="field btns">
                        <button class="prev-3 prev">Previous</button>
                        <button type="submit" value="Submit" class="submit" name="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script src="js/signup.js"></script>
</body>
</html>
<?php
require "db.php";

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['firstName']) && 
        isset($_POST['lastName']) && 
        isset($_POST['email']) && 
        isset($_POST['phoneNumber']) && 
        isset($_POST['branch']) && 
        isset($_POST['semester']) && 
        isset($_POST['password']) &&
        isset($_POST['confirmPassword'])) {

        $fn1 = $_POST['firstName'];
        $ln1 = $_POST['lastName'];
        $e1 = $_POST['email'];
        $phn1 = $_POST['phoneNumber'];
        $b1 = $_POST['branch'];
        $s1 = $_POST['semester'];
        $p1 = $_POST['password'];
        $cp1 = $_POST['confirmPassword'];

        // Validate passwords match
        if ($p1 !== $cp1) {
            echo '<script>alert("Passwords do not match!");</script>';
            exit;
        }

        // Use prepared statements for security
        $stmt = $con->prepare("INSERT INTO students (firstName, lastName, email, phoneNumber, branch, semester, password, confirmpassword) 
                               VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        if ($stmt === false) {
            die('Prepare failed: ' . htmlspecialchars($con->error));
        }

        $bind = $stmt->bind_param("ssssssss", $fn1, $ln1, $e1, $phn1, $b1, $s1, $p1, $cp1);
        if ($bind === false) {
            die('Bind param failed: ' . htmlspecialchars($stmt->error));
        }

        $exec = $stmt->execute();
        if ($exec) {
            echo '<script>alert("Registration Successful");</script>';
        } else {
            echo '<script>alert("Sorry!! Registration cannot be done!");</script>';
        }

        $stmt->close();
    }
}
$con->close();
?>

