import { Component, OnInit, Input } from '@angular/core';
import { ReactiveForm } from 'src/app/classes/reactive-form';
import { Address } from 'src/app/classes/address/address.class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountEntity } from 'src/app/classes/accountEntity';
import { User } from 'src/app/classes/user';
import { AccountRole } from '../registy-stepper/registry-stepper.component';

/**
 * Компонент для редактирования персональной информации пользователя системы
 */
@Component({
  selector: 'person-info-editor',
  templateUrl: './person-info-editor.component.html',
  styleUrls: ['./person-info-editor.component.scss']
})
export class PersonInfoEditorComponent extends ReactiveForm implements OnInit {


  
  @Input()
  protected account: AccountEntity = new AccountEntity();
  private personInfoFormGroup: FormGroup;

  private address: Address = new Address();
  private user = this.account && this.account.$user || new User();

  private accountRoles: any[] = [
    { viewValue: 'Бармен', id: AccountRole.BARMEN },
    { viewValue: 'Официант', id: AccountRole.WAITER }
  ];

  protected registrySubscription(): void {
    throw new Error("Method not implemented.");
  }

  constructor(private _formBuilder: FormBuilder) {
    super();
    this.personInfoFormGroup = this._formBuilder.group({
      accountRole: this.accountRoles,
      name: [this.user.$name, Validators.required],
      surName: [this.user.$surName, Validators.required],
      lastName: [this.user.$lastName, Validators.required],
      birthDay: [this.user.$birthDay, Validators.required],
      phone: [this.user.$phone, Validators.required],
      email: [this.user.$email, Validators.required]
    });
  }

  ngOnInit() {
  }

}
