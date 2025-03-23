// Функція для додавання товару в кошик
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Товар додано в кошик');
    });
});

// Форма для зворотного зв’язку
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ваше повідомлення відправлено!');
});
