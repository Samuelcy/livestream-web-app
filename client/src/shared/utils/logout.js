export const logout = () => {
    localStorage.removeItem("user");
    // Page refresh into channels
    window.location.href = "/channels";
}