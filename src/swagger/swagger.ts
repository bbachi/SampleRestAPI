//import fs = require('fs');
//import path = require('path');

export const SWAGGER_DOCS = {
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "SAPortal OASIS API",
      "description": "Microservice to manage  OASIS flashes",
      "contact": {
        "name": "NSS-NAD",
        "email": "william.roberts@vzw.com"
      },
      "license": {
        "name": "MIT"
      }
    },
    "basePath": "/api",
    "schemes": [
      "http"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/status": {
        "get": {
          "summary": "Get status",
          "tags": [
            "Status"
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        },
        "post": {
          "summary": "Post status",
          "tags": [
            "Status"
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        },
        "put": {
          "summary": "status",
          "tags": [
            "Status"
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        },
        "delete": {
          "summary": "Delete status",
          "tags": [
            "Status"
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        },
        "patch": {
          "summary": "Patch status",
          "tags": [
            "Status"
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/flashes": {
        "get": {
          "summary": "Get All flashes",
          "tags": [
            "flashes"
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      },
      "/flashes/{flashNumber}": {
        "get": {
          "summary": "Get flash details",
          "tags": [
            "flash Details"
          ],
          "parameters": [
            {
              "name": "flashNumber",
              "in": "path",
              "description": "flashNumber of flash to return",
              "required": true,
              "type": "integer"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      }
    }
  }

 // export const CUSTOM_CSS = fs.readFileSync((path.join(process.cwd(), './src/swagger/docs.css')), 'utf8');