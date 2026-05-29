# 📱 Focus Flow - Guida per Consegna Capolavoro

Guida completa per consegnare Focus Flow come app mobile scaricabile dal telefono.

---

## 🎯 Passo 1: Creare il Build (Una volta)

### Esegui questo:
```
Doppio click: BUILD_RELEASE.bat
```

**Cosa succede:**
1. Ti chiede di fare login su Expo (1 minuto)
2. Sceglie Android/iOS o entrambi
3. Inizia il build nel cloud (10-15 minuti)
4. Ti dà il link per scaricare

### Login Expo:
- Se è la prima volta, vai a: **https://expo.dev**
- Crea account gratuito
- Accedi dal script batch
- Fatto! 

---

## 📥 Passo 2: Distribuire al Telefono

### Metodo A: Link Diretto (CONSIGLIATO)

1. **Apri questa pagina da telefono:**
   ```
   Apri il file DOWNLOAD.html nel browser
   (O copia il link del build da Expo Dashboard)
   ```

2. **Clicca "Scarica APK"** (Android)
   - Il file si scarica automaticamente
   - Cerca nella cartella Download
   - Tocca il file .apk per installare

3. **Dai permessi se richiesto**
   - "Installa da fonte sconosciuta" (se chiede)
   - ✅ Focus Flow è installata!

### Metodo B: Condividere il Link

```
Vai a: https://expo.dev/dashboard
Trova il tuo build
Copia il link di download
Invialo a chi vuoi (Whatsapp, email, ecc)
Chi lo riceve clicca il link dal telefono
```

---

## 📊 Monitorare il Build

### Durante la compilazione:
1. Vai a: **https://expo.dev/dashboard**
2. Accedi con lo stesso account
3. Vedi il progresso in tempo reale
4. Attendi che finisca (sarà verde/completato)

---

## ✅ Checklist per la Consegna

Prima di consegnare:
- [ ] Build completato (verde su Expo Dashboard)
- [ ] File APK scaricato dal telefono
- [ ] App installata e funzionante
- [ ] Tutti i feature testati:
  - [ ] Timer Pomodoro (25min)
  - [ ] Short Break (5min)
  - [ ] Long Break (15min)
  - [ ] Statistiche visibili
  - [ ] Suoni/vibrazione funzionano
  - [ ] Dati salvati offline

---

## 🔍 Cosa Dire al Professore

**Template di presentazione:**

> "Focus Flow è un'app mobile di produttività basata sul metodo Pomodoro, sviluppata con React Native ed Expo. 
> 
> L'app permette di:
> - Impostare sessioni di lavoro concentrate (25 minuti)
> - Gestire pause brevi (5 min) e lunghe (15 min)
> - Visualizzare statistiche in tempo reale
> - Ricevere notifiche al termine di ogni sessione
> - Salvare i dati localmente sul telefono
>
> È builduppa con EAS (Expo Application Services) e distribuibile direttamente come APK su Google Play o come IPA su App Store."

---

## 🚀 Aggiornamenti Futuri

Dopo la consegna, se vuoi aggiornare l'app:

1. Modifica il codice in `app/`
2. Esegui di nuovo `BUILD_RELEASE.bat`
3. EAS builduppa la nuova versione
4. Scarica e installa sul telefono
5. Fatto!

---

## ❓ FAQ

**D: L'account Expo è gratuito?**
A: Sì, completamente! Il primo build è gratis, poi hai 30 min/mese di build gratis.

**D: Posso scaricare dal PC e mandare via Whatsapp?**
A: Sì! Scarica l'APK dal PC (scaricherà nel folder Downloads), poi invialo via Whatsapp/email.

**D: Come installo l'APK su Android?**
A: 
1. Scarica il file .apk
2. Cerca nella cartella Download del telefono
3. Tocca il file
4. Clicca "Installa"
5. Fatto!

**D: Per iPhone?**
A: Richiede account Apple Developer ($99/anno) per distribuire su App Store. Per il capolavoro, usa l'APK per Android che è più semplice.

**D: Funziona senza internet?**
A: Sì! Una volta installata, funziona completamente offline. I dati si salvano nel telefono.

**D: Posso aggiungerlo su Google Play Store?**
A: Sì, ma richiede:
- Account Google Play ($25 una volta)
- Richiede review di Google (1-3 giorni)
- Consigliato per rilascio pubblico

**D: Come faccio se il build fallisce?**
A: 
1. Controlla gli errori nel terminal
2. Vai su https://expo.dev/dashboard
3. Vedi il log di errore completo
4. Generalmente è un problema di dipendenze
5. Prova: `npm install` e riprova

---

## 🎁 Bonus: Icona Personalizzata

Se vuoi cambiare l'icona dell'app:
1. Metti la tua icona in `assets/images/icon.png` (1024x1024 px)
2. Esegui `BUILD_RELEASE.bat` di nuovo
3. Fatto! La nuova icona appare nell'installer

---

## 📞 Supporto

- Documentazione Expo: https://docs.expo.dev/
- EAS Docs: https://docs.expo.dev/eas/
- Community Forum: https://forums.expo.dev/

---

**Pronto per consegnare! 🚀**

Domande? Controlla i file di supporto inclusi nel progetto.
