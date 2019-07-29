//The only addiitonal functionality that was added to client side, was an event listeer that would addEventListen
//to the thumbs down button.
//BASICALLY, ANYTHING THAT CAN BE CLICKED ON OR ACTIVATED IN THE DOM ON BROWSER HAS FRONT END CODE, NOW LOOK AT BACK END CODE.

document.getElementById('submit').addEventListener('click',() =>{

   var oRadio = document.querySelectorAll('.positve');

   let yes = []

   for(var i = 0; i < oRadio.length; i++)
   {
      if(oRadio[i].checked)

         yes.push(oRadio[i].value);
      }
      generateName(yes)

   })


function generateName(value){
  console.log(value)
  let names = ["Fetch Fleek","Bootleg Boolean", "SQL Squad","Konstructor Kush","API Plug","Object OG"]
  if(value.length - 1 === 0){
    console.log(names[1])
    document.getElementById("generatedName").innerHTML = names[0]
    fetch('messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'generatedName': names[0],
        'msg': 'was generated',
      })
    }).then(function (response) {
      window.location.reload()
    })
  }else if(value.length - 1 === 1){
    console.log(value.length)
    document.querySelector("#generatedName").innerHTML = names[1]
    fetch('messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'generatedName': names[1],
        'msg': 'was generated',
      })
    }).then(function (response) {
      window.location.reload()
    })
  }else if(value.length -1 === 2){

    document.querySelector("#generatedName").innerHTML = names[2]
    fetch('messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'generatedName': names[2],
        'msg': 'was generated',
      })
    }).then(function (response) {
      window.location.reload()
    })

  }else if (value.length -1 === 3){

    document.querySelector("#generatedName").innerHTML = names[3]
    fetch('messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'generatedName': names[3],
        'msg': 'was generated',
      })
    }).then(function (response) {
      window.location.reload()
    })
  }else if(value.length - 1 === 4){

    document.querySelector("#generatedName").innerHTML = names[4]
    fetch('messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'generatedName': names[4],
        'msg': 'was generated',
      })
    }).then(function (response) {
      window.location.reload()
    })
  }else{
    //zero
    document.querySelector("#generatedName").innerHTML = names[5]
    fetch('messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'generatedName': names[5],
        'msg': 'was generated',
      })
    }).then(function (response) {
      window.location.reload()
    })
  }
}


var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
//the code below was a new addition, in which we chose a method getElementsByClassName
//to select the thumbs down icon.
var thumbDown = document.getElementsByClassName("fa-thumbs-down");

//we added a function that adds some functionality to each of the the thumbs down button.
//this is going throught teh array of thumbs down icons that were create by the getElementsByClassName
//this for.each loop adds seral things, it will add a inner text node for each ttime that this loop runs.
//it will also define a number based on parseFloat
Array.from(thumbDown).forEach(function (element) {
  element.addEventListener('click', function(){
    const generatedName = this.parentNode.parentNode.childNodes[1].innerText //??
    const msg = this.parentNode.parentNode.childNodes[3].innerText //?
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText) //?
//fetch decrease - why would you do that. How is it matching this up with the server
    fetch('decrease', {
      //the put method says that this is a method that will be updating a field that is always in the database.
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        //this is telling you the fields to change in the database.
        'generatedName': generatedName,
        'msg': msg,
        'thumbDown':thumbDown //showing that the names must match the variables if you are tyring to get a value for a variable.
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
})

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const generatedName = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'generatedName': generatedName,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const generatedName = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'generatedName': generatedName,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
