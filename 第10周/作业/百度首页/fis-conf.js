//静态资源部署
fis.match('*.{ico,png,js,css}', {
  release: '/static/$&', //部署静态资源
  useHash: true //开启md5戳
});

//压缩js
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

//压缩css
fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});
//合并CSS
fis.match('::package', {
  postpackager: fis.plugin('loader')
});
fis.match('*.css', {
  packTo: 'css/all.css'
});

//压缩图片
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
