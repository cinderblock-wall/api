async function funGenorator() {
    const response = await fetch("https://www.boredapi.com/api/activity");
    const random = await response.json();
    console.log(random);
  }

  funGenorator()
  
  