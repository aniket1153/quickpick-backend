import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name : "dtjcnozic",
    api_key : "585468161998583",
    api_secret : "EcNvNTtvI_WtTVEO3D10Lk1_nNk"
})

const uploadImageClodinary = async(image)=>{
    const buffer = image?.buffer || Buffer.from(await image.arrayBuffer())

    const uploadImage = await new Promise((resolve,reject)=>{
        cloudinary.uploader.upload_stream({ folder : "binkeyit"},(error,uploadResult)=>{
            return resolve(uploadResult)
        }).end(buffer)
    })

    return uploadImage
}

export default uploadImageClodinary
