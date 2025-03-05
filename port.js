
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in, .fade-out').forEach(element => {
    observer.observe(element);
  });
});
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('preloader').style.display = 'none';
  }, 2000); // 2000 milliseconds = 2 seconds
});
