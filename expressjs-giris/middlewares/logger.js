module.exports = (req, res, next) => { //middlewareler üç parametre alıyor.
    console.log(`${new Date().toUTCString()} - ${req.method} - ${req.hostname}`);
    next(); //bir sonraki middleware'e atlamasını sağlıyor.
};
