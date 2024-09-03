interface Course {
  name: string;
  durationHours: number;
  students: string[];
}

class OnlineCourse implements Course {
  name: string;
  durationHours: number;
  students: string[];

  constructor(name: string, durationHours: number) {
    this.name = name;
    this.durationHours = durationHours;
    this.students = [];
  }
  
  registerStudent(student: string): void {
    if (!this.isStudentRegistered(student)) {
      this.students.push(student);
      console.log(`${student} was registered for ${this.name}.`);
    } else {
      console.log(`${student} was already registered for ${this.name}.`);
    }
  }
  
  isStudentRegistered(student: string): boolean {
    return this.students.includes(student);
  }
}

class CourseManager {
  private courses: Course[];

  constructor() {
    this.courses = [];
  }

  addCourse(course: Course): void {
    this.courses.push(course);
    console.log(`${course.name} was added.`);
  }
  
  removeCourse(courseName: string): void {
    const index = this.courses.findIndex(
      course => course.name === courseName
    );

    if (index !== -1) {
      this.courses.splice(index, 1);
      console.log(`${courseName} was deleted.`);
    } else {
      console.log(`${courseName} not found.`);
    }
  }

  findCourse(courseName: string): Course | undefined {
    return this.courses.find(course => course.name === courseName);
  }

  listCourses(): void {
    this.courses.forEach(course => {
      console.log(`Course: ${course.name}, Duration: ${course.durationHours} h, Students: ${course.students.join(", ")}`);
    });
  }
}

const course1 = new OnlineCourse("TypeScript", 40);
const course2 = new OnlineCourse("JavaScript", 35);
const course3 = new OnlineCourse("Python", 30);

const manager = new CourseManager();
manager.addCourse(course1);
manager.addCourse(course2);
manager.addCourse(course3);

course1.registerStudent("Petro");
course1.registerStudent("Maria");
course2.registerStudent("Fedir");
course3.registerStudent("Bob");
course3.registerStudent("Tom");
course1.registerStudent("Alice");

manager.listCourses();
