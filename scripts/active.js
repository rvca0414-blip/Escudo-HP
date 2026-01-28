function toggleArticle(element) {
  const isOpen = element.classList.contains('open');
  
  // すべての記事を閉じる
  document.querySelectorAll('.newspaper-article').forEach(article => {
    article.classList.remove('open');
  });
  
  // クリックされた記事が閉じていた場合は開く
  if (!isOpen) {
    element.classList.add('open');
  }
}