import Controller from 'sap/ui/core/mvc/Controller';

export default class ServiceListController extends Controller {
    public onInit(): void {
    }

    reassign() {
        const data = { message: 'asdfasdfadfsasdfasdf' };
        const eventBus = this.getOwnerComponent().getEventBus();
        eventBus.publish('table', 'reassign', data);
    }
}
