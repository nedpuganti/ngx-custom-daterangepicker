# NgxAdvancedDaterangepicker

[![Material Advanced date range picker](screenshot.png)](https://stackblitz.com/github/naren7229/ngx-custom-daterangepicker)


## It's awesome, but how to use it?

As easy as pie.
Installation: `yarn add ngx-advanced-daterangepicker` or `npm install ngx-advanced-daterangepicker`
Import `NgxAdvancedDaterangepickerModule`
```
<ngx-advanced-daterangepicker
          [selectDays]="'today'"
          [isoDateFormat]="true"
          (on-change)="getDateSelection($event)"
        ></ngx-advanced-daterangepicker>
```

Install Packages:
```
ng add @angular/material

npm i saturn-datepicker

npm i moment
npm i @angular/material-moment-adapter
```


Add styles:
```scss
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

@import "~saturn-datepicker/theming";
@import "~saturn-datepicker/bundle.css";
```
