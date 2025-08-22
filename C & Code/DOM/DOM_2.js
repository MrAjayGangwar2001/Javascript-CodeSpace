
const image = document.querySelector('#ul');
image.addEventListener('click', (e) =>{
    // console.log(e.target.parentNode);
    // console.log(e.target.tagName);

    let list = e.target.parentNode;
    
    if (e.target.tagName === 'IMG') {
          list.remove();       
      //         OR By THIS METHOD 👇.
      //  list.parentNode.removeChild(list);
    }
},false)

// --------------EVENT PROPOGATION--------------

// In this Event Propogation We will Learn Event Bubbling And Event Capturing....
// In Last line of Event Listener True or False Decided Event Bubbling or Capturing.
// Bubbling and Capturing both are depend on USE Cases

// parent and child are connected.We have to Make it same (true-true / false-false) for both case

// In Bubbling(false - false) :- 
// In our Case If We click on the child first print/execute CHILD then PARENT...Bottom to Top

// In Capturing(true - true) :- 
// In our Case If We click on the child first print/execute PARENT then CHILD... Top ToBottom

// To  🚫🛑🛑🚫🛑🚫🛑🚫🛑🚫----- STOP PROPOGATION -----🛑🚫🛑🚫🛑🚫🚫🚫🛑🛑🛑
// To Stop Propogation Use method 👉👉👉👉👉👉👉👉👉 e.stopPropagation();

document.querySelector('#ul').addEventListener('click', (e) =>{
    console.log('This Is the Parent/ Unordered List : ');
    
}, false);                    // It Will by default false(bubbbling). Not required to mentioned false
document.querySelector('#code').addEventListener('click', (e) =>{
    console.log('This Is the child/ List : ');
    e.stopPropagation();
    
}, false);                              // For Capturing Required to mentioned true



//  Practice ---
let arr = [1,2,3,4,5,6,7,8,9];
let methd = arr.map( (num) =>{
    return num;
} )
console.log(methd);


let method = arr.filter( (n) =>{
    if (n % 2 ==0) {
        return n
    }
} )
console.log(method);

let rdc = arr.reduce((a, b)=>{
    return a+b;
})
console.log(rdc);

// These are Some Events Method To Explore by self...

// typeof, timestamp, defaultPreventDefault
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

//  Property/Method                   Type	                            Description

//  typeof	                        Operator	                    Returns type of variable
//  timeStamp                    	Event prop	                    Time when event was triggered
//  preventDefault()                 Method	                        Prevents default action
//  target                  	    Event prop	                    Actual element that triggered the event
//  currentTarget                   Event prop	                    Element the event handler is attached to
//  srcElement                    	Event prop	                    (IE) Same as target
//  toElement                    	Event prop	                    (IE) Used in mouse events to indicate target
//  clientX/Y                    	Event prop	                    Mouse position in viewport
//  screenX/Y                    	Event prop	                    Mouse position on screen
//  altKey, ctrlKey, shiftKey       Event prop	                    true if modifier key was pressed
//  keyCode                     	Event prop	                    Code of key pressed (deprecated)

//  Here we will see when press the keyboard key then what will happen...
image.addEventListener('click',(e)=>{
    console.log(e);
    console.log("This is Time Stamp Method",e.timeStamp);
    console.log(e.target);
    console.log("current Target" ,e.currentTarget);
    console.log("client X and Y" ,e.clientX, e.clientY);
    console.log("Screen X and Y", e.screenX, e.screenY);
    if (e.ctrlkey) {
        alert("ctrl key pressed !")
    }
    console.log("KeyCode",e.keyCode);
    console.log("KeyCode",e.keyCode);
})


