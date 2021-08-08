import Controller from 'sap/ui/core/mvc/Controller';
import moment from 'moment';


export default class ServiceListController extends Controller {
    public onInit(): void {
        alert(moment().format('MM-DD-YYYY'));
    }
}
