// *************************************************************************
var apiKey = '01ddf7484cf95ea7346008867a667fef';
var t1 = '1';
var privateKey = '6c6d5d8eb234358566e28751b2c644e32f219b54';
var hash = '3bee95fd7a0584916c3332a5f4c5720d';


var url = 'https://gateway.marvel.com/v1/public/characters?limit=5&offset=' + rollDice() +'&ts=1&apikey=01ddf7484cf95ea7346008867a667fef&hash=3bee95fd7a0584916c3332a5f4c5720d';



var characters = {
    image: [],
    name: [],
    story:[],
    };

var img_link= [];
var el = document.getElementById("roll");

el.addEventListener('click', bButtons,false);
    function bButtons(){
        if(characters.image.length <= 0){
          console.log("List is empty");
    
        

        }
    


      var req = new XMLHttpRequest();
      req.open('GET', url, true);
      req.send(null);
  
  
      req.onerror = function() {
        console.log('There was an error!');
        };

  
  
    req.onload = function(){
   	
    if(req.status === 200){
   	 	console.log("response success");

   	    var report = JSON.parse(req.responseText);
        loadObject(report);

    }         
        
        console.log("welcome to the jungle");
        

    writeName();
    writeDoc();
    writeStory();
    anchorAt(0);
  
    scrollWin(); 
  
  
  
 
  
  
  
  
  }        

}

/*Load result objects into characters object*/
function loadObject(report){

    var picture = report.data.results[0].thumbnail;
    var result = report.data.results;
    var i = 0;

    for(var i=0; i<result.length; i++){
        if(result[i].description){
            console.log("hit");
            console.log(result[i].description);
        }  
        else{
            result[i].description = "    ";
            console.log("miss");
     }


    if (photoCheck(i,result)){
        console.log("Good photo") ;
    
        characters.name.push(result[i].name);
        characters.story.push(result[i].description);
        img_link[i] = result[i].thumbnail.path +"/portrait_uncanny." + result[i].thumbnail.extension ;
        var temp = result[i].thumbnail.path +"/portrait_uncanny." + result[i].thumbnail.extension;  
        characters.image.push( temp );
    console.log(img_link[i]);
    
    
    
    };
            //debugger;

    
    
    }
}

/*Place character story into webpage*/
function writeStory(){
    var docElem2 = document.getElementById("cardstory");
    clearCard(docElem2);
    var newName = document.createElement('p');

    var newTxt = document.createTextNode(characters.story.shift());
    newName.appendChild(newTxt);
    docElem2.appendChild(newName);
}

/*Place character name into webpage*/
function writeName(){
    var docElem2 = document.getElementById("cardname");
    clearCard(docElem2);
    var newName = document.createElement('h2');

    var newTxt = document.createTextNode(characters.name.shift());
    newName.appendChild(newTxt);
    docElem2.appendChild(newName);
}

/*Place character image into webpage*/
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


/*Skip results that lack an image*/   
function photoCheck(i,result){
    var check = result[i].thumbnail.path;
    return !check.includes("image_not_available");
}
   
   
   
   
 /*Skip query if character members remain*/  
 function skipload(characters){
    console.log("# images: " + characters.image.length)
    if(characters.image.length <=0){
        return true;
    }else{
        return false;    
    }
 
 }  


/* Referenced from://https://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div*/
/*Remove character from card*/
function clearCard(element){
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }        
}





/* Modified code of function @ https://www.w3schools.com/jsref/jsref_random.asp*/
/*Find a random number for offset*/
function rollDice() {
    var x = Math.floor((Math.random() * 1480) + 1);
    return x;
}




/* Function refferenced from:https://www.w3schools.com/jsref/met_element_scrollintoview.asp*/
/*Anchor at the trading card*/
function anchorCard() {
    var elmnt = document.getElementById("cardtab");
    elmnt.scrollIntoView();
}
/*Anchor at a specific location*/    
function anchorAt(height){
    window.scrollTo(0,document.body.scrollHeight);
}
/*Scroll to bottom of window*/
function scrollWin() {

        window.scrollBy(0, 100);
}

