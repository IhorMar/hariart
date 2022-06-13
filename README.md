# Requirements 
- Python3, pip
- PostgreSQL
- React 

## Install project and all dependencies
### Python

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

#### For mac os

If you are getting error while installing `Pillow`

```
brew install zlib && brew install jpeg && brew install  gcc
```

and then

```
pip install -r requirements.txt
```

## Connect PostgreSQL

- Run PostgreSQL Server on your PC (you can download Postgres here https://www.postgresql.org/download/)
- Manualy create a db in Postgres

For managing DB you can use pgAdmin(https://www.pgadmin.org/download/)
- In pgAdmin or any other Postgres GUI connect(or create and then) to your server and create DB
- In settings.py configure your DB with Django(Find DATABASES dict variable and set it like below)

### For mac os
To start the postgres server

```
brew services start postgresql
```

It should look like this
```
.../backend/config/setting.py
    
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': '<your_db_name>',
            'USER': '<your_username>',
            'PASSWORD': '<your_password>',
            'HOST': '<your_host>', # localhost as default
            'PORT': '5432',
        }
    }
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

#### React
```
    cd hariart_frontend
```

- For React you need firstly install Node.js
from https://nodejs.org/en/download/ for your distribution

Then run this line in terminal 
```
npm install
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

## Run with docker-compose

You could customize your db connections in `docker-compose.yaml` by changing
```
....
    environment:
        POSTGRES_DB: db_name
        POSTGRES_USER: db_user_name
        POSTGRES_PASSWORD: db_user_password
....

....
    environment:
        - SECRET_KEY=secret_key
        - DEBUG=1
        - DB_HOST=database
        - DB_NAME=db_name
        - DB_USER=db_user_name
        - DB_PASS=db_user_password
....
```

In root directory
```
docker-compose build --no-cache
docker-compose up
```

After it you could see that development server is listening all `<host>:8000`
You need go to <http://localhost:8000>

To add data from the admin panel
```
docker-compose run --rm app sh -c "python manage.py createsuperuser"
```