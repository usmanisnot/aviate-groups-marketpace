import superagent from 'superagent';

export default class ProductService {

    getProductsSmall() {
        return superagent.get('data/products-small.json')
            .then(res => res.body.data);
    }

    getProducts() {
        return superagent.get('data/products.json')
            .then(res => res.body.data);
    }

    getProductsWithOrdersSmall() {
        return superagent.get('data/products-orders-small.json')
            .then(res => res.body.data);
    }
}