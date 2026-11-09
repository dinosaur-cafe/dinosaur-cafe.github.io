// Loads the newest menu data (no stale prices), then the page script.
(function () {
  var d = document.createElement('script');
  d.src = 'assets/menu-data.js?t=' + Date.now();
  d.onload = function () {
    var a = document.createElement('script');
    a.src = 'assets/app.js?v=5';
    document.body.appendChild(a);
  };
  document.body.appendChild(d);
})();
