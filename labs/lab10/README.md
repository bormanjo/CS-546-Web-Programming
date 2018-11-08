# User Authentication

## Routes and procedures

1. GET /
    - If user is authenticated:
        - Redirect to /private
    - else:
        - Render a view with a login form
        - Form (id:login-form)
            - username (name:username)
            - password (name:password)
2. POST /login
    - Process form submission, attempt to login the user:
    - If login was successful
        - Set a cookie named: AuthCookie
        - Redirect user to /private
    - else
        - Re-render / with error message stating incorrect usrnm/pswd
3. GET /private
    - Protect route with authentication middleware
    - If user is authenticated
        - Render view that displays all user data except the pswd
    - else
        - Render an error and issue a status code of 403
4. GET /logout
    - Expire AuthCookie and redirect to /

## Users

- Data to be stored in memory, not database
    - Data methods to access and search for users must be asynchronus (return promises)
    - Passwords must be stored in a hashed format ALL THE TIME
    - 
