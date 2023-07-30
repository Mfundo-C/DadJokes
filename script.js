const btn = document.getElementById('btn');
const joke  = document.getElementById('joke');

const apiKey = 'RHWsILxmxrWSvxJvyyMR6g==dQPjy3QeuIHpdvPN';

const options = {
    method: 'GET',
    headers: {
'X-Api-key': apiKey,
    },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=';

async  function getjoke(){

    try {
        joke.innerText = 'Updating...';
    btn.disabled = true; 
    btn.innerHTML = 'Loading...';
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btn.disabled = false; 
    btn.innerText = 'Tell Me a Joke!'; 

  joke.innerText = data[0].joke;

    }catch (error) {
        joke.innerText = 'There was an error, please try again later';
        btn.disabled = false; 
        btn.innerText = 'Tell Me a Joke!'; 
        console.log(error);
    }

    
}

btn.addEventListener('click', getjoke);