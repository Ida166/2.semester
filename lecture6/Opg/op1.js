
    // (a): The tag name and content of the div element.
    const div = document.querySelector("div"); // Finder det første <div>-element på siden.
    console.log(div.nodeName + " -> " + div.textContent); //nodeName = Returnerer tag-navnet, dvs. "DIV"
                                                          //div.textContent = Returnerer indholdet i elementet, dvs. "Students:"

    // (b): The tag name and content of the first li element.
    const liFirst = document.querySelector("li"); //Finder det første <li> element i dokumentet
    console.log(liFirst.nodeName + " -> " + liFirst.textContent) //liFirst.nodeName = Returnerer "LI"    
                                                                 //liFirst.textContent = Returnerer "Alice"

    // (c): The tag names and content of all li elements.
    const liAll = document.querySelectorAll("li"); //Finder alle <li> elementer og returnerer en NodeList
    for(let liElement of liAll) //Løkke, der går gennem hvert <li> element i NodeListen
        {
            console.log(liElement.nodeName + " -> " + liElement.textContent); //liElement.nodeName = Tag-navnet, "LI"
                                                                              //liElement.textContent = Teksten i elementet: "Alice", "Bob", "Charlie"
        }

  