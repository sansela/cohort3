const { Command } = require('commander');
const program = new Command();
const fs = require('fs')

program
    .name("file utility")
    .description('CLI for some file utility tasks')
    .version('0.8.0');

program
    .command('word_count')
    .description('Counts the number of words of a file')
    .argument('<file>', 'name of the file with path')
    .action((fileName) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            let count = 0
            for (let i = 0; i < data.length; i++) {
                if (data[i] === " ") {
                    count++;
                }
            }
            console.log(`total words in the file ${fileName} is ${++count}`)
        })
    })

program.parse();

//Run: node commander-cli word_count a.txt
//Help: node commander-cli -h
//alias filecli="node commander-cli.js"