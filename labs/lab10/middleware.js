const bcrypt = require("bcrypt");
const data = require("./data");

const AuthCookie = "AuthCookie"
const debug = false;

async function login(req, res, next) {
    // Attempts to Authenticate a user

    if (await is_authenticated(req) === true){
        return res.redirect("/private");
    }

    if (debug) console.log("[DEBUG] attempting login");

    let usr = req.body.username;
    let pswd = req.body.password;
    let auth = false;

    if (debug) console.log(`[DEBUG] usr: ${usr}, pswd: ${pswd}`);

    if (usr !== "" && pswd !== ""){
        let db_pswd = await data.get_pswd(usr);

        try {
            if (debug) console.log(`[DEBUG] pswd: ${pswd}, db_pswd: ${db_pswd}`);
            auth = await bcrypt.compare(pswd, db_pswd);
            console.log(auth);
        } catch(e) {
            console.log(`[LOGIN] Failed to authenticate: ${e}`);
        }
    }

    if (auth){
        
        // Add the session id for the user
        let sesh_id = await data.add_session_id(usr);

        console.log(`[LOGIN] User ${usr} has logged in with AuthCookie: ${sesh_id}`);

        // Set AuthCookie
        res.cookie(AuthCookie, sesh_id, {expires: new Date(Date.now() + 100000000)});
        res.redirect("/private");
    } else {
        console.log(`[LOGIN] ${usr}'s login information incorrect `);
        error = "Username/Password combination was incorrect";
        res.redirect("/?error=" + error );
    }
}

async function is_authenticated(req) {
    // Checks that the request is authenticated

    if(!Object.keys(req.cookies).includes(AuthCookie)){
        return false;
    }

    try{
        let match = await data.get_match("session_id", req.cookies[AuthCookie]);
    } catch (error){
        console.log(error);
        return false;
    }

    console.log(`[AUTH] AuthCookie: ${req.cookies[AuthCookie]}`);

    if (typeof match !== 'undefined' && match){
        if (debug) console.log("[DEBUG] user is not logged in");
        return false;
    } else {
        if (debug) console.log("[DEBUG] user is logged in");
        return true;
    }
};

async function private(req, res, next) {
    // Ensures that a user is logged in

    if (debug) console.log("[DEBUG] trying to access /private");

    res.page = "Private"

    if (await is_authenticated(req)){
        // do authenticated user things

        let match = await data.get_match("session_id", req.cookies[AuthCookie]);

        if (debug) console.log(`[DEBUG] Rendering match: ${JSON.stringify(match)}`);

        res.render("private", {title: "Authentication App", page: "Private", data: JSON.stringify(match)});
    } else {
        response = {error: "Unauthenticated user cannot access this page."};
        res.status(403);
        res.render("private", response);
    }
}

async function logout(req, res, next) {
    // Removes a users AuthCookie -> logout

    if (debug) console.log("[DEBUG] logging out");

    // Check the cookie for its current contents
    let cookie_val = req.cookies[AuthCookie];

    if (cookie_val !== "undefined" && cookie_val){
        // Expire the AuthCookie
        res.cookie(AuthCookie, undefined, {expires: new Date(Date.now() - 100)});
        
        try {
            // Delete the current session id
            await data.del_session_id(cookie_val);
        } catch (error) {
            console.log(`[ERROR] could not remove current session id: ${error}`);
        }
    }
    
    res.redirect("/")
};

module.exports = {login, logout, private}