document.addEventListener('DOMContentLoaded', () => {
    const genreDropdownItems = document.querySelectorAll('.dropdown-item');
    const movieCards = document.querySelectorAll('.card');
  
    genreDropdownItems.forEach(item => {
      item.addEventListener('click', (event) => {
        const selectedGenre = event.target.textContent.trim();
  
        movieCards.forEach(card => {
          const cardGenre = card.getAttribute('data-genre');
          if (selectedGenre === 'All' || cardGenre === selectedGenre) {
            card.parentElement.style.display = 'block';
          } else {
            card.parentElement.style.display = 'none';
          }
        });
      });
    });
  });
  