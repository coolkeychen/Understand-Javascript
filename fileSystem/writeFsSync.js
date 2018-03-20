'use strict';

var fs = require('fs');

var data = 'Hello,Node.js';

fs.writeFileSync('outputSync.txt',data);