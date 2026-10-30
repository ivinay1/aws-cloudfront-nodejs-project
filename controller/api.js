const data = require('../data/data.json')

const getApiData = (req,res)=>{

    res.json(data);

}

module.exports = getApiData;