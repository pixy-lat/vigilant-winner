<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GONZALES HIGH SCHOOL E-LIBRARY</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        /* Existing CSS here */

        /* Hidden content styles */
        #hidden-feature {
            display: none;
            margin-top: 20px;
            padding: 20px;
            background: rgba(0, 128, 0, 0.1);
            border: 1px solid #008000;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div id="background">
        <!-- Existing HTML here -->

        <!-- Admin Login Form -->
        <div id="l">
            <h1 style="text-align: center; color: #2c7ad6;">ADMIN LOGIN</h1>
            <div id="student">
                Email <br><input type="text" id="email" class="t"/><br>
                Password <br><input type="password" id="password" class="t"/><br>
                <button id="login-btn" style="border: none; width: 103%; height: 30px; background-color: #2c7ad6; color: white;">LOGIN</button>
                <p id="error-message" style="color: red; display: none;">Invalid email or password.</p>
            </div>
        </div>

        <!-- Hidden Feature -->
        <div id="hidden-feature">
            <h2>Welcome to the Advanced Features!</h2>
            <p>You have successfully logged in.</p>
            <ul>
                <li><a href="#">View Reports</a></li>
                <li><a href="#">Manage Users</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>

        <!-- Footer -->
        <div class="footer">Developed By: CARMELA REGAL, SHAINA SANTOS, JOSHUA DE CASTRO, RALPH LOUISE ALVAREZ</div>
    </div>

    <script>
        // JavaScript to handle login
        document.getElementById('login-btn').addEventListener('click', function() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Replace with your actual login validation logic
            if (email === "admin@donjlibrary.com" && password === "12345") {
                document.getElementById('hidden-feature').style.display = 'block';
                document.getElementById('error-message').style.display = 'none';
            } else {
                document.getElementById('error-message').style.display = 'block';
            }
        });
    </script>
</body>
</html>
