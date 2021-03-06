import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { ValidationKeyErrorMap, ValidationControlErrorsMap, ValidatedControl } from '../../form-validation';
import { IFormControlBuilder, IRxFormBuilder, IValidationKeyErrorMapBuilder } from '../interfaces';
import { RxFormBuilder, ValidationKeyErrorMapBuilder } from '.';
import { IValidator } from '../../validators';

export class FormControlBuilder implements IFormControlBuilder {
  private validationErrorKeyMaps: ValidationKeyErrorMap[] = [];
  private validators: IValidator[] = [];
  private defaultValue: any = null;
  private modelPropertyName: string | null = null;

  constructor(
    private controlName: string,
    private controlErrorsMaps: ValidationControlErrorsMap[],
    private formGroup: FormGroup,
    private validatedControls: ValidatedControl[],
    private formBuilder: RxFormBuilder) {
  }

  public buildControl(): IRxFormBuilder {
    this.createAndAddFormControl();
    this.createAndAddValidatedControl();
    this.createAndPushValidationErrorMap();
    return this.formBuilder;
  }

  public withDefaultValue(defaultValue: any): IFormControlBuilder {
    this.defaultValue = defaultValue;
    return this;
  }

  public withModelBinding(propertyName: string): IFormControlBuilder {
    this.modelPropertyName = propertyName;
    return this;
  }

  public withValidation(validator: IValidator): IValidationKeyErrorMapBuilder {
    this.validators.push(validator);
    const validationRuleBuilder = new ValidationKeyErrorMapBuilder(this.validationErrorKeyMaps, validator, this);
    return validationRuleBuilder;
  }

  private createAndPushValidationErrorMap(): void {
    const va = new ValidationControlErrorsMap(
      this.controlName,
      this.validationErrorKeyMaps);

    this.controlErrorsMaps.push(va);
  }

  private createAndAddValidatedControl(): void {
    const validatedControl = new ValidatedControl(this.controlName, this.modelPropertyName);
    this.validatedControls.push(validatedControl);
  }

  private createAndAddFormControl(): void {
    const formControl = new FormControl();
    formControl.setValue(this.defaultValue, {
      onlySelf: true
    });

    const validatorFunctions = this.validators.map(f => f.createFunc());
    formControl.setValidators(validatorFunctions);

    this.formGroup.addControl(this.controlName, formControl);
  }
}
