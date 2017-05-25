// *************************************************************************
var apiKe = '01ddf7484cf95ea7346008867a667fef';
var t1 = '1';

var key = '01ddf7484cf95ea7346008867a667fef';
var privateKey = '6c6d5d8eb234358566e28751b2c644e32f219b54';
var hash = '3bee95fd7a0584916c3332a5f4c5720d';
//var url = 'http://gateway.marvel.com/v1/public/characters?ts=${t1}1&apikey=${key}&hash=${hash}&limit=5';

//var url = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=01ddf7484cf95ea7346008867a667fef&hash=3bee95fd7a0584916c3332a5f4c5720d';

var url = 'http://gateway.marvel.com/v1/public/characters?limit=5&offset=3&ts=1&apikey=01ddf7484cf95ea7346008867a667fef&hash=3bee95fd7a0584916c3332a5f4c5720d';
var characters = {
    image: [],
    name: [],
    story:[],
    };
var img_link= [];
var el = document.getElementById("roll");

el.addEventListener('click', bButtons,false);
    function bButtons(){
        console.log("clicky");
 //debugger;
      if(characters.image.length <= 0){
          console.log("List is empty");
        }
debugger;
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
        var i = 0;




        for(var i=0; i<result.length; i++){
            if(result[i].description){
                console.log("hit");
                console.log(result[i].description);
            }
            else{
                result[i].description = "none";
                console.log("miss");
            }
         //   debugger;


            if (photoCheck(i,result)){
                console.log("No photo") ;
            };
            //debugger;





            characters.name.push(result[i].name);
            characters.story.push(result[i].description);
            img_link[i] = result[i].thumbnail.path +"/portrait_uncanny." + result[i].thumbnail.extension ;
            var temp = result[i].thumbnail.path +"/portrait_uncanny." + result[i].thumbnail.extension;  
            characters.image.push( temp );
            console.log(img_link[i]);
    
    
    //filter image_not_available  http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available   
        }
    }         
        
    //    debugger;
        console.log("welcome to the jungle");
        
  
        

    writeName();
    writeDoc();
    writeStory();
   console.log("End of line");
    }        
}


function writeStory(){
    var docElem2 = document.getElementById("cardstory");
    clearCard(docElem2);
    var newName = document.createElement('p');

    var newTxt = document.createTextNode(characters.story.shift());
    newName.appendChild(newTxt);
    docElem2.appendChild(newName);
}

function writeName(){
    var docElem2 = document.getElementById("cardname");
    clearCard(docElem2);
    var newName = document.createElement('h3');

    var newTxt = document.createTextNode(characters.name.shift());
    newName.appendChild(newTxt);
    docElem2.appendChild(newName);
}


function writeDoc(){
    var docElem = document.getElementById("cardtab");
    clearCard(docElem);
//        var docElem = document.getElementById("cardtab");
    var newImg = document.createElement('img');
    
    newImg.src = document.createTextNode(characters.image.shift()).data;
    newImg.src = characters.image.shift();
       // newImg.src = document.createTextNode(img_link[5]).data;
        docElem.appendChild(newImg);
}
   
   
   
        function photoCheck(i,result){
            var check = result[i].thumbnail.path;
            return check.includes("image_not_available");
        }
   
   
   
   
   
   
   


//https://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div
function clearCard(element){
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }        
}














