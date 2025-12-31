<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const widget = ref(null)
let intervalId = null

// fiksni redoslijed kanala (koristimo stvarne nazive iz widgeta)
const channelOrder = [
  'Filmska noć',
  'Bleja',
  'Whitehart Island',
  "Logger's Point",
  'Settler Creeks',
  'Timbergold Trails',
  'Redfeather Falls',
  'Whiterime Ridge',
  'Hemmeldal',
  'Val-des-Bois',
  'Hirschfelden',
  'Piccabeen Bay',
  'Bushrangers Run',  // sada normalan naziv
  'Rougarou Bayou',
  '💤💤Afk soba💤💤'           // ako postoji
]

async function fetchWidget() {
  try {
    const res = await fetch('https://discord.com/api/guilds/1084604775556980786/widget.json')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    widget.value = await res.json()
  } catch (err) {
    console.error('Greška pri dohvaćanju Discord widget JSON-a:', err)
  }
}

onMounted(() => {
  fetchWidget()
  intervalId = setInterval(fetchWidget, 10_000)
})
onUnmounted(() => clearInterval(intervalId))

// filtriramo samo kanale koji postoje u JSON-u i u našem popisu
const filteredChannels = computed(() => {
  if (!widget.value?.channels) return []
  return widget.value.channels.filter(ch => channelOrder.includes(ch.name))
})

// sortiramo prema našem fiksnom redoslijedu
const sortedFilteredChannels = computed(() => {
  return filteredChannels.value.slice().sort((a, b) => {
    return channelOrder.indexOf(a.name) - channelOrder.indexOf(b.name)
  })
})

// članovi po channel_id
function membersByChannel(channelId) {
  if (!widget.value?.members) return []
  return widget.value.members.filter(m => m.channel_id === channelId)
}

// Discord invite link
const discordInvite = 'https://discord.gg/2PqHreaPeu'

function joinDiscord() {
  window.open(discordInvite, '_blank')
}
</script>

<template>
  <div class="discord-widget">
    <div class="widget-header">
      <img src="/images/discord-white-icon.webp" />
      <div>
        <h2>{{ widget?.name || "Učitavanje..." }}</h2>
        <p v-if="widget">{{ widget.presence_count }} Members Online</p>
      </div>
    </div>
    <div class="channel-body">
      <div v-for="ch in sortedFilteredChannels" :key="ch.id" class="channel">
        <h3>{{ ch.name }}</h3>

        <ul v-if="membersByChannel(ch.id).length">
          <li v-for="m in membersByChannel(ch.id)" :key="m.id" class="member">
            <img :src="m.avatar_url" :alt="m.username" class="avatar" />
            {{ m.username }}
          </li>
        </ul>
        <button class="join-btn" @click="joinDiscord">Join</button>
        <!-- <p v-else>Nema članova u ovom kanalu.</p> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.discord-widget {
  position: relative;
  background: #2b2d31;
  color: #fff;
  border-radius: 4px;
  width: 350px;
  font-family: sans-serif;
  height: 500px;
  overflow: hidden;
}
.join-btn{
  position: absolute;
  bottom: 20px;
  right: 10px;
  background: #5865f2;
  color: white;
  padding: 7px 25px 6px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
}
.widget-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #5865f2;
  padding: 15px 20px;
}
.widget-header img{
  display: block;
  width: 40px;
  height: 40px;
}
.widget-header h2{
  font-size: 18px;
  font-weight: 900;
}
.channel-body{
  width: 100%;
  height: 410px;
  padding: 20px;
  overflow-y: scroll;
  background: #1e1f22;
}
.channel {
  padding: 0.4rem 0 0.4rem;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}
.member {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0;
}
.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

</style>
