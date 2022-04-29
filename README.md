# Requirements 
- Python3, pip
- PostgreSQL
- React 

## Install project and all dependencies
#### Python

- Install any python3 version from https://www.python.org/downloads/

Create a new project (virtual environment will be created automatically) in PyCharm and clone Git repository and open repo folder
   

```
git clone <clone address>
cd <name of cloned repository>
```
Install Django and other packages for your Backend
```
pip install -r requirements.txt
```

### Connect PostgreSQL

- Run PostgreSQL Server on your PC (you can download Postgres here https://www.postgresql.org/download/)

For managing DB you can use pgAdmin(https://www.pgadmin.org/download/)
- In pgAdmin or any other Postgres GUI connect(or create and then) to your server and create DB
- In settings.py configure your DB with Django(Find DATABASES dict variable and set it like below)

It should look like this
```
.../backend/config/setting.py
    
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': '<your_db_name>',
            'USER': '<your_username>',
            'PASSWORD': '<your_password>',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }
``` 


#### React

- For React you need firstly install Node.js
from https://nodejs.org/en/download/ for your distribution

Then run this line in terminal 
```
npm install
```


## Run Server

In repositoty root directory run these lines in terminal

For set up:
```
    python3 manage.py makemigrations
    python3 manage.py migrate
``` 
For run server:
``` 
    python3 manage.py runserver
``` 

## To Compile Frontend 
Go to frontend directory and run this line in terminal
```
npm install
```

To compile the frontend after every change which you want to see run this line in terminal
```
npm run dev
```