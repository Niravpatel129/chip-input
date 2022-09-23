import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipsComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent implements OnInit {
  chips: string[] = [];
  @Input() placeholder = 'Add a chip';
  @Input() removeable = true;

  onChange: Function = () => {};

  onTouched: Function = () => {};

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  @ViewChild('inputField') inputField: any;

  onChipBarClick(): void {
    this.inputField.nativeElement.focus();
  }

  removeItem(index: number): void {
    this.chips.splice(index, 1);
    this.triggerChange();
  }

  removeAll(): void {
    this.chips = [];
    this.triggerChange();
  }

  onKeyDown(event: any, value: string): void {
    switch (event.keyCode) {
      case 13:
      case 188: {
        if (value && value.trim() !== '') {
          if (!this.chips.includes(value)) {
            this.chips = [...this.chips, value];
            this.triggerChange();
          }
          this.inputField.nativeElement.value = '';
          event.preventDefault();
        }

        break;
      }
      case 8: {
        if (!value && this.chips.length > 0) {
          this.chips.pop();
          this.triggerChange();
        }
        break;
      }
    }
  }

  writeValue(value: any): void {
    this.chips = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: Function): void {
    console.log('🚀 registerOnChange');
    // this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    console.log('🚀 registerOnTouched');
    // this.onTouched = fn;
  }

  triggerChange(): void {
    console.log('triggerChange');

    // this.onChange(this.chips);
  }
}
