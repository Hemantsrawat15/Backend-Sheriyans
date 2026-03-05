GET => server se data fetch karvana ho tb use karna hai 
POST => server pe data store karana ho
PATCH => server pe data already hai aur usse update karna ho
DELETE => server pe data hai aur usse delete karna hai

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

4:49:20 => Jab ek user server pe register hota hai toh vo username, email, password bhejta hai
Server creates a token that contains data of the user and the server sends the token to the student
Jab bhi ek user koi bhi request karta hai in future to the server toh vo ek token bhi bhejta hai jisse server ko pata chalta hai ki vo konsa user hai

npm i jsonwebtoken = > For token