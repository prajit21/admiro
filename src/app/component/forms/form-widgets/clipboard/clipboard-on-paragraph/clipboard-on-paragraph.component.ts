import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clipboard-on-paragraph',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clipboard-on-paragraph.component.html',
  styleUrl: './clipboard-on-paragraph.component.scss'
})
export class ClipboardOnParagraphComponent {

  public paragraphData = "On that day, hopes and dreams were crushed. Even though it should have been anticipated, it nonetheless surprised me. The warning indicators have been disregarded in favour of the slim chance that it would actually occur. From a hopeful prospect, it had evolved into an unquestionable conviction that it must be fate. That was up until it wasn't, at which point all of the aspirations and dreams collapsed."
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
