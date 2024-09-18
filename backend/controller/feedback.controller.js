import userFeedbackModel from "../model/feedback.model.js"

export const userFeedback = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newData = new userFeedbackModel({
            name, email, message
        });

        await newData.save();
        res.status(201).json({ message: "feedback sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Please resent feedback" });
    }

}