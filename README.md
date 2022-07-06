# Password Authentication Error

    - Stop & delete all running docker containers
    - Delete the database volume use command `docker volume ls` to see a list of volumes
    - To delete containers and volumes you simply run command `docker rm <name_of_container/volume>`
    - Now re-run the docker compose yaml file using the command `docker-compose up`

# Running Docker Compose First Time

    - Run command 'docker-compose up' to run docker compose for first time
    - All subsequent runs you can do 'docker compose up'

# Usage & Installation

## Server

- run `npm install`
- check to see if package.json has the postgres or mongodb dependency if not `npm install pg` for postgress or `npm install mongodb` for mongodb
- initdb.js, if connecting to postgres require pg, if connecting to mongodb require mongodb
- Update models
- Update controllers
