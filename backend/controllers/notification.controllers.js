import FriendRequest from "../models/friendRequest.model.js";

export const getAllNotifications = async(req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const  filteredNotifications = await FriendRequest.find({ receiverId: loggedInUserId }).populate("senderId receiverId");
        res.status(200).json(filteredNotifications);

    } catch (error) {
        console.log("Error in getAllNotifications: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}