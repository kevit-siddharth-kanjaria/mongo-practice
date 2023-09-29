const querySet = {
    1: {},
    2: {
        filter: {},
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            'cuisine': 1
        }
    },
    3: {
        filter: {},
        // projection:{...querySet[2].projection}
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            'cuisine': 1,
            '_id': 0
        }
    },
    4: {
        filter: {},
        // projection:{...querySet[2].projection}
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            'address.zipcode': 1,
            '_id': 0
        }
    },
    5: {
        filter: {
            'borough': 'Bronx'
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            '_id': 0
        }
    },
    6: {
        filter: {
            'borough': 'Bronx'
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            '_id': 0
        },
        limit: 5
    },
    7: {
        filter: {
            'borough': 'Bronx'
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            '_id': 0
        },
        limit: 5,
        skip: 5
    },
    8: {
        filter: {
            "grades.score": { $gt: 90 }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            '_id': 0
        },
    },
    9: {
        filter: {
            "grades.score": { $gt: 80, $lt: 100 }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            '_id': 0
        }
    },
    10: {
        filter: {
            "address.coord.0": { $lt: -95.754168 }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            '_id': 0
        }
    },
    11: {
        filter: {
            $and: [{
                "grades.score": { $gt: 70 },
            }, {
                "address.coord.0": { $lt: -65.754168 },
            }, {
                "cuisine": { $ne: 'American ' }
            }]
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'cuisine': 1,
            '_id': 0
        }
    },
    12: {
        filter: {
            "grades.score": { $gt: 70 },
            "address.coord.1": { $lt: -65.754168 },
            "cuisine": { $ne: 'American ' }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'cuisine': 1,
            '_id': 0
        }
    },
    13: {
        filter: {
            "grades.grade": { $eq: 'A' },
            "borough": { $ne: 'Brooklyn' },
            "cuisine": { $ne: 'American ' }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'cuisine': 1,
            '_id': 0
        },
        sort: {
            "cuisine": -1
        }
    },
    14: {
        filter: {
            "name": { $regex: /^Wil.*/ }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            'cuisine': 1,
            '_id': 0
        }
    },
    15: {
        filter: {
            "name": { $regex: /.*ces$/ }//{ $regex: /^.ces*/ }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            'cuisine': 1,
            '_id': 0
        }
    },
    16: {
        filter: {
            "name": { $regex: /Reg/ }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            'cuisine': 1,
            '_id': 0
        }
    },
    17: {
        filter: {
            'borough': "Bronx",
            'cuisine': { $in: ["American ", "Chinese"] }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            'cuisine': 1,
            '_id': 0
        }
    },
    18: {
        filter: {
            'borough': {
                $in: ["Bronx", "Brooklyn", "Staten Island", "Queens"]
            }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            'cuisine': 1,
            '_id': 0
        }
    },
    19: {
        filter: {
            'borough': {
                $nin: ["Bronx", "Brooklyn", "Staten Island", "Queens"]
            }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            'cuisine': 1,
            '_id': 0
        }
    },
    20: {
        filter: {
            'grades.score': { $lte: 10 }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            'cuisine': 1,
            '_id': 0
        }
    },
    21: {
        filter: {
            // $nor: [
            //     {cuisine: {$in: ["American ", "Chinese"]}},
            //     {name: /^Wil.*/}
            // ]
            $or: [
                { "cuisine": { $nin: ["American ", "Chinese"] } },
                { "name": { $regex: /^Wil.*/ } }
            ],
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'borough': 1,
            'cuisine': 1,
            '_id': 0
        }
    },
    22: {

        filter:
        {
            "grades.grade": { $eq: 'A' },
            'grades.score': { $eq: 11 },
            "grades.date": { $eq:new Date('2014-08-11T00:00:00Z') }
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'grades': 1,
            '_id': 0
        }
    },
    23: {
        filter:
        {
            "grades.1.grade": { $eq: 'A' },
            'grades.1.score': { $eq: 9 }
            // 'grades,dates':{ $eq:ISODate("2014-08-11T00:00:00Z")} //ISODate not found
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'grades': 1,
            '_id': 0
        }
    },
    24: {
        filter:{
            'address.coord.1':{$lt:52,$gt:42}
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'address': 1,
            'borough':1,//geographic location ig
            '_id': 0
        }
    },
    25: {
        sort:{
            'name':1
        }
    },
    26: {
        sort:{
            'name':-1
        }
    },
    27: {
        sort:{
            'cuisine':1,'borough':-1
        }
    },
    28: {
        filter:{"address.street": {$regex: /Street/}}
    },
    29: {
        filter:{"address.coord": {$type: "double"}}    
    },
    30: {
        filter:{
            'grades.score': {$mod: [7,0]},
        },
        projection: {
            'restaurant_id': 1,
            'name': 1,
            'grades':1,
            '_id': 0
        }
    },
    31: {
        filter:{
            'name':{ $regex: /mon/ } 
        },
        projection: {
            'name': 1,
            'borough':1,
            'address.coord.1':1,
            'address.coord.0':1,
            '_id': 0
        }
    },
    32: {
        filter:{ "name": { $regex: /^Mad.*/ } },
        projection: {
            'name': 1,
            'borough':1,
            'address.coord.1':1,
            'address.coord.0':1,
            '_id': 0
        }

    }
}
module.exports = querySet