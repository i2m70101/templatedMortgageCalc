
function mValue()
{   
    
    var x = document.getElementById("Mvalue").value;
    var t = ((x-350000)/350000)*100;
    var incHTB = ((x * 0.2) - 70000)/1000;
    document.getElementById("pAppr").innerHTML = t
    document.getElementById("pHTB").innerHTML = x *0.2
   document.getElementById("oHTB").innerHTML = `up by ${incHTB}k`
    document.getElementById("Mrem")






    
}

function RemMor()
{
    var y = document.getElementById("Mrem").value;
    

    var z = document.getElementById("Mvalue").value
    var newpPOS = (z - y) - (z * 0.2)
    document.getElementById("pPOS").innerText = newpPOS
    var incPOS = (newpPOS - 17500 - (262500 - y))/1000;

    document.getElementById("oPOS").innerHTML = `up by ${incPOS}k`
}