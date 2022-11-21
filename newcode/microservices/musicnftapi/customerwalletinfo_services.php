<?php
include('customerwalletinfo_functions.php');
header('content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


if($_SERVER['REQUEST_METHOD']=="POST")
{
  $data = json_decode( file_get_contents( 'php://input' ), true );
  $cEmail   = $data['cEmail'];
  $cWalletId   = $data['cWalletId'];
  
  $json = add_customer_enq($cEmail, $cWalletId);
  echo json_encode($json);
}


if($_SERVER['REQUEST_METHOD']=="GET")
{
  $pageSize=50;
  $startCnt=1;
  if(isset($_GET['startCnt'])){
      $startCnt =  $_GET['startCnt'];
  }

  if(isset($_GET['cEmail']))
  {
    $cEmail =  $_GET['cEmail'];
    $json = get_with_Emailid($cEmail);
    if(empty($json))
        header("HTTP/1.1 404 Not Found");
    echo json_encode($json);
  } else {
    $json = get_all_pagination_start_end($startCnt, $pageSize);
    echo json_encode($json);
  }
}

?>