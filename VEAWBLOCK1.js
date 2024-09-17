 // Извлечение элементов
 var modal = document.getElementById("learnMoreModal");
 var btn = document.getElementById("learnMoreBtn");
 var span = document.getElementsByClassName("new-close")[0];

 // Открытие модального окна
 btn.addEventListener("click", function(e) {
     e.preventDefault();
     modal.style.display = "block"; // Показать модал
     setTimeout(function() {
         modal.classList.add("show"); // Добавить класс для анимации
     }, 10);
 });

 // Закрытие модального окна
 span.addEventListener("click", function() {
     modal.classList.remove("show"); // Удалить класс для анимации
     setTimeout(function() {
         modal.style.display = "none"; // Скрыть модал
     }, 300);
 });

 // Закрытие модального окна при клике вне его
 window.addEventListener("click", function(event) {
     if (event.target == modal) {
         modal.classList.remove("show");
         setTimeout(function() {
             modal.style.display = "none";
         }, 300);
     }
 });