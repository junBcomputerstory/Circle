import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
const s3=aws.config.loadFromPath('./awsconfig.json');

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: '',
        acl: 'public-read',
        key: function(req, file, cb) {
            cb(null, Math.floor(Math.random() * 1000).toString() + Date.now() + '.' + file.originalname.split('.').pop());
        }
    }),
    limits: {
        fileSize: 1000 * 1000 * 10
    }
});

export default upload;