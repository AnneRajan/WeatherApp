/* global data */

$(document).ready(function(){
   $("#submitCity").click(function(){
       return getWeather();
   }); 
});

function getWeather(){
    var city = $("#city").val();
    
    if(city !=='')
    {
        $.ajax({
            url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&appid=157ae0b4214147f734604d5d9efbef75",
            type:"GET",
            dataType:"jsonp",
            success: function(data){
                //console.log(data);
               var widget = showResults(data);
               console.log(data);
                $("#showWeather").html(widget);
                $("#city").val('');
            }
            
        });
    }
    else{
        $("#error").html("<div class='alert alert-danger id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
    }
    
    function showResults(data){
        return'<h3><strong>Current Weather for '+data.name+', '+data.sys.country+'</h3></strong>'+
                "<h3><strong>Weather:</strong>" +data.weather[0].main+"</h3>"+
                "<h3><strong>Description:</strong><img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>" +data.weather[0].main+"</h3>"+
                "<h3><strong>Temperature: </strong>"+data.main.temp+" &deg;C</h3>"+
                "<h3><strong>Pressure:</strong> " +data.main.pressure+" hpa</h3>"+
                "<h3><strong>Humidity:</strong>" +data.main.humidity+" %</h3>"+
                "<h3><strong>Min Temperature:</strong> "+data.main.temp_min+" &deg;C </h3>"+
                "<h3><strong>Max Temperature: </strong>"+data.main.temp_max+" &deg;C </h3>"+
                "<h3><strong>Wind Speed:</strong> "+data.wind.speed+"m's</h3>"+
                "<h3><strong>Wind Direction: </strong>"+data.wind.deg+" &deg;C</h3>";
        
    }