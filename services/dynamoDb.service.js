
'use strict';

let aws = require("aws-sdk");

class DynamoDbDataServices {
    constructor(tablename,numberOfItems){
      this.tableName = tablename;
      this.numberOfItems = numberOfItems;

      const awsDefaultRegion = process.env.AWS_DEFAULT_REGION;

      let dynamodbParams = {
        region: awsDefaultRegion
      };

      aws.config.update(dynamodbParams);

    }

    /**
      Retreive all the movie details from database
    */
    getAll(){
      return new Promise((resolve,reject)=>{

        let docClient = new aws.DynamoDB.DocumentClient();

        const params = {
          TableName: this.tableName,
          Limit: this.numberOfItems
        };

        docClient.scan(params,(err,data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data.Items);
          }
        });
      });
    }

    /**
    * This method to add item to DynamoDB table
    */
    add(){
      return new Promise((resolve, reject) =>{
        const result = [{
          message: "My message for adding"
        },{
          message: "My second message foe adding"
        }];
        resolve(result);
      });
    }
}

module.exports = DynamoDbDataServices
