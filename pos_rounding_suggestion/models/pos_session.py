from odoo import models, fields, api


class PosSession(models.Model):
    _inherit = 'pos.session'

    @api.model
    def _pos_ui_models_to_load(self):
        models = super(PosSession, self)._pos_ui_models_to_load()
        models.append('pos.rounding.suggestion')
        return models

    def _loader_params_pos_rounding_suggestion(self):
        return {
            'search_params': {
                'domain': [],
                'fields': ['name', 'multiplier'],
            },
        }

    def _get_pos_ui_pos_rounding_suggestion(self, params):
        return self.env['pos.rounding.suggestion'].search_read(**params['search_params'])
