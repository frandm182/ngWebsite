import { Component } from '@angular/core';

@Component({    
    selector: 'jumbotron',
    template: `
    <div class="jumbotron">
        <div class="container">
            <h1>{{jbtHeading}}</h1>
            <p>{{jbtText}}</p>
            <p><a class="btn btn-primary btn-lg" href="{{jbtBtnUrl}}" role="button">{{jbtBtnText}}</a></p>
        </div>
    </div>`
})
export class JumbotronComponent {
    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnText: string;
    private jbtBtnUrl: string;
    
    constructor(){
        this.jbtHeading = 'Hello, world!';
        this.jbtText = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
        this.jbtBtnText = 'Read more';
        this.jbtBtnUrl = 'http://test.com';
    }
}