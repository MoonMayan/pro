import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor,NgClass,NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { name: "LG Ultrawide UltraGear (34 INCH)", image: "monitor1.jpg", link: "https://amzn.to/4hsSE3I" },
    { name: "Heymix Monitor ARM", image: "monitor2.jpg", link: "https://amzn.to/3Q88JQ2" },
    { name: "Hyper X Cloud Core", image: "headphone.jpg", link: "https://amzn.to/3WRpNOj" },
    { name: "BLUE YETI MICROPHONE", image: "microphone.jpg", link: "https://amzn.to/4gwG4z5" },
    { name: "TCL QLED TV 55C655", image: "TV.jpg", link: "https://amzn.to/42HrWjf" },
    { name: "Topographical Extended Mousepad", image: "whitemousepad.jpg", link: "https://amzn.to/4hPpUSp" },
    { name: "Ant Esports Mouse Pad", image: "mousePad.jpg", link: "https://amzn.to/4gyj4Q0" },
    { name: "Spectra Lights", image: "spectralight.jpg", link: "https://amzn.to/4hLh8os" },
    { name: "Apex Neon Lights", image: "apexlight.jpg", link: "https://amzn.to/3WUsVc5" },
    { name: "Aula Mechanical Keyboard", image: "aulakeyboard.jpg", link: "https://amzn.to/40I7E6o" },
    // { name: "Gaming Keyboard", image: "gamingkeyboard.jpg", link: "" },
    // { name: "Keyboard", image: "keyboard.jpg", link: "" },
    // { name: "Mouse", image: "mouse.jpg", link: "" },
    // { name: "Drawing Tablet", image: "tablet.jpg", link: "" },
    // { name: "Game Controller", image: "gamepad.jpg", link: "" },
    // { name: "T-Force RAM", image: "ram.jpg", link: "" },
    // { name: "RTX Graphics Card", image: "graphiccard.jpg", link: "" },
    // { name: "RYZEN Processor", image: "processor.jpg", link: "" }
  ];
  

  toggleFlip(product: any) {
    product.isFlipped = !product.isFlipped;
  }
}
