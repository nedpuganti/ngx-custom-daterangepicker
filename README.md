# NgxAdvancedDaterangepicker

[![Material Advanced date range picker](screen-1.png)](https://stackblitz.com/github/nedpuganti/ngx-custom-daterangepicker)
[![Material Advanced date range picker](screen-2.png)](https://stackblitz.com/github/nedpuganti/ngx-custom-daterangepicker)


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

npm i moment
npm i @angular/material-moment-adapter
```


Add styles:
```scss
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

##
https://indepth.dev/create-your-standalone-angular-library-in-10-minutes/

ng build --watch ngx-advanced-daterangepicker

$ ng serve
$ firefox http://localhost:4200
