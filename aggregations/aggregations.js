const aggregations = [
    [//#1
        {
            '$group': {
                '_id': '$Batting_Hand',
                'numberOfPlayers': {
                    '$count': {}
                }
            }
        }, {
            '$sort': {
                'numberOfPlayers': -1
            }
        }
    ],
    [//#2
        {
            '$group': {
                '_id': '$Country',
                'numberOfPlayers': {
                    '$count': {}
                }
            }
        }, {
            '$sort': {
                'numberOfPlayers': -1
            }
        }
    ],
    [//#3
        {
            '$group': {
                '_id': { country: '$Country', batting_hand: '$Batting_Hand' },
                'numberOfPlayers': {
                    '$count': {}
                }
            }
        }, {
            '$sort': {
                'numberOfPlayers': -1
            }
        }
    ],
    [//#4
        {
            '$group': {
                '_id': '$Batting_Hand',
                'numberOfPlayers': {
                    '$count': {}
                }
            }
        }, {
            '$match': {
                '_id': { $ne: null }
            }
        },
        {
            '$sort': {
                'numberOfPlayers': -1
            }
        }
    ],
    [//#5
        {
            '$group': {
                '_id': '$Country',
                'numberOfPlayers': {
                    '$count': {}
                }
            }
        }, {
            '$match': {
                '_id': { $ne: null }
            }
        }, {
            '$sort': {
                'numberOfPlayers': -1
            }
        }
    ],
    [//6
        {
            '$group': {
                '_id': {
                    country: '$Country',
                    batting_hand: '$Batting_Hand'
                },
                'numberOfPlayers': {
                    $count: {}
                }
            }
        },
        {
            '$match': {
                '_id.batting_hand': { $ne: null }
            }
        },
        {
            "$sort": {
                '_id.country': 1
            }
        }
    ],
    [//7
        {
            '$unwind': {
                'path': '$_empDepartment',
                'preserveNullAndEmptyArrays': true
            }
        }
    ],
    [//8
        {
            '$unwind': {
                'path': '$_empDepartment',
                'includeArrayIndex': "dept_array_index",
                'preserveNullAndEmptyArrays': true
            }
        }
    ],
    [//9
        {
            '$unwind': {
                'path': '$_empDepartment',
                'preserveNullAndEmptyArrays': true
            }
        },
        {
            '$group': {
                '_id': '$_empId',
                'departments': {
                    '$count': {}
                }
            }
        }
    ],
    [//#10
        {
            '$match': {
                '_empId': { $gte: 3 }
            }
        },
        {
            '$unwind': {
                'path': '$_empDepartment'
            }
        },
        {
            '$group': {
                '_id': '$_empDepartment',
                'numberOfEmployeesInDepartment': {
                    '$count': {}
                }
            }
        },
        {
            '$sort': {
                '_id': 1
            }
        }
    ]
]
module.exports = aggregations