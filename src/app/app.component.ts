import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TechChefs';
  assignmentOne!: FormGroup;
  f1: any = [
    ['U1', 'U2'],
    ['U3', 'U4'],
    ['U1', 'U5'],
    ['U2', 'U1'],
    ['U3', 'U4']
  ];
  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  private initForm() {
    this.assignmentOne = this.fb.group({
      str1: ['', Validators.required],
      str2: ['', Validators.required],
    })
  }
  // remove duplicates from strings assignment 1
  public compareStrings() {
    if (this.assignmentOne.valid) {
      let str1 = this.assignmentOne.value.str1;
      str1 = str1.split('');
      let str2 = this.assignmentOne.value.str2;
      str2 = str2.split('');
      const strOne = str1.filter((value: any) => str2.indexOf(value) == -1);
      const strTwo = str2.filter((value: any) => str1.indexOf(value) == -1);

      alert(`Op1:${strOne.join('')} :: Op2:${strTwo.join('')}`);
      this.calculatePairs();
    } else {
      alert("Please enter both Strings")
    }
  }

  // remove duplicate pairs assignment 2
  public calculatePairs() {
    this.f1 = this.removeDuplicate(this.f1)
    let clonedF1 = this.f1.slice(0);
    let f2 = this.f1.slice(0)
    this.f1.forEach((element: any, index: any) => {
      const a = element.reverse();
      clonedF1.forEach((value: any, i: any) => {
        if (JSON.stringify(a) === JSON.stringify(value) && index !== i) {
          f2.splice(i, 1)
        }
      });
    });
    alert(JSON.stringify(f2))
  }
  private removeDuplicate(array: any) {
    return array.filter((v: any, i: any, a: any) => a.findIndex((t: any) => (JSON.stringify(t) === JSON.stringify(v))) === i)

  }
}
