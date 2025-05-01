const fs = require('fs')

function wordCount(fileName) {
    fs.readFile(fileName, 'utf-8', function (err, data) {
        if (err) {
            console.log('Error readin the file', err)
        } else {
            let count = 0;
            for (i = 0; i < data.length; i++) {
                if (data[i] === " ") {
                    count++
                }
            }
            console.log("Total words: ", ++count);
        }
    })
}

// wordCount('a.txt')
wordCount(process.argv[2])