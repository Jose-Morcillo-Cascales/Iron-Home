const express = require("express")

const logger = require("morgan")

const cookieParser = require("cookie-parser")



const path = require("path")

module.exports = (app) => {
  app.use(logger("dev"))

  app.use(express.static(path.join(__dirname, "..", "public")))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())

};
