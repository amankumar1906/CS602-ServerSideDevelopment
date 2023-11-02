import * as fs from 'fs';
const targetFile = 'article.txt';
const duplicateFile = "duplicate_of_article.txt";
let inputData = '';

// As soon as you listen to data event and attach a callback it starts flowing. 
// After that, chunks of data are read and passed to your callback. 

const readerStream = fs.createReadStream(targetFile, {encoding: 'utf8'});
 
readerStream.on('data', (chunk) => {
    inputData += chunk;
});
readerStream.on('close', () => {
    console.info(`Close event was emitted on ${targetFile}`);
}); 

// When there is no more data to read (end has been reached), 
// the stream emits an 'end' event
readerStream.on('end', () => {
    /* uncomment this line below if you want to see the data. */     
    /* console.log(inputData); */

    // We read the file.   Close the stream.
    readerStream.close();

    const writableStream = fs.createWriteStream(duplicateFile, {encoding: 'utf8'});
    writableStream.write(inputData);
    writableStream.close();

    writableStream.on('close', () => {
        console.info(`Just finished writing to the ${duplicateFile} file`);
    });
    writableStream.on('error', error => {
        console.error(`There was a problem when writing to ${duplicateFile}`);
    });
    writableStream.on('pipe', src => {
        console.log("The pipe event was emitted");
    });
    writableStream.on('finish', () => {
        console.log("All writes to the stream are complete");
    });
});

// if there is an error, the stream will emit the error
readerStream.on('error', (err) => {
    console.error(err);
});