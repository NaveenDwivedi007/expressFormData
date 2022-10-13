import express from "express"

const app = express()
const cfg = {
  port: process.env.PORT || 8080
}

app.listen(cfg.port, () => {
  console.log(`App is running on localhost:${cfg.port}`);
})