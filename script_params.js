// *************************************************************************
var apiKey = '01ddf7484cf95ea7346008867a667fef';
var t1 = 1;

var key = '01ddf7484cf95ea7346008867a667fef';
var privateKey = '6c6d5d8eb234358566e28751b2c644e32f219b54';
var hash = '145098c50dc22355ee0fa4a50e3866c4';
//var url = 'http://gateway.marvel.com/v1/public/characters?ts=${t1}1&apikey=${key}&hash=${hash}&limit=5';
var url = 'http://gateway.marvel.com/v1/public/characters?&apikey=${key}&limit=5';


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
   	 }
   }
  console.log("ready state: " + req.readyState);
  console.log("server status:" + req.status);
  console.log(req.statusText);
  console.log(req.responseText);
  event.preventDefault();
});
}//var report = JSON.parse(req.responseText);

