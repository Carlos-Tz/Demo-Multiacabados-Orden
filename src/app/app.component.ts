import { Component, OnInit, ViewChild} from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public canvasWidth = 150;
  public needleValue = 50;
  public centralLabel = '';
  public name = '';
  public bottomLabel = '';
  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['red', 'yellow', 'green'],
    arcDelimiters: [33, 67],
    rangeLabel: ['E', 'F'],
    needleStartValue: 60,
  };

  public gen = false;
  public zur = false;
  public qua = false;
  public atl = false;
  public pot = false;
  public afi = false;
  public mul = false;
  public air = false;
  public eng = false;
  public abs = false;
  public oil = false;

  @ViewChild('sig1') signaturePad: SignaturePad;
  @ViewChild('sig2') signaturePad2: SignaturePad;
  @ViewChild('sig3') signaturePad3: SignaturePad;
  @ViewChild('sig4') signaturePad4: SignaturePad;

  public signaturePadOptions: Object = {
    'minWidth': 0.7,
    'maxWidth': 0.8,
    'penColor': 'rgb(255,0,0)',
    'canvasWidth': 189,
    'canvasHeight': 125
  };
  ngOnInit() {

  }

  clear1() {
    this.signaturePad.clear();
  }

  clear2() {
    this.signaturePad2.clear();
  }

  clear3() {
    this.signaturePad3.clear();
  }

  clear4() {
    this.signaturePad4.clear();
  }
  combus(ev) {
    // console.log(ev.srcElement.value);
     this.needleValue = ev.srcElement.value;
   }
   general() {
     this.gen = !this.gen;
   }

   zurich() {
     this.zur = !this.zur;
   }

   qualitas() {
     this.qua = !this.qua;
   }

   atlas() {
     this.atl = !this.atl;
   }

   potosi() {
     this.pot = !this.pot;
   }

   afirme() {
     this.afi = !this.afi;
   }

   multiacabados() {
     this.mul = !this.mul;
   }

   airbag() {
     this.air = !this.air;
   }

   engine() {
     this.eng = !this.eng;
   }

   abs_() {
     this.abs = !this.abs;
   }

   oil_() {
     this.oil = !this.oil;
   }
}
