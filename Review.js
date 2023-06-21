const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    // Update the rating
    const rating = index + 1;
    console.log('You rated us: ' + rating);

    // Display a thank you message or perform other actions
    // Here, I'll just change the star colors to gold
    stars.forEach((s, i) => {
      if (i < rating) {
        s.style.color = 'gold';
      } else {
        s.style.color = '#ccc';
      }
    });
  });
});
