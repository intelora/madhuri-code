<?php
include './databaseconfig.php';

//INSERT INTO `customer_wallet_info` (`id`, `cEmail`, `cWalletId`, `Col1`, `NFT`, `LastLogin`, `CreateDate`) VALUES (NULL, 'q', 'q', 'q', 'q', '2022-08-19 20:10:54', CURRENT_TIMESTAMP);
function add_customer_enq($cEmail, $cWalletId)
{
    $pdo = Database::connect();
    $sql = "INSERT INTO customer_wallet_info (`id`, `cEmail`, `cWalletId`, `Col1`, `NFT`, `LastLogin`, `CreateDate`)  VALUES (NULL, '{$cEmail}', '{$cWalletId}', '0', NULL, NULL, CURRENT_TIMESTAMP)";
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


function get_with_Emailid($cEmail)
{
    $pdo = Database::connect();
    $sql = "SELECT * FROM customer_wallet_info where cEmail='{$cEmail}'  ";
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
    $sql = "SELECT * FROM customer_wallet_info LIMIT {$startCnt}, {$pageSize} ";
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