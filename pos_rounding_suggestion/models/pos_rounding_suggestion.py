from odoo import _, api, fields, models


class PosRoudingSuggestion(models.Model):
    _name = 'pos.rounding.suggestion'
    _description = 'Pos Rounding Suggestion'

    name = fields.Char(string='Name', required=True)
    multiplier = fields.Float(string='Multiples', required=True)