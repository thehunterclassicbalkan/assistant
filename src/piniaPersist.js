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
      alert(`Error saving state for store "${key}":`, err)
    }
  })
}

export async function resetIndexDB() {
  try {
    await localforage.clear()
    // console.log('IndexedDB je resetovana.')
  } catch (err) {
    alert('Greška pri resetovanju IndexedDB:', err)
  }
}

// --- DODATAK: global reset + reload svih store-ova ---
export async function resetAndReloadAllStores(pinia) {
  if (!pinia) return

  const savedStates = {}

  // Sačuvaj trenutni state svih store-ova
  for (const [id, store] of pinia._s) {
    savedStates[id] = JSON.parse(JSON.stringify(store.$state))
  }

  // Očisti sve iz localForage
  await localforage.clear()

  // Za svaki store:
  for (const [id, store] of pinia._s) {
    // Setup store: nemaju $reset, pa resetujemo “default” state
    const defaultState = JSON.parse(JSON.stringify(store.$state))
    store.$patch(defaultState)

    // Merge prethodno sačuvanih podataka
    const old = savedStates[id]
    if (old) store.$patch(old)

    // Snimi nazad u localForage
    await localforage.setItem(id, JSON.parse(JSON.stringify(store.$state)))
  }
}