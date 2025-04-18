/** @odoo-module */
import {patch} from "@web/core/utils/patch";
import {PosStore} from "@point_of_sale/app/store/pos_store";

patch(PosStore.prototype, {
    async _processData(loadedData) {
        await super._processData(...arguments);
        const roundingSuggestionDatas = loadedData['pos.rounding.suggestion'] || [];
        var roundingSuggestions = [];
        for (const suggestion of roundingSuggestionDatas) {
            let vals = {
                'name': suggestion.name,
                'multiplier': suggestion.multiplier,
            }
            roundingSuggestions.push(vals)
        }
        this.roundingSuggestions = roundingSuggestions;
    },

});