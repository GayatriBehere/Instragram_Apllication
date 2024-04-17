
import User from "../models/UserModels.js"; 

export const createUser = async (req, res) => {
    try {
      
        const { username, email, password, profilePicture, bio } = req.body;

       
        const newUser = new User({
            username,
            email,
            password,
            profilePicture,
            bio
        });

        const savedUser = await newUser.save();

        console.log("New User Added: ", savedUser);

        
        res.json( savedUser);

    } catch (error) {
        console.log("Error creating new user", error);

  
        res.status(500).json({
            success: false,
            message: "User cannot be added"
        });
    }
};


export const UserInfo = async (req, res) => {
    try {
        const userID = req.params.id;
        console.log(userID);

        const user = await User.findById(userID);

        res.json(user);

    } catch (error) {
        console.log("Error deleting blog", error);
        return res.status(500).json({
            success: false,
            message: "Blog cannot be deleted. Please try again."
        });
    }
}


export const deleteBlog = async (req, res) => {
    try {
        const UserID= req.params.id;
        console.log(UserID);

        await User.findByIdAndDelete(UserID);

        res.json({
            message:"succesfully deleted"
        });

    } catch (error) {
        console.log("Error deleting blog", error);
        return res.status(500).json({
            success: false,
            message: "Blog cannot be deleted. Please try again."
        });
    }
}


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'An error occurred while retrieving users' });
    }
};
