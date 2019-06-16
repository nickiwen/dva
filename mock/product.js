module.exports = {
    "GET /api/product": (req, res) => {
        const params = req.query;
        console.log(params);
        res.send({ "name": "高粱" })
    }
}