import { Request, Response } from 'express';
import { UserRole } from '../models/userRole.model';
import { Product } from '../models/product.model';
import { response } from "../common/response";

var roleCreate = [
    { roleType: 'client', roleId: 4 }, { roleType: 'superadmin', roleId: 1 }, { roleType: 'admin', roleId: 2 }, { roleType: 'distributor', roleId: 3 }, { roleType: 'vendor', roleId: 5 }
];

UserRole.find({}, function (error, docs) {
    if (docs && docs.length == 0) {
        UserRole.insertMany(roleCreate).then(result => {
            console.log("Success fully inserted role");

        }).catch(err => console.error(`Failed to insert documents: ${err}`))
    }
})


Product.collection.getIndexes().then((indexes: any) => {
    if (indexes) {
        for (const key in indexes) {
            if (indexes.hasOwnProperty(key) && key != '_id_') {
                // your logic here
                Product.collection.dropIndex(key, function (err, result) {
                    if (err) {
                        console.log('Error in dropping index!', err);
                    }
                    else {
                        console.log("success");
                    }
                });
            }
        }
    }
}).catch(console.error);