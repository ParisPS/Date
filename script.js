document.addEventListener('DOMContentLoaded', function () {
    const moreInfoButtons = document.querySelectorAll('.more-info-btn');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const cards = document.querySelectorAll('.card');

    moreInfoButtons.forEach(button => {
        button.addEventListener('click', function () {
            const card = button.parentElement;
            card.classList.toggle('expanded');
        });
    });

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const type = card.classList[1]; // A segunda classe define o tipo de encontro

            if (title.includes(searchTerm) || type.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});