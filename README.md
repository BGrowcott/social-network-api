# Social Network API

Simply an API for a social network - made using Express, Mongo and Mongoose.

## Table of Contents

1. [Description](#description)
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Questions](#questions)

## Description

This API allows a user to create, read, update and delete (CRUD) from a MongoDB database.

The database will contain collections for Users and Thoughts.

When the server is started Mongoose models are synced to the Mongo database.

API GET routes will return data for Users and Thoughts in a formatted JSON.
    - Users will have a Friend count field
    - Thoughts will have a Reaction count field

API POST, PUT and DELETE routes will create, update and delete users and thoughts from the database.

There are also API POST and DELETE routes for creating and delete reactions to thoughts and for adding and removing friends from a user's friend list.

### Example

GET a single user route will return:

```
{
	"_id": "6274ec5bf718b019823eb4d9",
	"username": "Big Pooh Bear",
	"email": "bigpooh@fakemail.com",
	"thoughts": [
		"6274efdff718b019823eb4e2"
	],
	"friends": [
		"6272f0e6cf54fde1f558ed2b"
	],
	"__v": 0,
	"friendCount": 1,
	"id": "6274ec5bf718b019823eb4d9"
}
```

## Installation
----
1. Git clone this repository
2. Navigate to the correct directory in your command line
3. Run command: npm install
4. Run command: npm start
5. Check the routes via localhost:3001 in Postman or Insomnia
----

## Usage

### User Routes

#### Create a User
```
POST localhost:3001/api/users
```
Example body:
```
{
    "username": "Pooh Bear",
    "email": "bigpooh@fakemail.com"
}
```

#### View all Users
```
GET localhost:3001/api/users
```

#### View a single User
```
GET localhost:3001/api/users/:userId
```

#### Update a User
```
PUT localhost:3001/api/users/:userId
```
Example body:
```
{
    "email": "bigpoohbear@fakemail.com"
}
```

#### Delete a User
```
DELETE localhost:3001/api/users/:userId
```

#### Add a Friend
```
POST localhost:3001/api/users/:userId/friends/:friendId
```

#### Remove a Friend
```
DELETE localhost:3001/api/users/:userId/friends/:friendId
```
### Thought Routes

#### Create a Thought
```
POST localhost:3001/api/thoughts
```
Example body:
```
{
  "thoughtText": "I'm thinking this thought",
  "username": "Pooh Bear",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

#### View all Thoughts
```
GET localhost:3001/api/thoughts
```

#### View a single thought
```
GET localhost:3001/api/thoughts/:thoughtId
```

#### Update a thought
```
PUT localhost:3001/api/thoughts/:thoughtId
```
Example body:
```
{
    "thoughtText": "I'm thinking this thought in a slightly different way"
}
```

#### Delete a thought
```
DELETE localhost:3001/api/thoughts/:thoughtId
```

#### Add a Reaction
```
POST localhost:3001/api/thoughts/:thoughtId/reactions
```
Example Body:
```
{
	"reactionBody": "I am reacting to this thought",
	"username": "Big Pooh Bear"
}
```

#### Remove a Reaction
```
DELETE localhost:3001/api/thoughts/:thoughtId/reactions
```
Example Body:
```
{
	"reactionId": "6274f3cff718b019823eb4ed"
}
```

## Video Demonstration

Please check out this video of the application in action - [Video](https://drive.google.com/file/d/1I6EoNT0bzGs55Np82MOdgkLZ_SJsaRZ-/view?usp=sharing)

## License

This project is covered under the MIT License.

## Contributing

Ben Growcott - [GitHub](https://github.com/BGrowcott)

## Questions

If you have any questions or suggestions please contact me via my GitHub or Email:

[GitHub](https://github.com/BGrowcott)

[Email](mailto:bg.coding101@gmail.com)

----