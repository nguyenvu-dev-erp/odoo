/** @odoo-module */

import { Order } from "@point_of_sale/app/store/models";
import { patch } from "@web/core/utils/patch";

patch(Order.prototype, {
    setup(_defaultObj, options) {
        super.setup(...arguments);
        this.rounding_suggestion = false;
    },

    set_rounding_suggestion(rounding_suggestion) {
        this.assert_editable();
        this.rounding_suggestion = rounding_suggestion;
    },

    is_rounding_suggestion() {
        return this.rounding_suggestion;
    },

})