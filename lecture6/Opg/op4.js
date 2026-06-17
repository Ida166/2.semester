/* Adding and removing content

Exercise 4:

We continue with the HTML from exercise 1. Here we focus on adding and removing content.

(a): Use createElement and appendChild to add a new bullet (li) to the list (ul). The text of this bullet should be "Dave".

(b): Use the .remove method to remove the bullet with the name "Bob" from the list.
*/

    let div = document.querySelector("div"); // Finder det første <div>-element på siden.
    div.style.backgroundColor = "lightgray";
    div.textContent = "Student List"

    const liFirst = document.querySelector("li"); //Finder det første <li> element i dokumentet
    liFirst.textContent = "Alex"
    
    const liste = document.querySelector("ul"); //finder <ul> (listen)
    const newElement = document.createElement("li");
    newElement.textContent = "Dave";
    liste.appendChild(newElement); //Tilføjer Dave til listen 

    let liAll = document.querySelectorAll("li"); //Finder alle <li> elementer og returnerer en NodeList
    liAll.forEach(li => {
        li.style.color = "blue";
        if(li.textContent === "Bob"){ //Her fjernes elementet hvis det er bob
            li.remove();
        }
    }); //alle elementer bliver blå (a)
    liAll[0].style.fontWeight = "bold"; // gør første element fed (C)
    const liLast = liAll[liAll.length -1]; //gemmer alle elementer unbdtagen den sidste 
    liLast.textContent += " (Top Student)" //tilføjer det sidste element + ekstra tekst 