# Social Network for Pets

### URL

http://mvp-social-network-for-pets.herokuapp.com/

## Run app

```
npm run start
```


## Heroku

- Login
```
heroku login
```

- add remote (done once)
```
heroku git:remote -a mvp-social-network-for-pets
```

## Push changes

- git only
```
git push origin main
```
- git and heroku
```
git push origin main && git push heroku main
```


## Stack

MERN
* Express
* Mongo
* React
* Node

## User Stories

Signup
- As a pet I would like to create an account
- As a pet I would like to edit my account
- As a pet I would like delete my account

Login
- As a pet I would like to access my account

Follow
- As a pet I would like to follow another pet
- As a pet I would like to unfollow another pet

Posts
- As a pet I would like to create a post
- As a pet I would like to edit my post
- As a pet I would like to delete my post

Comments
- As a pet I would like to create a comment to a post
- As a pet I would like to edit my comment to a post
- As a pet I would like to delete my comment to a post

Replies
- As a pet I would like to create a reply to a comment or to a reply
- As a pet I would like to edit my reply to a comment or to a reply
- As a pet I would like to delete my reply to a comment or to a reply

Reactions
- As a pet I would to add a reaction to a post or reply
- As a pet I would to remove my reaction to a post or reply


## Views

- Sign up
- Login
- Profile
- Posts Feed
- View Post
- Create Post
- Edit Post

## Components

- Signup form
- Login form
- Profile
  - Main Photo
  - Photos
  - Name
  - Bio
  - Followers
  - Following
- Posts feed
- Post
  - Create post
  - Edit post
  - View post
  - Reactions
  - Comments

## Schemas

- Pet
  - name
  - dob
  - specie
  - breed
  - bio
  - photos
    - url
    - isProfilePhoto
  - following
  - followers

- Post
  - image
  - text
  - comments
