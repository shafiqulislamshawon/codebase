# codebase
Setup
The first thing to do is to clone the repository:

$ git clone https://github.com/shafiqulislamshawon/codebase.git

$ cd backend

Create a virtual environment to install dependencies in and activate it:


$ virtualenv venv
$ source env/bin/activate
Then install the dependencies:

(venv)$ pip install -r requirements.txt
Note the (venv) in front of the prompt. This indicates that this terminal session operates in a virtual environment set up by virtualenv.

Once pip has finished downloading the dependencies:

(env)$ cd project
(env)$ python manage.py runserver

then open another terminal to start the frontend
$ cd frontend
$ npm start

And navigate to http://127.0.0.1:3000/
or localhost:3000/

#NB: please refresh after every action on webpage
