# 📱 Focus Flow - PWA (Progressive Web App)

## Cos'è una PWA?

Una **PWA è come un'app mobile**, ma:
- ✅ Niente account App Store/Play Store
- ✅ Installabile direttamente dal telefono
- ✅ Funziona offline completamente
- ✅ Occupai poco spazio
- ✅ Creabile in pochi minuti

---

## 🚀 Come Installare sul Telefono

### Android:
1. **Doppio click**: `START_PWA.bat`
2. Apri il telefono
3. Accedi a: `http://localhost:8000` (dal PC) o `http://[IP_DEL_PC]:8000`
4. Vedi "Focus Flow"
5. Tocca il **menu del browser** (3 puntini)
6. Seleziona **"Installa app"** o **"Add to Home Screen"**
7. ✅ Fatto! Ora è nel menu del telefono come app vera!

### iPhone:
1. **Doppio click**: `START_PWA.bat`
2. Apri Safari sul telefono
3. Accedi a: `http://localhost:8000` (dal PC) o `http://[IP_DEL_PC]:8000`
4. Tocca il **menu di condivisione** (quadrato con freccia)
5. Seleziona **"Aggiungi a Home Screen"**
6. ✅ Fatto! L'app è nel menu come app vera!

---

## 🎯 Cosa Fare se Non Trovi il Menu

### Android:
- Tocca i **3 puntini verticali** in alto a destra
- Cerca "Installa app" o "Install app"

### iPhone:
- Tocca il **quadrato con la freccia** in basso
- Scorri e seleziona "Aggiungi a Home Screen"

---

## 🌐 Indirizzo Locale del PC

Se sei da telefono diverso/altro pc:

1. **Dal PC aperto**: Apri PowerShell
2. Digita: `ipconfig`
3. Cerca "IPv4 Address" (es: 192.168.1.100)
4. **Dal telefono**: Accedi a `http://[IP]:8000`

Esempio:
```
PC IP: 192.168.1.100
Telefono accede: http://192.168.1.100:8000
```

---

## ✨ Vantaggi PWA vs APK

| Aspetto | PWA | APK |
|---------|-----|-----|
| Installazione | 30 secondi | 5 minuti |
| Spazio occupato | 1MB | 50MB |
| Offline | ✓ Completo | ✓ Completo |
| App Store | ✗ Non serve | ✓ Serve |
| Aggiornamenti | Automatici | Manuale |

---

## 📥 Condividi con Amici

### Opzione 1: Link locale
```
http://[TUO_IP]:8000
```
Chiunque sulla tua rete WiFi può accedere e installare!

### Opzione 2: Deploy Online (Gratis)
Se vuoi condividere senza limitazioni:
1. Crea account su: **Netlify** (gratis)
2. Carica il folder `public/`
3. Ricevi un link pubblico (es: https://focus-flow.netlify.app)
4. Chiunque nel mondo può installare!

---

## 🔧 Personalizzazione

### Cambia Colore:
- File: `public/manifest.json`
- Cambia `"theme_color": "#667eea"`
- Rideploy

### Cambia Icona:
- File: `public/manifest.json`
- Cambia il contenuto SVG negli `"icons"`
- Rideploy

### Cambia Nome:
- File: `public/manifest.json`
- Cambia `"name": "Focus Flow"`
- Rideploy

---

## ❓ FAQ

**D: Funziona senza internet?**
A: Sì! Una volta installata, funziona offline al 100%. I dati si salvano nel telefono.

**D: Come installo se sono su Linux/Mac?**
A: Uguale! Stessi step. Visita l'indirizzo locale con il browser del telefono.

**D: Posso distribuirla pubblicamente?**
A: Sì! Deploya su Netlify/Vercel gratis e condividi il link.

**D: È ufficiale come app store?**
A: No, è un'alternativa. Perfetta per progetti personali.

**D: Posso metterla su Google Play?**
A: Sì, ma è più complicato. Consigliato dopo PWA.

**D: I dati restano nel telefono?**
A: Sì! Sono salvati in AsyncStorage. Se disinstalli l'app, i dati si perdono.

---

## 🎓 Consegna al Professore

**Quello che dirai:**

> "Ho creato una Progressive Web App (PWA) usando React Native e Expo. 
> È installabile come app mobile dal telefono senza App Store.
> Funziona completamente offline, i dati sono salvati localmente.
> È un'alternativa moderna agli APK tradizionali."

---

## 📱 Prossimi Step

1. Avvia: `START_PWA.bat`
2. Accedi da telefono
3. Installa come app
4. Usa offline!
5. Consegna al professore!

---

**Pronto! La tua app mobile è pronta! 🚀**
