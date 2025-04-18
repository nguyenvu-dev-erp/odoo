/** @odoo-module */

import {Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";


export class PaymentScreenRoundingSuggestions extends Component {
    static template = 'pos_rounding_suggestion.PaymentScreenRoundingSuggestions';

    setup() {
        this.pos = useService("pos")
        this.rounding = useService("rounding");
        this.state = useState({
            suggestions: [],
            selectedSuggestion: null,
        });
        this.updateSuggestions()
    }

    get currentOrder() {
        return this.pos.get_order();
    }

    /**
     * Calculate and update suggestions
    */
    updateSuggestions() {
       const amount = this.currentOrder.get_total_with_tax();
       const options = this.pos.roundingSuggestions;
       
       this.state.suggestions = this.rounding.getAllSuggestions(amount, options);
    }
    
    /**
     * Apply selected rounding suggestion
    */
    applySuggestion(suggestion) {
       if (this.state.selectedSuggestion === suggestion) {
           // Unselect and reset payment amount
           this.state.selectedSuggestion = null;
           if (this.currentOrder.selected_paymentline) {
            this._updatePaymentlineAmount(0)
            }
        }
        else {
            if (this.currentOrder.selected_paymentline) {
                this.state.selectedSuggestion = suggestion;
                this._updatePaymentlineAmount(suggestion.amount)
            }
        }
    }

    formatAmount(amount) {
        return this.env.utils.formatCurrency(amount)
    }

    /**
     * Update amount of payment line selected
    */
    _updatePaymentlineAmount(amount) {
        this.currentOrder.selected_paymentline.amount = amount
    }
    
}