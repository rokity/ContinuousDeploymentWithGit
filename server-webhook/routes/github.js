var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

/* POST GITHUB */
router.post('/', function (req, res, next) {

  var branch = req.body['ref'].split('/')[2]
  switch (branch) {
    case "master":
      {
        new Promise(resolve => {
          exec('cd /home/ubuntu/server-web-master &&  git pull origin master && npm install && sudo systemctl restart server-web-master.service',
            (error, stdout, stderr) => {
              console.log(`${stdout}`);
              console.error(`${stderr}`);
              if (error !== null) {
                console.error(`exec error: ${error}`);
              }
              resolve()
            });

        }).then(val => res.end());
        break;
      }
    case "dev":
    {
      new Promise(resolve => {
        exec('cd /home/ubuntu/server-web-dev &&  git pull origin dev &&  npm install && wsudo systemctl restart server-web-dev.service',
          (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.error(`${stderr}`);
            if (error !== null) {
              console.error(`exec error: ${error}`);
            }
            resolve()
          });

      }).then(val => res.end());
      break;
    }
    default:
      res.end();
  }
});




module.exports = router;
