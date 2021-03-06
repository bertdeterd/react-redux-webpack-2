"use strict";

import delay from './delay';
import caseTypes from './caseTypeData';

/*
var caseTypess =
	[
		{
			id: 'ZKGK', 
			description: 'Klantgedreven', 
			title: 'KG',
			createdBy: '999999'
		},	
		{
			id: 'ZNG2', 
			description: 'Klantgedreven', 
			title: 'KG',
			createdBy: '860430'
		},	
		{
			id: 'ZKGD', 
				description: 'Klant oud', 
				title: 'KG',
			createdBy: '804278'
		}
	];
*/

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (caseType) => {
  return replaceAll(caseType.title, ' ', '-');
};

class CaseTypeApi {

  static getAllCaseTypes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], caseTypes));
      }, delay);
    });
  }
  
/*
  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }

  */
}


export default CaseTypeApi;