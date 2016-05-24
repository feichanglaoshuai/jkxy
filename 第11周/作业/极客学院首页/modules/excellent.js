// 快讯
module.exports = function excellent() {
  var c = {
    init: function () {
      this.shouchang(),
      $('body').delegate('.msxx', 'click', function () {
        var e = $(this).attr('seriesid');
        'undefined' != typeof stat && stat.efunc({
          po: 89003,
          seriesid: e
        })
      })
    },
    shouchang: function () {
      function e() {
        var e = $(this),
        t = $(this).attr('collect_type'),
        s = $(this).attr('course_id'),
        c = e.parent('.collect');
        $.ajax({
          type: 'get',
          url: '/excollect',
          success: function (e) {
            if (200 == e.code) {
              if (console.log(e.data.objId), c.empty(), 0 == t) {
                var s = '<span  class="btn btn-warn">已收藏</span>';
                s += '<span class="btn exc-sc" collect_type="1" course_id="' + e.data.objId + '">取消收藏</span>',
                'undefined' != typeof stat && stat.efunc({
                  po: 89001,
                  seriesid: e.data.objId
                })
              } else if (1 == t) {
                var s = '<span class="btn btn-def exc-sc greenbtn" collect_type="0" course_id="' + e.data.objId + '">收藏</span>';
                'undefined' != typeof stat && stat.efunc({
                  po: 89002,
                  seriesid: e.data.objId
                })
              }
              c.html(s)
            } else console.log(e.msg)
          },
          data: {
            collect_type: t,
            obj_id: s
          },
          complete: function () {
          },
          dataType: 'json'
        })
      }
      $('.collect').delegate('.exc-sc', 'click', e)
    }
  };

  c.init();
}();
