import Post from '../Model/Post'
import User from '../Model/User'

const createPost = async(req:any,res:any)=>{
    const {id, body, image, created_by, created_at} = req.body;
    const postExists = await Post.findOne({_id: req.body._id})

    if(postExists)
    {
        return res.status(422).json({
            error:"ID already exists"
        })
    }
    else {
        const newPost = await new Post({id, body, image, created_by, created_at}).save();
        if(newPost)
        {
            res.status(200).send(newPost);
        }
  
       else 
       {
            res.status(500).json({
                status:"error occured"
            })
        }
    }
}

const replacedPost = async (req:any,res:any)=>{
    const {body} = req.body;
    Post.replaceOne({_id: req.body._id}, req.body);
    console.log("post updated");    
    const replacedPost = await new Post({body}).save();
        if(replacedPost)
        {
            res.status(200).send(replacedPost);
        }
  
        else 
        {
            res.status(500).json({
                status:"error occured"
            })
        }
}

const removePost = async (res:any,req:any)=>{
    const removeOne = await Post.findOne({_id: req.body._id})
    if(removeOne)
    {
        res.status(200).send(removeOne);
        Post.remove({_id: req.body._id});

        const post = await new Post().save();
        if(post)
        {
            res.status(200).send(post);
        }
  
       else 
       {
            res.status(500).json({
                status:"error occured"
            })
        }
    }

    else 
    {
        return res.status(422).json({
           error:"nothing found to be removed"
        })
    }
} 

const getAllPosts = async (res:any,req:any)=>{
    const getAll = await Post.find()
    if(getAll)
    {
        getAll.sort({created_at : 1});
        res.status(200).send(getAll);
    }
    else 
    {
        return res.status(422).json({
           error:"nothing found to be retrieved"
        })
    }
} 

const getUserOfPost = async (res:any,req:any) => {

   const userID = await User.findOne({_id: req.params._id});
   var Posts = await Post.find({"created_by": userID });
   if(Posts)
   {
       Posts.sort({created_at : 1});
       res.status(200).send(Posts);
   }
   else 
   {
       return res.status(422).json({
          error:"nothing found to be retrieved"
       })
   }
}

  // export
  export default {createPost, replacedPost, removePost, getAllPosts, getUserOfPost};