import Controller from 'sap/ui/core/mvc/Controller';
import moment from 'moment';

export default class ServiceListController extends Controller {
    public onInit(): void {
        console.log(moment().format('DD-YYYY'));
    }
}
