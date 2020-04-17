import { Component } from "@angular/core";

@Component({
  selector: "ncd-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ngx-custom-daterangepicker";

  getDateSelection(ev) {
    console.log(ev);
  }
}
