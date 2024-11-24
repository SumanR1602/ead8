import { Component } from '@angular/core'; 
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
@Component({ 
selector: 'app-root', 
standalone: true, 
imports: [CommonModule, ReactiveFormsModule], 
templateUrl: './app.component.html', 
styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 
editDataForm: FormGroup; 
constructor() { 
this.editDataForm = new FormGroup({ 
name: new FormControl('John Doe'), 
email: new FormControl('john.doe@example.com'), 
}); 
}onSubmit() { 
console.log('Form Data:', this.editDataForm.value); 
} 
} 