
# Enrollment System - Student Portal (backend)

[![AGPL_30](https://img.shields.io/badge/License-AGPL--3.0-lightgrey.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)
[![Coverage Status](https://coveralls.io/repos/github/larongbingo/enrollment_system_backend_lel/badge.svg?branch=master)](https://coveralls.io/github/larongbingo/enrollment_system_backend_lel?branch=master)
[![Build Status](https://travis-ci.com/larongbingo/enrollment_system_backend_lel.svg?branch=master)](https://travis-ci.com/larongbingo/enrollment_system_backend_lel)
[![Greenkeeper badge](https://badges.greenkeeper.io/larongbingo/enrollment_system_backend_lel.svg)](https://greenkeeper.io/)

A project to get experience using CI and tools for testing.

## How to use
Run the following commands
  - npm install
  - npm run build
  - npm run sync-tables
  - npm run start

This expects that the MySQL Server already has a database named 'enrollment_system'

## Scripts
All scripts have a prefix of "npm run"
  - build - builds the entire project as a development code
  - build:prod - builds the entire project as a production ready code 
  - start - starts the server in a development environment
  - start:prod - starts the server in a production environment
  - test - runs the tests in a testing environment
  - sync-tables - FORCEFULLY removes all of the tables and adds new tables
  - type-check - runs the type checking of typescript ONCE
  - type-check:watch - runs the watch mode of type checking
  - build:types - extracts all of the types to allow typescript projects to use the build files
  - build:js - transpiles the typescript files into javascript files as a development code
  - build:prod:js - transpiles the typescript files into js files as a production ready code

## Stack
This project follows the MERN Stack
  - MySQL
    - Sequelize
  - Express
  - NodeJS
    - Typescript

This will be used by a separate project that will have the React part.

## License
  Allows the students to check whether they are already enrolled or not
  Copyright (C) 2018  larongbingo

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
