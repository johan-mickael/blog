const fs = require('fs');
const PATH = require('path');

class Logger {
    constructor(path = '', key = 'select') {
        this.path = PATH.join(__dirname, path);
        this.key = key;
    }

    async getData() {
        try {
            const fileContent = fs.readFileSync(this.path, 'utf-8');
            return JSON.parse(fileContent);
        } catch (error) {
            return {
                select: [],
                insert: [],
                update: [],
                delete: [],
            };
        }
    }

    // write data to log file
    write(data) {
        fs.appendFile(this.path, data, (err) => {
            if (err) throw err;
        });
    }

    // Update data in log file
    async update(data) {
        var fileContent = await this.getData();
        fileContent[this.key].push(data);
        const updatedData = JSON.stringify(fileContent, null, 2);
        fs.writeFile(this.path, updatedData, (err) => {
            if (err) throw err;
        });
    }
}

module.exports = Logger;