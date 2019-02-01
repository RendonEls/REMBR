# REMBR

REMBR is a content manager that allows the user to save Links, their titles and comments, as well as peronal notes to an online database.  
User must login to save information, information is saved to the user model and accessed only by logging in.  Information is only viewable by logged in user.

REMBR is a MEHN (MngoDB, Express, Handlebars, and Node.js) application. REMBR features full CRUD (create, read, update, delete) using rMVC (Router, Model, View, Control) design method.

This app has been deloyed to Heroku. Given how slow Heroku may be, you may find you need to refresh the page a few times to wake it up.

# Deployed URL
 https://rembr-bookmarks.herokuapp.com/

 # Screenshot Sample

![Screenshot](./planning/images/Screenshot.png)


# Works in progress
As of Feb. 1, 2019:  
    1. Finish styling across all pages
    2. Refactor code to be dry
    3. Clean up CSS

# Future Feature Adds:
1. Would like to add the ability to upload screenshots or show a small preview of the current site
2. Add a line that pulls random affirmations for each login at the top of dashboard page
3. Add password reset or "forgot password" function
4. Add password verification on signup form
5. Add logout function

# Project Plan for MVP:

![Plan](./planning/images/Planning-chart.png)


# Planning


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
  4. deploy to Heroku
  5. screen cast
