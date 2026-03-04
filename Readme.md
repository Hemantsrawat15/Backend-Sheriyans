26th February => {
    timeEnded: 58:17,
    learn: {
        Learn about REST API
        GET, POST, PATCH, DELETE
    },
}

28th February => {
    tileEnded: 1:44:34,
    learn:{
        Learn about status codes
    }
}

28th February (Continued) => {
    tileEnded: 2:37:15 -> 2:50:07,
    learn:{
        CRUD operations in mongoose
        .create, .find, .findOne, 
    }
}

2nd March => {
    tileEnded: 3:04:28,
    done : {
        "Done building basic api with mongo db",
    }
}

2nd March (Continued) => {
    tileEnded: 3:18:52,
    done : {
        "Basic project setup",
    }
}

3rd March => {
    tileEnded: 3:44:48,
    done : {
        "Made POST /create-post api which uploads the image to imageKit but we have not stored the url in mongoDB yet",
    }
}

4th March => {
    tileEnded: 4:01:10,
    done : {
        "Completed POST and GET api with imagekit integration",
    }
}

4th March (Continued) => {
    tileEnded: 4:32:51,
    done : {
        "Completed the projected and integrated backend api for create-post and get posts in the fronted",
    }
    learn:{
        learn about cors and .env and axios
    }
}


An authentication system consists of
1. Validation
    Validation means checking whether the input data format is correct.
    It does not check identity, it only checks if the data is acceptable.
    Examples
        Is the email format correct? → user@gmail.com
        Is the password at least 8 characters?
        Are required fields filled?

2. Verification
    Verification means confirming that the information provided actually exists in the system.
    Example:
        Does this email exist in the database?
        Does this username belong to a registered user?

3. Authentication
    Authentication means proving the user is really who they claim to be.
    Usually done by checking credentials like:
        Password
        OTP
        Fingerprint
        Face ID

4. Authorization
    Authorization means deciding what the authenticated user is allowed to do.
    Example permissions:
        Admin can delete users
        Normal user cannot
        Only owner can edit their post