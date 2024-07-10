document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buy-now');
    const searchInput = document.getElementById('search');
    const cards = document.querySelectorAll('.card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const itemName = card.getAttribute('data-name').toLowerCase();
            if (itemName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
