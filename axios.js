const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');


const getData = () => {
    axios.get('https://compugraf55051.api-us1.com/api/3/accounts',
    {
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Origin':'origin-or-null',
            'Api-Token': 'f7d5fb74bbb6de20b9fc0910f013ed8f9b3c9c69bd5f64bfacc3f202333d63818b74ff9d'
            
        }
    }).then(response => {
        console.log(response);
    })
};

const sendData =() => {};


getBtn.addEventListener('click',getData);
postBtn.addEventListener('click',sendData);