const uuid4 = require("uuid/v4");

const db = [
    { 
        _id: "1245325124124", 
        username: "masterdetective123", 
        hashedPassword: "$2a$16$7JKSiEmoP3GNDSalogqgPu0sUbwder7CAN/5wnvCWe6xCKAKwlTD.", 
        firstName: "Sherlock", 
        lastName: "holmes",
        Profession: "Detective",
        bio: 'Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a "consulting detective" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.',
        password: "elementarymydearwatson",
        session_id: undefined
    },
    { 
        _id: "723445325124124", 
        username: "lemon", 
        hashedPassword: "$2a$16$SsR2TGPD24nfBpyRlBzINeGU61AH0Yo/CbgfOlU1ajpjnPuiQaiDm", 
        firstName: "Elizabeth", 
        lastName: "Lemon",
        Profession: "Writer",
        bio: 'Elizabeth Miervaldis "Liz" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.',
        password: "damnyoujackdonaghy",
        session_id: undefined
    },
    { 
        _id: "31268324681638354", 
        username: "theboywholived", 
        hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK", 
        firstName: "Harry", 
        lastName: "Potter",
        Profession: "Student",
        bio: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.",
        password: "quidditch",
        session_id: undefined
    }
  ]

async function get_match(key, value) {
    // Function that returns the matching "database" entry
    let matching_entry = undefined;

    db.forEach(element => {
        if(element[key] === value){
            matching_entry = element;
            delete matching_entry.password;
            console.log(`[DB] entry found: ${JSON.stringify(matching_entry)}`);
        }
    })

    return matching_entry;
}

async function get_pswd(username) {
    // Given a username, returns the hashed password for that username (if it exists)
    let match =  await get_match("username", username);
    return match.hashedPassword;
}

async function set_key_value(username, key, value) {
    // Function that sets a key/value pair for an entry of the given username

    let found = false;

    for(var i = 0; i < db.length; i++){
        if(db[i]["username"] === username){
            db[i][key] = value;
            found = true;
            break;
        }
    }

    return found;
}

async function add_session_id(username){
    // Function that adds a user's uuid session id value to the "database"
    let sesh_id = uuid4();

    let set = await set_key_value(username, "session_id", sesh_id);

    if (set){
        // if the key was set, return that session id
        return sesh_id;
    } else {
        // key was not set, return undefined
        return undefined;
    }
}

async function del_session_id(session_id){
    // Function that removes a user's current uuid session id value from the "database"

    return await set_key_value(session_id, "session_id",  undefined);
}

module.exports = {get_match, get_pswd, add_session_id, del_session_id}