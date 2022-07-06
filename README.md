# Password Authentication Error

    - Stop all docker containers and then delete them
    - Delete the database volume
    - Re rerun docker-compose up

# Running Docker Compose First Time

    - Run command 'docker-compose up' to run docker compose for first time
    - All subsequent runs you can do 'docker compose up'

# Usage & Installation

## Server

- run `npm install`
- check to see if package.json has the postgres or mongodb dependency if not `npm install pg` for postgress or `npm install mongodb` for mongodb
- initdb.js, if connecting to postgres require pg, if connecting to mongodb require mongodb
