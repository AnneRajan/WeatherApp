/* global data */

$(document).ready(function(){
   $("#submitCity").click(function(){
       return getForecast();
   }); 
});

function getForecast(){
    var city = $("#city").val();
    
    if(city !=='')
    {
        $.ajax({
            url:'http://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=metric" + "&appid=157ae0b4214147f734604d5d9efbef75",
            type:"GET",
            dataType:"jsonp",
            success: function(data){
                //console.log(data);
               var table='';
               for(var i=0; i<data.list;i++)
               {
                   console.log(data);
                   table+="<tr>";
                   table+="<td><img src='http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png'></td>";
                   
                   
                   
                   
                   table+="</tr>";
               }
               
               $("#forecastWeather").html(table);
               $("#city").val('');
            }
            
        });
    }
    else{
        $("#error").html("<div class='alert alert-danger id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
    }
    
   