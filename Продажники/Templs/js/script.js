// Функция для вызова input файла при клике на иконку редактирования
function triggerFileInput() {
    document.getElementById('fileInput').click();
}

// Функция для предварительного просмотра загруженного фото
function previewImage() {
    const fileInput = document.getElementById('fileInput');
    const profileImage = document.getElementById('profileImage');
    const defaultIcon = document.getElementById('defaultIcon');

    // Проверяем, загружен ли файл
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        // Чтение файла и отображение в контейнере
        reader.onload = function(e) {
            profileImage.src = e.target.result;
            profileImage.style.display = 'block'; // Показываем изображение
            defaultIcon.style.display = 'none';  // Скрываем иконку пользователя
        };

        reader.readAsDataURL(fileInput.files[0]); // Чтение файла как URL
    }
}

function toggleGlow(button) {
    button.classList.toggle("glowing");
}
function MenuFilter() {
    let FilterMenu = document.getElementById("Filters");
    if (FilterMenu.style.display === "none") {
        FilterMenu.style.display = "block";
    } else {
        FilterMenu.style.display = "none";
    }
}