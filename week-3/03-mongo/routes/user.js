const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course,User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    const {username, password} = req.body;

    const user = await User.create({username: username, password: password});
   
    res.json(user)
});

router.get('/courses',async (req, res) => {
    const courses = await Course.find({})
    res.json(courses)
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const { courseId } = req.params;
    const course = await Course.findById(courseId) // Select the fields you need
    const user = await User.findById(req.user.id);

    user.purchased = [...user.purchased, { courseId: course._id, title: course.title }]; 
    await user.save();

    res.status(200).json({ courses: user.purchased });
});


router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    const user = await User.findById(req.user.id)

    res.json(user.purchased)
});

module.exports = router