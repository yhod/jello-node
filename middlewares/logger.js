const contextService = require('request-context');

function pretty(datetime) {
    return `${datetime.toLocaleString().slice(0, -3)}:${datetime.getMilliseconds()}`;
}

exports.reqLogger =  async (req, res, next) => { //middleware function
    const start = new Date();
    contextService.set('request:start', start.getTime());
    const method = req.method;
    const url = req.url;
    const log = `[${pretty(start)}] ${method}:${url}`;
    console.log(log);

    res.on("finish", function() {
        const end = new Date();
        const start = contextService.get('request:start');
        let status = res.statusCode;
        const log = `[${pretty(end)}] ${method}:${url} status:${status} duration:${end.getTime() - start} ms`;
        console.log(log);
        next();
    });

    next();
};
