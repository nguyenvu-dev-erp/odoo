/** @odoo-module **/
import { patch } from "@web/core/utils/patch";
import { PaymentScreen } from "@point_of_sale/app/screens/payment_screen/payment_screen";
import { _t } from "@web/core/l10n/translation";
import { PaymentScreenRoundingSuggestions } from "@pos_rounding_suggestion/app/screens/payment_screen/payment_rounding_suggestions/payment_rounding_suggestions";

const paymentScreenComponents = PaymentScreen.components || {};
PaymentScreen.components = {
    ...paymentScreenComponents,
    PaymentScreenRoundingSuggestions
};

patch(PaymentScreen.prototype, {

    toggleIsRoudingSuggestion() {
        this.currentOrder.set_rounding_suggestion(!this.currentOrder.is_rounding_suggestion());
    }

});