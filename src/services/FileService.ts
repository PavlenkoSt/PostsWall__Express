import * as uuid from 'uuid';
import * as path from 'path';

class FileService{
    saveFile(file: any){
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