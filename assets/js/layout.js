(function(){
  function ensureStyles(){
    var has = Array.prototype.some.call(document.styleSheets||[], function(ss){
      try{ return ss.href && ss.href.indexOf('assets/css/styles.css') !== -1; }catch(e){ return false; }
    });
    if(!has){
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'assets/css/styles.css';
      document.head.appendChild(link);
    }
  }

  function createHeader(){
    var header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = ''+
      '<div class="layout-container">\n'
      + '  <div class="brand">\n'
      + '    <img src="assets/favicon.svg" alt="logo" style="width:18px;height:18px"/>\n'
      + '    <a href="./index.html" class="title" style="color:inherit;text-decoration:none">GIS Map UTools</a>\n'
      + '  </div>\n'
      + '  <nav class="site-nav">\n'
      + '    <a class="nav-link" href="https://github.com/pking1997/gis_map_utools" target="_blank" rel="noopener noreferrer">GitHub</a>\n'
      + '  </nav>\n'
      + '</div>';
    return header;
  }

  function createFooter(){
    var footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = ''+
      '<div class="layout-container">\n'
      + '  <p>欢迎访问 GIS Map UTools，欢迎 Star 支持项目。</p>\n'
      + '  <p>2025 GIS Map UTools · 由 GitHub Pages 自动部署</p>\n'
      + '</div>';
    return footer;
  }

  function inject(){
    ensureStyles();
    if(!document.querySelector('.site-header')){
      document.body.insertBefore(createHeader(), document.body.firstChild);
    }
    if(!document.querySelector('.site-footer')){
      document.body.appendChild(createFooter());
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', inject);
  } else { inject(); }
})();


