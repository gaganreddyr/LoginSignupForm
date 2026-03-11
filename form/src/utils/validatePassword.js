export const validatePassword = (password) => {
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;  

    if (!password) {
        return("Please enter a password");
    }
    else if (!passwordRegex.test(password)) {
        alert("Password must contain 8 characters, uppercase, lowercase, number and symbol");
    }
};