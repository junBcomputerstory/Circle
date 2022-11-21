import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';
import Check from '../User/Usercheck.js';
dotenv.config();

AWS.config.region = 'ap-northeast-2';


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
            console.log("사진넣는중");
            console.log(req.body);
            const extention=path.extname(file.originalname);
            if(!allowed.includes(extention)){
                return callback(new Error('wrong format image'));
            }
            
            callback(null, `User/userimage/${uploaddir}_profile_image${extention}`)
        },
    }),
});

export const userimagedelete=async(req,res,next)=>{
    const id=req.params.user_id;
    const check=await Check.profileimage(id);
    if(check[0].image_url){
        const index=check[0].image_url.indexOf('User/userimage');
        const way=check[0].image_url.substring(index);
        console.log("데이터 존재");
        s3.deleteObject({
            Bucket: 'mycircles',
            Key: way,  
        },(err,data)=>{
            if(err)
                console.log(err);
            else
                console.log("삭제성공");
        });
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
            const uploaddir=req.body.name;
            console.log("ㅅㅏ진넣ㅡㄴ중");
            console.log(req.body);
            const extention=path.extname(file.originalname);
            if(!allowed.includes(extention)){
                return callback(new Error('wrong format image'));
            }
            callback(null, `Circle/circleimage/${uploaddir}_circle_image${extention}`)
        },
    }),
});

export const galleryupload=multer({
    storage: multerS3({
        s3: s3,
        bucket: 'mycircles',
        contentType: multerS3.AUTO_CONTENT_TYPE ,
        acl: 'public-read-write',
        key: (req, file, callback)=>{
            const uploaddir=req.params.circle_id;
            const uploadnum=req.body.num;
            console.log("ㅅㅏ진넣ㅡㄴ중");
            console.log(req.body);
            const extention=path.extname(file.originalname);
            if(!allowed.includes(extention)){
                return callback(new Error('wrong format image'));
            }
            callback(null, `Circle/circlegallery/${uploaddir}_gallery_image_${uploadnum}${extention}`);
        },
    }),
});


