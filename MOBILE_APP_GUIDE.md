# 📱 Focus Flow - Mobile App Guide

Guide complete per installare Focus Flow su iOS e Android.

---

## 🚀 Metodo 1: TEST VELOCE (CONSIGLIATO PER PRIMA)

### ⚡ Usare Expo Go (Subito, senza build!)

**Perfetto per:** Testare l'app in 2 minuti

**Passi:**
1. Scarica **Expo Go** dal App Store (iPhone) o Google Play (Android)
2. Doppio click: `TEST_WITH_EXPO_GO.bat`
3. Scansiona il QR code con il tuo telefono
4. ✅ Focus Flow si apre!

**Vantaggi:**
- Niente build, niente wait
- Test in tempo reale
- Perfetto per lo sviluppo

---

## 📦 Metodo 2: BUILD PRODUCTION (Installer permanente)

### ☁️ EAS Build (Cloud - Consigliato)

**Perfetto per:** Distribuire l'app definitiva

**Passi:**

1. **Prima volta - Setup:**
   ```bash
   eas login
   # Accedi con account Expo (registrati su https://expo.dev se non hai)
   ```

2. **Build l'app:**
   - Doppio click: `BUILD_MOBILE_APP.bat`
   - Scegli il profilo:
     - **1** = APK di test (Android)
     - **2** = APK finale (Android)
     - **3** = IPA finale (iPhone)
     - **4** = Entrambi

3. **Scarica l'app:**
   - Vai su https://expo.dev/dashboard
   - Scarica l'APK o IPA
   - Installa sul tuo telefono

**Vantaggi:**
- ✅ Funziona offline
- ✅ Nessuna dipendenza Expo
- ✅ App vera e propria
- ✅ Distribuibile su app store

**Per Android:**
- Scarica l'APK e installa direttamente sul telefono
- O carica su Google Play Store

**Per iPhone:**
- L'IPA va caricato su TestFlight o App Store
- Richiede account Apple Developer ($99/anno)

---

## 🎯 Opzione 3: Build Locale (Avanzato)

Se vuoi buildare senza internet:

### Android (Local APK)
```bash
npm run android
# Richiede Android Studio/SDK installato
```

### iPhone (Local IPA)
```bash
npm run ios
# Richiede Mac con Xcode
```

---

## 📋 Confronto Metodi

| Metodo | Velocità | Offline | Distribuzione | Setup |
|--------|----------|---------|---------------|-------|
| **Expo Go** | ⚡ 2 min | No | Solo test | Facile |
| **EAS Build** | ⏱️ 10 min | Sì | App vera | Medio |
| **Local Build** | 🐌 30 min | Sì | App vera | Difficile |

---

## 🔐 Prima di Distribuire

Se vuoi pubblicare su App Store/Play Store:

### Android (Google Play):
1. Build l'APK con `BUILD_MOBILE_APP.bat`
2. Crea account Google Play Developer ($25 una volta)
3. Upload l'APK
4. ✅ Live!

### iPhone (App Store):
1. Crea Apple Developer Account ($99/anno)
2. Build con EAS
3. Upload con TestFlight
4. Sottoponi a Apple per review
5. ✅ Live!

---

## ❓ FAQ

**D: Posso fare il build su Windows?**
A: Sì! EAS Build funziona da Windows. Per iPhone su Windows, EAS se ne occupa nel cloud.

**D: Quanto costa EAS?**
A: Il primo build è gratis. Poi 30 minuti/mese gratis, poi paghi se ne usi di più.

**D: Come distribuisco l'app ai miei amici?**
A: 
- Metodo veloce: Invia l'APK via email/Whatsapp (Android)
- Metodo bello: Carica su Play Store/App Store

**D: L'app funziona senza internet?**
A: Sì! Una volta installata, funziona offline grazie ad AsyncStorage

**D: Posso aggiornare l'app dopo averla distribuita?**
A: 
- Con Expo: Sì, OTA updates (ma richiede server)
- Senza Expo: No, deve essere reinstallata

---

## 🎨 Prossimi Step

Dopo il build iniziale:

1. **Testa su telefono**: Verifica che funziona
2. **Raccogli feedback**: Chiedi ai tuoi amici
3. **Migliora**: Aggiungi features o fix bug
4. **Ridistribuisci**: Ripeti il build

---

## 📞 Supporto

- Documentazione Expo: https://docs.expo.dev/
- EAS Docs: https://docs.expo.dev/eas/
- Community: https://forums.expo.dev/

---

Buona fortuna con Focus Flow! 🚀

Domande? Hai tutto quello che serve per iniziare!
