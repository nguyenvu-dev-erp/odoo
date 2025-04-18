# -*- coding: utf-8 -*-
{
    'name': 'POS Rounding Suggestion',
    'description': 'POS Rounding Suggestion',
    'version': '17.0.0.0',
    'author': 'Nguyen Vu',
    'depends': [
        'point_of_sale',
    ],
    'data': [
        'security/ir.model.access.csv',

        'views/pos_rounding_suggestion_views.xml',
    ],
    'assets': {
        'point_of_sale._assets_pos': [
            'pos_rounding_suggestion/static/src/**/*',
        ],
    },
    'license': 'LGPL-3',
}
