## Gatsby starter DOCKER setup
#### Host machine may not have node and npm installed. Only DOCKER on host machine required.

### 1. Initialize project, set up gatsby-cli
```bash
docker run -it --rm -p 8000:8000 -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app node:12 /bin/sh
```

### 2. Inside running container run commands
```bash
cd app
```

```bash
yarn add gatsby-dev-cli OR yarn add gatsby-cli
```

### 3. Start develop

```bash
yarn gatsby new bootcamp https://github.com/gatsbyjs/gatsby-starter-default
```

```bash
cd gatsby-site
```

```bash
yarn gatsby develop -H 0.0.0.0
```

### See the project
http://0.0.0.0:8000/

### 4. Press CTRL-C to stop process and type
```bash
exit
```
to stop and leave a container

### 5. Next time to start developing run command at host machine
```bash
docker run -it --rm -p 8000:8000 -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app node:12 /bin/sh
```
```bash
cd app/gatsby-site
```
```bash
yarn gatsby develop -H 0.0.0.0
```

### If you cloned this repo and want to try, run these commands:
* at host machine
```bash
docker run -it --rm -p 8000:8000 -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app node:12 /bin/sh
```
* then these three commands inside container
```bash
cd app/bootcamp
```
```bash
yarn
```
```bash
yarn gatsby develop -H 0.0.0.0
```

---
Possible fix for direct links access active styling:
https://github.com/iammatthias/.com/issues/59

 