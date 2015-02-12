#!/usr/bin/env node

/*
    Copyright Jesus Perez <jesusprubio gmail com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

//var Assault = require('assaultjs'),
var Assault = require('../'),
    assault = new Assault({}),
    moduleOptions = { target : '8.8.8.8' };

console.log('Modules info:');
console.log(JSON.stringify(assault.getModulesInfo(), null, 2));

assault.runModule('geoLocate', moduleOptions, function (err, result) {
    if (err) {
        console.log('ERROR:');
        console.log(err);
    } else {
        console.log('RESULT:');
        console.log(result);
    }
});