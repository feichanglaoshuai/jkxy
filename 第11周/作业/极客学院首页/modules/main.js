
!function (e) {
  var t = 0,
  n = {
    init: function () {
    },
    pop: function (t) {
      function n() {
        null !== l.popFunc && l.popFunc();
        var t = '<div id=\'blacklayer\'></div>';
        e('body').append(t);
        var n = e(document).height();
        e('#blacklayer').css({
          zIndex: l.zIndex - 10,
          background: '#000',
          opacity: l.opacity,
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: n
        }),
        e('.popclose').bind('click', function () {
          s = 0,
          e('#blacklayer').remove(),
          null === l.popHtml ? e(l.popId).hide()  : e(l.popId).remove(),
          null != l.closePop && l.closePop()
        })
      }
      function o(t, n, i) {
        return 0 === s ? !1 : void (_jumpfunc = window.setTimeout(function () {
          if (t--, t > 0) {
            if (1 == a) return !1;
            e(n).html(t + '秒'),
            o(t, n, i)
          } else null == i ? (e('#blacklayer').remove(), e(l.popId).remove())  : document.location = i
        }, 1000))
      }
      var i = e(window).height(),
      r = e(window).width(),
      a = 0,
      s = 1,
      l = {
        width: 100,
        height: 100,
        zIndex: 9999,
        poparent: 'body',
        opacity: 0.5,
        popId: null,
        popHtml: null,
        popFunc: null,
        time: null,
        timeId: null,
        url: null,
        closePop: null
      };
      t && e.extend(l, t);
      var c,
      d = (r - l.width) / 2;
      return null === l.popHtml ? this.each(function () {
        var t = e(this);
        'auto' == l.height && (l.height = t.height()),
        c = (i - l.height) / 2,
        t.show(),
        t.css({
          width: l.width,
          height: l.height,
          zIndex: l.zIndex,
          top: c,
          left: d,
          position: 'fixed'
        }),
        n(),
        null !== l.time && o(l.time, l.timeId, l.url)
      })  : (null !== l.popHtml && (e(l.poparent).append(l.popHtml), 'auto' == l.height && (l.height = e(l.popId).height()), c = (i - l.height) / 2, e(l.popId).css({
        width: l.width,
        height: l.height,
        zIndex: l.zIndex,
        top: c,
        left: d,
        position: 'fixed'
      }), n()), void (null !== l.time && o(l.time, l.timeId, l.url)))
    },
    tag: function (t) {
      var n = {
        type: 'click',
        selected: 'on',
        contentClass: '.content',
        func: null
      };
      return t && e.extend(n, t),
      'click' != n.type && 'mouseover' != n.type ? !1 : (e(this).eq(0).addClass(n.selected), this.each(function () {
        function t() {
          var t = o.index();
          o.siblings().removeClass(n.selected),
          o.addClass(n.selected),
          e(n.contentClass).hide(),
          e(n.contentClass).eq(t).show(),
          null != n.func && n.func()
        }
        var o = e(this);
        e(n.contentClass).hide(),
        e(n.contentClass).eq(0).show(),
        o.bind(n.type, t)
      }))
    },
    imgmove: function (n) {
      function o() {
        var n = e(i.oneEle).size(),
        o = n * i.oneWidth,
        r = o / i.boxWidth;
        r % i.boxWidth > 0;
        var a = e(i.oneEle).parent();
        if (1 == i.loop) {
          e(i.oneEle).parent().width(o).css('left', - i.oneWidth);
          var a = e(i.oneEle).parent(),
          s = e(i.oneEle).last();
          a.prepend(s.clone()),
          s.remove()
        } else e(i.oneEle).parent().width(o);
        e(i.prev).click(function () {
          if (1 == i.loop) {
            var n = e(i.oneEle).last();
            TweenMax.to(a, 1, {
              left: 0,
              onComplete: function () {
                a.prepend(n.clone()),
                a.css('left', - i.oneWidth),
                e(i.oneEle).last().remove()
              },
              ease: Quart.easeOut
            })
          } else t > 0 && (t--, TweenMax.to(a, 1, {
            left: - i.boxWidth * t,
            ease: Quart.easeOut
          }))
        }),
        e(i.next).click(function () {
          1 == i.loop ? TweenMax.to(a, 0.4, {
            left: - i.oneWidth,
            onComplete: function () {
              a.css('left', '0px');
              var t = e(i.oneEle).slice(0, 1);
              a.append(t.clone()),
              e(i.oneEle).slice(0, 1).remove(),
              console.log('ok')
            },
            ease: Quart.easeOut
          })  : r - 1 > t && (t++, TweenMax.to(a, 1, {
            left: - i.boxWidth * t,
            ease: Quart.easeOut
          }))
        })
      }
      var i = {
        oneEle: null,
        oneWidth: null,
        loop: !1,
        boxWidth: null,
        prev: null,
        next: null
      };
      n && e.extend(i, n),
      o()
    }
  };
  e.fn.tooltip = function (t) {
    return n[t] ? n[t].apply(this, Array.prototype.slice.call(arguments, 1))  : 'object' != typeof t && t ? void e.error('Method ' + t + ' does not exist on jQuery.tooltip')  : n.init.apply(this, arguments)
  }
}(jQuery);
var JK_lock = 'open',
JKXY = JKXY || {
};
JKXY = {
  init: function () {
    this.gotop(),
    this.bindElem(),
    this.TopSearch()
  },
  bindElem: function () {
    $('#headsearch .search-btn').bind('click', JKXY.TopSearch),
    $('#user-name,.user-center,#user-name p').bind('mouseover', this.userContent),
    $('.lesson-list li').hover(JKXY.lessonHover, JKXY.lessonOut),
    $('.mod-tips .close').on('click', function () {
      $(this).parents('.mod-tips').remove()
    })
  },
  userContent: function () {
    $('.user-center').show(),
    $('.jiaotou').addClass('rotate'),
    JKXY.stopEventBubble(),
    $(document).bind('mouseover', function () {
      $('.user-center').hide(),
      $('.jiaotou').removeClass('rotate')
    })
  },
  Cookie: {
    cokpre: 'sso_',
    get: function (e) {
      for (var t = this.cokpre + e + '=', n = document.cookie.split(';'), o = 0; o < n.length; o++) {
        for (var i = n[o]; ' ' == i.charAt(0); ) i = i.substring(1, i.length);
        if (0 == i.indexOf(t)) {
          var r;
          try {
            r = unescape(i.substring(t.length, i.length))
          } catch (a) {
            r = unescape(i.substring(t.length, i.length))
          }
          return r
        }
      }
      return null
    },
    set: function (e, t, n, o, i, r) {
      var a;
      if ('number' == typeof n) {
        if (n > 0) {
          var s = new Date;
          s.setTime(s.getTime() + 24 * n * 60 * 60 * 1000),
          a = s.toGMTString()
        }
      } else a = 'String' == typeof n ? n : !1;
      document.cookie = this.cokpre + e + '=' + escape(t) + (a ? ';expires=' + a : '') + (o ? ';path=' + o : '') + (i ? ';domain=' + i : '') + (r ? ';secure' : '')
    },
    del: function (e, t, n, o) {
      JKXY.Cookie.set(e, '', - 1, t, n, o)
    }
  },
  stopEventBubble: function () {
    function e() {
      if (window.event) return window.event;
      for (func = e.caller; null != func; ) {
        var t = func.arguments[0];
        if (t && (t.constructor == Event || t.constructor == MouseEvent || t.constructor == KeyboardEvent || 'object' == typeof t && t.preventDefault && t.stopPropagation)) return t;
        func = func.caller
      }
      return null
    }
    var t = e();
    window.event ? t.cancelBubble = !0 : t.preventDefault && t.stopPropagation()
  },
  lessonHover: function () {
    $(this).find('.jd-line').hide();
    var e = $(this).find('.cricle'),
    t = $(this).attr('deg');
    if (1 != $(this).attr('stop')) {
      var e = $(this).find('.cricle'),
      t = $(this).attr('deg');
      new C(e, t),
      $(this).attr('stop', 1)
    }
    var n = $(this).find('.lessonplay');
    TweenMax.to(n, 0.6, {
      opacity: 1,
      ease: Quart.easeOut
    });
    var o = $(this).find('.cancel-favorites');
    o.length > 0 && o.attr('class').indexOf('cancel-stop') < 0 && o.show();
    var i = $(this).find('.lesson-shoucang');
    if (i.length > 0 && i.show(), 'close' === JK_lock) return !1;
    var r = $(this).children('.lesson-infor'),
    a = $(this).find('.learn-number'),
    s = $(this).find('.zhongji');
    a.show(),
    s.show(),
    r.addClass('lesson-hover'),
    $(this).find('.lessonicon-box').css('bottom', '-2px'),
    TweenMax.to(r, 0.6, {
      height: 175,
      ease: Quart.easeOut
    });
    var l = r.find('p');
    TweenMax.to(l, 0.15, {
      display: 'block',
      height: 52,
      opacity: 1,
      ease: Linear.easeOut
    })
  },
  lessonOut: function (e, t) {
    var t = 'object' == typeof t ? t : $(this);
    t.find('.jd-line').show();
    var n = t.find('.lessonplay');
    TweenMax.to(n, 0.6, {
      opacity: 0,
      ease: Quart.easeNone
    });
    var o = t.find('.cancel-favorites');
    o.length > 0 && o.attr('class').indexOf('cancel-stop') < 0 && o.hide();
    var i = t.find('.lesson-shoucang');
    if (i.length > 0 && i.attr('class').indexOf('ysc') < 0 && i.hide(), 'close' === JK_lock) return !1;
    var r = t.children('.lesson-infor'),
    a = t.find('.learn-number'),
    s = t.find('.zhongji');
    a.hide(),
    s.hide(),
    r.removeClass('lesson-hover'),
    t.find('.lessonicon-box').css('bottom', '4px'),
    TweenMax.to(r, 0.6, {
      height: 88,
      ease: Quart.easeNone
    });
    var l = r.find('p');
    TweenMax.to(l, 0.3, {
      height: 0,
      opacity: 0,
      display: 'none',
      ease: Linear.easeNone
    })
  },
  lessonNavHover: function () {
    $('.lesson-nav dd').mousemove(function () {
      var e = $(this).find('.cateLists-li a');
      TweenMax.to(e, 0.4, {
        marginLeft: '10px',
        ease: Quart.easeOut
      })
    }),
    $('.lesson-nav dd').mouseout(function () {
      var e = $(this).find('.cateLists-li a');
      TweenMax.to(e, 0.4, {
        marginLeft: '0px',
        ease: Quart.easeOut
      })
    })
  },
  TopSearch: function () {
    $('input[name=\'q\']').bind('focus', function () {
      $('.search-btn').addClass('search-btn2'),
      $('.hot-words').hide(),
      $(this).css({
        paddingRight: '55px'
      })
    }),
    $('input[name=\'q\']').bind('focusout', function () {
      $('.search-btn').removeClass('search-btn2'),
      $('.hot-words').show()
    }),
    $('#J_keywordList .result-list').delegate('.current', 'click', function () {
      var e = $(this).text();
      $('input[name=\'q\']').val(e)
    }),
    $('#headsearch').delegate('#J_keywordList', 'mouseleave', function () {
      $('#J_keywordList .result-list').empty(),
      $('#J_keywordList').hide()
    }),
    $('body').delegate('#headsearch', 'mouseleave', function () {
      $('#J_keywordList .result-list').empty(),
      $('#J_keywordList').hide()
    })
  },
  gotop: function () {
    function e(e) {
      $(window).height() < 830 && $(window).scrollTop() <= 490 ? $(e).fadeOut()  : $(e).fadeIn()
    }
  },
  getQuery: function (e) {
    var t = location.search.match(new RegExp('[?&]' + e + '=([^&]+)', 'i'));
    return null == t || t.length < 1 ? '' : t[1]
  }
},
JKXY.msgBox = function (e, t, n, o) {
  var t = t ? t : '亲爱的VIP，这是来自极客学院小雪的 Hello~',
  i = 'warning',
  n = parseInt(n) ? parseInt(n)  : 1500;
  switch (e) {
    case 1:
      var r = 'waring-success';
      break;
    case 0:
      var r = 'waring-failure';
      break;
    case 2:
    default:
      var r = 'waring-sub'
  }
  var a;
  a = '<div class="web-dia-tip ' + r + '" id="' + i + '" >',
  a += t,
  a += '</div>',
  $('body').append(a);
  var s = $('#' + i).width() / 2;
  $('#' + i).css('marginLeft', - s),
  $('#' + i).animate({
    top: '0px',
    opacity: 1
  }, 300, function () {
    $('#' + i).delay(n).animate({
      top: '-50px',
      opacity: 0
    }, 500, function () {
      $('#' + i).remove(),
      'function' == typeof o && o()
    })
  })
};
var C = function (e, t) {
  this.box = e,
  this.left = this.box.find('.left'),
  this.right = this.box.find('.cright'),
  this.mask = this.box.find('.mask'),
  this.text = this.box.find('.text'),
  this.d = 0,
  this.A = null,
  this.deg = t,
  this.init()
};
C.prototype = {
  init: function () {
    var e = this;
    this.A = window.setInterval(function () {
      e.change()
    }, 10)
  },
  change: function () {
    if (this.d > 180) {
      if (this.d > 360) return window.clearInterval(this.A),
      void (this.A = null);
      this.right.show(),
      this.mask.hide()
    }
    this.text.text(parseInt(this.d / 3.6) + '%'),
    this.left.css({
      '-webkit-transform': 'rotate(' + this.d + 'deg)',
      '-moz-transform': 'rotate(' + this.d + 'deg)'
    }),
    this.d < this.deg && (this.d += 6)
  }
},
JKXY.htmlEncode = htmlEncode = function (e) {
  var t = '';
  return 0 == e.length ? '' : (t = e.replace(/&/g, '&amp;'), t = t.replace(/</g, '&lt;'), t = t.replace(/>/g, '&gt;'), t = t.replace(/ /g, '&nbsp;'), t = t.replace(/\'/g, '&#39;'), t = t.replace(/\"/g, '&quot;'), t = t.replace(/\n/g, '<br>'))
},
JKXY.htmlDecode = htmlDecode = function (e) {
  var t = '';
  return 0 == e.length ? '' : (t = e.replace(/&amp;/g, '&'), t = t.replace(/&lt;/g, '<'), t = t.replace(/&gt;/g, '>'), t = t.replace(/&nbsp;/g, ' '), t = t.replace(/&#39;/g, '\''), t = t.replace(/&quot;/g, '"'), t = t.replace(/<br>/g, '\n'))
},
JKXY.msgBox = function (e, t, n, o) {
  var t = t ? t : '亲爱的VIP，这是来自极客学院小雪的 Hello~',
  i = 'warning',
  n = parseInt(n) ? parseInt(n)  : 2000;
  switch (e) {
    case 1:
      var r = 'waring-success';
      break;
    case 0:
      var r = 'waring-failure';
      break;
    case 2:
    default:
      var r = 'waring-sub'
  }
  var a;
  a = '<div class="web-dia-tip ' + r + '" id="' + i + '" >',
  a += t,
  a += '</div>',
  $('body').append(a);
  var s = $('#' + i).width() / 2;
  $('#' + i).css('marginLeft', - s),
  $('#' + i).animate({
    top: '0px',
    opacity: 1
  }, 300, function () {
    $('#' + i).delay(n).animate({
      top: '-50px',
      opacity: 0
    }, 500, function () {
      $('#' + i).remove(),
      'function' == typeof o && o()
    })
  })
};
var EVENTDOMAIN = {
  domain: function (e) {
    var t = /http:\/\/([^\/]+)\//i,
    n = e.match(t);
    return n = n[1],
    d_arr = n.split('.'),
    n = d_arr[d_arr.length - 2] + '.' + d_arr[d_arr.length - 1]
  },
  domain_pre: function (e) {
    var t = /http:\/\/([^\/]+)\//i,
    n = e.match(t);
    return n = n[1],
    d_arr = n.split('.'),
    d_arr[0]
  },
  domain_arr: function (e) {
    var t = /http:\/\/([^\/]+)\//i,
    n = e.match(t);
    return n = n[1],
    d_arr = n.split('.')
  },
  currentUrl: window.location.href
},
split = document.location.host.split('.'),
_length1 = split.length - 1,
_length2 = split.length - 2,
EVENT_HOST_PRE = '.' + split[_length2] + '.' + split[_length1];
navigator.userAgent.match(/mobile/i) || (window.onmousedown = function () {
  return window.event && 2 == event.button ? !1 : void 0
}, document.oncontextmenu = stop),
JKXY.addScript = function (e) {
  var t = document.getElementsByTagName('HEAD').item(0),
  n = document.createElement('script');
  n.type = 'text/javascript',
  n.src = e,
  t.appendChild(n)
},
$(function () {
  JKXY.init()
});
;
var shoucang = {
  init: function () {
    this.bindEle()
  },
  lock: 'true',
  isShoucang: !0,
  bindEle: function () {
    $('.cancel-favorites').one('click', this.collection2),
    this.lock && ($('.lesson-shoucang').unbind('click'), $('.lesson-shoucang').bind('click', this.collection2));
    var n = this;
    $('.lesson-list li').hover(n.lessonHover, n.lessonOut)
  },
  collection2: function () {
    shoucang.lock = !1;
    var n = $(this),
    o = n.parents('li').attr('id');
    shoucang.isShoucang && (n.hasClass('ysc') ? n.removeClass('ysc')  : n.addClass('ysc'), shoucang.isShoucang = !1, shoucang.lock = !0),
    shoucang.lock && (n.hasClass('cancel-favorites') ? shoucang.collecFunction(o, 'remove')  : shoucang.collecFunction(o))
  },
  collecFunction: function (n, o) {
    $.ajax({
      type: 'get',
      url: '/course/fav',
      success: function (c) {
        JKXY.msgBox(1, c.msg, 1500, function () {
          shoucang.isShoucang = !0
        }),
        'remove' == o && $('#' + n).remove()
      },
      data: {
        course_id: n
      },
      complete: function () {
      },
      dataType: 'json'
    })
  },
  lessonHover: function () {
    $(this).find('.jd-line').hide()
  },
  lessonOut: function (n, o) {
    var o = 'object' == typeof o ? o : $(this);
    o.find('.jd-line').show()
  }
};

$(function () {
  shoucang.init()
});

var main = function () {
    require('./swiper');
    require('./enterprise');
    require('./excellent');
    require('./focuswork');
    require('./header');
    require('./jkswiper');
    require('./leftnav');
    require('./leftnav2');
    require('./openclass');
    require('./pageloading');
    require('./projectpath');
    require('./recommend');
    require('./rightshow');
    require('./topnav');
}();