import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { user as User } from "../models/user.model.js"; // Capitalize User model (convention)

// ✅ Function to generate tokens
const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new ApiError(404, "User not found while generating tokens.");
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        return { accessToken, refreshToken };

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating Refresh and Access token.");
    }
};

// ✅ Register user handler
const registerUser = asyncHandler(async (req, res) => {

    // get user details from frontend (through postman or thunderclient)
    // validation -- not empty
    // check if user already exists : username, email
    // check for images , check for avatar
    // upload then to cloudinary , avatar
    // create user object -- create entry in db
    // remove password and refresh token field from response
    // check for user creation 
    // return response

    const { fullName, email, username, password } = req.body;
    console.log("email: ", email);

    // if(fullName===""){
    //     throw new ApiError(400, "fullname is required")
    // }

    if ([fullName, email, username, password].some((field) => field === "" || field === undefined)) {
        throw new ApiError(400, "All fields are required");
    }

    // continue your logic here...
});

// ✅ Login user handler
const loginUser = asyncHandler(async (req, res) => {
    // req -> body
    // username or email
    // find the user 
    // password check
    // access and refresh token
    // send cookies 

    const { email, username, password } = req.body;

    if (!username && !email) {
        throw new ApiError(400, "Username or email is required");
    }

    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (!existingUser) {
        throw new ApiError(400, "User doesn't exist");
    }

    const isPasswordValid = await existingUser.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials");
    }

    // generate tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(existingUser._id);

    // example cookie sending (optional - depending on setup)
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
        success: true,
        message: "Logged in successfully",
        user: {
            _id: existingUser._id,
            fullName: existingUser.fullName,
            email: existingUser.email,
            username: existingUser.username
        },
        accessToken
    });
});

export { registerUser, loginUser };
