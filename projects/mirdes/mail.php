<?php 
// Получаем данные с элементами формы
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Обрабатываем полученные данные
    //Преобразование символов в сущности(мнемоники)
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
    //декодирование URL
$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
    //удаляем пробельные символы
$name = trim($name); 
$phone = trim($phone);
$email = trim($email);

//Отправляем данные на почту
if(mail("mars.imus1989@gmail.com",
        "Новая заявка",
        "Имя: ".$name."\n".
        "Телефон: ".$phone."\n".
        "Email: ".$email,
        "From: no-reply@mydomain.ru \r\n")
){
    echo('Письмо отправлено!');
} else {
    echo('Проверьте введённые данные...')
}
?>