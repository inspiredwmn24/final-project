console.log();



window.onload = function(event)	{




	

	// this function creates and adds rows to our app
function createRow(words) {
  console.log(words);
  // we need a new div
  var row = document.createElement('div');
  var col = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = words;
  row.append(col);
  row.className = 'row';
  col.className = 'col s12';
  col.append(p);
  console.log(row);
  // append the whole thing to app
  var app = document.getElementById('app');
  app.append(row);
}


