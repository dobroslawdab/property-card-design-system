# 🔧 Storybook Cache Fix

**Problem:** `Cannot find module '@storybook/test'`

## ✅ ROZWIĄZANIE:

### 1. **Pull najnowszych zmian:**
```bash
git pull origin main
```

### 2. **Kompletne wyczyszczenie cache:**
```bash
# Stop Storybook jeśli działa
# Ctrl+C

# Usuń wszystkie pliki cache
rm -rf node_modules
rm -rf package-lock.json
rm -rf .next
rm -rf storybook-static
rm -rf .storybook-out

# Na Windows:
# rmdir /s node_modules
# del package-lock.json
```

### 3. **Reinstalacja dependencies:**
```bash
# Zainstaluj czyste zależności
npm install

# Wyczyść npm cache
npm cache clean --force
```

### 4. **Start Storybook:**
```bash
npm run storybook
```

### 5. **Hard refresh w przeglądarce:**
- **Chrome/Edge:** Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
- **Firefox:** Ctrl+F5 (Windows) / Cmd+Shift+R (Mac)

---

## 🎯 Co zostało naprawione:

- ❌ Usunięto `@storybook/addon-interactions` 
- ❌ Usunięto `@storybook/testing-library`
- ❌ Usunięto import `@storybook/test`
- ✅ Uproszczono stories do podstawowych funkcji
- ✅ Zastąpiono `fn()` prostymi `console.log`

## 🚀 Po naprawieniu:

PropertyCard będzie dostępny w **Design System → PropertyCard** na `http://localhost:6006`

**7 stories gotowych do testowania:**
- Default, WithoutAdditionalArea, LuxuryHouse, CompactHouse, PopularProject, NonInteractive, LoadingState
