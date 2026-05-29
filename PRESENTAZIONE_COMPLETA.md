# 📱 FOCUS FLOW - Presentazione Completa

## Indice
1. [Cos'è Focus Flow](#cosè-focus-flow)
2. [Come Accedervi](#come-accedervi)
3. [Architettura Tecnica](#architettura-tecnica)
4. [Features Principali](#features-principali)
5. [Come Usarla](#come-usarla)
6. [Dati e Privacy](#dati-e-privacy)
7. [Tecnologie Usate](#tecnologie-usate)
8. [Installazione e Setup](#installazione-e-setup)

---

## Cos'è Focus Flow?

**Focus Flow** è un'applicazione di produttività basata sulla **tecnica Pomodoro**, progettata per aiutare gli utenti a:

- ✅ Migliorare la concentrazione con sessioni dedicate (25 minuti)
- ✅ Gestire pause rigeneranti (5-15 minuti)
- ✅ Tracciare il progresso con statistiche in tempo reale
- ✅ Lavorare **completamente offline** senza dipendenze da internet

### Metodo Pomodoro

Il metodo Pomodoro è una tecnica di time-management che divide il lavoro in intervalli:

```
Ciclo Pomodoro Standard:
┌─────────────────────────────────────┐
│ 25 min FOCUS (lavoro concentrato)  │
├─────────────────────────────────────┤
│ 5 min SHORT BREAK (pausa breve)    │
├─────────────────────────────────────┤
│ 25 min FOCUS (2° sessione)         │
├─────────────────────────────────────┤
│ 5 min SHORT BREAK                  │
├─────────────────────────────────────┤
│ 25 min FOCUS (3° sessione)         │
├─────────────────────────────────────┤
│ 15 min LONG BREAK (pausa lunga)    │
└─────────────────────────────────────┘
Dopo 4 Pomodoro, fai una pausa più lunga!
```

---

## Come Accedervi

Focus Flow è disponibile in **3 forme**:

### 1️⃣ WEB - Sito Web Tradizionale

**Accessibile da qualsiasi browser**

```
URL: http://localhost:8000
(o da qualsiasi server web)

Browser supportati:
✓ Chrome/Chromium
✓ Firefox
✓ Safari
✓ Edge
```

**Come accedere:**
```bash
npm install -g http-server
http-server public -p 8000
```

Poi apri: `http://localhost:8000`

**Vantaggi:**
- ✓ Accessibile da PC/Tablet/Telefono
- ✓ Non richiede installazione
- ✓ Sempre aggiornato
- ✓ Cross-platform

---

### 2️⃣ PWA - Progressive Web App (CONSIGLIATO)

**App mobile installabile senza App Store**

La stessa versione web, ma installabile sul telefono come app nativa!

**Come accedere:**

**Android:**
1. Apri il browser: `http://localhost:8000` (dal PC con IP)
   - Oppure: `http://192.168.1.100:8000` (da altro dispositivo)
2. Tocca il **menu (⋮)** → "Installa app"
3. ✅ L'app appare nel menu del telefono

**iPhone:**
1. Apri Safari: `http://localhost:8000`
2. Tocca **Condividi (↗️)** → "Aggiungi a Home Screen"
3. ✅ L'app appare nella home

**File necessari:**
```
public/
├── index.html         ← App principale
├── manifest.json      ← Metadati PWA
├── service-worker.js  ← Cache offline
└── pwa.html          ← Pagina installazione
```

**Vantaggi:**
- ✓ Installabile come app vera
- ✓ Funziona offline al 100%
- ✓ Dati salvati nel telefono
- ✓ Niente App Store
- ✓ Occupai poco spazio (2-3MB)

---

### 3️⃣ APK/IPA - App Mobile Nativa (Futuro)

**Build dell'app come pacchetto installabile**

Attualmente disponibile con:
- React Native + Expo
- EAS Build (cloud)

**Tecnicamente possibile ma:**
- ⚠️ Richiede Android SDK/Xcode
- ⚠️ Build time: 10-30 minuti
- ⚠️ Account Expo/Apple Developer

**Quando usare:**
- Per distribuzione su App Store/Play Store
- Se vuoi un'app "ufficiale"
- Per monitoraggio di aggiornamenti

---

## Architettura Tecnica

### Struttura Progetto

```
Focus-Flow/
├── app/                      ← App React Native (Expo)
│   ├── (tabs)/              ← Schermate principali
│   ├── _layout.tsx          ← Layout root
│   └── index.tsx            ← Home screen
│
├── public/                   ← PWA/Web version
│   ├── index.html           ← App web principale
│   ├── manifest.json        ← Configurazione PWA
│   ├── service-worker.js    ← Cache offline
│   ├── pwa.html            ← Landing page
│   └── assets/             ← Immagini e icone
│
├── components/              ← Componenti condivisi
├── lib/                     ← Utility functions
├── assets/                  ← Risorse app
│
├── package.json            ← Dipendenze
├── app.json                ← Configurazione Expo
├── tsconfig.json           ← TypeScript config
├── tailwind.config.js      ← Styling config
│
├── README.md               ← Guida principale
├── CONSEGNA.md            ← Guida consegna
├── PWA_GUIDE.md           ← Guida PWA
└── README_PWA.md          ← Presentazione PWA
```

### Flusso Dati

```
┌─────────────┐
│   Browser   │
└──────┬──────┘
       │
       ├─→ index.html
       │   (interfaccia utente)
       │
       ├─→ service-worker.js
       │   (cache offline)
       │
       ├─→ manifest.json
       │   (installazione PWA)
       │
       └─→ LocalStorage
           (persistenza dati)

Offline Support:
- Service Worker intercetta le richieste
- Se online: usa la rete
- Se offline: usa la cache
```

---

## Features Principali

### 1. Timer Pomodoro

**Tre modalità di timer:**

#### Focus (25 minuti)
- Timer per sessione di lavoro concentrato
- Colore: Blu (#667eea)
- Display grande e leggibile
- Notifica quando termina

#### Short Break (5 minuti)
- Pausa breve tra sessioni
- Colore: Verde
- Notifica "Pronto per una nuova sessione?"

#### Long Break (15 minuti)
- Pausa lunga dopo 4 Pomodoro
- Colore: Verde scuro
- Ideale per ricaricarsi

**Controlli:**
```
▶ Avvia    - Inizia il conto alla rovescia
⏸ Pausa    - Metti in pausa
🔄 Reset   - Ricomincia il timer
```

---

### 2. Visualizzazione Timer

**Design minimalista e intuitivo**

```
┌────────────────────────────┐
│           ⏱️               │  ← Emoji icona
│       Focus Flow           │  ← Titolo
│                            │
│   Sessione di Lavoro       │  ← Modalità attuale
│                            │
│        25:00               │  ← Timer grande
│                            │
│  [▶ Avvia] [🔄 Reset]      │  ← Controlli
│                            │
│ Sessioni: 5  Tempo: 120m   │  ← Statistiche
└────────────────────────────┘
```

---

### 3. Modalità Timer

**Switch tra le tre modalità:**

```
[🎯 Focus] [☕ Short Break] [🌳 Long Break]
```

- Un click per passare di modalità
- Timer si resetта automaticamente
- Label si aggiorna

---

### 4. Statistiche Giornaliere

**Tracking in tempo reale:**

```
Sessioni completate oggi: 5
└─ Significa: 5 × 25 min = 125 minuti di lavoro

Tempo totale: 2h 45m
└─ Include break, ma traccia il lavoro reale
```

**Dati salvati:**
- Nel browser (LocalStorage)
- Persistenti anche dopo chiusura app
- Reset ogni mezzanotte (locale)

---

### 5. Notifiche

**Quando timer termina:**

```
Desktop: Notifica popup
├─ Titolo: "Focus Flow"
├─ Messaggio: "Sessione completata! Prendi una pausa."
└─ Icona: Logo app

Mobile: Popup schermo
└─ Messaggio alert personalizzato
```

**Permessi:**
- Richiesto al primo uso
- Utente può rifiutare
- Non blocca l'app

---

## Come Usarla

### Step by Step

#### 1. Apertura App

**Via Web Browser:**
```
1. Apri browser
2. Digita: http://localhost:8000
3. Pagina carica istantaneamente
```

**Via PWA (Telefono):**
```
1. Tocca icona Focus Flow (home screen)
2. App si apre in fullscreen
3. Niente barra browser visibile
```

#### 2. Seleziona Modalità

```
Scegli tra:
- 🎯 Focus (25 min) - DEFAULT
- ☕ Short Break (5 min)
- 🌳 Long Break (15 min)

Clicca il pulsante desiderato
```

#### 3. Avvia Timer

```
Clicca [▶ Avvia]
- Timer inizia a scendere
- Pulsante cambia in [⏸ Pausa]
- Display aggiornato ogni secondo
```

#### 4. Durante il Timer

**Se continui:**
- Timer continua a scendere
- Puoi chiudere l'app
- Puoi usare il telefono normalmente
- Timer continua in background (offline)

**Se vuoi stoppare:**
- Clicca [⏸ Pausa]
- Timer si ferma
- Clicca [▶ Avvia] per riprendere

**Se vuoi ricominciare:**
- Clicca [🔄 Reset]
- Timer torna ai 25:00

#### 5. Timer Termina

```
Notifica appare:
"Sessione completata!"

Se Focus:
├─ Statistiche aumentano
├─ Sessioni: +1
└─ Tempo totale: +25 min

Poi scegli prossima modalità
```

#### 6. Workflow Completo

```
Esempio di sessione mattutina:

1. Clicca "🎯 Focus" → Timer: 25:00
2. Clicca "▶ Avvia"
   └─ Lavora per 25 minuti...
3. Timer termina → Notifica
4. Clicca "☕ Short Break" → Timer: 5:00
5. Clicca "▶ Avvia"
   └─ Pausa 5 minuti...
6. Timer termina
7. Clicca "🎯 Focus" → Ritorna al lavoro

Repeat 3-4 volte, poi fai una "Long Break" di 15 min
```

---

## Dati e Privacy

### Dove Vengono Salvati i Dati?

**100% nel tuo telefono/computer**

```
LocalStorage (Browser storage)
├─ Sessioni completate oggi
├─ Tempo totale
├─ Ultime statistiche
└─ NON trasferito a nessun server
```

### Privacy

✓ **Nessun tracciamento** - Non inviamo dati online  
✓ **Nessun account** - Non chiediamo login  
✓ **Nessun cookie** - Solo dati locali  
✓ **Niente pubblicità** - App pulita  
✓ **Open source** - Codice pubblicamente visibile  

### Elimina Dati

**Se cancelli l'app:**
```
PWA: Tocca e tieni premuto → Disinstalla
     (Dati rimangono in cache del browser)

Se vuoi cancellare dati:
1. Apri Dev Tools (F12)
2. Storage → LocalStorage
3. Elimina le voci Focus Flow
4. Fatto!
```

---

## Tecnologie Usate

### Frontend

#### React Native (Framework)
- **Versione:** 0.81.5
- **Uso:** Logica app
- **Cross-platform:** iOS + Android + Web

#### Expo (Toolkit)
- **Versione:** 54.0.27
- **Uso:** Build e distribuzione
- **Benefici:** Semplifica React Native

#### TypeScript (Linguaggio)
- **Versione:** 5.9.2
- **Uso:** Type-safe JavaScript
- **Benefici:** Meno bug, miglior IDE support

#### NativeWind (Styling)
- **Versione:** 4.2.1
- **Uso:** Tailwind CSS per React Native
- **Benefici:** Styling rapido e consistente

#### Tailwind CSS (Styling CSS)
- **Versione:** 3.4.18
- **Uso:** Utility-first CSS
- **Benefici:** Design sistema coerente

#### React Router (Navigation)
- **Versione:** 7.1.8
- **Uso:** Navigazione tra schermate
- **Benefici:** App fluida e reattiva

### Offline Support

#### Service Worker
- Intercetta le richieste HTTP
- Cache le risorse localmente
- Serve offline quando necessario
- Aggiorna in background

#### Web Manifest
- Configurazione PWA
- Icone app
- Theme color
- Display mode (fullscreen)

#### LocalStorage (API)
- Persistenza dati browser
- ~5MB limite
- Dati rimangono dopo reload
- Sincronizzato con Service Worker

### Build Tools

#### Metro Bundler
- Bundle JavaScript
- Usato da Expo
- Supporta both native e web

#### Babel
- Transpila JavaScript moderno
- Supporta JSX
- Ottimizza il codice

### Package Manager

#### npm
- Gestione dipendenze
- Script di build
- Versionamento

---

## Installazione e Setup

### Prerequisiti

```
✓ Node.js 16+ installato
✓ npm installato (viene con Node)
✓ Un browser moderno
✓ Accesso terminal/PowerShell
```

### Installarsi Locale

#### 1. Clone Repository

```bash
# Se hai Git
git clone https://github.com/[user]/Focus-Flow.git
cd Focus-Flow

# Oppure scarica lo ZIP e estrai
```

#### 2. Installa Dipendenze

```bash
npm install
```

Scarica tutti i pacchetti necessari (~500MB)

#### 3. Avvia Web Server

```bash
# Installa http-server globalmente (una volta)
npm install -g http-server

# Avvia server sulla porta 8000
http-server public -p 8000

# Output:
# Available on:
#   http://localhost:8000
#   http://192.168.x.x:8000
```

#### 4. Accedi da Browser

```
PC: http://localhost:8000
Altro device: http://[TUO_IP]:8000
```

#### 5. Installa come PWA (Telefono)

**Android:**
- Menu (⋮) → "Installa app"

**iPhone:**
- Condividi (↗) → "Aggiungi a Home Screen"

---

### Deploy Online (Optional)

Se vuoi condividere pubblicamente:

#### Opzione 1: Netlify (Gratis)

```bash
1. Crea account: netlify.com
2. Drag & drop folder "public/"
3. Ottieni URL pubblico
4. Chiunque nel mondo può usarla!
```

#### Opzione 2: Vercel (Gratis)

```bash
1. Crea account: vercel.com
2. Importa il repository
3. Auto-deploy su ogni push
```

#### Opzione 3: GitHub Pages (Gratis)

```bash
1. Push su GitHub
2. Abilita GitHub Pages in Settings
3. App accessibile su username.github.io/Focus-Flow
```

---

## Supporto e Troubleshooting

### Problemi Comuni

#### "Porta 8000 in uso"

```bash
# Usa porta diversa
http-server public -p 3000

# Oppure uccidi il processo
netstat -ano | findstr :8000
taskkill /PID [PID] /F
```

#### "App non si carica"

```bash
1. Ricaricare la pagina (CTRL+F5)
2. Cancellare cache browser
3. Eliminare Service Worker:
   - F12 → Application → Clear All
4. Riavviare server http-server
```

#### "PWA non si installa"

```bash
1. Assicurati di essere su HTTPS
   (localhost è eccezione)
2. Prova da browser diverso
3. Controlla se manifest.json è accessibile
```

#### "Timer non funziona"

```bash
1. Controlla se JavaScript è abilitato
2. Ricaricare app
3. Prova incognito
4. Controlla console (F12)
```

---

## Statistiche Tecniche

### Performance

```
Load time:           < 1 secondo
Bundle size:         ~500KB
App size (PWA):      2-3 MB
Memory usage:        < 50 MB
Battery impact:      Minimo (timer passivo)
Network:             Zero dipendenze cloud
```

### Compatibilità

```
Browser:
✓ Chrome 90+
✓ Firefox 88+
✓ Safari 14+
✓ Edge 90+

Devices:
✓ iOS 13+
✓ Android 7+
✓ Tablet/Desktop
✓ Smartwatch (web only)
```

---

## Roadmap Futuro

### Feature Pianificate

- [ ] Tema scuro (dark mode)
- [ ] Statistiche settimanali/mensili
- [ ] Suoni custom
- [ ] Vibrazione feedback
- [ ] Sync cloud (opcional)
- [ ] Integrazione calendario
- [ ] Export statistiche (CSV)

### Versioni Future

- **v1.1:** Dark mode + statistiche avanzate
- **v1.2:** Suoni e feedback aptico
- **v2.0:** Cloud sync + app mobile nativa

---

## Comparazione: Web vs PWA

| Feature | Web | PWA |
|---------|-----|-----|
| **Accesso** | Browser | Browser + Home |
| **Offline** | No | Sì (completo) |
| **Installazione** | No | Sì (2 tap) |
| **Spazio** | 0 MB | 2-3 MB |
| **Notifiche** | Browser | Sistema operativo |
| **UI** | Con barre | Fullscreen |
| **Velocità** | Normale | Più veloce (cache) |
| **Aggiornamenti** | Automatici | Automatici |

**Consiglio:** Usa PWA per esperienza migliore sul telefono!

---

## Contatti e Supporto

### Come Usarla

**Per domande:**
- Leggi questo documento
- Consulta PWA_GUIDE.md
- Controlla README.md

**Per bug:**
- Descrivi il problema
- Screenshot se possibile
- Browser/device in uso

---

## Conclusione

**Focus Flow** è un'app moderna, offline-first, installabile direttamente dal telefono. 

**Perfetta per:**
- ✓ Studenti che devono concentrarsi
- ✓ Professionisti con task complessi
- ✓ Chiunque voglia migliorare produttività
- ✓ Chi preferisce dati privati

**Inizia ora:** `http://localhost:8000`

---

**Fatto con ❤️ per ottimizzare il tuo flusso di lavoro!**
