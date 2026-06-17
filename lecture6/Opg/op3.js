/* Styling

Exercise 3:
We continue with the HTML from exercise 1. Here we focus on changing the styling of the text.
(a): Use the property .style.color to make all <li> text blue.
(b): Use the proporty .style.backgroundColor to set the <div> background color to lightgray.
(c): Use the property .style.fontWeight to make the first <li> bold.*/

    let div = document.querySelector("div"); // Finder det første <div>-element på siden.
    div.style.backgroundColor = "lightgray";
    div.textContent = "Student List"

    const liFirst = document.querySelector("li"); //Finder det første <li> element i dokumentet
    liFirst.textContent = "Alex"
   
    let liAll = document.querySelectorAll("li"); //Finder alle <li> elementer og returnerer en NodeList
    liAll.forEach(li => li.style.color = "blue"); //alle elementer bliver blå (a)
    liAll[0].style.fontWeight = "bold"; // gør første element fed (C)
    const liLast = liAll[liAll.length -1]; //gemmer alle elementer unbdtagen den sidste 
    liLast.textContent += " (Top Student)" //tilføjer det sidste element + ekstra tekst 

    