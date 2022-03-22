import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  show = "I'm a software engineer with a passion for delivering clean, efficient, and testable code. \
            I created this website to share my technical knowledge and expertise in software development. \
            \n  I live and work in Pune, India."
  constructor() { }

  ngOnInit(): void {
  }
}
