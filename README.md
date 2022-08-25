# Info
Name: Amirreza <br>
Lastname: Dashti Genave <br>
Email: dashti.amir2752@gmail.com <br>
node: version: v16.17.0 <br>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev
```
# How to call APIs
```bash
# create a planet object
$ curl -i -X POST -H 'Accept: application/json' \ 
-H 'Content-type: application/json' http://localhost:3000/planets \
--data '{"name":"Earth", "value": "some value", "required": 1}'

# Show all planets
 http://localhost:3000/planets 
 
# Update a planet
$ curl -i -X PATCH -H 'Accept: application/json' \
-H 'Content-type: application/json' http://localhost:3000/planets/1 \
--data '{"name":"Mars", "value": "some value", "required": 0}' 


# Delete a planet
$ curl -i -X DELETE -H 'Accept: application/json' \
-H 'Content-type: application/json' http://localhost:3000/planets/2  
```

# Database Configs
Database configs are located in ``src/app.module.ts`` file. (Mysql has been used)

