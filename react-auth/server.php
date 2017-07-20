<?php 
  
  $pdo = new PDO('mysql:host=localhost;dbname=test', 'root', 'root');
  
  if($_SERVER['REQUEST_METHOD'] === "GET"){
      if(isset($_GET['username'], $_GET['password'])){
        $response = $pdo->prepare("SELECT * FROM users WHERE username=? AND password=?");
        $response->execute(array_values($_GET));
        $response = $response->fetch(PDO::FETCH_ASSOC);
        if($response){
          http_response_code(200);
          echo json_encode(array("response" => 'success', 'user' => $response));
        } else echo json_encode(array('response'=>'error', 'errors' => 'izan'));
        exit();
      } 
      
  } elseif($_SERVER['REQUEST_METHOD'] == "POST") {
    if(isset($_POST['username'], $_POST['password'], $_POSTT['confirmation'])){
      http_response_code(200);
      echo json_encode(array("response" => 'success'));
      exit();
    } 
  }
  exit();
 ?>