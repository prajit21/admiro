import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'app-copy-portion-from-paragraph',
    imports: [CommonModule, FormsModule],
    templateUrl: './copy-portion-from-paragraph.component.html',
    styleUrl: './copy-portion-from-paragraph.component.scss'
})
export class CopyPortionFromParagraphComponent {

  public copyHighlightTxt: string = 'Web design is the process of creating websites';
  public basic = false;
  public copyText: string = ""

  constructor(private _clipboardService: ClipboardService) { }

  callServiceToCopy() {
    this._clipboardService.copy('This is copy thru service copyFromContent directly');
  }

  onCopyFailure() {
    alert('copy fail!');
  }

  copyFunction(txt: string) {
    navigator.clipboard.writeText(txt);
    alert("Copied")

  }

  ngOnInit(): void {
    this._clipboardService.copyResponse$.subscribe(re => {
      if (re.isSuccess) {
        alert('copy success!');
      }
    });
  }

}
