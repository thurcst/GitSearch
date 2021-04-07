import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  link: string =
    'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/52565974_2101757349944063_4185606682635665408_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=IWRe_dCS4U0AX_vyhEl&_nc_ht=scontent.frec31-1.fna&oh=8bb9323baaf0fb52b05bf6539fd8800d&oe=609292DE';

  socialMedias = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/arthur.henrique.90038/',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anibal-costa/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_arthur.anibal/',
    },
    {
      name: 'Github',
      url: 'http://github.com/thurcst/',
    },
    {
      name: 'Email',
      url: 'mailto:arthurhenriqueanibal@gmail.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  redirectTo(media: any) {
    window.open(media.url);
  }
}
