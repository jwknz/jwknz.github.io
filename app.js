const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const showdown = require('showdown');
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
const { minify } = require('html-minifier');

const port = 3000;

app.listen(port, console.log(`Server listening on port ${port}....`));

app.use('/public', express.static(path.join('public')));
app.use('/docs', express.static(path.join('docs')));
app.use('/dist', express.static(path.join('dist')));
app.use('/src', express.static(path.join('src')));

app.get('/text', (req, res) => {

    const text = decoder.write(Buffer.from(fs.readFileSync('docs/about.md')));
    //console.log(text)

    let converter = new showdown.Converter(),
    flavour = converter.setFlavor('github'),
    html =  converter.makeHtml(text);
    //console.log(html)

    res.send({"mytext": html});
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
})
