// 页面加载
module.exports = function pageloading() {
  var t = t || {
  };
  t = {
    init: function (e) {
      var a = this;
      a.loading(),
      t.def(e),
      t.bind()
    },
    def: function (e) {
      window.commonSearch = function () {
        $.ajax({
          type: 'get',
          url: '/search/headsuggest',
          success: function (a) {
            if (!(200 != a.code || !a.data instanceof Array || a.data.length <= 0)) {
              var n = $('#J_keywordList ul');
              $('#J_keywordList').hide(),
              n.empty();
              for (var t = 0, o = a.data.length; o > t; t++) $('#J_keywordList ul').append('<li class="current">                      <a href="' + e + '/course/?q=' + a.data[t] + '"> ' + a.data[t] + '</a>                      </li>');
              $('#J_keywordList').show()
            }
          },
          data: {
            val: encodeURIComponent(window.searchSuggestEle.target.value)
          },
          dataType: 'json'
        })
      }
    },
    bind: function () {
      var e,
      a = $('#web_search_header');
      a.on('keyup', function (a) {
        window.searchSuggestEle = a,
        clearTimeout(e),
        e = setTimeout('commonSearch()', 200)
      })
    },
    loading: function () {
      var e = $('.loading-length');
      e.animate({
        width: $(window).width()
      }, 300)
    }
  },

  t.init();
}();