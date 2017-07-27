//print(parseDMY('01/10/2018'))
function parseDMY(strDate){
  var parts = strDate.split("/");
  var dt = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
	return dt;
}
