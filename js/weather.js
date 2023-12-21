WIDGET = {
    "CONFIG": {
      "modules": "01234",
      "background": "5",
      "tmpColor": "FFFFFF",
      "tmpSize": "16",
      "cityColor": "FFFFFF",
      "citySize": "16",
      "aqiColor": "FFFFFF",
      "aqiSize": "16",
      "weatherIconSize": "30",
      "alertIconSize": "18",
      "padding": "10px 10px 10px 10px",
      "shadow": "0",
      "language": "auto",
      "fixed": "true",
      "vertical": "top",
      "horizontal": "left",
      "city": "CN101210101",
      "left": "100",
      "top": "10",
      "key": "7d4a8e7eba804b3ca1da4071084b3756"
    }
  }
if (document.querySelector('#bber-talk')) {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true,
    autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true
  },
  });
}