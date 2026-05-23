# Focus Flow

Focus Flow e' un'applicazione per la produttivita' sviluppata con React Native ed Expo. Progettata per aiutare nella gestione del tempo, utilizza tecniche di time-blocking come il metodo Pomodoro per massimizzare la concentrazione e garantire pause rigeneranti.

## Scopo del Progetto

Focus Flow nasce dalla necessita' di avere uno strumento semplice per monitorare le sessioni di lavoro. L'app permette di:
- Mantenere il Focus: Sessioni dedicate alla concentrazione profonda.
- Gestire le Pause: Intervalli brevi e lunghi calcolati automaticamente.
- Monitorare i Progressi: Uno storico delle sessioni completate oggi con statistiche in tempo reale.
- Personalizzare l'Esperienza: Regolazione di tempi, suoni e feedback aptico.

## Tecnologie Utilizzate

- Framework: Expo + React Native
- Styling: NativeWind (Tailwind CSS per React Native)
- Animazioni: React Native Reanimated
- Persistenza: AsyncStorage per il salvataggio locale dei dati.

## Come Iniziare

### 1. Installazione
Clona il repository e installa le dipendenze:
```bash
npm install
```

### 2. Avvio dell'Applicazione
Per avviare l'ambiente di sviluppo, esegui:
```bash
npx expo start
```

## Perche' npx expo start?

In molti progetti web si utilizza npm run dev. In un ecosistema Expo, il comando standard e' npx expo start per diversi motivi:

1. Versatilta' Multi-piattaforma: Expo gestisce il bundling per iOS, Android e Web contemporaneamente.
2. Expo Go e QR Code: Genera un QR Code per aprire l'app sul telefono fisico tramite l'app Expo Go, senza build complesse.
3. Gestione della Versione: npx expo garantisce l'uso della versione della CLI compatibile con l'SDK installato nel progetto, evitando conflitti con installazioni globali.
4. Strumenti di Debug: Avvia un server di sviluppo con scorciatoie per ricaricare l'app e accedere ai menu di debug.

## Funzionalita' Principali

- Timer Dinamico: Selezione tra Focus (25m), Short Break (5m) e Long Break (15m).
- Pannello Statistiche: Pannello inferiore trascinabile per visualizzare il riepilogo giornaliero.
- Impostazioni: Menu per modificare durate predefinite e preferenze di notifica.
- Feedback: Notifiche e vibrazione al termine della sessione.

---
Sviluppato per ottimizzare il flusso di lavoro.


