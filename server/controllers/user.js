import userModel from '../models/user.js'

export const create = async(req, res) => {
    try {
        const { name, dob, country } = req.body
        const resume = req.files['resume'][0].filename
        if (name && dob && resume) {
          const doc = new userModel({
            name: name,
            dob: dob,
            country: country,
            resume: resume
          })
          const user = await doc.save()
          res.status(201).send({ "status": true, "message": "Profile Uploaded Successfully", "data": user })
        } else {
          res.status(200).send({ "status": false, "message": "All Fields are Required" })
        }
      } catch (error) {
        console.log(error)
      }
}


export const get = async(req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).send({ "status": true, "data": users })
      } catch(error) {
        res.status(500).send({ message: error.message })
      }
}