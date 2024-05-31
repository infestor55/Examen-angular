import { Component } from '@angular/core';
import { ProjectsService } from '../Service/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: any[] = [];

  constructor(private projectService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      data => this.projects = data,
      error => console.error('Error fetching projects:', error)
    );
  }

  goToAddTask(projectId: number): void {
    this.router.navigate(['/add-task', projectId]);
  }
}
