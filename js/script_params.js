// *************************************************************************
var apiKey = '01ddf7484cf95ea7346008867a667fef';
var t1 = '1';

var key = '01ddf7484cf95ea7346008867a667fef';
var privateKey = '6c6d5d8eb234358566e28751b2c644e32f219b54';
var hash = '3bee95fd7a0584916c3332a5f4c5720d';
//var url = 'http://gateway.marvel.com/v1/public/characters?ts=${t1}1&apikey=${key}&hash=${hash}&limit=5';

//var url = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=01ddf7484cf95ea7346008867a667fef&hash=3bee95fd7a0584916c3332a5f4c5720d';

var url = 'http://gateway.marvel.com/v1/public/characters?limit=20&offset=369&ts=1&apikey=01ddf7484cf95ea7346008867a667fef&hash=3bee95fd7a0584916c3332a5f4c5720d';


var el = document.getElementById("roll");
el.addEventListener('click', bButtons,false);
    function bButtons(){
        console.log("clicky");
 //debugger;
      var req = new XMLHttpRequest();
      req.open('GET', url, true);
      req.send(null);
      req.onload = function(){
   	 if(req.status === 200){
   	 	console.log("success");

   	    var report = JSON.parse(req.responseText);
        
        console.log(report.data.count);
        var picture = report.data.results[0].thumbnail;
        console.log(report.data.results[0].description);
        var result = report.data.results;
        
   	    
        debugger;
        var img_link= [];
        var i = 0;
        for(var i=0; i<result.length; i++){
            if(result[i].description){
                console.log("hit");
                console.log(result[i].description);

            }
            else
                console.log("miss");
            
            img_link[i] = "<img src='" + result[i].thumbnail.path +"/portrait_fantastic." + result[i].thumbnail.extension +"' />";
        
            console.log(img_link[i]);
        //filter image_not_available  http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available   
        }
            
   	    console.log("welcome to the jungle");
        
        
        
        // body...
      }
    }      
    }
/*

document.addEventListener('DOMContentLoaded', bindButtons);
      function bindButtons(){
      	console.log('start here'); 
//        document.getElementById('zipSubmit').addEventListener('click',function(event){
  //debugger;
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.send(null);
   req.onload = function(){
   	 if(req.status === 200){
   	 	console.log("success");
   	    debugger;

   	    var report = JSON.parse(req.responseText);
   	    console.log("welcome to the jungle");
     }
   }
  console.log("ready state: " + req.readyState);
  console.log("server status:" + req.status);
  console.log(req.statusText);
  console.log(req.responseText);
  event.preventDefault();
});
}//var report = JSON.parse(req.responseText);
*/
