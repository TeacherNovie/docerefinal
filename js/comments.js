document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submit-comment');
  const nameInput = document.getElementById('name');
  const ratingInput = document.getElementById('rating');
  const commentText = document.getElementById('comment-text');
  const commentsList = document.getElementById('comments-list');

  function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    commentsList.innerHTML = '';
    comments.forEach(c => {
      const div = document.createElement('div');
      div.className = 'comment';
      div.innerHTML = `<h3>${c.name} - ${'★'.repeat(c.rating)}</h3><p>${c.text}</p>`;
      commentsList.appendChild(div);
    });
  }

  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const rating = ratingInput.value;
    const text = commentText.value.trim();
    if (!name || !text) {
      alert('Please enter your name and comment.');
      return;
    }
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    comments.push({ name, rating, text });
    localStorage.setItem('comments', JSON.stringify(comments));
    nameInput.value = '';
    ratingInput.value = '5';
    commentText.value = '';
    loadComments();
  });

  loadComments();
});