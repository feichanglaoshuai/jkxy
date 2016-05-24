// 顶部导航
module.exports = function topnav() {
  var a = {
      dom: {
        navBtn: $('a[node-type="nav-link"]'),
        panelItem: $('li[node-type="nav-panel-item"]'),
        navPanel: $(".navpanel")
      },

      bindEvent: function () {
        a.dom.navBtn.hover(function () {
          var n = a.dom.navBtn.index(this);
          a.dom.panelItem.eq(n).css('background-color', '#F7F7F7'),
          a.dom.panelItem.eq(n).find('.angle').css('display', 'block'),
          a.dom.navPanel.css('display', 'block')
        }, function () {
          var n = a.dom.navBtn.index(this);
          a.dom.panelItem.eq(n).css('background-color', ''),
          a.dom.panelItem.eq(n).find('.angle').css('display', ''),
          a.dom.navPanel.css('display', '')
        }),
        a.dom.navPanel.mouseover(function() {
        a.dom.navPanel.css('display', 'block')
        }),
        a.dom.navPanel.mouseout(function() {
           a.dom.navPanel.css('display', 'none')
        })
      }
  };

  w = {
      init: function () {
        a.bindEvent()
      }
  };

  w.init();
}();
