import Controller from 'sap/ui/core/mvc/Controller';

export default class ServiceListController extends Controller {
    public onInit(): void {
        const eventBus = this.getOwnerComponent().getEventBus();
        eventBus.subscribe('table', 'reassign', this.reassign, this);
    }

    reassign(viewName: string, eventId: string, data: any) {
        alert(data.message);
    }
}
