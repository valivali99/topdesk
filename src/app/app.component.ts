import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface InfoItem {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'top-desk';

  /** Indexul tab-ului activ: 0 Acasă, 1 Despre noi, 2 Topografie, 3 Contact */
  selectedTab = signal(0);

  readonly currentYear = new Date().getFullYear();

  // ---------- ACASĂ ----------
  readonly highlights: InfoItem[] = [
    {
      icon: 'verified',
      title: 'Documentații recepționate',
      text: 'Lucrări întocmite conform normelor ANCPI, pregătite pentru recepția la OCPI fără drumuri inutile.'
    },
    {
      icon: 'schedule',
      title: 'Termene clare',
      text: 'Vă comunicăm de la început durata estimată a lucrării și vă ținem la curent cu fiecare etapă.'
    },
    {
      icon: 'precision_manufacturing',
      title: 'Aparatură modernă',
      text: 'Măsurători cu receptoare GNSS RTK și stații totale, pentru precizie centimetrică.'
    },
    {
      icon: 'handshake',
      title: 'Consultanță gratuită',
      text: 'Vă explicăm ce documente aveți nevoie și care sunt pașii, înainte să începem lucrarea.'
    }
  ];

  readonly popularServices = [
    'Intabulare și prima înregistrare în cartea funciară',
    'Ridicări topografice pentru autorizația de construire',
    'Dezmembrări și alipiri de terenuri',
    'Trasarea construcțiilor și a limitelor de proprietate'
  ];

  // ---------- DESPRE NOI ----------
  readonly values: InfoItem[] = [
    {
      icon: 'gps_fixed',
      title: 'Precizie',
      text: 'Fiecare măsurătoare este verificată și încadrată în sistemul național de coordonate Stereo 70.'
    },
    {
      icon: 'gavel',
      title: 'Legalitate',
      text: 'Respectăm legislația în vigoare privind cadastrul și publicitatea imobiliară (Legea nr. 7/1996).'
    },
    {
      icon: 'forum',
      title: 'Comunicare',
      text: 'Răspundem rapid la întrebări și vă explicăm totul pe înțeles, fără termeni tehnici inutili.'
    },
    {
      icon: 'payments',
      title: 'Transparență',
      text: 'Ofertă de preț fermă, stabilită înainte de începerea lucrării, fără costuri ascunse.'
    }
  ];

  readonly equipment: InfoItem[] = [
    {
      icon: 'satellite_alt',
      title: 'Receptoare GNSS RTK',
      text: 'Determinarea rapidă a coordonatelor, cu corecții în timp real.'
    },
    {
      icon: 'architecture',
      title: 'Stații totale',
      text: 'Măsurători de înaltă precizie în zone construite sau cu vegetație deasă.'
    },
    {
      icon: 'computer',
      title: 'Software de specialitate',
      text: 'Prelucrarea datelor și redactarea planurilor în format digital (DWG, DXF, PDF, CGXML).'
    }
  ];

  // ---------- TOPOGRAFIE ----------
  readonly services: InfoItem[] = [
    {
      icon: 'home_work',
      title: 'Intabulare (prima înregistrare)',
      text: 'Documentația cadastrală completă pentru înscrierea terenurilor și construcțiilor în cartea funciară.'
    },
    {
      icon: 'construction',
      title: 'Documentații pentru autorizația de construire',
      text: 'Plan de încadrare în zonă și plan de situație vizate de OCPI, necesare pentru obținerea certificatului de urbanism și a autorizației.'
    },
    {
      icon: 'call_split',
      title: 'Dezmembrări și alipiri',
      text: 'Împărțirea unui teren în mai multe loturi sau unirea mai multor imobile într-unul singur.'
    },
    {
      icon: 'landscape',
      title: 'Ridicări topografice',
      text: 'Planuri topografice cu curbe de nivel, pentru proiectare, sistematizare verticală și studii de teren.'
    },
    {
      icon: 'straighten',
      title: 'Trasări',
      text: 'Marcarea pe teren a construcțiilor proiectate și a limitelor de proprietate, cu borne sau țăruși.'
    },
    {
      icon: 'apartment',
      title: 'Apartamentări și actualizări',
      text: 'Dezlipirea apartamentelor din blocuri, actualizarea informațiilor cadastrale și înscrierea construcțiilor noi.'
    },
    {
      icon: 'map',
      title: 'Suport topografic pentru PUZ / PUD',
      text: 'Planuri topografice actualizate, necesare pentru documentațiile de urbanism.'
    },
    {
      icon: 'description',
      title: 'Plan de amplasament și delimitare',
      text: 'Întocmirea PAD-ului, util la vânzări, succesiuni, partaje sau litigii de hotar.'
    }
  ];

  readonly steps: InfoItem[] = [
    {
      icon: 'call',
      title: '1. Discuție inițială',
      text: 'Ne contactați, ne spuneți ce aveți nevoie și primiți lista documentelor necesare.'
    },
    {
      icon: 'request_quote',
      title: '2. Ofertă de preț',
      text: 'Analizăm actele și vă transmitem oferta și termenul estimat de execuție.'
    },
    {
      icon: 'explore',
      title: '3. Măsurători pe teren',
      text: 'Venim la fața locului și efectuăm măsurătorile, în prezența dumneavoastră.'
    },
    {
      icon: 'edit_document',
      title: '4. Întocmirea documentației',
      text: 'Prelucrăm datele și redactăm documentația conform normelor în vigoare.'
    },
    {
      icon: 'task_alt',
      title: '5. Depunere și recepție',
      text: 'Depunem documentația la OCPI și urmărim dosarul până la finalizare.'
    }
  ];

  readonly requiredDocuments = [
    'Actul de proprietate (contract de vânzare-cumpărare, certificat de moștenitor, titlu de proprietate, act de donație etc.)',
    'Copie după actul de identitate al proprietarului / proprietarilor',
    'Certificat fiscal de la primărie (pentru unele tipuri de lucrări)',
    'Extras de carte funciară sau numărul cadastral, dacă imobilul este deja înscris',
    'Autorizația de construire și procesul-verbal de recepție, pentru înscrierea construcțiilor'
  ];

  // ---------- CONTACT ----------
  // TODO: înlocuiți valorile de mai jos cu datele reale ale firmei.
  readonly contact = {
    phone: '[Număr de telefon]',
    email: '[Adresă de e-mail]',
    address: '[Adresa biroului]',
    area: '[Județul / zona în care lucrați]'
  };

  readonly schedule = [
    { days: 'Luni – Vineri', hours: '09:00 – 17:00' },
    { days: 'Sâmbătă', hours: 'Doar cu programare' },
    { days: 'Duminică', hours: 'Închis' }
  ];

  readonly offerInfo = [
    'Tipul lucrării de care aveți nevoie',
    'Localitatea și adresa imobilului',
    'Suprafața aproximativă a terenului',
    'Actele de proprietate pe care le dețineți (o poză sau o copie este suficientă)'
  ];

  goToTab(index: number): void {
    this.selectedTab.set(index);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
