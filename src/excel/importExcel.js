const xlsx = require('xlsx');

const filePath = process.argv.slice(2)[0];
const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[1]];

let posts = [];
let post = {};

for (let cell in worksheet) {
    const cellAsString = cell.toString();

    if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm' && cellAsString[1] > 1) {
        if (cellAsString[0] === 'A') {
            post.author = worksheet[cell].v;
        }
        if (cellAsString[0] === 'D') {
            post.relative = worksheet[cell].v;
        }
        if (cellAsString[0] === 'E') {
            post.rank = worksheet[cell].v;
            posts.push(post);
            post = {};
        }
    }
}

console.log(posts);