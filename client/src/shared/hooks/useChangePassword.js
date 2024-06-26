import { changePassword as changePasswordRequest } from "../../api";
import toast from "react-hot-toast"

export const useChangePassword = () => {
    const changePassword = async (password, newPassword) => {
        const responseData = await changePasswordRequest({ password, newPassword });

        if (responseData.error) {
            return toast.error(
                responseData.exception?.response?.data || "Error occured when updating password."
            )
        }

        toast.success("Password updated sucessfully");
    }

    return {
        changePassword,
    }
}