import { Routes } from '@angular/router';

export const TASKS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/task-list/task-list.component').then(m => m.TaskListComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./pages/task-form/task-form.component').then(m => m.TaskFormComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./pages/task-form/task-form.component').then(m => m.TaskFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/task-detail/task-detail.component').then(m => m.TaskDetailComponent)
  }
];
