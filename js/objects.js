var course = new Object();

var course = {

  title: "JavaScript Essentials",
  instructor: "Morton",
  time: "5.3 hours", 
  published: true,
  views: 1,
  viewsUpdate: function(){
     return course.views++;
  }
}

console.log(course.views);
course.viewsUpdate();
console.log(course.views);

