import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  projects= [
    {'id':1,'name':'Angular project','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/Angular.jpg'},
    {'id':2,'name':'Typescript project','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/Typescript.jpg'},
    {'id':3,'name':'React project','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/React.jpg'},
    {'id':4,'name':'Python project','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/Python.jpg'},
    {'id':5,'name':'SQL','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/SQL.jpg'},
    {'id':6,'name':'Styling','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/Styling.jpg'},
    {'id':7,'name':'Scrum','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/Scrum.jpg'},
    {'id':8,'name':'Design','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/Design.jpg'}
  ]
}
