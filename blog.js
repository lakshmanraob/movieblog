'use strict';

let DynamoDbDataServices = require('./services').DynamoDbDataServices;

module.exports.fetch = (event, context, callback) => {
   const TABLE_NAME = 'movies';
   const NUMBER_OF_ITEMS = 100;

   let dynamodbService = new DynamoDbDataServices(TABLE_NAME,NUMBER_OF_ITEMS);

   dynamodbService.getAll()
     .then((results)=>{
        const response = {
          statusCode: 200,
          body: JSON.stringify(results),
        };
        callback(null,response);
     })
     .catch((error) => {
        callback(error);
     });
};

module.exports.add = (event, context, callback) => {
    const TABLE_NAME = 'movies';
    const NUMBER_OF_ITEMS = 100;
    // const data = JSON.parse(event.body);

    let dynamodbService = new DynamoDbDataServices(TABLE_NAME,NUMBER_OF_ITEMS);
    let jsonVal = {
      "mYear": 2019,
      "mTitle": "lakshman"
    };

    dynamodbService.add(jsonVal)
      .then((results) => {
        const response = {
          statusCode: 200,
          body: JSON.stringify(results),
        };
        callback(null,response);
      })
      .catch((error) => {
         callback(error);
      });
};
