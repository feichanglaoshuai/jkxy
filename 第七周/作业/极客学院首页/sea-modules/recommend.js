// 热门推荐
define('./sea-modules/recommend.js', function (require, exports, module) {
  var t = t || {
  };
  t = {
    init: function () {
      this.tap()
    },
    tap: function () {
      $('.hot-lesson ul li').tooltip('tag', {
        type: 'mouseover',
        selected: 'on',
        contentClass: '#hot-lessonbox .one-classfiy-lesson'
      })
    }
  },
  module.exports = t
});