import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';
import Check from '../User/Usercheck.js';
dotenv.config();

AWS.config.region = 'ap-northeast-2';
AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
      console.log("Access key:", AWS.config.credentials.accessKeyId);
    }
  });


const s3=new AWS.S3();

const allowed=['.png','.jpg','.jpeg','.bmp'];
export const userimageupload=multer({
    storage: multerS3({
        s3: s3,
        bucket: 'mycircles',
        contentType: multerS3.AUTO_CONTENT_TYPE ,
        acl: 'public-read-write',
        key: (req, file, callback)=>{
            const uploaddir=req.params.user_id;
            const extention=path.extname(file.originalname);
            if(!allowed.includes(extention)){
                return callback(new Error('wrong format image'));
            }
            
            callback(null, `User/userimage/${uploaddir}_profile_image${extention}`)
        },
    }),
})

export const userimagedelete=async(req,file,next)=>{
    const id=req.params.user_id;
    const check=await Check.profileimage(id);
    const index=check[0].image_url.indexOf('User/userimage');
    const way=check[0].image_url.substring(index);
    console.log(way);
    if(check[0].image_url){
        console.log("데이터 존재");
        s3.deleteObject({
            bucket: 'mycircles',
            key: way,  
        })
        console.log("삭제완료");
    }
    next();
}
export const circleimageupload=multer({
    storage: multerS3({
        s3: s3,
        bucket: 'mycircles',
        contentType: multerS3.AUTO_CONTENT_TYPE ,
        acl: 'public-read-write',
        key: (req, file, callback)=>{
            const uploaddir=req.id;
            const extention=path.extname(file.originalname);
            if(!allowed.includes(extention)){
                return callback(new Error('wrong format image'));
            }
            
            callback(null, `Circle/circleimage/${uploaddir}_circle_image${extention}`)
        },
    }),
})


