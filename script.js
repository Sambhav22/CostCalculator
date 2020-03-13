console.log('And we\'re off...');
var $form, width, height, area;
$form = $('#calculator');

$('from input[type="text"]').on('blur', function() {
  console.log('You entered ', this.value );
});

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');
  
  width = $('#width').val();
  console.log('Width ' + width);
  
  height = $('#height').val();
  console.log('Height ', height);
  area=0;
  area = width * height;
  console.log(area);
  alert('Required Cost is ' + area);
 
});