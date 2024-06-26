  
  /*<![CDATA[*/
  /*@shinsenter/defer.js@2.5.0*/
   !function(r,i,t){var u,o=/^data-(.+)/,a='IntersectionObserver',c=/p/.test(i.readyState),s=[],f=s.slice,l='deferjs',n='load',e='pageshow',d='forEach',h='shift';function m(e){i.head.appendChild(e)}function v(e,n){f.call(e.attributes)[d](n)}function p(e,n,t,o){return o=(o=n?i.getElementById(n):o)||i.createElement(e),n&&(o.id=n),t&&(o.onload=t),o}function y(e,n){return f.call((n||i).querySelectorAll(e))}function b(t,e){y('source',t)[d](b),v(t,function(e,n){(n=o.exec(e.name))&&(t[n[1]]=e.value)}),e&&(t.className+=' '+e),n in t&&t[n]()}function I(e){u(function(o){o=y(e||'[type=deferjs]'),function e(n,t){(n=o[h]())&&(n.parentNode.removeChild(n),(t=p(n.nodeName)).text=n.text,v(n,function(e){'type'!=e.name&&t.setAttribute(e.name,e.value)}),t.src&&!t.hasAttribute('async')?(t.onload=t.onerror=e,m(t)):(m(t),e()))}()})}(u=function(e,n){c?t(e,n):s.push(e,n)}).all=I,u.js=function(n,t,e,o){u(function(e){(e=p('SCRIPT',t,o)).src=n,m(e)},e)},u.css=function(n,t,e,o){u(function(e){(e=p('LINK',t,o)).rel='stylesheet',e.href=n,m(e)},e)},u.dom=function(e,n,t,z,o,i){function c(e){o&&!1===o(e)||b(e,t)}u(function(t){t=a in r&&new r[a](function(e){e[d](function(e,n){e.isIntersecting&&(n=e.target)&&(z&&z(n),t.unobserve(n),c(n))})},i),y(e||'[data-src]')[d](function(e){l in e||(e[l]=1,t?t.observe(e):c(e))})},n)},u.reveal=b,r.Defer=u,r.addEventListener('on'+e in r?e:n,function(){for(I();s[0];t(s[h](),s[h]()))c=1})}(this,document,setTimeout);'IntersectionObserver'in window||document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');function related_temp(e){return(e.title?'<div class="widget-title position-relative  mb-3 text-uppercase fw-light"><span>'+e.title+"<\/span><\/div>":"")+'<div class="row row-cols-sm-2">'+e.posts.map(function(e,t){return'<article class="mb-4"><div class="h-100 overflow-hidden rounded position-relative border Ar-border-light bg-archive shadow-sm">'+(e.img?'<div class="item-thumbnail"><a class="Ar-bg-light d-block ratio ratio-21x9" href="'+e.url+'"><img alt="'+e.title+'" class="object-cover lazy-'+e.grup_id+' lazyload" data-src="'+e.img+'" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/><\/a><\/div>':"")+'<div class="item-content p-4"><h2 class="item-title fs-6 mb-2" itemprop="headline"><a class="text-reset" href="'+e.url+'">'+e.title+'<\/a><\/h2><div class="item-meta text-secondary d-flex flex-wrap fw-light">'+("Unknown"!=e.author?'<small class="me-2"><svg aria-hidden="true" class="me-1 Ar-icon"><use xlink:href="#i-user"/><\/svg>'+e.author+"<\/small>":"")+'<small class="me-2"><svg aria-hidden="true" class="me-1 Ar-icon"><use xlink:href="#i-clock"/><\/svg>'+e.date+"<\/small><\/div><\/div><\/div><\/article>"}).join("")+"<\/div>"}
   
   
   function sitemap_temp(e){return'<div class="accordion">'+e.categories.map(function(e,t){return'<div class="accordion-item"><input '+(0==t?"checked":"")+' id="sitemap-list-'+t+'" name="sitemap" type="radio" class="d-none"/><label for="sitemap-list-'+t+'" class="accordion-header accordion-button collapsed">'+e.term+'<\/label><div class="accordion-collapse collapse border-top Ar-border-light d-block-check"><div class="accordion-body"><div class="sitemap-list" data-label="'+e.term+'" data-func="sitemap_list_temp" data-items="9999"><div class="text-center"><div class="spinner-grow text-light" role="status"><span class="visually-hidden">Loading...<\/span><\/div><\/div><\/div><\/div><\/div><\/div>'}).join("")+"<\/div>"}
   
   
   
   function sitemap_list_temp(e){return'<ul class="list-unstyled fs-7">'+e.posts.map(function(e,t){return'<li class="mb-2"><a href="'+e.url+'">'+e.title+"<\/a><\/li>"}).join("")+"<\/ul>"}function sitemap_cb(e){var t=".sitemap-list";null!==document.querySelector(t)&&Defer.dom(t,100,"loaded",jo.loadCustomPosts)}
   
   
   function related_inline_temp(e){return'<div class="px-3 py-2 mb-4 border border-3 Ar-border-light rounded">'+(e.title?'<div class="fw-light pb-3"><span>'+e.title+"<\/span><\/div>":"")+'<ul class="ps-3 fw-bold">'+e.posts.map(function(e,t){return'<li class="mb-2"><a href="'+e.url+'">'+e.title+"<\/a><\/li>"}).join("")+"<\/ul><\/div>"}
   
   

   
   function layout1_temp(e){return(e.title?'<div class="widget-title mb-3 text-uppercase fw-light"><span>'+e.title+"<\/span><\/div>":"")+'<div class="widget-content row">'+e.posts.map(function(e,t){return 0==t?'<article class="mb-4"><div class="d-sm-flex overflow-hidden rounded-3 border Ar-border-light bg-archive shadow-sm">'+(e.img?' <div class="item-thumbnail col-sm-6"> <a class="d-block Ar-bg-light overflow-hidden rounded-3 ratio ratio-21x9 ratio-sm-4x3" href="'+e.url+'"> <img alt="'+e.title+'" class="lazy-'+e.grup_id+' lazyload" data-src="'+e.img+'" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/> <\/a> <\/div>':"")+'<div class="item-content col p-4"><h3 class="item-title fs-6 fs-md-4 mb-3"><a class="text-reset" href="'+e.url+'">'+e.title+'<\/a><\/h3><p class="item-snippet d-none d-md-block mb-3">'+(100<e.summary.length?e.summary.substr(0,150)+"...":e.summary)+'<\/p><div class="item-meta text-secondary d-flex flex-wrap fw-light">'+("Unknown"!=e.author?'<small class="me-2"><svg aria-hidden="true" class="me-1 Ar-icon"><use xlink:href="#i-user"/><\/svg>'+e.author+"<\/small>":"")+'<small class="me-2"><svg aria-hidden="true" class="me-1 Ar-icon"><use xlink:href="#i-clock"/><\/svg>'+e.date+"<\/small><\/div><\/div><\/div><\/article>":'<article class="col-md-6 mb-4"><div class="d-flex h-100 overflow-hidden rounded-3 border Ar-border-light bg-archive shadow-sm">'+(e.img?' <div class="item-thumbnail" style="width:120px"> <a class="d-block Ar-bg-light overflow-hidden rounded-3 ratio ratio-4x3" href="'+e.url+'"> <img alt="'+e.title+'" class="lazy-'+e.grup_id+' lazyload" data-src="'+e.img+'" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/> <\/a> <\/div>':"")+'<div class="item-content col py-2 px-3 align-self-center"><h3 class="item-title fs-7 mb-1"><a class="text-reset" href="'+e.url+'">'+e.title+'<\/a><\/h3><div class="item-meta fw-light text-secondary d-flex flex-wrap fs-8">'+("Unknown"!=e.author?'<small class="me-2"><svg aria-hidden="true" class="me-1 Ar-icon"><use xlink:href="#i-user"/><\/svg>'+e.author+"<\/small>":"")+'<small class="me-2"><svg aria-hidden="true" class="me-1 Ar-icon"><use xlink:href="#i-clock"/><\/svg>'+e.date+"<\/small><\/div><\/div>\n<\/div><\/article>"}).join("")+"<\/div>"}
   
   
   
   
   function layout2_temp(e){return(e.title?'<div class="widget-title mb-3 text-uppercase fw-light"><span>'+e.title+"<\/span><\/div>":"")+'<div class="widget-content">'+e.posts.map(function(e,t){return'<article class="mb-4"><div class="h-100 position-relative overflow-hidden rounded border Ar-border-light bg-archive shadow-sm">'+(e.img?' <div class="item-thumbnail"> <a class="d-block Ar-bg-light overflow-hidden rounded-3 ratio ratio-21x9" href="'+e.url+'"> <img alt="'+e.title+'" class="lazy-'+e.grup_id+' lazyload" data-src="'+e.img+'" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/> <\/a> <\/div>':"")+'<div class="item-content px-4 py-3"><h2 class="item-title fs-6 mb-2"><a class="text-reset" href="'+e.url+'">'+e.title+'<\/a><\/h2><div class="item-meta text-secondary d-flex flex-wrap fw-light">'+("Unknown"!=e.author?'<small class="me-2"><svg aria-hidden="true" class="me-1 Ar-icon"><use xlink:href="#i-user"/><\/svg>'+e.author+"<\/small>":"")+'<small class="me-2"><svg aria-hidden="true" class="me-1 Ar-icon"><use xlink:href="#i-clock"/><\/svg>'+e.date+"<\/small><\/div><\/div><\/div><\/article>"}).join("")+"<\/div>"}
   
   
   
   
   function sidebar_temp(e){return(e.title?'<div class="widget-title position-relative fs-6 mb-3"><span>'+e.title+"<\/span><\/div>":"")+'<div class="mb-4 ">'+e.posts.map(function(e,t){return'<div class="Allfix item-post d-flex mb-3">'+(e.img?'<div class="item-thumbnail me-3" style="width:85px"><a class="d-block rounded-3 Ar-bg-light overflow-hidden ratio ratio-1x1" href="'+e.url+'"><img alt="'+e.title+'" class="object-cover lazy-'+e.grup_id+' lazyload" data-src="'+e.img+'" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/><\/a><\/div>':"")+'<div class="item-content col overflow-hidden"><h3 class="item-title fs-7 mb-2" itemprop="headline"><a class="text-reset" href="'+e.url+'">'+e.title+'<\/a><\/h3><div class="item-meta text-secondary d-flex flex-wrap fs-8"><small class="me-2"><svg aria-hidden="true" class="me-1 Ar-icon"><use xlink:href="#i-clock"/><\/svg>'+e.date+"<\/small><\/div><\/div><\/div>"}).join("")+"<\/div>"}
   
   
   
   
function toc_temp(r){var d=0,o=1;return'<div id="toc-post" class="d-inline-block px-3 py-2 mb-4 jt-bg-light rounded Jihedss"><input id="toc-toggle" class="d-none" autocomplete="off" type="checkbox"/><label for="toc-toggle" class="toc-toggler d-flex align-items-center"><span class="fw-light pe-3">قائمة المحتويات</span><span class="dropdown-toggle ms-auto"></span></label>'+r.map(function(e,t){var l=e.level,s="";if(0==t)s+='<ul class="ps-3 pt-3 d-none d-block-check fs-7">';else if(d<l)s+='<ul class="ps-3 pt-2 fs-8"><li>',o++;else if(l<d&&1<o){for(var i=0;i<d-l;i++)s+="</li></ul>";o--}if(d=l,s+=0<t?"</li>":"",s+='<li class="mb-2">',s+='<a class="text-reset hover-text-primary" href="#'+e.id+'">'+e.title+"</a>",t==r.length-1)for(var a=1;a<d;a++)s+="</li></ul>";return s}).join("").replace(/<li>\s*<\/li>/gi,"")+"</div>"}
   
   function generate_url_temp(e){return'<div class="py-4"><div class="progress mx-auto mb-3" style="max-width:300px"><div class="progress-bar progress-bar-striped progress-bar-animated Ar-bg-primary" style="width:1%"><\/div><\/div><div class="text-center"><a class="btn btn-sm fw-bold py-2 px-4 rounded-pill Ar-btn-primary disabled" href="#">'+(e.getAttribute("data-before")||"Generate Url")+"<\/a><\/div><\/div>"}
  


function ArCallback(){
  /*Your Script is here to maintain performance.*/
/* lazy youtube */

( function() {var youtube = document.querySelectorAll(".lazyYoutube"); for (var i = 0; i < youtube.length; i++) {var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg"; var image = new Image(); image.setAttribute("class", "lazyload"); image.setAttribute("data-src",source); image.setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="); image.setAttribute("alt","Youtube video"); image.addEventListener( "load", function() {youtube[ i ].appendChild( image );}( i ) ); youtube[i].addEventListener( "click", function() {var iframe = document.createElement( "iframe" ); iframe.setAttribute( "frameborder", "0" ); iframe.setAttribute( "allowfullscreen", "" ); iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" ); this.innerHTML = ""; this.appendChild( iframe ); }); }; })();

  // the example below if you use url.
  // Defer.css('your_css_url','your-style-id',1);
  // Defer.js('your_script_url','your-script-id',1);


  }
  
  
  
  
  
  
  
  
  /*]]>*/
    
    
  