
document.getElementById('celebrate-btn').addEventListener('click', () => {
    const confettiContainer = document.getElementById('confetti-container');
  
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      
      // Random positioning and colors
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.top = `${Math.random() * 100}vh`;
      confetti.style.backgroundColor = getRandomColor();
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5 seconds
      
      confettiContainer.appendChild(confetti);
  
      // Remove confetti after animation ends
      confetti.addEventListener('animationend', () => {
        confetti.remove();
      });
    }
  });
  
  // Helper function to generate random colors
  function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#F1C40F', '#8E44AD', '#1ABC9C'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  