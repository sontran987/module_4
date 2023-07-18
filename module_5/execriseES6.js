let courses = [{
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];
const checkRating = courses.filter(function(course) {
    return course.rating >= 4;
});

const checkRating2 = courses.filter((course) => {
    return course.rating < 4;
});
const format = (...name) => {
    console.log(name);
}

console.log(checkRating);
checkRating2.map((id)=>{
    console.log(id.id + id.title + id.rating);

})
// for (const i of checkRating2) {
//     format(i.id, i.title, i.rating)
// }
let addedCourses = [{
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];
const merge = [...courses, ...addedCourses];
const text = (courses,addedCourses)=>{
    return [...courses,...addedCourses];
}
console.log(text);