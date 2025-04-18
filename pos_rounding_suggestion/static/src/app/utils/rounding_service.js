/** @odoo-module */

import { registry } from "@web/core/registry";

export const roundingService = {
    dependencies: [],
    start(env) {
        return {
            /**
             * Calculate rounding suggestions based on amount and multiplier
             * @param {float} amount Original amount
             * @param {integer} multiplier Rounding multiplier
             * @returns {float} Rounded amount suggestion
             */
            calculateRoundingSuggestion(amount, multiplier) {
                if (!amount || !multiplier) return amount;
                
                const remainder = amount % multiplier;
                if (remainder === 0) return amount;

                // Round up to the nearest multiplier
                return Math.ceil(amount / multiplier) * multiplier;
            },

            /**
             * Get all rounding suggestions for an amount
             * @param {float} amount Original amount
             * @param {Array} options Array of rounding options
             * @returns {Array} Array of suggestions with name and rounded amount
             */
            getAllSuggestions(amount, options) {
                return options.map(option => ({
                    name: option.name,
                    amount: this.calculateRoundingSuggestion(amount, option.multiplier),
                    difference: this.calculateRoundingSuggestion(amount, option.multiplier) - amount
                }));
            }
        };
    }
};

registry.category("services").add("rounding", roundingService);