Array.prototype.sample = function(){
	return this[Math.floor(Math.random()*this.length)];
}

function csv() {
  var count  = document.getElementById('Count').value;
  var mail   = document.getElementById('Mail').value;
  var phone  = document.getElementById('Phone').value;
  
  var firstName = ["Vera", "Klaus", "Annette", "Sophie", "Christian" ];  
  var name = ["Schmidt","Mueller","Meier","Klein","Schulz"]
	
csvContent="data:text/csv;charset=utf-8,first_name;last_name;email;phone_number\n";

for(i=0;i<count;i++) {
	csvContent+=firstName.sample()+";"+name.sample()+";"+mail+i+"@testxxxx.com;"+phone+"\n";
}
//console.log(csvContent);

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");
document.body.appendChild(link); 

link.click(); 
 
}

var los  = document.getElementById('los');
los.addEventListener ('click', csv, true);



