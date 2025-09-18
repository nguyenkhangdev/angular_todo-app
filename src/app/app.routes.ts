import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Todo } from './pages/todo/todo';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'app',
    component: Todo,
    title: 'Todo app',
  },
];
