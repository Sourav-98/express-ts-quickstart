import express from 'express';

import defaultController from 'controller/default.controller';

const app = express();

const port = process.env.PORT || 6000;

app.use(defaultController);

app.listen(port, () => {
    console.log('Express Server started at http://localhost:' + port);
})
