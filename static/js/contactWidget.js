(function () {
  var options = {
    facebook: "1629986620602076", // Facebook page ID
    line: "//line.me/ti/p/2Y-7aApB8d", // Line QR code URL
    call_to_action: "คุยกับเรา", // Call to action
    button_color: "#129BF4", // Color of button
    position: "right", // Position may be 'right' or 'left'
    order: "facebook,line", // Order of buttons
  };
  var proto = document.location.protocol,
    host = "whatshelp.io",
    url = proto + "//static." + host;
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = url + '/widget-send-button/js/init.js';
  s.onload = function () {
    WhWidgetSendButton.init(host, proto, options);
  };
  var x = document.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);
})();
