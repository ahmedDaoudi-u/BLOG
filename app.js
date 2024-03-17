//jshint esversion:6

const express = require('express');
const bodyParser  = require("body-parser");
const path = require('path');
const ejs = require("ejs");
var _ = require('lodash');



const postSchema =  {
  title : String,
  content:String
}







const first = "The sun's golden rays spilled across the vibrant meadow, casting a warm glow on the wildflowers swaying gently in the breeze. Birds chirped melodiously, creating a symphony of nature's music. As I walked along the winding path, I could feel the soft earth beneath my feet, connecting me to the beauty of the natural world. The scent of fresh pine filled the air, mingling with the sweet fragrance of blooming roses. In the distance, a majestic waterfall cascaded down rugged cliffs, creating a mesmerizing display of water and mist. It was a scene that seemed straight out of a dream, a sanctuary of tranquility and serenity."

const aboutContent = `Welcome to our website! We are a passionate team dedicated to providing high-quality products and services to our customers. With years of experience in the industry, we strive to exceed expectations and deliver innovative solutions tailored to meet your needs. Our mission is to make a positive impact by empowering individuals and businesses through our cutting-edge technologies and exceptional customer support. Explore our website to learn more about our offerings and how we can help you achieve your goals.`;

const contactContent = `We would love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help. You can reach us through the following contact details:

Email: info@example.com
Phone: +1 (123) 456-7890

Feel free to get in touch with us at your convenience. We value your input and look forward to serving you.`;
const categories = [
  { title: 'Fashion', description: 'Discover the latest trends and fashion styles for every season. From clothing to accessories, stay ahead of the fashion curve.' },
  { title: 'Technology', description: 'Explore the world of cutting-edge technology. From gadgets to software, find the tools you need to enhance your digital lifestyle.' },
  { title: 'Home Decor', description: 'Create a warm and inviting space with our selection of home decor items. Find inspiration for every room and transform your house into a home.' },
  { title: 'Health & Wellness', description: 'Take care of your mind, body, and soul. Find tips, products, and resources to support your well-being and live a balanced lifestyle.' },
  { title: 'Sports & Fitness', description: 'Stay active and reach your fitness goals with our sports and fitness products. From equipment to apparel, we have everything you need to stay in shape.' },
  { title: 'Books & Literature', description: 'Immerse yourself in the world of literature. Discover captivating stories, insightful non-fiction, and expand your knowledge through the power of words.' }
];


const app = express();

app.set('view engine','ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



 app.get("/", function(req,res){
   res.render("home",{content:first})

});

 app.get("/about", function(req,res){

   res.render("about",{about:aboutContent});

 });
 app.get("/contact", function(req,res){

   res.render("Contact",{contact:contactContent});

 });

 app.get("/categories", function(req,res){

   res.render("categories",{cate:categories});

 });

 app.get("/compose", function(req,res){

   res.render("compose");

 });


 app.post("/compose",function(req,res){

   const post = new Post ({
     title:req.body.posttitle,
     content:req.body.postbody
   })




     post.save(function(err){
       if(!err){
         res.redirect("/");
       }
     })





   });

   app.get('/posts/:day', (req, res) => {
     posts.forEach((element) => {
       if(_.lowerCase(req.params.day) === element.title){
         res.render("post",{

           titles: element.title,
           content :element.body});
       }
     });

   });





app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
