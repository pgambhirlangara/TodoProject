# API DOCUMENTATION #################



PROJECT LINK - https://prabhjyot-todo.herokuapp.com/



# HOW TO RUN THE PROJECT (DEVELOPMENT)

**STEPS** 
1. Run npm run watch - to run the client version of the app
2. Run npm start - Run backend version of the app


**DESCRIPTION**
This is an easy to use TODO application for the project, you can create your daily tasks based on your schedule


**FEATURE THAT I AM PROUD OF**
Show staggered layout with sleak design, easy to use 



# USER -------------------------------------------------------

# SIGNUP

Used to collect a Token for a registered User.

**URL** : `/api/v1/user/register`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "name": "[valid name]",
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "password": "1234"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d",
    "name" : "John Doe",
    "email": "johndoe@gmail.com"

}
```

## Error Response

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "Unable to login with provided credentials."
    ]
}
```

# LOGIN

Used to collect a Token for a registered User.

**URL** : `/api/v1/user`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "email": "johndoe@gmail.com",
    "password": "1234"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d",
    "email": "johndoe@gmail.com"
}
```

## Error Response

**Code** : `401 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "Unauthorized user"
    ]
}
```


# LOGIN

Used to collect a Token for a registered User.

**URL** : `/api/v1/user`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "email": "johndoe@gmail.com",
    "password": "1234"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d",
    "email": "johndoe@gmail.com"
}
```

## Error Response

**Code** : `401 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "Unauthorized user"
    ]
}
```


# GET USERS

**URL** : `/api/v1/user`

**Method** : `GET`

**Auth required** : NO

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
    "email": "johndoe@gmail.com",
    "name" : "John Doe",
    }
]
```

## Error Response

**Code** : `401 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "You are not authorized"
    ]
}
```


# PUT USERS

**URL** : `/api/v1/user`

**Method** : `PUT`

**Auth required** : NO

**Data example**
```json
    {
    "email": "johndoe@gmail.com",
    "name" : "John Doe",
    }
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
    {
        "data" : {
            "email": "johndoe@gmail.com",
            "name" : "John Doe",
        }, 
        "message": "Succesfully Updated"
    }
```

## Error Response

**Code** : `401 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "You are not authorized"
    ]
}
```


# TODO -------------------------------------------------------



# GET TODOS

**URL** : `/api/v1/todo`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
    "title": "Complete task 1",
    "description" : "Task 1 Description",
    "priority": "High",
    "completionDate": "22/04/2022"
    }
]
```

## Error Response

**Code** : `401 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "You are not authorized"
    ]
}
```


# CREATE TODO

**URL** : `/api/v1/todo`

**Method** : `POST`

**Auth required** : YES

## Success Response

**Code** : `201 OK`

**Content example**

```json
    {
    "title": "Complete task 1",
    "description" : "Task 1 Description",
    "priority": "High",
    "completionDate": "22/04/2022"
    }
```

## Error Response

**Code** : `401 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "You are not authorized"
    ]
}
```


# PUT TODO

**URL** : `/api/v1/todo/:id`

**Method** : `PUT`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
    {
    "title": "Complete task 1",
    "description" : "Task 1 Description",
    "priority": "High",
    "completionDate": "22/04/2022"
    }
```

## Error Response

**Code** : `401 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "You are not authorized"
    ]
}
```


# DELETE TODOS

**URL** : `/api/v1/todo/:id`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

## Error Response

**Code** : `401 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "You are not authorized"
    ]
}
```
