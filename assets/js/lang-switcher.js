// assets/js/lang-switcher.js

document.addEventListener('DOMContentLoaded', function () {
  var select = document.getElementById('lang-switch');
  if (!select) return; // 다른 페이지에서 셀렉터 없으면 그냥 종료

  select.addEventListener('change', function (e) {
    var lang = e.target.value;
    var origin = window.location.origin; // https://nona99.github.io
    var url = origin + '/';              // 기본: EN

    if (lang === 'ko') {
      url = 'https://nine-ai.tistory.com/';
    } else if (lang === 'ja') {
      url = origin + '/ja/';
    } else if (lang === 'zh') {
      url = origin + '/zh/';
    }

    window.open(url, '_blank');
  });
});
