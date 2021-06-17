import PostService from '../services/PostService.js';

class PostController {
    async create(request: any, responce: any){
        try{
            const post = await PostService.create(request.body, request.files.picture);
            responce.json(post);
        }catch(e){
            responce.status(500).json(e);
        }
    }

    async getAll(request: any, responce: any){
        try{
            const posts = await PostService.getAll();
            return responce.json(posts);
        }catch(e){
            responce.status(500).json(e);
        }
    }

    async getOne(request: any, responce: any){
        try{
            const post = await PostService.getOne(request.params.id)
            return responce.json(post);
        }catch(e){
            responce.status(500).json(e);
        }
    }

    async update(request: any, responce: any){
        try{
            const updatePosts = await PostService.update(request.body);
            responce.json(updatePosts);
        }catch(e){
            responce.status(500).json(e);
        }
    }

    async delete(request: any, responce: any){
        try{
            const deletedPost = await PostService.delete(request.params.id);
            return responce.json(deletedPost);
        }catch(e){
            responce.status(500).json(e);
        }
    }
}

export default new PostController();