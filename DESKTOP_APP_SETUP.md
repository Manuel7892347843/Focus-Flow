# 🚀 Focus Flow - Desktop App & Web Setup

Questa cartella contiene gli script per avviare Focus Flow come app web o desktop per Windows.

## 🎯 Quick Start - Scegli una opzione:

### ⚡ Opzione 1: Web App (CONSIGLIATO - Più veloce)
**Doppio click su: `OPEN_WEB_APP.bat`**

Questo comando:
- Avvia il server web Expo
- Apre automaticamente nel browser
- Fully responsive e funzionante
- ✅ Perfetto per uso immediato

### 🖥️ Opzione 2: Installer Desktop (Professionale)
**Doppio click su: `BUILD_WINDOWS_INSTALLER.bat`**

Questo comando:
- Esporta l'app web in formato statico
- Crea l'installer NSIS (.exe)
- Crea una versione portable
- I file finali si troveranno in `dist/`

Risultato:
- ✅ `Focus Flow Setup X.X.X.exe` - Installer completo
- ✅ `Focus Flow X.X.X.exe` - Versione portable senza installazione

---

## Cosa contiene

### File di Lancio:
- **OPEN_WEB_APP.bat** - Avvia subito l'app nel browser
- **BUILD_WINDOWS_INSTALLER.bat** - Crea installer professionale

### File di Configurazione:
- **electron/electron.js** - Main process di Electron
- **electron/preload.js** - Security bridge

---

## 📋 Dettagli Installer

L'installer NSIS include:
✅ Installazione guidata
✅ Scelta directory di installazione
✅ Shortcut sul desktop
✅ Shortcut nel Menu Start
✅ Disinstallazione facile

Versione portable:
✅ Single .exe che non richiede installazione
✅ Portabile su USB

---

## ⚠️ Troubleshooting

**❌ Errore: npm non trovato**
- Scarica Node.js: https://nodejs.org/ (versione LTS)
- Reinstalla tutto e prova di nuovo

**❌ Errore: Porta 19000 già in uso**
- Chiudi altri processi web in esecuzione
- O prova a riavviare il PC

**❌ L'app web non si apre**
- Attendi 20-30 secondi per il primo avvio
- Se persiste, prova manualmente: http://localhost:19000

**❌ Build installer fallisce**
- Elimina le cartelle: `dist/` e `node_modules/`
- Esegui: `npm install`
- Riprova il build

---

## 🎨 Comandi Manuali (da PowerShell/CMD)

Se preferisci da terminale:

```bash
# Avviare web app
npm run web

# Esportare web (per desktop)
npm run web:export

# Build desktop app
npm run desktop:build

# Sviluppo con Electron
npm run desktop:dev
```

---

## 📱 Comandi per Mobile

```bash
# iOS
npm run ios

# Android
npm run android
```

---

Sviluppato con ❤️ per Focus Flow - Ottimizza il tuo flusso di lavoro!
