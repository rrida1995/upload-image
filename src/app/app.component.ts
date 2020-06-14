import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Upload File';

  imageSrc: any;
  x64base: any;

  constructor() {}

  onInit() {}
  
  onFileChange(event): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        this.getBase64(file);
    }
  }

  getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        var base64 = reader.result;
            this.imageSrc = reader.result; 
            this.x64base = this.imageSrc.split(',')[1];
    };
    reader.onerror = (error) => {
        console.log('Error: ', error);
    };
  }

  upload() {
    // console.log(this.imageSrc);
    if(this.imageSrc === undefined) {
      Swal.fire({
        icon: 'error',
        html: 'You have not selected any image!',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
        showClass: {
          popup: 'swal2-noanimation',
          backdrop: 'swal2-noanimation'
        }
      });
    }
    else {
      Swal.fire({
        imageUrl: this.imageSrc,
        imageHeight: 380,
        imageWidth: 500,
        icon: 'success',
        html: 'Image uploaded successfully!',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
        showClass: {
          popup: 'swal2-noanimation',
          backdrop: 'swal2-noanimation'
        },
      });
    }
  }
}
