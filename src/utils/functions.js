export const validame = (type, value) => {

    switch (type) {
        case "nickname":
            if (value.length < 3) {
                return "Nickname must contain at least 3 characters"
            }
            return "";
        

        case "last_name":

            if (value.length < 3) {
                return "El apellido debe tener minimo 3 caracteres"
            }
            return "";

        case "email":
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

            if (!emailRegex.test(value)) {
                return "Please enter a valid email address";
            }
            return "";

        case "password":

            if (value.length < 6) {
            return "Password must contain at least 6 characters"
            }
            return "";

        default:
            console.log("patatitas fritas");
    }
};