## Gatsby starter DOCKER setup
#### Host machine may not have node and npm installed. Only DOCKER on host machine required.

### Initialize project, set up gatsby-cli
```bash
docker run -it --rm -p 8000:8000 -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app node:11 /bin/sh
```

### Inside running container run commands
```bash
cd app
```

```bash
yarn add gatsby-dev-cli
```

### Start develop

```bash
cd gatsby-site
```

```bash
yarn gatsby develop -H 0.0.0.0
```

### See the project
http://0.0.0.0:8000/

### Press CTRL-C to stop process and type
```bash
exit
```
to leave container

### Next time to start developing run command at host machine
```bash
docker run -it --rm -p 8000:8000 -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app node:11 /bin/sh
```
```bash
cd app/gatsby-site
```
```bash
yarn gatsby develop -H 0.0.0.0
```