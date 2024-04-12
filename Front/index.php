<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
</head>
<body>
    <h1>Iniciar Sesión</h1>
    <div class="login-container">
        <form method="post">
            <div class="form-group">
                <label for="username">
                    usuario
                </label>
                <input type="text" name="username" id="username">
                <label for="password">
                    contraseña
                </label>
                <input type="text" name="password" id="password">
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST["username"];
        $password = $_POST["password"];
        $url="http://localhost/test";
        $data = array(
            "username" => $username, 
            "password" => $password
        );

        $curl = curl_init();

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($curl);
    }
    ?>
</body>
</html>