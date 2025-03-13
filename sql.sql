     CREATE DATABASE camera_lens;
          CREATE TABLE products (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         description TEXT,
         price DECIMAL(10, 2) NOT NULL,
         image_url VARCHAR(255)
     );
          $conn = new mysqli($servername, $username, $password, $dbname);
     if ($conn->connect_error) {
         die("Connection failed: " . $conn->connect_error);
     }
     
     