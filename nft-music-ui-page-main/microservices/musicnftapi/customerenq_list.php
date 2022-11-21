<?php
include './databaseconfig.php';
?>
<!DOCTYPE html>
<html>
<head>
  <title>Select Linkedin Menu</title>
</head>
<body>
<style>
    table {
      border-collapse: collapse;
      width:100%;
      max-width: 100%; 
    }
    tr:hover {
        background-color: yellow;
    }
    th{
        background-color: #550000;
        color: #ffffff;
    }
    table, th, td {
      border: 1px solid black;
      word-break: break-all;
    }
</style>
<div>
    <a href="./customerenq_list.php?action=removeduplicate">Remove Duplicate</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./customerenq_list.php?action=movetomaindb">Move To Main DB</a>
</div>



<table sytle="width:100%">
    <tt>
        <th>id</th>
        <th>name</th>
        <th>emailid</th>
        <th>contactno</th>
        <th>comment</th>
        <th>status</th>
    </tr>
<?php 
    if($_GET['action']=="removeduplicate"){
        $pdo = Database::connect();
        $sql = "DELETE t1 FROM joinenq t1 INNER JOIN joinenq t2 WHERE t1.id < t2.id AND t1.fullname = t2.fullname AND t1.emailid = t2.emailid AND t1.contactno = t2.contactno AND t1.cstatus = t2.cstatus ;";
        $query = $pdo->prepare($sql);
        $query->execute(); 
        $query->fetchAll(PDO::FETCH_ASSOC);
        echo("action to remove");
    }
    if($_GET['action']=="movetomaindb"){
        $pdo = Database::connect();
        $sql = "DELETE t1 FROM joinenq t1 INNER JOIN joinenq t2 WHERE t1.id < t2.id AND t1.fullname = t2.fullname AND t1.emailid = t2.emailid AND t1.contactno = t2.contactno AND t1.cstatus = t2.cstatus ;";
        $query = $pdo->prepare($sql);
        $query->execute(); 
        $query->fetchAll(PDO::FETCH_ASSOC);
        echo("action to remove");
    }
        $pdo = Database::connect();
        $sql = "SELECT * FROM joinenq order by id DESC LIMIT 50 ";
        try {
            $query = $pdo->prepare($sql);
            $query->execute(); 
            foreach ($query->fetchAll(PDO::FETCH_ASSOC) as $row) {
                echo("<tr>");
                echo("<td>".$row['id']."</td>");
                echo("<td>".$row['fullname']."</td>");
                echo("<td>".$row['emailid']."</td>");
                echo("<td>".$row['contactno']."</td>");
                echo("<td>".$row['datetime']."</td>");
                echo("<td>".$row['cstatus']."</td>");
                echo("</tr>");
            }
        } catch (PDOException $e) {
            print "Error!: " . $e->getMessage() . "<br/>";
            die();
        }
        Database::disconnect();
     // close connection ?>
</table>


</body>
</html>