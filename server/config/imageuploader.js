import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config();


AWS.config.update({
    region:'ap-northeast-2',
    accessKeyID: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
});

const s3=new AWS.S3()