function convertTemperature(){
    let temperature= document.getElementById("Temperature input").value;
    let selectedOption=document.getElementById("conversion Type").value; 

    if(selectedOption==="Celsius"){
        convertedTemperature=(temperature-32)*5/9;
        document.getElementById('convertedTemperature').innerText = convertedTemperature;
    }
    else if (selectedOption==="Fahrenheit"){
        convertedTemperature=(temperature*9/5)+32;
        document.getElementById('convertedTemperature').innerText = convertedTemperature;
    
    }

        
    }