const app = "I don't do much.";
const token = "a035f6a8d04a40e0ac6586ce2aef0060935df958"
fetch('https://api.github.com/user/repos', 
  {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json()).
  then(json => console.log(json))
