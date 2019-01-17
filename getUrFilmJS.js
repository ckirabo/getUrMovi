//javascript yay


//method for getting all the films after printing a button 
function getAllFilms(){

let request = new XMLHttpRequest();
request.open("GET" ,"http://localhost:8080/api/films");
request.setRequestHeader("Access-Control-Allow-Origin","*");
request.send();

request.onload = function(){

//parsing
let films = JSON.parse(request.response);


for(let i = 0; i < films.length; i++){
    
    document.write(
          films[i].title + "  " 
        + films[i].description + "  " 
        + films[i].release_year + "  " 
        + films[i].length + "  " 
        + films[i].rating + "<br>"
    	);

}

}
}



function getSimilarFilms(){

let request = new XMLHttpRequest();
request.open("GET" ,"http://localhost:8080/api/films");
request.setRequestHeader("Access-Control-Allow-Origin","*");
request.send();

request.onload = function(){

//parsing
let films = JSON.parse(request.response);

//button id link to user input
let userText = document.getElementById("userInput").value;
 let capsText = userText.toUpperCase();

 for(let j = 0; j < films.length; j++){

 if ( String(films[j].title).includes(capsText)){
   
 document.write(films[j].title + "<br>");
     
 }
 }


 }

}


//create a table that will be made with the information 

/*
table id="allFilmsTable">
<tr>
 <td>Film name</td>
 <td>Film Decription</td>
 <td>Release year</td>
 <td>Film Length</td>
 <td>Film Rating</td>
</tr>

</table>	

*/

function createTable(){


}

