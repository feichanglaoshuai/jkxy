// 头部
module.exports = function header() {
  var n = n || {
  };
  n = {
    init: function () {
      var t = this;
      t.render(),
      t.bind(),
      this.closerightrwm()
    },
    closerightrwm: function () {
      $('#BAIDU_DUP_fp_wrapper');
      $('.top-apprwm>span').click(function () {
        $('.top-apprwm').remove()
      })
    },
    render: function () {
      var t = this;
      t.btn = $('.header'),
      t.$sbtn = $('.search-btn'),
      t.$sipt = $('#web_search_header')
    },
    bind: function () {
      var t = this;
      t.btn.on('click', $.proxy(t.test, this)),
      t.$sbtn.bind('click', $.proxy(t.sbtnGo, this)),
      t.$sipt.bind('keyup', $.proxy(t.siptKeyUp, this))
    },
    sbtnGo: function () {
      var t = this,
      e = t.$sipt.val();
      location.href = 'http://search.jikexueyuan.com/course/?q=' + e
    },
    siptKeyUp: function (t) {
      var e = this;
      (13 == t.keyCode || 10 == t.keyCode) && e.$sbtn.click(),
      '0' == $('#web_search_header').val().length && ($('#J_keywordList .result-list').empty(), $('#J_keywordList').hide())
    },
    test: function (t) {
      $(t.target)
    }
  },

  n.init();
}();