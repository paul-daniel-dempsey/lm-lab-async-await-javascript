import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (apiEndPoint) => {
  const response = await fetch(apiEndPoint);
  try {
    const stuff = await response.json()
    console.log(stuff);
  }
  catch (error) {
    console.log(error);
  }
}
fetchData(jsonTypicode);