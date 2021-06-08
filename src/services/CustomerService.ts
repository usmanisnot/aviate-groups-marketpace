
import superagent from 'superagent'

export default class CustomerService {
    
    getCustomersSmall() {
        return superagent.get('data/customers-small.json').then(res => res.body.data);
    }
    
    getCustomersMedium() {
        return superagent.get('data/customers-medium.json').then(res => res.body.data);
    }
    
    getCustomersLarge() {
        return superagent.get('data/customers-large.json').then(res => res.body.data);
    }
    
    getCustomersXLarge() {
        return superagent.get('data/customers-xlarge.json').then(res => res.body.data);
    }
      
    // getCustomers(params: any) {
    //     return superagent.get('https://www.primefaces.org/data/customers').query({ params }).then(res => res.body);
    // }
}
    