const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
 const {username, password} = req.body;
console.log(req.body)

const admin = await Admin.create({username,password})
 

res.json(admin)
});

router.post('/courses', adminMiddleware,async (req, res) => {
   const {title,description,price,imageLink} = req.body;

   const course = await Course.create({title,description,price,imageLink,courseBy:req.user.id});
   console.log("from coursese",course)
   const admin = await Admin.findById(req.user.id)

   admin.courses= [...admin.courses,course]
   await admin.save()

   res.json({ message: 'Course created successfully',courseId:course._id})


});

router.get('/courses', adminMiddleware, async (req, res) => {
   const admin = await Admin.findById(req.user.id)
 
   res.json(admin.courses)
   
});

module.exports = router;