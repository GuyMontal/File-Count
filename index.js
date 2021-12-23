import fs from "fs/promises"

let basePath = 'demi'
let countOfFiles = 0;

async function readFolder(path) {
  const files = await fs.readdir(`${path}`); 
    try {
        for (let file of files) {
            const fullPath = `${path}/${file}`;
            const statInfo = await fs.lstat(fullPath);
            if (statInfo.isDirectory()) {
                await readFolder(fullPath);
            } else {
                countOfFiles++;
            }
        }
        return countOfFiles;

    } catch (err) {
        console.log(err);
    }
}

countOfFiles = await readFolder(basePath);
console.log(`The folder has : ${countOfFiles} files.`)