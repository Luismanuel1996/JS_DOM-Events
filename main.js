console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

const part1 = document.getElementById("node1");
part1.innerText = `I used the getElementById("node 1") method to access this`

const part2 = document.getElementsByClassName("node2");
part2[0].innerText = `I used the getElementByClass("node 2") method to access this`

const part3 = document.getElementsByTagName("h3");
for (let ele of part3){
    ele.innerText = `I used the getElementsByTagName("h3") method to access this`
}



/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/


let paragraph = document.createElement('p');
paragraph.innerText = `This node was created using the createElement() method`;
let parent = document.getElementById('parent');
parent.appendChild(paragraph);


let link = document.createElement("a");
link.innerText = "i am a <a> tag";
link.href = "https://google.com";
link.target = "_blank";

parent.insertBefore(link, paragraph);


/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let parent2 = document.querySelector("#exercise-container3");
// TODO: Remove the "New Child Node"
let oldChild = document.querySelector("#N1");
let newChild = document.createElement("p");
newChild.textContent = "New Child Node";
parent2.replaceChild(newChild, oldChild);

setTimeout(() => {
parent2.removeChild(newChild)
} , 5000 )


/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

let ul = document.createElement("ul");
list.forEach(item => {
    let li = document.createElement("li")
    li.textContent = item;
    ul.appendChild(li);
});

let parent3 = document.getElementById("container");
parent3.appendChild(ul);


/*----------- Exercise #5: DOM EVENTS --------------*/




// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionali


function show() {
    let div = document.createElement("div");
    div.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    document.body.appendChild(div);
}


let button = document.getElementById("btn");
button.addEventListener("click", show);