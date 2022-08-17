// pwgen 8 > .pwjs; xclip -sel clip .pjws; rm .pwjs
// executes pwgen > creates a file with stdout > reads content > copys into clipbpard
// uses 3d party xclip
// bug: terminal takes inputs after exec node pwg


const { exec, execSync } = require("child_process");
const fs = require('fs');
const { stdout, stderr } = require("process");
const param = process.argv[2] || '';
const fileName = '.pwjs';

/* console.log('!-!', process.argv) */

fs.writeFile(`${fileName}`, '', function(err) {
    if (err) throw err;
    console.log('file created')
});

exec(`pwgen ${param}`, (error, stdout, stderr) => {
    if (error) console.log(`error: ${error.message}`);
    if (stderr) console.log(`stderr: ${stderr}`);
/*     console.log(stdout); */

    fs.writeFile(`${fileName}`, `${stdout}`, function(err) {
        if (err) throw err;
        console.log(`pass returned\n${stdout} `);
    });
    exec('xclip -sel clip .pwjs');
});

fs.readFileSync(`${fileName}`, 'utf8',  function (err, data) {
    if (err) throw err;
    console.log(data.trim().length);
    console.log(fileName)
});
fs.unlinkSync(`./${fileName}`, function(err) {
    if(err) return console.log(err);
    console.log('file has been deleted');
});
