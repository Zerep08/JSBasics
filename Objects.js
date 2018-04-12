/*
var course = {
		title: "JS course",
		instructor: "francisco",
		level: 1,
		published: true,
		views: 0,
		updateViews: function(){
			return ++course.views;
		}
}

console.log(course);
course.updateViews();
console.log(course.views);
*/

//Object constructor

function Course(title, instructor, level, published, views){
	this.title = title;
	this.instructor = instructor;
	this.level = level;
	this.published = published;
	this.views = views;
	this.updateViews = function(){
		return ++this.views;
	}
}

var course1 = new Course("JS","Francisco",1,true,0);
console.log(course1.title);
console.log(course1["title"]);
