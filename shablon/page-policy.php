<?php 

// template Name: policy;

?>

<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package cleanTheme
 */

get_header();
?>

<main>
        <div class="container">
        <p>
            
        </p>
        </div>
        
        </main>

    <?php
get_footer();?>

<?php 
  if(!isset($_POST['.tel'])){ 
   ?> <form action="send.php" method="post"> 
  <input type="text" name=".tel" placeholder="Укажите телефон" required> 
  <input type="submit" value="Отправить"> 
  </form> <?php 
  } else { 
   $tel = $_POST['.tel']; 
   $tel = htmlspecialchars($.tel); 
   $tel = urldecode($.tel); 
   $tel= trim($.tel); 
   if (mail("pitrnaimushin@gmail.com", "Заявка с сайта", .tel: ".tel ,"From: administrator_mail@mosecobox.ru \r\n")){  
   echo "Сообщение успешно отправлено";  
   } else {  
   echo "При отправке сообщения возникли ошибки"; 
   } 
  } 
  ?>