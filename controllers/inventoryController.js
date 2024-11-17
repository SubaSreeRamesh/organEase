//create inventory

const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

const createInventoryController = async (req,res) => {
try {
    const { email, inventoryType } = req.body;
    //validation
    const user = await userModel.findOne({email});
    if(!user){
        throw new Error('user not found');
    }
    if(inventoryType === 'in'  && user.role !=='donor' ){
        throw new Error('not a donor account')
    }
    if(inventoryType ==='out' && user.role !== 'hospital'){
        throw new Error('not a hospital')
    }
//save record
const inventory= new inventoryModel(req.body)
await inventory.save();
return res.status(201).send({
    success:true,
    message:'New blood record added',
});
} catch (error) {
    console.log(error);
    return res.status(500).send({
        success:false,
        message:'error in create inventory api',
        error:error.message,
    });
}
};
//get all bloodrecords
const getInventoryController =async (req,res) => {
try {
    const inventory = await inventoryModel.findOne({
        organization:req.body.userId
    })
    .populate('donor')
    .populate('hospital')
    .sort({createdAt:-1})
    return res.status(200).send({
        success:true,
        message:'getting all inventory successful',
    })
} catch (error) {
    console.log(error);
    return res.status(500).send({
        success:false,
        message:'error in get all inventory',
        error
    });
    
}
};

module.exports={ createInventoryController , getInventoryController }