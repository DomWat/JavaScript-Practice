let taskBox = document.getElementById("taskBox")
let addB = document.getElementById("addB")
let pendingTasksList = document.getElementById("pendingTasksList")
let completedTasksList = document.getElementById("completedTasksList")

addB.addEventListener("click", function() {

    // setting the vaule of the input to a variable 
    let taskName = taskBox.value

    // create a checkbox
    let checkbox = document.createElement("input")
    // setting attributes for the checkbox
    checkbox.setAttribute("type", "checkbox")
    // create an eventListener so that when clicked will move to completed tasks
    checkbox.addEventListener("click", function() {
        // checks to see if the box is clicked
        // if clicked it will move to completed
        // if not clicked (uncklicked) it moves it to pending
        if(this.checked) {
            completedTasksList.appendChild(this.parentElement)
        } else {
            pendingTasksList.appendChild(this.parentElement)
        }
        
    })

    // creating the li
    let li = document.createElement("li")
    // create a label
    let label = document.createElement("label")
    // create a remove button
    let removeButton = document.createElement("button")

    // adds an eventListener to remove button to delete li
    removeButton.addEventListener("click", function(){
        // finds the grand parent element and then removes it
        // this way it will remove it after it has been put in the completed tasks when parent has changed
        let parent = this.parentElement.parentElement
        parent.removeChild(this.parentElement)
    })

    
    // adds the task name to label
    label.innerHTML = taskName
    // give the remove button a name
    removeButton.innerHTML = "Remove"


    // puts all of it inside of the li
    li.appendChild(checkbox)
    li.appendChild(label)
    li.appendChild(removeButton)
   
    
    
    pendingTasksList.appendChild(li)

  
    


    //create remove
})