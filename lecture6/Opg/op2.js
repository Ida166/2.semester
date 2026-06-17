// Her bliver det ikke printet i consolen, men på siden
//(a): Use the property .textContent to change "Students:" to "Student List".
    const div = document.querySelector("div"); // Finder det første <div>-element på siden.
    div.textContent = "Student List"


    // (b): Similarly, change "Alice" to "Alex".
    const liFirst = document.querySelector("li"); //Finder det første <li> element i dokumentet
    liFirst.textContent = "Alex"
   

    // (c): Append " (Top Student)" to the last <li> element of the list.
    let liAll = document.querySelectorAll("li"); //Finder alle <li> elementer og returnerer en NodeList
    let liLast = liAll[liAll.length -1]; //gemmer alle elementer unbdtagen den isdste 
    liLast.textContent = liLast.textContent + " (Top Student)" //tilføjer det sidste element + ekstra tekst 

  
