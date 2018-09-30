module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db');
        db.products.get_products()
        .then(resp => res.status(200).send(resp))
        .catch(err => res.status(500).send(err))
    }
}