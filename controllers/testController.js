const testController = (req,res) =>{
    res.status(200).send({
        messgae:'test route ,welcome user',
        success:true,
    });
};
module.exports = { testController } ;