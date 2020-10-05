let catFactsDisplay = document.getElementById("catFactsDisplay")

// Activity 1 
let request = new XMLHttpRequest()



request.addEventListener('load', function() {
    

    let result = JSON.parse(this.responseText)

    //Azam's method
    let factItems = result.all.map((fact) => {
        return `
        <li>
            <label>${fact.text}</label>
            
            <b>${fact.user ? fact.user.name.first : null}</b>
            <b>${fact.user ? fact.user.name.last : null}</b>
        </li>`
    })
    catFactsDisplay.insertAdjacentHTML('beforeend', factItems)


    // // My method
    // // goes through each of the items in the array 
    // result.all.forEach((fact) => {
    //     let text = fact.text
    //     // makes sure that user is not 'null' or undefined 
    //     if(fact.user) {
    //         let firstName = fact.user.name.first
    //         let lastName = fact.user.name.last

    //         let textArea = `
    //         <li>${text}</li>
    //         <label><b>${firstName}, ${lastName}</b></label>
    //     `
    //     catFactsDisplay.insertAdjacentHTML('beforeend', textArea)
    //     }
    // })

})

request.open('GET','https://cat-fact.herokuapp.com/facts')
request.send()