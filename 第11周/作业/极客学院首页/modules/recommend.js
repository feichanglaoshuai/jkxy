// 热门推荐
module.exports = function recommend() {
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

  t.init();
}();