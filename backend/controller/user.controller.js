import userModel from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const userSignUp= async (req,res)=>{
        
    try {

        const {nameSiteWala,contactSiteWala,emailSiteWala,passwordSiteWala}=req.body;

        const dbEmail= await userModel.findOne({email:emailSiteWala});
        

        if(dbEmail)
        {
           return res.status(400).json({message:'User already exist in the database'});
        }

        
        const hashedPasswordSiteWala=bcryptjs.hashSync(passwordSiteWala,10);

        const newUSer=new userModel({
            name:nameSiteWala,
            contact:contactSiteWala,
            email:emailSiteWala,
            password:hashedPasswordSiteWala
        })

       await newUSer.save();
        res.status(201).json({message:'User created successfully'});


    } catch (error) {
        
      
        res.status(500).json({message:'Internal server error'});

    }
} ;


export const userLogin= async (req,res)=>{
        
    try {

        const {emailSiteWala,passwordSiteWala}=req.body;

        const dbEmailBaseHistory= await userModel.findOne({email:emailSiteWala});
        
        const isValid=bcryptjs.compareSync(passwordSiteWala,dbEmailBaseHistory.password);
        
        if(emailSiteWala!==dbEmailBaseHistory.email || !isValid)
        {
            return res.status(400).json({message:"Invalid email or password"})
        }

        res.status(201).json({message:'User validated Successfully',userData:{
            name:dbEmailBaseHistory.name,
            email:dbEmailBaseHistory.email,
            contact:dbEmailBaseHistory.contact
        }});


    } catch (error) {
        
        console.log("Some error occured ",error.message);
        res.status(500).json({message:'Internal server error'});

    }
} 



