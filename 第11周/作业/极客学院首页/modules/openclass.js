// 最新公开课
module.exports = function openclass() {
  var Swiper = require("./swiper");

  jQuery.fn.placeholder = function () {
    var e = document.createElement('input'),
    t = 'placeholder' in e;
    if (!t) {
      var n = jQuery(this);
      n.each(function () {
        var e = jQuery(this),
        t = e.attr('placeholder'),
        n = 0,
        i = e.outerHeight(),
        a = e.outerWidth(),
        s = jQuery('<span class="phTips">' + t + '</span>');
        try {
          n = 1 * e.css('padding-left').match(/\d*/i) [0]
        } catch (o) {
          n = 5
        }
        s.css({
          'margin-left': - (a - n),
          height: i,
          'line-height': i + 'px',
          position: 'absolute',
          color: '#cecfc9',
          'font-size': '12px'
        }),
        s.click(function () {
          e.focus()
        }),
        s.css('' != e.val() ? {
          display: 'none'
        }
         : {
          display: 'inline'
        }),
        s.insertAfter(e),
        e.keyup(function () {
          s.css('' != jQuery(this).val() ? {
            display: 'none'
          }
           : {
            display: 'inline'
          })
        })
      })
    }
    return this
  },
  jQuery('input[placeholder]').placeholder();
  var i = i || {
  };
  i = {
    classTotal: 0,
    classLast: 0,
    analyticEventName: 'open_live',
    init: function () {
      this.bindEle(),
      this.analytic()
    },
    bindEle: function () {
      var e = this;
      this.classTotal = $('.swiper-openclass .swiper-slide').size(),
      this.classLast = i.classTotal - 4,
      this.classTotal > 4 && this.openClassSwiper(),
      $('.classbox .details').on('click', '.livebtn', function () {
        if (!$(this).hasClass('disable')) {
          var t = $(this).closest('.swiper-slide').find('.course-title').text(),
          n = $(this).closest('.swiper-slide').find('.start-time').val(),
          i = $(this).closest('.swiper-slide').find('.tip-time').val(),
          a = $(this).closest('.swiper-slide').attr('data-id');
          e.currentInfo = {
            title: t,
            startTime: n,
            id: a,
            tipTime: i
          },
          e.signPop(t, n, a)
        }
      }),
      $('.live-sign-popup').find('.get-code').on('click', function () {
        e.getCode()
      }),
      $('.live-sign-popup').find('.sign-submit').on('click', function () {
        e.postSignInfo()
      }),
      $('.create-notice').on('click', function () {
        sa.track(e.analyticEventName, {
          name: '点击qq提醒',
          courseName: e.currentInfo.title
        })
      })
    },
    openClassSwiper: function () {
      function e() {
        0 != n.activeIndex && n.activeIndex != i.classLast ? $('#banner-left5,#banner-right5').fadeIn()  : 0 == n.activeIndex ? ($('#banner-left5').hide(), $('#banner-right5').fadeIn())  : n.activeIndex == i.classLast && ($('#banner-right5').hide(), $('#banner-left5').fadeIn())
      }
      function t(e, t, n) {
        $(e).mouseover(function () {
          $(e).removeClass(t).addClass(n)
        }),
        $(e).mouseout(function () {
          $(e).removeClass(n).addClass(t)
        })
      }
      var n = new Swiper('.swiper-openclass', {
        paginationClickable: !0,
        slidesPerView: 4,
        onSlideChangeStart: function () {
          e()
        }
      });
      $('.classbox').hover(function () {
        e()
      }, function () {
        $('#banner-left5,#banner-right5').fadeOut()
      }),
      t('#banner-left5', 'arrow-left', 'arrow-left2'),
      t('#banner-right5', 'arrow-right', 'arrow-right2'),
      $('#banner-left5').click(function () {
        n.swipePrev()
      }),
      $('#banner-right5').click(function () {
        n.swipeNext()
      })
    },
    signPop: function (e, t, n) {
      var i = $('.live-sign-popup');
      i.find('[name="open_course_id"]').val(n),
      i.find('.course-title').text(e),
      i.find('.start-time').text(t),
      i.find('.get-code').text('获取验证码'),
      i.find('[name="code"]').val(''),
      $.popup({
        popup: 'live-sign-popup',
        mask: 'live-js-mask'
      })
    },
    signOkPop: function (e, t, n) {
      var i = $('.addreserve');
      i.find('.course-title').text(e),
      i.find('.start-time').text(t),
      i.find('.end-time').text(n),
      $.popup({
        popup: 'sign-ok-popup',
        mask: 'live-ok-mask'
      })
    },
    getCode: function () {
      var e = $('.live-sign-popup').find('.form').find('[name="phone"]').val().trim();
      if (!/^0?1[2-9][0-9]\d{8}$/.test(e)) return void JKXY.msgBox(0, '请输入正确的手机号码');
      var t,
      n = this,
      i = $('.live-sign-popup').find('.get-code');
      i.text('正在获取'),
      $.ajax({
        url: '/indexLiveGetCode',
        type: 'get',
        dataType: 'json',
        data: {
          phone: e
        },
        success: function (e) {
          200 == e.status || 200 == e.code ? (i.html('<span class="timeCount">60</span>后重新获取'), sa.track(n.analyticEventName, {
            name: '获取手机动态码成功',
            courseName: n.currentInfo.title
          }), t = setInterval(function () {
            var e = parseInt(i.find('.timeCount').text());
            0 == e ? (i.html('重新获取'), clearTimeout(t))  : i.find('.timeCount').text(--e)
          }, 1000))  : (i.text('获取失败'), setTimeout(function () {
            i.text('重新获取')
          }), JKXY.msgBox(0, e.msg))
        },
        error: function () {
          i.text('获取失败'),
          setTimeout(function () {
            i.text('重新获取')
          }),
          JKXY.msgBox(0, '服务器错误，请重试！')
        }
      })
    },
    postSignInfo: function () {
      var e = this,
      t = $('.live-sign-popup'),
      n = t.find('[name="phone"]').val() ? t.find('[name="phone"]').val().trim()  : '',
      i = t.find('[name="code"]').val() ? t.find('[name="code"]').val().trim()  : '',
      a = {
        open_course_id: t.find('[name="open_course_id"]').val().trim(),
        truename: t.find('[name="truename"]').val().trim(),
        phone: n,
        code: i,
        qq: t.find('[name="qq"]').val().trim(),
        job_status: t.find('[name="job_status"]').val().trim()
      };
      if (!a.truename) return void JKXY.msgBox(0, '真实姓名不能为空');
      if (t.find('[name="phone"]').length > 0) {
        if (!a.phone) return void JKXY.msgBox(0, '手机号码不能为空');
        if (!/^0?1[2-9][0-9]\d{8}$/.test(a.phone)) return void JKXY.msgBox(0, '请输入正确的手机号码');
        if (!a.code) return void JKXY.msgBox(0, '验证码不能为空')
      }
      return a.qq ? a.job_status ? void $.ajax({
        url: '/indexLivePostSignInfo',
        data: a,
        dataType: 'json',
        type: 'get',
        success: function (n) {
          if (200 == n.status || 200 == n.code) {
            t.find('.close').trigger('click'),
            e.setQQTip(e.currentInfo.title, e.currentInfo.tipTime),
            e.signOkPop(e.currentInfo.title, e.currentInfo.startTime, e.currentInfo.endTime);
            var i = $('#openclass').find('[data-id="' + t.find('[name="open_course_id"]').val() + '"]');
            i.find('.livebtn').text('进入直播').addClass('btn-org').addClass('disable').attr('href', n.url).attr('target', '_blank'),
            sa.track(e.analyticEventName, {
              name: '报名成功',
              courseName: e.currentInfo.title
            })
          } else JKXY.msgBox(0, n.msg)
        },
        error: function () {
          JKXY.msgBox(0, '服务器错误，请重试！')
        }
      })  : void JKXY.msgBox(0, '工作状态不能为空')  : void JKXY.msgBox(0, 'QQ号码不能为空')
    },
    setQQTip: function (e, t) {
      var n = {
        content: '《' + e + '》公开课即将开讲，请准时上课哦！点击链接进入课堂',
        time: t,
        advance: 30,
        url: 'http://www.jikexueyuan.com',
        icon: '1_1'
      },
      i = 'http://qzs.qq.com/snsapp/app/bee/widget/open.htm#content=' + encodeURIComponent(n.content) + '&time=' + encodeURIComponent(n.time) + '&advance=' + n.advance + '&url=' + encodeURIComponent(n.url);
      $('.create-notice').attr('href', i)
    },
    analytic: function () {
      var e = this;
      $('.classbox .details').on('click', '.livebtn', function () {
        var t = $(this).closest('.details').find('.course-title').text();
        if (!$(this).hasClass('btn-gray')) {
          if ($.cookie('uname')) var n = '是';
           else var n = '否';
          return $(this).hasClass('btn-ora') ? void sa.track(e.analyticEventName, {
            name: '点击进入直播',
            courseName: t,
            isLogin: n
          })  : $(this).hasClass('btn-green') ? void sa.track(e.analyticEventName, {
            name: '点击预定名额',
            courseName: t,
            isLogin: n
          })  : void 0
        }
      }),
      $('.addreserve').on('click', '.close', function () {
        sa.track(e.analyticEventName, {
          name: '报名成功弹窗点击关闭',
          courseName: e.currentInfo.title
        })
      }),
      $('.live-sign-popup').on('click', '.close', function () {
        sa.track(e.analyticEventName, {
          name: '预定名额弹窗点击关闭',
          courseName: e.currentInfo.title
        })
      })
    }
  },

  i.init();
}();
