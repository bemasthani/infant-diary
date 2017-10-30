// Dependencies
var restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
const contactlistSchema = new mongoose.Schema({
    firstname: String,
    lastname:  String,
    create_date:{
      type: Date,
      default: Date.now

    },
    dob:Date,
    gender:String
});

// Return model

const Contactlist =restful.model('Contactlist', contactlistSchema,Contactlist);
//const Contactlist =module.exports = restful.model('listofcontacts', contactlistSchema,listofcontacts);

module.exports = Contactlist;


// module.exports = Contactlist;
// module.exports.getContactlist = (callback, limit) => {
// 	Contactlist.find(callback).limit(limit);
// }
//
// // Get Contactlist
// module.exports.getContactlistById = (id, callback) => {
// 	Contactlist.findById(id, callback);
// }
//
// // Add Contactlist
// module.exports.addContactlist = (contactlist, callback) => {
// 	Contactlist.create(contactlist, callback);
// }
//
// // Update Contactlist
// module.exports.updateContactlist = (id, contactlist, options, callback) => {
// 	var query = {_id: id};
// 	var update = {
// 		firstname: Contactlist.firstname,
// 		lastname: Contactlist.lastname
// 	}
// 	Contactlist.findOneAndUpdate(query, update, options, callback);
// }
//
// // Delete Contactlist
// module.exports.removeContactlist = (id, callback) => {
// 	var query = {_id: id};
// 	Contactlist.remove(query, callback);
// }
