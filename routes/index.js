var express = require("express");
var router = express.Router();

var posts = [
  {
    author: "Brianna",
    date: "February 18, 2025 @ 3:30 pm",
    body: "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
  },
  {
    author: "LINH",
    date: "February 15, 2025 @ 9:46 am",
    body: "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!",
  },
  {
    author: "CATHERINE LEONARDO",
    date: "February 13, 2025 @ 12:58 pm",
    body: "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.",
  },
  {
    author: "KALI",
    date: "February 13, 2025 @ 11:31 am",
    body: "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Food Blog", posts: posts });
});

module.exports = router;
