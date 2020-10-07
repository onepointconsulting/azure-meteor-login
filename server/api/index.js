import {WebApp} from 'meteor/webapp'
import parse from 'urlencoded-body-parser'

const jwt = require('jsonwebtoken');

console.log('Webapp initialized');

WebApp.connectHandlers.use('/showHeaders', async (req, res, next) => {
    const {headers} = req

    const result = await parse(req).catch(e => {
        console.error('/hello - err catch parsing urlencoded:\n', e)
    })
    res.writeHead(200)
    const htmlHeaders = Object.entries(headers).map(e => `<tr><td>${e[0]}</td><td>${e[1]}</td></tr>`);
    res.end(
        `<html>
            <body>
                <h1>Headers</h1>
                <table>
                    ${htmlHeaders}
                </table>
            </body>
        </html>`
    )
})

const escape = function (str) {
    return str
        .replace(/[\\]/g, '\\\\')
        .replace(/[\"]/g, '\\\"')
        .replace(/[\/]/g, '\\/')
        .replace(/[\b]/g, '\\b')
        .replace(/[\f]/g, '\\f')
        .replace(/[\n]/g, '\\n')
        .replace(/[\r]/g, '\\r')
        .replace(/[\t]/g, '\\t');
};

WebApp.connectHandlers.use('/jsonHeaders', async (req, res, next) => {
    const {headers} = req

    const result = await parse(req).catch(e => {
        console.error('/hello - err catch parsing urlencoded:\n', e)
    })
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    const jsonHeaders = Object.entries(headers).map(e => `"${e[0]}": "${escape(e[1])}"`).join(',');
    res.end(`{${jsonHeaders}}`)
})
