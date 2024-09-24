
import express from 'express'
import { User } from '../models/user.model.js';

const router = express.Router();

router.post("/", async (req, res) =>
{
    const { name, email, age } = req.body;

    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age:age,
        })
        res.status(201).json(userAdded)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

router.get("/", async (req, res) =>
{
   try {
       const showAllData = await User.find()
       res.status(200).json(showAllData)
   } catch (error) {
     console.log(error);
        res.status(501).json({error : error.message})
   }

})

router.get("/:id", async (req, res) =>
{
    const { id } = req.params;
    try {
        const user = await User.findById({ _id: id });
        res.status(202).json(user);
    } catch (error) {
        console.log(error);
        res.status(502).json({error: error.message})
        
    }
})

router.delete("/:id", async (req, res) =>
{
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete({ _id: id });
        res.status(300).json(user);
    } catch (error) {
        console.log(error);
        res.status(502).json({error: error.message})
        
    }
})

router.patch("/:id", async (req, res) =>
{
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new:true} )
        res.status(301).json(updateUser);
    } catch (error) {
        console.log(error);
        res.status(503).json({error: error.message})
        
    }
})
export default router;