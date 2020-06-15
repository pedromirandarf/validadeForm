const req = require('request');
const request = require('request-promise');

let organizeData = async(req, res, allData, )=>{
    let  
    for(let i=0; i< allData["accounts"].length;i++){

    }
}


let colect_data = async (req,res)=>{
    let account_data = [];

    console.log("Inciando coleta de dados");

    var endpoint = "/api/3/accounts?limit=100&offset=100";
    
    var allData = await request({
        method: 'GET',
        url: `https://compugraf55051.api-us1.com${endpoint}`,
        headers:{
            "Api-Token": "f7d5fb74bbb6de20b9fc0910f013ed8f9b3c9c69bd5f64bfacc3f202333d63818b74ff9d"
        },
        json: true
    });
    const dataSize = allData["meta"]["total"];
    
    for(let i=0;i<dataSize;i++){
        account_data.push({
            id: allData["accounts"][i]["id"],
            name: allData["accounts"][i]["name"],
            
        });
    }
    console.log(allData);
    account_data = allData;

    return account_data;
};

exports.listAccounts =  async(req,res) => {
    try{
        const data = await colect_data();
        res.status(200).send({
            message: `Objetos no banco de dados: `,
            Data: data
        });
    }catch(e){

    }
};