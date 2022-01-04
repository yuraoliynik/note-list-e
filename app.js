const express = require('express');

const {APP_PORT} = require('./configs/config');
const {errorStatuses} = require('./constants');
const insertStartData = require('./helpers/insertStartData');
const noteRouter = require('./routes/note.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/notes', noteRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || errorStatuses.code_500)
        .json({msg: err.message});
});

app.listen(APP_PORT, () => {
    console.log(`App listening port: ${APP_PORT}`);

    insertStartData();
});
