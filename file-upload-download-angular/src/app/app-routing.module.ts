import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFilesComponent } from './components/all-files/all-files.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

const routes: Routes = [
  { path: "", component: AllFilesComponent },
  { path: "file", component: UploadFileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
