var destination = 'http://localhost:3000'

function sendMessage(command)
{
console.log(window.destination);
    if (window.XMLHttpRequest)

    {
        var http = new XMLHttpRequest();
    
        http.open(command, destination, true);
        http.setRequestHeader("Content-type", "application/json", "Access-Control-Allow-Origin: *");

        http.onreadystatechange = function()
        {
            if(http.readyState == 4)
            {
                if(http.status==200)
                {
                    response="Bad JSON: "+http.responseText
                    response=JSON.stringify(JSON.parse(http.responseText), null, '\t');
                }
                else
                { 
                    response="Error "+http.status
                }
            }
        };
        http.send(userMessage);
    }
}
//Useful for debugging:   
//console.log(message);