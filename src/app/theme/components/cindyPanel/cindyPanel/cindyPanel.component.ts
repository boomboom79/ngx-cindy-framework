import { Component, Input } from '@angular/core';

@Component({
    selector: 'c-panel',
    template: `
    <div class="c-panel">
        <p-panel 
            header="{{title}}" 
            [toggleable]="toggleable">
            <ng-content></ng-content>
        </p-panel>
    </div>
    `,
    styleUrls: ['./cindyPanel.component.scss']
})
export class CindyPanel {
    public _title: string;
    @Input() toggleable: boolean;

    @Input() get title(): string {
        return this._title;
    }

    set title(val: string) {
        this._title = val;
    }
}