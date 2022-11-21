<?php
    $msg = '';
    if (   !empty($_POST['username']) && !empty($_POST['password'])) {
       if ($_POST['username'] == 'role0' && $_POST['password'] == 'role0') {
          $_SESSION['valid'] = true;
          $_SESSION['timeout'] = time();
          $_SESSION['username'] = 'role1';
          
          $details="";

          $details=$details."<br/> CRM Board:= http://intelora.co.in/iordcrm/dashboard.html";
          $details=$details."<br/> Candidates:= http://intelora.co.in/dataexplorer/candidatelist.php";
          $details=$details."<br/> HR Board:= http://intelora.co.in/dataexplorer/hrdashboard.php";
          $details=$details."<br/> Vendors:= http://intelora.co.in/dataexplorer/indexvendor.php";
          $details=$details."<br/> Interviews:= http://intelora.co.in/dataexplorer/interivewlist.php";
          $details=$details."<br/> LeadGen:= http://intelora.co.in/dataexplorer/leadsgen.php";
          $details=$details."<br/>";
          $details=$details."<br/> contactAPI:= http://intelora.co.in/api/rest/buz/contact_services.php";
          $details=$details."<br/> invoiceAPI:= http://intelora.co.in/api/rest/buz/invoice_services.php";
          $details=$details."<br/> noteaAPI:= http://intelora.co.in/api/rest/buz/note_services.php";
          $details=$details."<br/> projectAPI:= http://intelora.co.in/api/rest/buz/project_services.php";
          $details=$details."<br/> deviceAPI:= http://intelora.co.in/api/rest/common/device_services.php";
          $details=$details."<br/> enqAPI:= http://intelora.co.in/api/rest/common/enquiry_services.php";
          $details=$details."<br/> userAPI:= http://intelora.co.in/api/rest/common/user_services.php";
          $details=$details."<br/>";
          $details=$details."<br/> DontKnow:= http://intelora.co.in/demoTask/index.php";
          $details=$details."<br/> GChatmsg:= http://intelora.co.in/googleTool/chatmsg";
          $details=$details."<br/> GContacts:= http://intelora.co.in/googleTool/contacts";
          $details=$details."<br/> Buz Lead:= http://intelora.co.in/dataexplorer/buzleads.php";

          echo $details;
       }else {
          $msg = 'Page under construction';
       }
    }
 ?>
 
 
 <form class = "form-signin" role = "form" action = "./map.php" method = "post">
    <h4 class = "form-signin-heading"><?php echo $msg; ?></h4>
    <input type = "text" class = "form-control" 
       name = "username" placeholder = "username" 
       required autofocus></br>
    <input type = "password" class = "form-control"
       name = "password" placeholder = "password" required>
    <button class = "btn btn-lg btn-primary btn-block" type = "submit" 
       name = "login">Login</button>
 </form>