import { UploadedFile } from 'express-fileupload';
import Post from '../Post.js';
import FileService from './FileService.js';

type PostType = {
    author: string
    title: string
    content: string
    picture: string
    _id?: string
}

class PostService{
    async create(post: PostType, picture: UploadedFile){
        const fileName = FileService.saveFile(picture);
        const newPost = await Post.create({...post, picture: fileName });
        return newPost;
    }

    async getAll(){
        const posts = await Post.find();
        return posts;
    }

    async getOne(id: string){
        if(!id){
            throw new Error('id не указан');
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post: PostType){
        if(!post._id){
            throw new Error('id не указан');
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true});
        return updatedPost;
    }

    async delete(id: string){
        if(!id){
            throw new Error('id не указан');
        }
        const deletedPost = await Post.findByIdAndDelete(id);
        return deletedPost;
    }
}

export default new PostService();