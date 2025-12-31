// plugins/piniaPersist.js
import localforage from 'localforage'

export function piniaPersist({ store }) {
  const key = store.$id // koristi ID store-a kao ključ u bazi

  // --- Učitavanje iz localForage pri inicijalizaciji ---
  const load = async () => {
    try {
      const savedState = await localforage.getItem(key)
      if (savedState) {
        store.$patch(savedState) // update reactive state bez greške
      }
    } catch (err) {
      console.error(`Error loading state for store "${key}":`, err)
    }
  }

  load() // odmah pokreni učitavanje

  // --- Watch: automatski snima promene ---
  store.$subscribe(async () => {
    try {
      // Napravi “siguran” objekt bez funkcija, ref-ova i proxy-ja
      const safeState = JSON.parse(JSON.stringify(store.$state))
      await localforage.setItem(key, safeState)
    } catch (err) {
      console.error(`Error saving state for store "${key}":`, err)
    }
  })
}

// --- DODATAK: global reset + reload svih store-ova ---
export function resetAndReloadAllStores(pinia) {
  if (!pinia) return

  // 1️⃣ Sačuvaj trenutni state svih store-ova
  const savedStates = {}
  for (const [id, store] of pinia._s) {
    savedStates[id] = JSON.parse(JSON.stringify(store.$state))
  }

  // 2️⃣ Očisti localforage
  localforage.clear()

  // 3️⃣ Resetuj svaki store i spoji stare podatke ako postoje
  for (const [id, store] of pinia._s) {
    store.$reset?.()
    const old = savedStates[id]
    if (old) store.$patch(old)

    // 4️⃣ Snimi nazad kroz isti mehanizam piniaPersist
    localforage.setItem(id, JSON.parse(JSON.stringify(store.$state)))
  }
}