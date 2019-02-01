### REMBR Idea:

-This app is an online content manager for web resources and personal notes
-Content is saved specifically to the logged in user, a user can only see their own content, nobody else's

###Models:

````javascript
const Note = new Schema ({
  title: String,
  note: String
})
const Bookmark = new Schema ({
  title: String,
  url: String,
  text: String,
  createdAt: {
      type:Date,
      default: Date.now()
  }
})
const User = new Schema({
    email: String,
    password: String,
    bookmark: [Bookmark],
    note: [Note]
})
```
![planning Chart]
(Planning-chart.png)


###Planning


  Day 1: 
  
  1. User Story
  2. Wire Frame
  3. Create Repo
  4. Setup directory/file structure
  5. plan dependencies
  6. install dependencies
  7. build express server

  Day 2: 

  1. build models: User, Bookmark
  2. add User authentication with password hashing
  3. create view for login
  4. create view for sign up
  5. create view for login

  day 3:
  1. setup routes for show login
  2. setup controller for show login
  3. setup routes for signup
  4. setup controller for signup
  5. setup routes for new bookmark
  6. setup controller for newbookmark

  day 4:
  1. maintain sanity
  2. finish update/delete logic/routes/controller

  day 5:
  1. hold it together
  2. style
  3. user documentation