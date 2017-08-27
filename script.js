var html = '';

function colorRandomizer(){
  var randomColor = Math.floor(Math.random() * 256 )
  return randomColor;
}

for (var j = 0; j < 10; j += 1) {
  var red = colorRandomizer();
  var green = colorRandomizer();
  var blue = colorRandomizer();
  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
  document.write(html);
}
