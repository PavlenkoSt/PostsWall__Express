import PostService from '../services/PostService.js';

class PostController {
    async create(request, responce){
        try{
            const post = await PostService.create(request.body, request.files.picture);
            responce.json(post);
        }catch(e){
            responce.status(500).json(e);
        }
    }

    async getAll(request, responce){
        try{
            const posts = await PostService.getAll();
            return responce.json(posts);
        }catch(e){
            responce.status(500).json(e);
        }
    }

    async getOne(request, responce){
        try{
            const post = await PostService.getOne(request.params.id)
            return responce.json(post);
        }catch(e){
            responce.status(500).json(e);
        }
    }

    async update(request, responce){
        try{
            const updatePosts = await PostService.update(request.body);
            responce.json(updatePosts);
        }catch(e){
            responce.status(500).json(e);
        }
    }

    async delete(request, responce){
        try{
            const deletedPost = await PostService.delete(request.params.id);
            return responce.json(deletedPost);
        }catch(e){
            responce.status(500).json(e);
        }
    }
}

export default new PostController();