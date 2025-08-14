/* Minimal homepage interactions: search filter and dynamic year */
(function(){
  var yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  var searchInput = document.getElementById('tool-search');
  var grid = document.getElementById('tool-grid');
  if(!searchInput || !grid){ return; }

  var items = Array.prototype.slice.call(grid.querySelectorAll('.tool-card'));
  function normalize(text){ return (text||'').toLowerCase(); }

  function filter(){
    var q = normalize(searchInput.value);
    items.forEach(function(card){
      var title = normalize(card.querySelector('.tool-title') && card.querySelector('.tool-title').textContent);
      var desc = normalize(card.querySelector('.tool-desc') && card.querySelector('.tool-desc').textContent);
      var tags = normalize(card.getAttribute('data-tags'));
      var match = !q || title.indexOf(q) > -1 || desc.indexOf(q) > -1 || tags.indexOf(q) > -1;
      card.style.display = match ? '' : 'none';
    });
  }

  searchInput.addEventListener('input', filter);
})();


