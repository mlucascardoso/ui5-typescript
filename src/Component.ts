import UIComponent from 'sap/ui/core/UIComponent';

export default class Component extends UIComponent {
    public static metadata = {
        manifest: 'json'
    }

    public init(): void {
        super.init();
        this.getRouter().initialize();
    }

    public destroy(): void {
        super.destroy();
    }
}
