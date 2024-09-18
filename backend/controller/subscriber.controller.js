import subscriberModel from "../model/subscriber.model.js"

export const subscriberController = async (req, res) => {

    const { email } = req.body;


    const user = await subscriberModel.findOne({ email: email });

    if (user) {
        return res.status(400).json({ message: "Email already subscribed" });
    }

    const newData = new subscriberModel({
        email: email
    })

    await newData.save();
    res.status(201).json({ message: 'Successfull' });


}