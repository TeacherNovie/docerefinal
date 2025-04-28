document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('commentForm');
  const commentsList = document.getElementById('commentsList');
  function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    commentsList.innerHTML = '';
    comments.forEach(c => {
      const div = document.createElement('div');
      div.classList.add('comment');
      div.innerHTML = `<h4>${c.name} (${c.rating}/5)</h4><p>${c.comment}</p>`;
      commentsList.appendChild(div);
    });
  }
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    comments.push({ name, rating, comment });
    localStorage.setItem('comments', JSON.stringify(comments));
    form.reset();
    loadComments();
  });
  loadComments();
});