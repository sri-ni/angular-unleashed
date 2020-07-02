import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'fun-app-dialog-usage',
  templateUrl: 'dialog-usage.html',
})
export class FunAppDialogUsageComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FunAppDialogContentComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'fun-app-dialog-content',
  templateUrl: 'dialog-content.html',
})
export class FunAppDialogContentComponent {

  constructor(
    public dialogRef: MatDialogRef<FunAppDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
