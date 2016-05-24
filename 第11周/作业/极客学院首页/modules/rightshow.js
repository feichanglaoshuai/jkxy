module.exports = function rightshow() {
  var t = {
    dom: {
      startList: $('ul[node-type="recommend-start-list"]'),
      moveList: $('div[node-type="recommend-move-list"]'),
      recommendMenu: $('li[node-type="recommend-move-event"]'),
      tabItem: $('li[node-type="recommend-tab-item"]'),
      contentBox: $('div[node-type="recommend-content-box"]'),
      typeList: $('ul[node-type="recommend-tab-list"]'),
      tabContent: 'ul[node-type="recommend-tab-content"]'
    },
    bindEvent: function () {
      t.dom.recommendMenu.on('mouseenter', function () {
        var e = $(this).index();
        t.util.showIntro(e)
      }),
      t.dom.tabItem.on('mouseenter', function () {
        var e = $(this).index();
        t.util.showIntro(e)
      }),
      t.dom.moveList.on('mouseleave', function () {
        t.util.toggleList(!1)
      })
    },
    conf: {
    },
    util: {
      toggleList: function (e) {
        e ? (t.dom.moveList.show(), t.dom.startList.hide())  : (t.dom.startList.show(), t.dom.moveList.hide())
      },
      showItem: function (e) {
        t.util.hideItem(),
        'string' == typeof e ? $(t.dom.tabContent).find('.' + e).show()  : 'number' == typeof e && $(t.dom.tabContent).eq(e).show()
      },
      setActive: function (e) {
        t.util.clearActive(),
        'string' == typeof e ? t.dom.tabItem.find('.' + e).addClass('active')  : 'number' == typeof e && t.dom.tabItem.eq(e).addClass('active')
      },
      clearActive: function () {
        t.dom.tabItem.removeClass('active')
      },
      hideItem: function () {
        $(t.dom.tabContent).hide()
      },
      showIntro: function (e) {
        t.util.toggleList(!0),
        t.util.setActive(e),
        t.util.showItem(e)
      }
    }
  };

  w = {
      init: function () {
        t.bindEvent()
      }
  };

  w.init();
}();

