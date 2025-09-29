import { Component } from '@angular/core';

@Component({
  selector: 'app-home-gallery',
  imports: [],
  templateUrl: './home-gallery.html',
  styleUrl: './home-gallery.css',
})
export class HomeGallery {
  images: string[] = [
    'https://res.cloudinary.com/dbugu6aej/image/upload/v1759136968/Innotech_Gallery1_hj4wcb.jpg',
    'https://res.cloudinary.com/dbugu6aej/image/upload/v1759136968/Innotech_Gallery3_jsbkax.jpg',
    'https://res.cloudinary.com/dbugu6aej/image/upload/v1759136968/Innotech_Gallery2_fhsozk.jpg',
    'https://res.cloudinary.com/dbugu6aej/image/upload/v1759136969/Innotech_Gallery7_nay0gv.jpg',
    'https://res.cloudinary.com/dbugu6aej/image/upload/v1759136969/Innotech_Gallery6_pvjbpw.jpg',
    'https://res.cloudinary.com/dbugu6aej/image/upload/v1759136970/Innotech_Gallery4_qvpqev.jpg',
    'https://res.cloudinary.com/dbugu6aej/image/upload/v1759136968/Innotech_Gallery5_p0atum.jpg',
    'https://res.cloudinary.com/dbugu6aej/image/upload/v1759137613/Innotech_Gallery8_xdbwox.jpg',
    'https://res.cloudinary.com/dbugu6aej/image/upload/v1759137613/Innotech_Gallery9_nwccz2.jpg',
  ];
}
