import * as uuid from 'uuid';
import * as path from 'path';
import { UploadedFile } from 'express-fileupload';

class FileService{
    saveFile(file: UploadedFile){
        try{
            const fileName = uuid.v4() + '.jpeg';
            const filePath = path.resolve('static', fileName);
            file.mv(filePath);
            return fileName
        }catch(e){
            // tslint:disable-next-line:no-console
            console.log(e);
        }
    }
}

export default new FileService()