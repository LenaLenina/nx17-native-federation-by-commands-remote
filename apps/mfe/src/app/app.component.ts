import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from './MatDialog/app.component';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'mfe-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mfe';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
      data: { title: 'Hello', message: 'This is a message inside the dialog.' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  search(): void {
    alert('Not implemented in this demo!');
  }
}
