import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = process.cwd() // Current working directory

let files = await fs.readdir(basepath)

for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(ext)) {
            await fs.rename(item, path.join(ext, item))
        }
        else {
            await fs.mkdir(ext)
            await fs.rename(item, path.join(ext, item))
        }
    }
}