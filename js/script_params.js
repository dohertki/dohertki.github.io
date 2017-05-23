// *************************************************************************
var apiKey = '01ddf7484cf95ea7346008867a667fef';
var t1 = '1';

var key = '01ddf7484cf95ea7346008867a667fef';
var privateKey = '6c6d5d8eb234358566e28751b2c644e32f219b54';
var hash = '3bee95fd7a0584916c3332a5f4c5720d';
//var url = 'http://gateway.marvel.com/v1/public/characters?ts=${t1}1&apikey=${key}&hash=${hash}&limit=5';

var url = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=01ddf7484cf95ea7346008867a667fef&hash=3bee95fd7a0584916c3332a5f4c5720d';


document.addEventListener('DOMContentLoaded', bindButtons);
      function bindButtons(){
      	console.log('start here'); document.getElementById('zipSubmit').addEventListener('click',function(event){
  //debugger;
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
/*api.openweathermap.org/data/2.5/weather?q=' + city + ',or&appid=' + apiKey, false);*/
  req.send(null);
   req.onload = function(){
   	 if(req.status === 200){
   	 	console.log("success");
   	    debugger;

   	    var report = JSON.parse(req.responseText);
   	 }
   }
  console.log("ready state: " + req.readyState);
  console.log("server status:" + req.status);
  console.log(req.statusText);
  console.log(req.responseText);
  event.preventDefault();
});
}//var report = JSON.parse(req.responseText);

