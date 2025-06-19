document.querySelectorAll(".slots .more").forEach((btn) => {
    btn.addEventListener("click", function () {
      const parent = btn.closest(".slots");
      const hiddenSlots = parent.querySelectorAll(".extra-time");
      hiddenSlots.forEach(slot => slot.style.display = "inline-block");
      btn.style.display = "none";
    });
  });


document.querySelectorAll('.star-rating').forEach(ratingContainer => {
    const stars = ratingContainer.querySelectorAll('.star');
    let currentRating = 0;
  
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const clickedValue = parseInt(star.getAttribute('data-value'));
        currentRating = (currentRating === clickedValue) ? 0 : clickedValue;
  
        updateStars(stars, currentRating);
      });
    });
  });
  
  function updateStars(stars, rating) {
    stars.forEach(star => {
      const value = parseInt(star.getAttribute('data-value'));
      if (value <= rating) {
        star.classList.add('yellow');
      } else {
        star.classList.remove('yellow');
      }
    });
  }
  