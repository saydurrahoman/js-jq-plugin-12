// addClass
$(document).ready(function(){
  var circle = function (t)
  {
    return {
        x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * -t + 0.5 * Math.PI),
        y: 500.0 + 300.0 * Math.sin(2.0 * Math.PI * -t + 0.5 * Math.PI)
    };
  };

  $('#text2').curvedText({
    curve:    circle,
    domain:   [0.0, 1.0],
    viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 1000.0 }
  });
});