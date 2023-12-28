import {
  Component,
  OnInit,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { Filters, TodoItem } from '../../types/index';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  todoForm!: FormGroup;

  private taskList: WritableSignal<TodoItem[]> = signal([
    { id: Math.random() * 1000, name: 'Learn JS', checked: true },
    { id: Math.random() * 1000, name: 'Buy a unicorn', checked: false },
    { id: Math.random() * 1000, name: 'Make dishes', checked: false },
  ]);

  filter: WritableSignal<Filters> = signal(Filters.All);

  taskByFilters = computed(() => {
    const filter = this.filter();
    const taskList = this.taskList();

    if (filter === Filters.Completed) {
      return taskList.filter((task) => task.checked);
    }
    if (filter === Filters.Pending) {
      return taskList.filter((task) => !task.checked);
    }
    return taskList;
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.todoForm = this.fb.group({
      newTask: '',
      validators: [Validators.required],
    });
  }

  changeHandler() {
    if (!this.newTaskField?.value.trim()) {
      return;
    }
    this.taskList.update((taskList) => [
      ...taskList,
      this.addTask(this.newTaskField?.value),
    ]);
    this.todoForm.reset();
  }

  addTask(title: string) {
    const newTask: TodoItem = {
      id: Math.random() * 1000,
      name: title,
      checked: false,
    };
    return newTask;
  }

  checkTask(id: number) {
    const tempTaskList = structuredClone(this.taskList());

    const index = this.taskList().findIndex((task) => task.id === id);

    tempTaskList[index] = {
      ...tempTaskList[index],
      checked: !this.taskList()[index].checked,
    };
    this.taskList.set(tempTaskList);
  }

  deleteTask(id: number) {
    this.taskList.update(() =>
      this.taskList().filter((task) => task.id !== id)
    );
  }

  clearCompleted() {
    this.taskList.set(
      this.taskList().map((task) => ({ ...task, checked: false }))
    );
  }

  get taskLeft() {
    return (
      this.taskList().length -
      this.taskList().filter((task) => task.checked).length
    );
  }

  get newTaskField() {
    return this.todoForm.get('newTask');
  }

  get filters() {
    return Filters;
  }
}
