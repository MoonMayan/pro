import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface CategoryRule {
  label: string;
  keywords: string[];
}

interface Toast {
  id: number;
  message: string;
}

interface Product {
  name: string;
  image: string;
  link: string;
  loaded?: boolean;
  isFlipped?: boolean;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  animations: [
    trigger('pageEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(14px)' }),
        animate(
          '480ms cubic-bezier(0.16,1,0.3,1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('toastAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(14px) scale(0.94)' }),
        animate(
          '260ms cubic-bezier(0.16,1,0.3,1)',
          style({ opacity: 1, transform: 'translateY(0) scale(1)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(8px) scale(0.94)' })
        ),
      ]),
    ]),
  ],
})
export class ProductsComponent {
  searchTerm = '';
  activeCategory = 'All';
  toasts: Toast[] = [];
  private toastSeq = 0;

  private categoryRules: CategoryRule[] = [
    { label: 'Monitors', keywords: ['monitor', 'oled', 'qled', ' tv', 'ultrawide'] },
    { label: 'Audio', keywords: ['headphone', 'earbuds', 'ear buds', 'microphone', 'halo bar', 'cloud core'] },
    { label: 'Keyboards', keywords: ['keyboard', 'f75', 'su75', 'actus', 'aula'] },
    { label: 'Mice & Controllers', keywords: ['mouse', 'deathadder', 'controller', 'dualsense', 'power a', 'v1xl', 'm200'] },
    { label: 'Lighting', keywords: ['light', 'rgb', 'spectra', 'sync box', 'neon'] },
    { label: 'Furniture', keywords: ['chair', 'sofa', 'desk', 'lamp'] },
    { label: 'Camera', keywords: ['camera', 'lens', 'osmo', 'sigma', 'sony alpha'] },
    { label: 'Home & Lifestyle', keywords: ['vacuum', 'cctv', 'plant', 'powerbank', 'wrist pad', 'mousepad', 'mouse pad', 'mat'] },
  ];

  products: Product[] = [

        {
      name: 'QD-OLED Gaming Monitor-AW3423DWF',
      image: 'QD-OLED Gaming Monitor-AW3423DWF.jpeg',
      link: 'https://amzn.to/3Mx1in3',
    },

        {
      name:' POWER A ADVANTAGE +',
      image: 'POWER A ADVANTAGE +.jpeg',
      link: 'https://amzn.to/3YdY1M0',
    },

        {
      name: 'KREO OBSIDIAN',
      image: 'KREO OBSIDIAN.jpeg',
      link: 'https://amzn.to/3Mpiefe',
    },


     {
      name: 'AGARO SUPREME CODLESS VACCUM CLEANER',
      image: 'AGARO SUPREME CODLESS VACCUM CLEANER.jpeg',
      link: 'https://amzn.to/48nEwqi',
    },


     {
      name: 'Razer Bluetooth DeathAdder V2',
      image: 'Razer Bluetooth DeathAdder V2.jpeg',
      link: 'https://amzn.to/4rI8Y5X',
    },



    {
      name: 'Ant Esports Combatant II',
      image: 'Ant Esports Combatant II.jpeg',
      link: 'https://amzn.to/3Ml102F',
    },

    {
      name: 'Ant Esports Thunder 30 COMBO',
      image: 'Ant Esports Thunder 30 COMBO.jpeg',
      link: 'https://amzn.to/4iHJt0L',
    },

    {
      name: 'Imou 360° 1080P Full HD CCTV',
      image: 'Imou 360° 1080P Full HD CCTV.jpeg',
      link: 'https://amzn.to/48oWw3z',
    },

    {
      name: 'BEN Q HALO BAR 2',
      image: 'BEN Q HALO BAR 2.jpeg',
      link: 'https://amzn.to/49XGTkT',
    },
    {
      name: 'GO THRIFF',
      image: 'GO THRIFF.jpeg',
      link: 'https://gothriff.com/?ref=basthpox',
    },

    {
      name: 'COSMIC BYTE Ares Pro',
      image: 'COSMIC BYTE Ares Pro.jpeg',
      link: 'https://amzn.to/4rZLPMP',
    },
    {
      name: 'Su75 Pro',
      image: 'Su75 Pro.jpeg',
      link: 'https://keebforce.com/su75-pro/ ',
    },
    {
      name: 'SURGE XB',
      image: 'SURGE XB.jpeg',
      link: 'https://amzn.to/4iOjgxE ',
    },

    {
      name: 'Kreo Chimera V2',
      image: 'Kreo Chimera V2.jpeg',
      link: 'https://amzn.to/4aBpXAR ',
    },

    {
      name: 'Adorn India Premium New Aspen 3 Seater Sofa Cum Bed',
      image: 'Adorn India Premium New Aspen 3 Seater Sofa Cum Bed.jpg',
      link: 'https://amzn.to/4oPXNXD ',
    },

    {
      name: 'Ant Esports GW190',
      image: 'Ant Esports GW190.jpg',
      link: 'https://amzn.to/4mJgeeS',
    },
    {
      name: 'Spectra Lights HDMI Sync Box',
      image: 'Spectra Lights HDMI Sync Box.jpg',
      link: 'https://amzn.to/45d25R4',
    },
    {
      name: 'Spectra Lights Pack of 6 Big',
      image: 'Spectra Lights Pack of 6 Big.jpg',
      link: 'https://amzn.to/4moBOFm',
    },
    {
      name: 'MODEL X PRO',
      image: 'MODEL X PRO.jpg',
      link: 'https://beproworld.in/products/model-x-pro',
    },
    {
      name: 'EvoFox Katana S Mini',
      image: 'EvoFox Katana S Mini.jpg',
      link: 'https://amzn.to/45g9BL5',
    },

    {
      name: 'The Sleep Company Onyx Orthopedic Office Chair',
      image: 'The Sleep Company Onyx Orthopedic Office Chair.jpg',
      link: 'https://amzn.to/4fDBvUO',
    },
    {
      name: 'Kreo Swarm 75% naruto',
      image: 'Kreo Swarm naruto.jpg',
      link: 'https://amzn.to/3H9uxdz',
    },

    {
      name: 'Kreo X Naruto Hawk Gaming Mouse',
      image: 'Kreo X Naruto Hawk Gaming Mouse.jpg',
      link: 'https://amzn.to/46VCIEM',
    },
    {
      name: 'KYARI Sansevieria Green Snake Air Purifier Plant',
      image: 'KYARI Sansevieria Green Snake Air Purifier Plant.jpg',
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
    },
    {
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
      name: 'Ergonomic Right Hand Wrist Pad',
      image: 'Ergonomic Right Hand Wrist Pad.jpg',
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
      name: 'Quad Pro 4',
      image: 'Quad Pro 4.jpg',
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
      name: 'CL 108 cm (43 inches) 4K Ultra HD Smart QLED Google TV 43C655',
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
      name: 'realme in Ear Buds Air 6 Pro',
      image: 'realme in Ear Buds Air 6 Pro.jpg',
      link: 'https://amzn.to/4iIlgpd',
    },

    {
      name: 'DJI OSMO Mobile SE',
      image: 'DJI OSMO Mobile SE.jpg',
      link: 'https://amzn.to/3Z43KEX',
    },
  ];

  toggleFlip(product: Product) {
    product.isFlipped = !product.isFlipped;
  }

  trackByName(_index: number, product: Product): string {
    return product.name;
  }

  categorize(name: string): string {
    const lower = name.toLowerCase();
    for (const rule of this.categoryRules) {
      if (rule.keywords.some((kw) => lower.includes(kw))) return rule.label;
    }
    return 'More Gear';
  }

  get categories(): string[] {
    const present = new Set(this.products.map((p) => this.categorize(p.name)));
    const ordered = this.categoryRules
      .map((r) => r.label)
      .filter((label) => present.has(label));
    if (present.has('More Gear')) ordered.push('More Gear');
    return ['All', ...ordered];
  }

  get filteredProducts() {
    const term = this.searchTerm.trim().toLowerCase();
    return this.products.filter((p) => {
      const matchesTerm = !term || p.name.toLowerCase().includes(term);
      const matchesCategory =
        this.activeCategory === 'All' || this.categorize(p.name) === this.activeCategory;
      return matchesTerm && matchesCategory;
    });
  }

  clearFilters() {
    this.searchTerm = '';
    this.activeCategory = 'All';
  }

  onSpotlight(event: MouseEvent) {
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', x.toFixed(1));
    el.style.setProperty('--my', y.toFixed(1));
  }

  resetSpotlight(event: MouseEvent) {
    (event.currentTarget as HTMLElement).style.setProperty('--mx', '50');
    (event.currentTarget as HTMLElement).style.setProperty('--my', '50');
  }

  copyLink(product: Product, event: Event) {
    event.stopPropagation();
    if (!product.link) return;
    navigator.clipboard
      ?.writeText(product.link)
      .then(() => this.pushToast(`Copied link for "${product.name}"`))
      .catch(() => this.pushToast('Could not copy link'));
  }

  private pushToast(message: string) {
    const id = ++this.toastSeq;
    this.toasts.push({ id, message });
    setTimeout(() => {
      this.toasts = this.toasts.filter((t) => t.id !== id);
    }, 2600);
  }
}