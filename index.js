const fetch = require('node-fetch');

fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  .then(response => response.json())
  .then(data => {
    console.log('success: ')
    console.log(data)
  })
  .catch(err => {
    console.log('error:')
    console.log(err)
  });
