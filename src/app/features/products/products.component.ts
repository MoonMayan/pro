import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
     {
      name: 'KYARI Sansevieria Green Snake Air Purifier Plant',
      image: 'KYARI Sansevieria Green Snake Air Purifier Plant.jpg',
      link: 'https://amzn.to/44xARmr',
    },
      {
      name: 'NYRWANA Table Lamp',
      image: 'NYRWANA Table Lamp.jpg',
      link: 'https://amzn.to/3Tnshlp',
    },
  {
      name: 'Wooden Headphone Stand',
      image: 'Wooden Headphone Stand.jpg',
      link: 'https://amzn.to/40yYGJp',
    },
      {
      name: 'Kreo Hive RGB',
      image: 'Kreo Hive RGB.jpg',
      link: 'https://amzn.to/44zk16M',
    },
        {
      name: 'Cosmic Byte Atlas',
      image: 'Cosmic Byte Atlas.jpg',
      link: 'https://amzn.to/44DaZ92',
    },
      {
      name: 'Boult Newly Launched',
      image: 'Boult Newly Launched.jpg',
      link: 'https://amzn.to/4ld4pNk',
    },
    {
      name: 'Ant Esports H520W',
      image: 'Ant Esports H520W.jpg',
      link: 'https://amzn.to/4lyrObU',
    },
     {
      name: 'Philips AC0920',
      image: 'Philips AC0920.jpg',
      link: 'https://amzn.to/3TqwXa4',
    },  {
      name: 'daWg HeadBug G60',
      image: 'daWg HeadBug G60.jpg',
      link: 'https://amzn.to/3Idp45m',
    },
    {
      name: 'Sony Alpha ILCE-6700 APS-C Camera',
      image: 'Sony Alpha ILCE-6700 APS-C.jpg',
      link: 'https://amzn.to/3EScYgM',
    },
    {
      name: 'Sigma 18-50mm F2.8 Lens',
      image: 'Sigma 18-50mm F2.8.jpg',
      link: 'https://amzn.to/43bYnpI',
    },

    {
      name: 'Kreo ACTUS V2',
      image: 'Kreo ACTUS V2Kreo ACTUS V2.jpg',
      link: 'https://amzn.to/43vMk5s',
    },

    {
      name: 'Kreo OWL',
      image: 'Kreo OWL.jpg',
      link: 'https://amzn.to/3ZvYcDq',
    },
    {
      name: 'SEVENAIRE 65W Laptop Powerbank',
      image: 'SEVENAIRE 65W Laptop Powerbank.jpg',
      link: 'https://amzn.to/43wU8nS',
    },
    {
      name: 'Ergonomic Right Hand Wrist Pad',
      image: 'Ergonomic Right Hand Wrist Pad.jpg',
      link: 'https://amzn.to/3FqoRL4',
    },
    {
      name: 'Rapoo E9050L Mumbai Indians',
      image: 'Rapoo E9050L Mumbai Indians.jpg',
      link: 'https://amzn.to/3GBE7oJ',
    },

    {
      name: 'Rapoo M200 Mumbai Indians',
      image: 'Rapoo M200 Mumbai Indians.jpg',
      link: 'https://amzn.to/3EL3dRB',
    },


    {
      name: 'RAPOO V1XL Mumbai Indians',
      image: 'RAPOO V1XL Mumbai Indians.jpg',
      link: 'https://amzn.to/3EL3h3N',
    },
  

    {
      name: 'Kreo Swarm',
      image: 'Kreo Swarm.jpg',
      link: 'https://amzn.to/4lVl3Cd',
    },
    {
      name: 'Kreo Anzu',
      image: 'Kreo Anzu.jpg',
      link: 'https://amzn.to/3Z3RIeP',
    },
    {
      name: 'Kreo Chimera',
      image: 'Kreo Chimera.jpg',
      link: 'https://amzn.to/4m08vcs',
    },

    {
      name: 'AULA F75 Side-Engraved',
      image: 'AULA F75 Side-Engraved.jpg',
      link: 'https://amzn.to/4jNVUYv',
    },

    {
      name: 'Quad Pro 4',
      image: 'Quad Pro 4.jpg',
      link: 'https://amzn.to/3EQq0eJ',
    },

    {
      name: 'DIGITEK Lite',
      image: 'DIGITEK Lite.jpg',
      link: 'https://amzn.to/44hyd61',
    },

    {
      name: 'CHEMISTORS Premium PU Leather Desk Mat',
      image: 'CHEMISTORS Premium PU Leather Desk Mat.jpg',
      link: 'https://amzn.to/3GEV0ii',
    },
    {
      name: 'LG Ultrawide UltraGear (34 INCH)',
      image: 'monitor1.jpg',
      link: 'https://amzn.to/4hsSE3I',
    },
    {
      name: 'Heymix Monitor ARM',
      image: 'monitor2.jpg',
      link: 'https://amzn.to/3Q88JQ2',
    },
    {
      name: 'Hyper X Cloud Core',
      image: 'headphone.jpg',
      link: 'https://amzn.to/3WRpNOj',
    },
    {
      name: 'BLUE YETI MICROPHONE',
      image: 'microphone.jpg',
      link: 'https://amzn.to/4gwG4z5',
    },
    {
      name: 'CL 108 cm (43 inches) 4K Ultra HD Smart QLED Google TV 43C655',
      image: 'TV.jpg',
      link: 'https://amzn.to/4iNzZ2u',
    },
    {
      name: 'Topographical Extended Mousepad',
      image: 'whitemousepad.jpg',
      link: 'https://amzn.to/4hPpUSp',
    },
    {
      name: 'Ant Esports Mouse Pad',
      image: 'mousePad.jpg',
      link: 'https://amzn.to/4gyj4Q0',
    },
    {
      name: 'Spectra Lights',
      image: 'spectralight.jpg',
      link: 'https://amzn.to/4hLh8os',
    },
    {
      name: 'Apex Neon Lights',
      image: 'apexlight.jpg',
      link: 'https://amzn.to/3WUsVc5',
    },
    {
      name: 'Aula Mechanical Keyboard',
      image: 'aulakeyboard.jpg',
      link: 'https://amzn.to/40I7E6o',
    },
    {
      name: 'Vergo Transform Prime Ergonomic',
      image: 'Vergo Transform Prime Ergonomic.jpg',
      link: 'https://amzn.to/4iQjRx8',
    },

    {
      name: 'Sony DualSense Wireless Controller White (PlayStation 5)',
      image: 'Sony DualSense Wireless Controller White.jpg',
      link: 'https://amzn.to/3RNx1A0',
    },

    {
      name: 'PS5 Charger Station',
      image: 'PS5 Charger Station.jpg',
      link: 'https://amzn.to/4jH9xsu',
    },
    {
      name: 'Mthpat Headphones',
      image: 'Mthpat Headphones.jpg',
      link: 'https://armor.shop/',
    },

    {
      name: 'ZEBRONICS MAX FURY',
      image: 'ZEBRONICS MAX FURY.jpg',
      link: 'https://amzn.to/4iKThVW',
    },
    {
      name: 'realme in Ear Buds Air 6 Pro',
      image: 'realme in Ear Buds Air 6 Pro.jpg',
      link: 'https://amzn.to/4iIlgpd',
    },

    {
      name: 'DJI OSMO Mobile SE',
      image: 'DJI OSMO Mobile SE.jpg',
      link: 'https://amzn.to/3Z43KEX',
    },
  ];

  toggleFlip(product: any) {
    product.isFlipped = !product.isFlipped;
  }
}
