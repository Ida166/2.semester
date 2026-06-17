// Start from document and access body
const paragraphs = document.body.getElementsByTagName("p"); // finder alle <p> og printer dem 

// Loop using for...of
for (const p of paragraphs) {
    console.log(p.textContent);
}

// Loop using forEach (convert to array first)
Array.from(paragraphs).forEach(p => {
    console.log(p.textContent);
});