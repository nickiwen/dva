module.exports = {
    "POST /api/login":(req,res) => {
        const params = req.query;
        console.log(params);
        res.send({
            msg:"登录成功"
        })
    }
}