/*CREATED BY KAVYA TRIVEDI*/
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buy-now');
    const searchInput = document.getElementById('search');
    const cards = document.querySelectorAll('.card');
/*CREATED BY KAVYA TRIVEDI*/
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });
/*CREATED BY KAVYA TRIVEDI*/
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        cards.forEach(card => { /*CREATED BY KAVYA TRIVEDI*/
            const itemName = card.getAttribute('data-name').toLowerCase();
            if (itemName.includes(searchTerm)) {
                card.style.display = 'block';
            } else { /*CREATED BY KAVYA TRIVEDI*/
                card.style.display = 'none';
            }
        });
    });
});
