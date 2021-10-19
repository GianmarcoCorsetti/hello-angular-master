import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Area } from 'src/app/DTOs/area';
import { Level } from 'src/app/DTOs/level';
import { Course } from '../course';
import { DidactisService } from '../didactis.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  levels: { value: number, label: string }[];
  course: Course;
  areas: Area[] = [];
  constructor(private service: DidactisService, private route: ActivatedRoute, private router : Router) {
    this.levels = this.getLevels();
    this.course = new Course();
    this.course.id = Number(route.snapshot.paramMap.get("id"));
    this.course.level = Level.BEGINNER;
  }

  ngOnInit(): void {
    this.service.getAreas()
      .subscribe({
        next: as => this.areas = as,
        error: err => console.log(err)
      });

    if (this.course.id != 0) {
      this.service.getCourseById(this.course.id)
        .subscribe({
          next: cs => this.course = cs,
          error: err => console.log(err)
        });
    }
  }

  getLevels(): { value: number, label: string }[] {
    let enumArray = Object.keys(Level)
      .filter(x => !Number.isNaN(Number(x)))
      .map(x => {
        return { value: Number(x), label: Level[Number(x)] };
      });
    console.log(enumArray);
    return enumArray;
  }
  save(form: NgForm) {
    this.course.level = Number(this.course.level);
    this.course.areaId = Number(this.course.areaId);
    console.log(form.value);
    console.log(this.course);
    if (this.course.id == 0) {
      this.service.createCourse(this.course)
        .subscribe({
          next: cs => {
            this.course = cs;
            alert("Corso creato con id: " + this.course.id);
            this.router.navigate(["/courses"]);
          },
          error: err => console.log(err)
        });
    }
    else {
      this.service.updateCourse(this.course)
        .subscribe({
          next: cs => {
            this.course = cs;
            alert("Corso aggiornato con id: " + this.course.id);
            this.router.navigate(["/courses"]);
          },
          error: err => console.log(err)
        });
    }
  }
}
