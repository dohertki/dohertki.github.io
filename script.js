/*new file*/




// *************************************************************************
     var apiKey = 'fa7d80c48643dfadde2cced1b1be6ca1';

      document.addEventListener('DOMContentLoaded', bindButtons);
      function bindButtons(){
          document.getElementById('zipSubmit').addEventListener('click',function(event){
          
          var city = document.getElementById('cityID').value;  
    //      var state =
          var req = new XMLHttpRequest();
          req.open('GET','http://api.openweathermap.org/data/2.5/weather?q=' + city + ',or&appid=' + apiKey, false);
      req.send(null);
      var report = JSON.parse(req.responseText);
      
      var temp=   1.8 * (parseFloat(report.main.temp) - 273) +32;

      document.getElementById('weatherID').textContent = report.id;
      document.getElementById('tempInfo').textContent = temp.toFixed(2);
      console.log(report.id);
      event.preventDefault();
      })
      }    
// ****************************************************************************
