const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

function getWeather(){
    $.ajax({
        url: weatherUrl,
        type:'GET',
        dataType:'json',
        success:function(data){
            console.log(data)
            for(i=0;i<data.list.length;i++){
                $('#weather').append(
                   "<div class='card col-md-2'><div class='row'><img class='card-img-top' src='https://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png' alt='weather'/><span class='topTemp'>"+data.list[i].temp.day+"°C</span></div><div class='card-body><span class='max'>"+data.list[i].temp.max+"</span>/<span class='min'>"+data.list[i].temp.min+"°C</span><h4 class='card-title>"+data.list[i].weather[0].main+"</h4></div></div>"
                )
            }
        }
    })
}


