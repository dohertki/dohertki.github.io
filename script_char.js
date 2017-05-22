/*new file*/




// *************************************************************************
     var apiKey = '01ddf7484cf95ea7346008867a667fef';
     var url = 'http://gateway.marvel.com/v1/public/characters?name=Black%20Widow&apikey=01ddf7484cf95ea7346008867a667fef';
      document.addEventListener('DOMContentLoaded', bindButtons);
      function bindButtons(){
          document.getElementById('zipSubmit').addEventListener('click',function(event){
          
          var city = document.getElementById('cityID').value;  
          


      function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {

          // Check if the XMLHttpRequest object has a "withCredentials" property.
          // "withCredentials" only exists on XMLHTTPRequest2 objects.
          xhr.open(method, url, true);

        } else if (typeof XDomainRequest != "undefined") {

          // Otherwise, check if XDomainRequest.
          // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
          xhr = new XDomainRequest();
          xhr.open(method, url);

        } else {

          // Otherwise, CORS is not supported by the browser.
          xhr = null;

        }
        return xhr;
      }

      var xhr = createCORSRequest('GET', url);
      if (!xhr) {
        throw new Error('CORS not supported');
      }


xhr.onload = function() {
 var responseText = xhr.responseText;
 console.log(responseText);
 // process the response.
};

xhr.onerror = function() {
  console.log('There was an error!');
};









          var req = new XMLHttpRequest();
          req.open('GET','https://gateway.marvel.com/v1/public/characters?name=hulk&apikey=01ddf7484cf95ea7346008867a667fef',true);                                  
            /*api.openweathermap.org/data/2.5/weather?q=' + city + ',or&appid=' + apiKey, false);*/
      req.send(null);
      var report = JSON.parse(req.responseText);
      
   //   var temp=   1.8 * (parseFloat(report.main.temp) - 273) +32;

    //  document.getElementById('weatherID').textContent = report.id;
    //  document.getElementById('tempInfo').textContent = temp.toFixed(2);
    //  console.log(report.id);
      event.preventDefault();
      })
      }    
// ****************************************************************************
