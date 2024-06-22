export const getChannelSettings = async (req, res) => {
    try {
        const { userId } = req.user;

        console.log(userId);

        return res.status(200).send("This route is secured.");
    } catch (err) {
        return res.status(500).send("Something went wrong.");
    }
}