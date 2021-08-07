import UIComponent from 'sap/ui/core/UIComponent';

/**
 * @namespace ui5.typescript
 */
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
