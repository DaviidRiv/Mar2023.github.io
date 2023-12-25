window.onload = function() {
  document.getElementById('content').style.display = 'block';
  gsap.to('#image1', { opacity: 1, duration: 1 });
  gsap.to('#text1', { opacity: 1, duration: 1 });
  gsap.to('#image2', { opacity: 1, duration: 1 });
  gsap.to('#text2', { opacity: 1, duration: 1 });
};