<?php
include('customerenq_functions.php');
header('content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


if($_SERVER['REQUEST_METHOD']=="POST")
{
  $data = json_decode( file_get_contents( 'php://input' ), true );
  $emailid   = $data['emailid'];
  $contactno = $data['contactno'];
  $fullname  = $data['fullname'];
  $cstatus   = $data['cstatus'];
  
  $json = add_customer_enq($fullname, $emailid, $contactno, $cstatus);
  echo json_encode($json);
}

if($_SERVER['REQUEST_METHOD']=="PUT")
{
  $data = json_decode( file_get_contents( 'php://input' ), true );
  $id = $data['id'];
  $newStatus = $data['newStatus'];
  $json = update_status($id, $newStatus);
  echo json_encode($json);
}

if($_SERVER['REQUEST_METHOD']=="GET")
{
  $pageSize=50;
  $startCnt=1;
  if(isset($_GET['startCnt'])){
      $startCnt =  $_GET['startCnt'];
  }

  if(isset($_GET['cstatus']))
  {
    $cstatus =  $_GET['cstatus'];
    $json = get_all_with_status_filter($cstatus, $startCnt, $pageSize);
    if(empty($json))
        header("HTTP/1.1 404 Not Found");
    echo json_encode($json);
  } else {
    $json = get_all_pagination_start_end($startCnt, $pageSize);
    echo json_encode($json);
  }
}

?>