/*
   .createTable('users', table => {
        table.increments('id').primary();
        table.string('avatarUrl');
        table.string('username');
      })
*/
const faker = require('faker');
const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});

let ourFaker = [];

// Create S3 service object
let s3 = new AWS.S3({apiVersion: '2006-03-01'});

 let params = {
     Bucket: 'hrr34-jaypatrickdeguzman-fec'
 };

 s3.listObjects(params, (err, data) => {
    if (err) {
        console.log("Error", err);
     } else {
        let baseURL = 'https://hrr34-jaypatrickdeguzman-fec.s3.amazonaws.com/';
        let urlArr = [];
        // console.log("Success", data.Contents.length);
        for (let i = 2; i < 103; i++) {
            urlArr.push(baseURL + data.Contents[i].Key);
        }
        urlArr.forEach(url => {
            let data = {};
            data.username = faker.fake("{{name.findName}}");
            data.avatarUrl = url;
            ourFaker.push(data);
        });

        fs.writeFile(path.join(__dirname + '/../json/users/users.js'), JSON.stringify(ourFaker, null, '\t'), (err) => {
            if (err) {
                throw err;
            }
            console.log(`It's Good!!`);
        })
     }
 })


