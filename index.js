import express from 'express';
let app = express();

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    // Maybe should be something else?
    res.type("text/zorro-love+lua");
    
    res.send(`
function love.draw()
    love.graphics.print('Hello World!', 400, 300)
end
`);
});


app.listen(port, () => {
    console.log('Example app listening on port ' + port);
});