export const getChannelDetails = async (req, res) => {
    return res.status(200).json({
        id: 1,
        title: 'Channel',
        description: 'Description',
        username: "testUsername",
        isOnline: false,
        streamUrl: "http"
    });
}