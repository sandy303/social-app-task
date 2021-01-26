import User from '../Model/User'

const createUser = async(req:any,res:any)=>{
    const {name, email, createdAt} = req.body;
    const userExists = await User.findOne({_id: req.body._id})

    if(userExists)
    {
        return res.status(422).json({
            error:"ID already exists"
        })
    }
    else {
        const newUser = await new User({name, email, createdAt}).save();
        if(newUser)
        {
            res.status(200).send(newUser);
        }
  
       else 
       {
            res.status(500).json({
                status:"error"
            })
        }
    }
}

const replaceUser = async (req:any,res:any)=>{
    const {name, email, createdAt} = req.body;
    User.replaceOne({_id: req.body._id}, req.body);
    console.log("1 userupdated");    
    const replacedUser = await new User({name, email, createdAt}).save();
        if(replacedUser)
        {
            res.status(200).send(replacedUser);
        }
  
        else 
        {
            res.status(500).json({
                status:"error"
            })
        }
}

const updateUser = async (req:any,res:any)=>{
    const {name, email, createdAt} = req.body;
    User.updateOne({_id: req.body._id}, req.body);
    res.status(200).send('user updated');
    console.log("user updated");  
    const replacedUser = await new User({name, email, createdAt}).save();
        if(replacedUser)
        {
            res.status(200).send(replacedUser);
        }
  
        else 
        {
            res.status(500).json({
              status:"error occured"
            })
        }
}

const getAllUsers = async (res:any,req:any)=>{
    const getAll = await User.find()
    if(getAll)
    {
        res.status(200).send(getAll);
    }
    else 
    {
        return res.status(422).json({
           error:"nothing found to be retrieved"
        })
    }
} 

const getUser = async (res:any,req:any)=>{
    const getOne = await User.findOne({_id: req.body._id})
    if(getOne)
    {
        res.status(200).send(getOne);
    }
    else 
    {
        return res.status(422).json({
           error:"nothing found to be retrieved"
        })
    }
} 

const removeUser = async (res:any,req:any)=>{
    const removeOne = await User.findOne({_id: req.body._id})
    if(removeOne)
    {
        res.status(200).send(removeOne);
        User.remove({_id: req.body._id});

        const user = await new User().save();
        if(user)
        {
            res.status(200).send(user);
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

    // export
    const functionsPackage = {
        createUser,
        replaceUser,
        updateUser,
        getAllUsers,
        getUser,
        removeUser
      }
      
      export default functionsPackage;
