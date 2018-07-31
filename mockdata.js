var casual = require('casual');

// Create an object for config file
var db = {elements:[]};

for(var i=1; i<=5; i++){
  var blog = {};
  blog.id = i;

  // Create a random 1-6 word title
  blog.title = casual.words(casual.integer(1,6));
  blog.author = casual.first_name + ' ' + casual.last_name;
  
  // Randomly rate the book between 0 and 5
  blog.rating = Math.floor(Math.random()*100+1)/20;

  // Assign a publishing year between 1700 and 2016
    blog.year_published = casual.integer(1700,2016)
    db.elements.push(blog);
}
console.log(JSON.stringify(db));