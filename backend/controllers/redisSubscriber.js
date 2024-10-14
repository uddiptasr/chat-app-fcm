import redisClient from '../services/redisClient.js';
import { getReceiverSocketId ,io} from '../socket/socket.js';

redisClient.on('message', (channel, message) => {
    const parsedMessage = JSON.parse(message);
    const { receiverId } = parsedMessage;
    console.log("message received from redis:: ", parsedMessage);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
        io.to(receiverSocketId).emit("newMessage", parsedMessage.message);
    }
});

