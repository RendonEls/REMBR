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