const div = document.getElementById("container")
const btn = document.getElementById("change-btn")
const activity = document.createElement("h2")

async function funGenorator() {
    const response = await fetch("https://www.boredapi.com/api/activity");
    const random = await response.json();
    console.log(random);
    activity.textContent = random.activity
    div.appendChild(activity)
  }

  funGenorator()

  
  btn.addEventListener("click", () => {

    console.log(funGenorator())
    
 })

// const div = document 

// fetch("https://www.boredapi.com/api/activity")
// .then(response => response.json())
// .then(data => {
//     div.innerHTML = `<p>${data.activity}</p>`
//     console.log(data);
// })