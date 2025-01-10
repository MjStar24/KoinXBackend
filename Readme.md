
# KoinX Backend

An Express.js server offering features like statistics and deviation, containerized using Docker and deployed to a production environment.




## Deployment

Server deployed at 

```bash
  https://koinxbackend-zebr.onrender.com
```

## Run using docker

Clone the project

```bash
  git clone https://github.com/MjStar24/KoinXBackend.git
```

Go to the project directory

```bash
  cd KoinXBackend
```

Build docker image

```bash
    docker build -t koinxbackend .
```

Run the image

```bash
    docker run -it -p 4000:4000 koinxbackend
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/MjStar24/KoinXBackend.git
```

Go to the project directory

```bash
  cd KoinXBackend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference



Base URL 

If running locally 

```http
  http://localhost:<PORT>

```
For deployed Server

```http
  https://koinxbackend-zebr.onrender.com

```

#### Get stats

```http
  GET /api/stats?coin=${name}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string`   | **Required**. name of coin passed as query Parameter |

#### Get item

```http
  GET /api/deviation?coin=${name}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. name of coin passed as query Parameter |


