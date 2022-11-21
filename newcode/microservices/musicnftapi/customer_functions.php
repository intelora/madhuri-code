<?php
include './databaseconfig.php';


function add_customer($fullname, $emailid, $contactno, $cstatus)
{
    $pdo = Database::connect();                                                                                                                       
    $sql = "INSERT INTO customer_master (`id`, `fullname`,  `city`,  `category`,  `cType`,  `emailid`, `contactno`, `datetime`, `cstatus`)  VALUES(NULL,'{$fullname}','{$city}','{$category}','{$cType}','{$emailid}','{$emailid}','{$contactno}',CURRENT_TIMESTAMP,'{$cstatus}')";
    $status = [];
//    echo "{ \"sql\":\"{$sql}\" }";
    try {
        $query = $pdo->prepare($sql);
        $result = $query->execute();
        if($result)
        {
            $status['message'] = "Data inserted.";
        }
        else{
            $status['message'] = "Data is not inserted";
        }
    } catch (PDOException $e) {
        $status['message'] = $e->getMessage(); 
    }

    Database::disconnect();
    return $status;
}

function update_status($id, $newStatus)
{
    $pdo = Database::connect();
    $sql="";
    //if($dataType=='numeric'){
    $sql = "UPDATE joinenq SET cstatus = 'EEEE' where id = {$id} ";
    $status = [];
    try {
        $query = $pdo->prepare($sql);
        $result = $query->execute();
        if($result)
        {
            $status['message'] = "Data updated";
        }
        else{
            $status['message'] = "Data is not updated";
        }
    } catch (PDOException $e) {
        $status['message'] = $e->getMessage(); 
    }
    Database::disconnect();
    return $status;
}

function get_all_with_status_filter($cstatus, $startCnt, $pageSize)
{
    $pdo = Database::connect();
    $sql = "SELECT * FROM joinenq where cstatus='{$cstatus}' LIMIT {$startCnt}, {$pageSize} ";
    try {
        $query = $pdo->prepare($sql);
        $query->execute();
        $contact_info = $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
    Database::disconnect();
    return $contact_info;
}

function get_all_pagination_start_end($startCnt, $pageSize)
{
    $pdo = Database::connect();
    $sql = "SELECT * FROM joinenq  LIMIT {$startCnt}, {$pageSize} ";
    try {
        $query = $pdo->prepare($sql);
        $query->execute();
        $contact_info = $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
    Database::disconnect();
    return $contact_info;
}


?>