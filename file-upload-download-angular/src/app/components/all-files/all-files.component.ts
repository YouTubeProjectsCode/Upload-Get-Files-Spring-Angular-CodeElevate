import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileService } from 'src/app/service/file.service';
import { contentDisposition } from 'content-disposition';

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent {

  files: any = [];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.fileService.getFiles().subscribe(
      (response: any[]) => {
        response.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.data;
          this.files.push(element);
        });
      },
      error => {
        console.error('Error fetching files:', error);
      }
    );
  }


  downloadFile(fileId: number): void {
    this.fileService.downloadFile(fileId).subscribe(response => {
      const fileNameFromUrl = "file";
      if (fileNameFromUrl) {
        const contentType = response.headers.get("Content-Type");
        const blob = new Blob([response.body], { type: contentType });

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = fileNameFromUrl;

        link.click();

        window.URL.revokeObjectURL(link.href);
        link.remove();
      } else{
        console.log("Unable to extract file")
      }
    })
  }

}
