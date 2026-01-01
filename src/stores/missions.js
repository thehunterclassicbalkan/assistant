import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStoreMissions = defineStore('missions', () => {
  const missions = ref([
    {
      id: "m1",
      name: "Alpine Ibex Missions",
      displayName: "Alpine Ibex",
      animalID: "an1",
      filterArray: ["r8"],
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/alpine_ibex.png",
      bgURL: "https://i.postimg.cc/PJDBkpt4/d03d6303-7514-4422-9301-8d7f6f86172a.jpg",
      missionsList: [
        {
          missionID: "m1-1",
          name: "Above all Summits, it is Calm",
          earnings: 100,
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot an Alpine Ibex"
          ],
        },
        {
          missionID: "m1-2",
          name: "The Former Bear Biologist Who Stares at Goats",
          earnings: 200,
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID droppings of an Alpine Ibex"
          ],
        },
        {
          missionID: "m1-3",
          name: "Joy of Life",
          earnings: 300,
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Alpine Ibex"
          ],
        },
        {
          missionID: "m1-4",
          name: "Mountain Hooligans",
          earnings: 400,
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 female Alpine Ibex at 100% Harvest Value in the same hunt"
          ],
        },
        {
          missionID: "m1-5",
          name: "The Sound of a Goat in a Room",
          earnings: 600,
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Register an audio clue of an Alpine Ibex"
          ],
        },
        {
          missionID: "m1-6",
          name: "It's Oh So Quiet",
          earnings: 800,
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Register an audio clue of ANY animal except an Alpine Ibex",
            "Harvest an Alpine Ibex in the same hunt to blame it for making the noise"
          ],
        },
        {
          missionID: "m1-7",
          name: "Blame Science",
          earnings: 1000,
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w28"],
              text: "Require 8x57 IS K98k Bolt Action Rifle"
            },
          ],
          hint: {
            text: "The distances must be reached in the order they are listed. Even if your first kill is under 30 meter, the 60 meter objective will be completed",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Alpine Ibex from a maximum distance of 60 meter (approx. 197 ft.) using a 8x57 IS K98k Bolt Action Rifle",
            "Harvest another Alpine Ibex from a maximum distance of 50 meter (approx. 164 ft.) using a 8x57 IS K98k Bolt Action Rifle",
            "Harvest another Alpine Ibex from a maximum distance of 40 meter (approx. 131 ft.) using a 8x57 IS K98k Bolt Action Rifle",
            "Harvest another Alpine Ibex from a maximum distance of 30 meter (approx. 98 ft.) using a 8x57 IS K98k Bolt Action Rifle",
          ],
        },
        {
          missionID: "m1-8",
          name: "Goats Blood",
          earnings: 1200,
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w59", "w60"],
              text: "Require to be killed with tracer arrow"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 Alpine Ibex with a tracer arrow",
            "ID a blood trail of an Alpine Ibex",
            "ID another blood trail of an Alpine Ibex",
          ],
        },
        {
          missionID: "m1-9",
          name: "Again With the Bears",
          earnings: 1800,
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w49"],
              text: "Inline muzzleloader",
            }
          ],
          hint: {
            text: "It is only required to shoot one bear to complete this mission",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 7 Brown Bear in Val-des-Bois using an Inline Muzzleloader in the same hunt",
          ],
        },
        {
          missionID: "m1-10",
          name: "Taking Down the Bearkiller Goat",
          earnings: 3600,
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/3/35/Devils_teapot.png",
            link: ""
          },
          goals: [
            "Harvest the last Bearkiller Alpine Ibex at the Devil's Teapot in Val-des-Bois (X: 3078, Y: -2169)",
          ],
        },
      ],
    },
    {
      id: "m2",
      name: "Arctic Fox Missions",
      displayName: "Arctic Fox",
      animalID: "an3",
      filterArray: ["r10"],
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/arctic_fox.png",
      bgURL: "https://i.postimg.cc/SsCrSWMJ/fa6113a6-3064-45df-89c9-a14cfb9c251d.jpg",
      missionsList: [
        {
          missionID: "m2-1",
          name: "Skittish",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify 3 sets of tracks of an Arctic Fox",
            "Identify the droppings of an Arctic Fox"
          ],
        },
        {
          missionID: "m2-2",
          name: "Seeing is Believing",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify the call of an Arctic Fox",
            "Spot an Arctic Fox in the same hunt",
            "Harvest an Arctic Fox in the same hunt"
          ],
        },
        {
          missionID: "m2-3",
          name: "Winter Pairs",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot and harvest a female Arctic Fox in the same hunt",
            "Spot and harvest a male Arctic Fox in the same hunt",
          ],
        },
        {
          missionID: "m2-4",
          name: "North vs South",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Kosatka Harbor is the Point of Interest (! sign) north of Danforth's Refuge.Tatanka Hot Springs is the Point of Interest (! sign) north of Afterland Lodge.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Arctic Fox east of Kosatka Harbor",
            "Harvest an Arctic Fox northeast of Tatanka Hot Springs"
          ],
        },
        {
          missionID: "m2-5",
          name: "Oblivious Bang",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Arctic Foxes at a distance of more than 100 meters (approx. 329 ft.) using a .243 Bolt Action Rifle"
          ],
        },
        {
          missionID: "m2-6",
          name: "Close Up Shot",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Male Arctic Foxes from a maximum distance of 30 meter (approx. 98.5 ft.)"
          ],
        },
        {
          missionID: "m2-7",
          name: "2 for 1",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 5 Arctic Foxes using buckshot in the same hunt"
          ],
        },
        {
          missionID: "m2-8",
          name: "The Big Dog",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 male Arctic Foxes weighing at least 6kg (approx. 13.3 lbs.)"
          ],
        },
        {
          missionID: "m2-9",
          name: "Shivers",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq2"],
              text: "Tripodstand is required"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Arctic Fox using any permitted weapon but without a scope from at least 40 meter (approx. 132 ft.) using a Tripod Stand",
            "Harvest an Arctic Fox using any permitted weapon but without a scope from at least 60 meter (approx. 197 ft.) using a Tripod Stand",
            "Harvest an Arctic Fox using any permitted weapon but without a scope from at least 80 meter (approx. 263 ft.) using a Tripod Stand",
          ],
        },
        {
          missionID: "m2-10",
          name: "Flush",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require:[
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58"],
              text: "Require any bow",
            },
            {
              weapons: ["w59", "w60", "w61"],
              text: "Crosbow pistol or any crossbow"
            },
            {
              weapons: ["w42"],
              text: "357 revolver"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Arctic Fox with any bow",
            "Harvest an Arctic Fox with any crossbow",
            "Harvest an Arctic Fox with buckshot",
            "Harvest an Arctic Fox with any .243 or .223 rifle",
            "Harvest an Arctic Fox with any permitted revolver",
          ],
        },
      ],
    },
    {
      id: "m3",
      name: "Axis Deer Missions",
      displayName: "Axis Deer",
      animalID: "an4",
      filterArray: ["r9"],
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/axis_deer.png",
      bgURL: "https://i.postimg.cc/D0mwQcPz/1f1b5a95-dc47-4c46-a519-adf8f610b606.jpg",
      missionsList: [
        {
          missionID: "m3-1",
          name: "Source the Herd",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID 3 clues from different Deer (footprints, audio or droppings)",
          ],
        },
        {
          missionID: "m3-2",
          name: "Necropsy",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID droppings from an Axis Deer",
            "Spot an Axis Deer",
            "Harvest an Axis Deer"
          ],
        },
        {
          missionID: "m3-3",
          name: "Matching Pair",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Axis Deer",
            "Harvest a male Axis Deer",
          ],
        },
        {
          missionID: "m3-4",
          name: "Prime Sample",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Axis Deer scoring more than 130",
          ],
        },
        {
          missionID: "m3-5",
          name: "Trophy Integrity",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Axis Deer with a single shot using any .270 or .243 rifle"
          ],
        },
        {
          missionID: "m3-6",
          name: "The Shotgun Experiment",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Axis Deer with buckshot",
            "Harvest a male Axis Deer with a slug"
          ],
        },
        {
          missionID: "m3-7",
          name: "Common Ground",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Male is lot darker while female is brighter then regular which is more brown",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Dark male Axis Deer",
            "Harvest an Orange female Axis Deer"
          ],
        },
        {
          missionID: "m3-8",
          name: "Skittish",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58"],
              text: "Require any bow",
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked Axis Deer with any bow (no crossbows) from less than 25m (approx. 82 ft.)",
            "Harvest an Axis Deer with any bow (no crossbows) from more than 25m (approx. 82 ft.)"
          ],
        },
        {
          missionID: "m3-9",
          name: "Taking Matters in Hand",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w47"],
              text: "Require 10mm",
            },
            {
              weapons: ["w42", "w43", "w46"],
              text: "Require any bow",
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Axis Deer with 10mm ammo from less than 30m. (approx. 98 ft.)",
            "Harvest an Axis Deer with a scoped handgun from more than 40m (approx. 131ft.)",
          ],
        },
        {
          missionID: "m3-10",
          name: "The Beast of Bushranger Run",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w1", "w2"],
              text: "Bilo 223 ili 270"
            },
            {
              weapons: ["w51", "w52", "w53", "w54"],
              text: "Bilo koji compund bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Axis Deer weighing more than 95 kg (approx. 209 lbs.) with a shot to the heart or lungs. Other organs may be hit",
          ],
        },
      ],
    },
    {
      id: "m4",
      name: "Banteg Missions",
      displayName: "Banteng",
      animalID: "an5",
      filterArray: ["r12"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/banteng.png",
      bgURL: "https://i.postimg.cc/BQQxkWM8/bc9b968c-1453-40ca-ae01-1cd5d929f8f7.jpg",
      missionsList: [
        {
          missionID: "m4-1",
          name: "Source of the Problem",
          earnings: 100,
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Banteng"
          ],
        },
        {
          missionID: "m4-2",
          name: "Retribution Will Follow",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w8", "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31", "w13", "w22", "w15", "w28",
                "w16", "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .300 Bolt Action Rifle,
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                8x57 IS K98k Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Banteng"
          ],
        },
        {
          missionID: "m4-3",
          name: "Tipping the Scales",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w8", "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31", "w13", "w22", "w15", "w28",
                "w16", "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .300 Bolt Action Rifle,
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                8x57 IS K98k Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Banteng with a weight of at least 600 kg (approx. 1323 lbs)",
            "Harvest another Banteng but with a weight of at least 700 kg (approx. 1543 lbs)",
          ],
        },
        {
          missionID: "m4-4",
          name: "Rumors",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w8", "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31", "w13", "w22", "w15", "w28",
                "w16", "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .300 Bolt Action Rifle,
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                8x57 IS K98k Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/c0/Pb_lighthouse.png",
            link: ""
          },
          goals: [
            "Visit Saint Pauli's Lighthouse (X: 7.553, Y: 8.725) in Piccabeen Bay",
            "Then, harvest an unspooked Banteng with a score of 135 or higher in the same hunt"
          ],
        },
        {
          missionID: "m4-5",
          name: "Revenge Will be Swift",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w8", "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31", "w13", "w22", "w15", "w28",
                "w16", "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .300 Bolt Action Rifle,
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                8x57 IS K98k Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "Shoot one banteng but do not harvest it. Shoot another one, harvest it and return to the first one to harvest within 10 minutes",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest two Banteng within 10 minutes of each harvest"
          ],
        },
        {
          missionID: "m4-6",
          name: "Restoring Peace and Order",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54"],
              text: "Require any compound bow"
            },
          ],
          hint: {
            text: "Travel through the tunnel from north to south. Have your bow ready to shoot immediately as banteng could be standing right there when you arrive. For the 30m shot you can find banteng on the hillsides with no objects between you and them. Try this on females only. The males will always spook",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Banteng with 100% Harvest Value using any Compound Bow",
            "Harvest another Banteng with 100% Harvest Value using any Compound Bow",
            "Lastly, harvest another Banteng with 100% Harvest Value from a distance of 30 meters (Approx. 98 feet) or further using any Compound Bow"
          ],
        },
        {
          missionID: "m4-7",
          name: "High on Caffeine",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w8", "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31", "w13", "w22", "w15", "w28",
                "w16", "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .300 Bolt Action Rifle,
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                8x57 IS K98k Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Then, harvest another Banteng from a distance of 70 meters (Approx. 230 feet) or further with one shot",
          ],
        },
        {
          missionID: "m4-8",
          name: "The High Ground and Low Ground",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w8", "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31", "w13", "w22", "w15", "w28",
                "w16", "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .300 Bolt Action Rifle,
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                8x57 IS K98k Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            },
            {
              equipments: ["eq2", "eq3"],
              text: "Require to be killed from a Tree Stand or Tripod Stand"
            },
            {
              equipments: ["eq1"],
              text: "Require to be killed from a Ground Blind"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked Banteng from a Tree Stand or Tripod Stand",
            "Harvest an unspooked Banteng from a Ground Blind",
          ],
        },
        {
          missionID: "m4-9",
          name: "Hired Mercenaries",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w8", "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31", "w13", "w22", "w15", "w28",
                "w16", "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .300 Bolt Action Rifle,
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                8x57 IS K98k Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "First, harvest a charging Water Buffalo from any distance under 15 meters (Approx. 49 feet)",
            "Then, harvest another charging Water Buffalo from any distance under 15 meters (Approx. 49 feet) in the same hunt",
          ],
        },
        {
          missionID: "m4-10",
          name: "Boss Banteng",
          earnings: "3600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w8", "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31", "w13", "w22", "w15", "w28",
                "w16", "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .300 Bolt Action Rifle,
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                8x57 IS K98k Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/1/12/Pb_boss_banteng.png",
            link: ""
          },
          goals: [
            "Harvest the male Boss Banteng by the easternmost island in the swamps of Piccabeen Bay (X: 7.539, Y: 8.299) with one shot",
          ],
        },
      ],
    },
    {
      id: "m5",
      name: "Bighorn Sheep Missions",
      displayName: "Bighorn Sheep",
      animalID: "an6",
      filterArray: ["r11"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/bighorn_sheep.png",
      bgURL: "https://i.postimg.cc/6pvRbSnN/v5B8MaFi.jpg",
      missionsList: [
        {
          missionID: "m5-1",
          name: "Scoping the Sickness",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Bighorn Sheep"
          ],
        },
        {
          missionID: "m5-2",
          name: "Foraging for Feces",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID droppings from a Bighorn Sheep",
            "ID droppings from another Bighorn Sheep in the same hunt",
            "ID droppings from another Bighorn Sheep in the same hunt"
          ],
        },
        {
          missionID: "m5-3",
          name: "Confirm the Diagnosis",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Bighorn Sheep",
          ],
        },
        {
          missionID: "m5-4",
          name: "Running Rampant",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60"],
              text: "Require any bow or crossbow",
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Bighorn Sheep with a lung shot using a bow or crossbow from under 30 meters (approx. 98 ft)",
            "Harvest another Bighorn Sheep with a lung shot using a bow or crossbow from under 30 meters (approx. 98 ft)"
          ],
        },
        {
          missionID: "m5-5",
          name: "Ewes in Trouble",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Bighorn Sheep scoring over 40 points",
            "Harvest one more female Bighorn Sheep scoring over 40 points"
          ],
        },
        {
          missionID: "m5-6",
          name: "Grabbing the Disease by the Horns",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60"],
              text: "Require any bow or crossbow",
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Bighorn Sheep using a bow or crossbow with 100% Harvest Value",
            "Harvest another male Bighorn Sheep using a bow or crossbow with 100% Harvest Value",
            "Harvest another male Bighorn Sheep using a bow or crossbow with 100% Harvest Value"
          ],
        },
        {
          missionID: "m5-7",
          name: "Out of Her Misery",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Bighorn Sheep weighing under 25kg (approx. 55 lbs) with a shot over 80 meters",
          ],
        },
        {
          missionID: "m5-8",
          name: "The Ram Stops Here",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w13", "w22"],
              text: "Use 7mm Magnum Break Action Rifle or 7mm Magnum Bullpup Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Bighorn Sheep scoring over 150 points using 7mm Magnum ammunition"
          ],
        },
        {
          missionID: "m5-9",
          name: "Tying up Loose Ewes",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Bighorn Sheep with a shot through the heart. Other organs may be hit",
            "Harvest another Bighorn Sheep with a shot through the heart. Other organs may be hit",
          ],
        },
        {
          missionID: "m5-10",
          name: "Culling for the Cure",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Bighorn Sheep",
            "Harvest another Bighorn Sheep in the same hunt",
            "Harvest another Bighorn Sheep in the same hunt"
          ],
        },
      ],
    },
    {
      id: "m6",
      name: "Bison Missions",
      displayName: "Bison",
      animalID: "an7",
      filterArray: ["r10"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/bison.png",
      bgURL: "https://i.postimg.cc/SsCrSWMJ/fa6113a6-3064-45df-89c9-a14cfb9c251d.jpg",
      missionsList: [
        {
          missionID: "m6-1",
          name: "Off On the Wrong Foot",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Bison"
          ],
        },
        {
          missionID: "m6-2",
          name: "A History Lesson",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID the tracks of a Bison",
            "ID the tracks of a Bison",
            "ID the tracks of a Bison"
          ],
        },
        {
          missionID: "m6-3",
          name: "The Man Who Saved the Buffalo",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID the droppings of a male Bison",
            "ID the droppings of a female Bison",
          ],
        },
        {
          missionID: "m6-4",
          name: "Genetic Issues",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w8", "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31", "w13", "w22", "w15", "w28",
                "w16", "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .300 Bolt Action Rifle,
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                8x57 IS K98k Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Bison"
          ],
        },
        {
          missionID: "m6-5",
          name: "Bad Blood",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w8", "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31", "w13", "w22", "w15", "w28",
                "w16", "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .300 Bolt Action Rifle,
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                8x57 IS K98k Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Bison at 100% Harvest Value"
          ],
        },
        {
          missionID: "m6-6",
          name: "History Repeats Itself",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w49"],
              text: "Require .50 Inline Muzzleloader",
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Bison using the inline muzzleloader loaded with a .50 Conical Bullet",
            "Harvest another male Bison using the inline muzzleloader loaded with a .50 Conical Bullet in the same hunt",
            "Harvest another male Bison using the inline muzzleloader loaded with a .50 Conical Bullet in the same hunt"
          ],
        },
        {
          missionID: "m6-7",
          name: "Plague-ridden",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [],
              text: "Use .45-70 Government Lever Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify a call from a female Bison",
            "Spot a female Bison in the same hunt",
            "Harvest a female Bison weighing at least 450kg (approx. 992 lbs.) in the same hunt using any .45-70 Government Lever Action Rifle"
          ],
        },
        {
          missionID: "m6-8",
          name: "Dirty History",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56"],
              text: "Use recurve bow or heavy recurve bow"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Bison using any Recurve Bow"
          ],
        },
        {
          missionID: "m6-9",
          name: "Viva la Revolution",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w8", "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31", "w13", "w22", "w15", "w28",
                "w16", "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .300 Bolt Action Rifle,
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                8x57 IS K98k Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Bison scoring at least 110",
            "Harvest another male Bison scoring at least 110",
          ],
        },
        {
          missionID: "m6-10",
          name: "Challenging Buffalo Bill",
          earnings: "3600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w45"],
              text: "Use .454 revolver"
            }
          ],
          hint: {
            text: "This is a very particular bison that spawns at the given coordinates. It is recommended to either move there very quickly, or start at a tent nearby. Pick up the tracks and follow the bull. If the mission does not complete shoot others or start over",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/1/1e/Bison_mission_10.png",
            link: ""
          },
          goals: [
            "Harvest the male Bison 'Buffalo Bill' last seen at the 'Windy Hill' (X: -6464, Y: -10096) using any permitted revolver without a scope",
          ],
        },
      ],
    },
    {
      id: "m7",
      name: "Black Bear Missions",
      displayName: "Black Bear",
      animalID: "an8",
      filterArray: ["r3", "r4", "r7"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/black_bear.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "m7-1",
          name: "What We Do For Science",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "Despite the description pointing to Redfeather Falls, you can complete this mission in any reserve that holds Black Bears",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID a droppings track from a Black Bear in Redfeather Falls",
            "ID a droppings track from another Black Bear in Redfeather Falls in the same hunt",
            "ID a droppings track from another Black Bear in Redfeather Falls in the same hunt"
          ],
        },
        {
          missionID: "m7-2",
          name: "Mercy Cull",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Any male Black Bear will complete this mission. It is not a specific animal or in a specific place",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest the infected male Black Bear in Redfeather Falls",
          ],
        },
        {
          missionID: "m7-3",
          name: "Coat of Many Colors",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Common colored Black Bear in Redfeather Falls",
            "Spot a Common colored Black Bear in Redfeather Falls",
            "Spot a Chocolate colored Black Bear in Redfeather Falls",
            "Spot a Chocolate colored Black Bear in Redfeather Falls",
            "Spot a Blonde colored Black Bear in Redfeather Falls",
            "Spot a Cinnamon colored Black Bear in Redfeather Falls",
            "Spot a Glacier colored Black Bear in Redfeather Falls"
          ],
        },
        {
          missionID: "m7-4",
          name: "Swamp Thing",
          earnings: "400",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "The bear is on 'Bearmuda Island' just north of the shipwreck.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/a/af/Swamp_thing_location.png",
            link: ""
          },
          goals: [
            "Harvest a Black Bear on the mysterious island (x: -13582, y: -3293) west of the swamp in Redfeather Falls"
          ],
        },
        {
          missionID: "m7-5",
          name: "Bear Hug",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Black Bear in Redfeather Falls weighing less than 100kg (approx. 220lbs.) from less than 30m (approx. 99ft.)"
          ],
        },
        {
          missionID: "m7-6",
          name: "Aftershock",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w8"],
              text: "Require .300 Bolt Action Rifle",
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Black Bears in Redfeather Falls scoring at least 18 using a .300 Rifle",
            "Harvest a Black Bear in Redfeather Falls scoring at least 18 using a .300 Rifle",
            "Harvest a Black Bear in Redfeather Falls scoring at least 18 using a .300 Rifle"
          ],
        },
        {
          missionID: "m7-7",
          name: "Lead N Fur",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Black Bear scoring at least 20 using a slug from more than 50m (approx. 164ft.) in Redfeather Falls",
          ],
        },
        {
          missionID: "m7-8",
          name: "Bloodlust",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "All four bears must be shot in the same hunt.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Black Bear in Redfeather Falls in same hunt",
            "Harvest a Black Bear in Redfeather Falls in same hunt",
            "Harvest a Black Bear in Redfeather Falls in same hunt",
            "Harvest a Black Bear in Redfeather Falls in same hunt"
          ],
        },
        {
          missionID: "m7-9",
          name: "Getting Closer",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51"],
              text: 'Use Compound bow Snakebite'
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Black Bear in Redfeather Falls weighing more than 200kg (approx. 441lbs.) using the Snakebite Compound Bow",
          ],
        },
        {
          missionID: "m7-10",
          name: "Illegally Blonde",
          earnings: "3600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "The bear will spawn and roam around. Consider placing a tent nearby, so you should find its tracks soon enough. The location where you end up shooting the bear does not matter as long as you harvest the correct blonde black bear",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/67/Illegally_blonde_location.png",
            link: ""
          },
          goals: [
            "Harvest the angry blonde Black Bear in the northwest corner (x: -12614, y: -6282) of Redfeather Falls. Keep in mind that the bear will be roaming approx. a 150m (492 ft) radius around the area",
          ],
        },
      ],
    },
    {
      id: "m8",
      name: "Blacktail Deer Missions",
      displayName: "Blacktail Deer",
      animalID: "an9",
      filterArray: ["r1", "r4"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/blacktail_deer.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "m8-1",
          name: "Breaking Ice",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Blacktail Deer"
          ],
        },
        {
          missionID: "m8-2",
          name: "Dying To Impress",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w34"],
              text: "Use 12 GA Pump Action Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Male Blacktail Deer with the Pump-Action Shotgun",
          ],
        },
        {
          missionID: "m8-3",
          name: "By The Book",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "All objectives must be completed during one expedition.",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID 3 tracks from a Blacktail Deer",
            "Spot a Blacktail Deer in same hunt",
            "Harvest a Blacktail Deer in same hunt",
          ],
        },
        {
          missionID: "m8-4",
          name: "A Long Distance Relation",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w9"],
              text: "Use .308 Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Male Blacktail Deer from more than 150m using the .308 Anschütz Rifle"
          ],
        },
        {
          missionID: "m8-5",
          name: "Anywhere But Here",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Blacktail Deer scoring at least 120 from a distance of less than 30 m"
          ],
        },
        {
          missionID: "m8-6",
          name: "Making Nice",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w48"],
              text: "Use .50 Cap Lock Muzzleloader",
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Male Blacktail Deer With at least 10 typical points using the .50 Cap Lock Muzzleloader"
          ],
        },
        {
          missionID: "m8-7",
          name: "Getting Serious",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/48/BTMissionSeven.png",
            link: ""
          },
          goals: [
            "Harvest a Blacktail Deer from Tower 8 on Whitehart Island",
            "Harvest a Blacktail Deer from Tower 6 on Whitehart Island during the same hunt",
          ],
        },
        {
          missionID: "m8-8",
          name: "Moving In",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq3"],
              text: 'You must use Treestand'
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Male Blacktail Deer from a Treestand",
            "Harvest a Male Blacktail Deer from a Treestand",
            "Harvest a Male Blacktail Deer from a Treestand"
          ],
        },
        {
          missionID: "m8-9",
          name: "12 Counts of Affection",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 12 Blacktail Deers in the same hunt",
          ],
        },
        {
          missionID: "m8-10",
          name: "Tying Up",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56"],
              text: "You need to use Heavy recurve or recurve bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Male Blacktail Deer scoring more than 135 with any Recurve Bow",
          ],
        },
      ],
    },
    {
      id: "m9",
      name: "Bobcat Missions",
      displayName: "Bobcat",
      animalID: "an10",
      filterArray: ["r1", "r2", "r3", "r7"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/bobcat.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "m9-1",
          name: "Every Mewment Counts",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "Possible location: Southern island, there is an open field just north of the narrow part. Mount a treestand and call. When a bobcat appears, spot it. Then shoot it, but read its tracks first to complete the mission. Do not harvest it yet.",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID Bobcat tracks or droppings in Whitehart Island",
            "Spot a Bobcat in Whitehart Island"
          ],
        },
        {
          missionID: "m9-2",
          name: "Can Somebody Paw-lease Give This Man a Bobcat?",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Activate this mission before harvesting the bobcat from above.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Bobcat in Whitehart Island",
          ],
        },
        {
          missionID: "m9-3",
          name: "Meow-sicians in Logger's Point",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "It is possible to fast travel to these campsites. It is however advisable to walk and get that call on the way.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/be/Bobcat_mission_lp_campsites.png",
            link: ""
          },
          goals: [
            "Visit the Inland Campsite in Logger's Point",
            "Visit the Campsite in Logger's Point",
            "At any time, ID a call from a Bobcat in Logger's Point",
          ],
        },
        {
          missionID: "m9-4",
          name: "Find All the Purrpetrators",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Bobcat using any buckshot in Logger's Point",
            "Harvest another Bobcat using any buckshot in Logger's Point"
          ],
        },
        {
          missionID: "m9-5",
          name: "In Pursuit of Purrfection",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked male Bobcat without using any type of buckshot at 100% Harvest Value in Logger's Point in the same hunt",
            "Harvest an unspooked female Bobcat without using any type of buckshot at 100% Harvest Value in Logger's Point in the same hunt"
          ],
        },
        {
          missionID: "m9-6",
          name: "Cathletic Cats by the Creeks",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq3"],
              text: "You must use Tree Stand",
            },
          ],
          hint: {
            text: "Look north of the Highland lodge. When you have a sign of a bobcat (call, nearby tracks), mount the treestand and call.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Locate 3 Bobcat tracks from the same animal in Settler Creeks",
            "Harvest a Bobcat in Settler Creeks while using a Tree Stand with a single shot"
          ],
        },
        {
          missionID: "m9-7",
          name: "Everything Looking Paw-sitive",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq3"],
              text: "You must use Tree Stand",
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Bobcat with a score of 7 or higher while using a Tree Stand in Settler Creeks",
            "Harvest a Bobcat with a weight of 16 kg (Approx. 32 lbs) or lower while using a Tree Stand in Settler Creeks",
          ],
        },
        {
          missionID: "m9-8",
          name: "Endless Paw-sibilities",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Avoid the swamps. There are less cats and stalking is more difficult.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/d/d2/Bobcat_mission_rb_riverhead_landing.png",
            link: ""
          },
          goals: [
            "Head over to Riverhead Landing in Rougarou Bayou",
            "Once at Riverhead Landing, harvest an unspooked Bobcat with a score of 8 or lower in Rougarou Bayou",
            "Once at Riverhead Landing, harvest an unspooked Bobcat with a score of 8 or higher in Rougarou Bayou"
          ],
        },
        {
          missionID: "m9-9",
          name: "Run, Bobcat, Run!",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Use the middle tower of Logger's Point. Call a bobcat in. You can shoot it fleeing in all directions from there. Use the .243 Bolt Action Rifle. Slightly lead the shot.Players reported that it is already sufficient if the cat only moves.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Bobcat with a score of 8 or higher at 100% Harvest Value while it's fleeing",
          ],
        },
        {
          missionID: "m9-10",
          name: "The El Bobogato Ceremony",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Do not collect the first shot bobcat but rather wait until you have shot a second. Then harvest both within 5 minutes.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest two Bobcats within 5 minutes of each harvest",
          ],
        },
      ],
    },
    {
      id: "m10",
      name: "Brown Bear Missions",
      displayName: "Brown Bear",
      animalID: "an11",
      filterArray: ["r6", "r8"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/brown_bear.png",
      bgURL: "https://i.postimg.cc/1RCNdqkM/output.jpg",
      missionsList: [
        {
          missionID: "m10-1",
          name: "The Comeback Kid",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID tracks from a Brown Bear",
            "ID tracks from another Brown Bear in the same outing",
            "ID tracks from another Brown Bear in the same outing"
          ],
        },
        {
          missionID: "m10-2",
          name: "Head Count",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Brown Bear",
            "Spot a Brown Bear",
            "Spot a Brown Bear"
          ],
        },
        {
          missionID: "m10-3",
          name: "Southpaw",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Brown Bear"
          ],
        },
        {
          missionID: "m10-4",
          name: "Heavy Hitter",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Brown Bear weighing at least 300 kg (approx. 661 lbs)"
          ],
        },
        {
          missionID: "m10-5",
          name: "Slugger",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w34"],
              text: "You must use 12 GA Pump Action Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Brown Bear using a 12 GA Pump Action Shotgun loaded with slugs",
            "Harvest a Brown Bear using a 12 GA Pump Action Shotgun loaded with slugs during the same hunt"
          ],
        },
        {
          missionID: "m10-6",
          name: "Bad News Bears",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Brown Bear",
            "Harvest another Brown Bear in the same hunt",
            "Harvest another Brown Bear in the same hunt"
          ],
        },
        {
          missionID: "m10-7",
          name: "Far-fetched",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w16"],
              text: "You must use 9.3x62 Anschütz 1780 D FL Bolt Action Rifle with a scope",
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Brown Bear using a scoped 9.3x62 Anschütz 1780 D FL Bolt Action Rifle at a minimum distance of 100 meters (approx. 328 ft)"
          ],
        },
        {
          missionID: "m10-8",
          name: "Biologist Schmiologist",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq1"],
              text: "You must use Ground Blind"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Brown Bear from a Ground Blind",
            "Harvest another Brown Bear using a Ground Blind"
          ],
        },
        {
          missionID: "m10-9",
          name: "This All Sounds Awfully Familiar",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w52"],
              text: "Use Parker Python Compound Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Brown Bear using a Parker Python Compound Bow from a maximum of 20 meters (approx 66 ft)",
          ],
        },
        {
          missionID: "m10-10",
          name: "We Woke Up The Mama",
          earnings: "3600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w46"],
              text: 'Use .308 Handgun'
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/9/9b/Brown_bear_mission_10_hint.png",
            link: ""
          },
          goals: [
            "Harvest the Brown Bear Goldilocks using a .308 'Rival' Handgun",
          ],
        },
      ],
    },
    {
      id: "m11",
      name: "Canada Goose Missions",
      displayName: "Canada Goose",
      animalID: "an12",
      filterArray: ["r5"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/canada_goose.png",
      bgURL: "https://i.postimg.cc/fbWdWb1M/1Q8E8Rr9.jpg",
      missionsList: [
        {
          missionID: "m11-1",
          name: "Allright Then: Prove It",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Canada Goose",
            "Harvest Moose"
          ],
        },
        {
          missionID: "m11-2",
          name: "Off On The Wrong Foot",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID the call of a Canada Goose",
            "ID the call of another Canada Goose"
          ],
        },
        {
          missionID: "m11-3",
          name: "The Standard Procedure",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 5 airborne Canada Geese in the same hunt"
          ],
        },
        {
          missionID: "m11-4",
          name: "Easy Riding",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 airborne Canada Geese using a 12 GA Single Shot Shotgun killing it with one shot in the same hunt"
          ],
        },
        {
          missionID: "m11-5",
          name: "Full Throttle",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w40"],
              text: "You must use 20 GA Semi-Automatic Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 10 airborne Canada Geese using a 20 GA Semi-Automatic Shotgun in the same hunt"
          ],
        },
        {
          missionID: "m11-6",
          name: "Surgeon With A Shotgun",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 airborne Canada Geese from a minimum of 40 meters (approx. 131 ft.) in the same hunt"
          ],
        },
        {
          missionID: "m11-7",
          name: "Antiquated Measurements",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Canada Goose weighing at least 200 Salerno libras (or 7,2 kg, approx. 15,4 lbs.)",
            "Harvest another airborne Canada Goose weighing at least 200 Salerno libras (or 7,2 kg, approx. 15,4 lbs.)"
          ],
        },
        {
          missionID: "m11-8",
          name: "Trickery In The Name Of Justice",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq4"],
              text: "You must use Waterfowl Blind"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 airborne Canada Geese from a Waterfowl Blind at a maximum distance of 15 meter (approx. 49 ft.)"
          ],
        },
        {
          missionID: "m11-9",
          name: "A Light At The End Of The Tunnel?",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w41"],
              text: "Use .22 Pistol"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 airborne Canada Geese using a .22 Pistol.",
          ],
        },
        {
          missionID: "m11-10",
          name: "Like In The Olden Days",
          earnings: "3600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w57"],
              text: 'Use Longbow'
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Canada Goose using a Longbow",
          ],
        },
      ],
    },
    {
      id: "m12",
      name: "Cottontail Rabbit Missions",
      displayName: "Cottontail Rabbit",
      animalID: "an13",
      filterArray: ["r2", "r3"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/cottontail_rabbit.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "m12-1",
          name: "Hop To It",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Cottontail Rabbit in Logger's Point",
            "ID tracks or droppings of a Cottontail Rabbit in Logger's Point",
            "Spot a Cottontail Rabbit in Settler Creeks",
            "ID tracks or droppings of a Cottontail Rabbit in Settler Creeks"
          ],
        },
        {
          missionID: "m12-2",
          name: "Regicide",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Cottontail Rabbit"
          ],
        },
        {
          missionID: "m12-3",
          name: "Honour. Glory. Rabbit.",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Cottontail Rabbit using a Shotgun",
            "Harvest another Cottontail Rabbit using a Shotgun"
          ],
        },
        {
          missionID: "m12-4",
          name: "Ode To Joy",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 Cottontail Rabbits in Settler Creeks using a 12 GA Single Shot Shotgun"
          ],
        },
        {
          missionID: "m12-5",
          name: "Warriors Of The Fields",
          earnings: "600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "The mission can be completed by picking up coyote and cottontail rabbit tracks at the given coordinates.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/c9/Ctr_mission_5.png",
            link: ""
          },
          goals: [
            "Go to the Three Lakes area on Logger's Point and investigate how the war between Cottontail Rabbits and Coyotes is going. Check out some strange reports coming out of somewhere close to these coordinates: X: -9511; Y: 5756"
          ],
        },
        {
          missionID: "m12-6",
          name: "Losers Of The Fields",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq1"],
              text: "you must use Ground Blind"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Cottontail Rabbits from a Ground Blind in the same hunt"
          ],
        },
        {
          missionID: "m12-7",
          name: "Restoring The Honour",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Cottontail Rabbits while crouching from a maximum distance of 20 meter (approx. 66 ft.)"
          ],
        },
        {
          missionID: "m12-8",
          name: "Restoring The Glory",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w5"],
              text: "You must use .22 Air Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Cottontail Rabbits in Settler Creeks using a .22 Air Rifle without a scope"
          ],
        },
        {
          missionID: "m12-9",
          name: "Losers No More",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w57"],
              text: "Use Longbow"
            },
            {
              equipments: ["eq3"],
              text: "Use Treestand"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 unspooked Cottontail Rabbits in Logger's Point from a Treestand using a Longbow",
          ],
        },
        {
          missionID: "m12-10",
          name: "Duty First",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w40"],
              text: 'Use 20 GA Semi-Automatic Shotgun'
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 5 Cottontail Rabbits in Settler Creeks using a 20 GA Semi-Automatic Shotgun",
          ],
        },
      ],
    },
    {
      id: "m13",
      name: "Coyote Missions",
      displayName: "Coyote",
      animalID: "an14",
      filterArray: ["r1", "r2"], // Reservati na kojim se nalazi
      missionPackValue: "9.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/coyote.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "m13-1",
          name: "Eye Spy",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Coyote"
          ],
        },
        {
          missionID: "m13-2",
          name: "It Takes Two",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Coyote",
            "Harvest a Coyote"
          ],
        },
        {
          missionID: "m13-3",
          name: "Scout",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Find a set of Coyote tracks",
            "Find a set of Coyote tracks",
            "Find a set of Coyote tracks"
          ],
        },
        {
          missionID: "m13-4",
          name: "Barking Up The Wrong Tower",
          earnings: "500",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Coyote from a tower"
          ],
        },
        {
          missionID: "m13-5",
          name: "Northern Quarter",
          earnings: "700",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "The coyote must have spawned in this area. Shooting another coyote that you lured or chased there will not count.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/0/0b/Northernquarter.jpg",
            link: ""
          },
          goals: [
            "Harvest a Coyote from the Northern Quarter"
          ],
        },
        {
          missionID: "m13-6",
          name: "Bitchin'",
          earnings: "900",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w43"],
              text: "You must use .44 Revolver"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Coyote, using a .44 Magnum Revolver",
            "Harvest a female Coyote, using a .44 Magnum Revolver",
            "Harvest a female Coyote, using a .44 Magnum Revolver",
            "Harvest a female Coyote, using a .44 Magnum Revolver",
            "Harvest a female Coyote, using a .44 Magnum Revolver"
          ],
        },
        {
          missionID: "m13-7",
          name: "Lake Coyote?",
          earnings: "1200",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "The coordinates are at the north west shore of the lake. The coyotes will start roaming from there. Either go there fast, or pick up the tracks and follow them.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/45/Forestlake001.jpg",
            link: ""
          },
          goals: [
            "Harvest a Coyote from the Lake (X: -14058, Y: 5389)"
          ],
        },
        {
          missionID: "m13-8",
          name: "Bow Wow",
          earnings: "1600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51"],
              text: "You must use Compound Bow Snakebite"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Coyote, using the 'Snakebite' Compound Bow",
            "Harvest a Coyote, using the 'Snakebite' Compound Bow",
            "Harvest a Coyote, using the 'Snakebite' Compound Bow",
            "Harvest a Coyote, using the 'Snakebite' Compound Bow",
            "Harvest a Coyote, using the 'Snakebite' Compound Bow"
          ],
        },
        {
          missionID: "m13-9",
          name: "Take Down",
          earnings: "1800",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "The big dog actually isn't that big of a male Coyote. He spawns around the Awi'Usdi Stones and starts roaming the area like any other animal.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/62/Awi%27Usdi.png",
            link: ""
          },
          goals: [
            "Harvest the Big Dog from the Awi'Usdi Stones",
          ],
        },
      ],
    },
    {
      id: "m14",
      name: "Dall Sheep Missions",
      displayName: "Dall Sheep",
      animalID: "an15",
      filterArray: ["r10"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/dall_sheep.png",
      bgURL: "https://i.postimg.cc/SsCrSWMJ/fa6113a6-3064-45df-89c9-a14cfb9c251d.jpg",
      missionsList: [
        {
          missionID: "m14-1",
          name: "Flocking To The Hills",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Locate 3 Dall Sheep tracks from the same animal",
            "Spot a Dall Sheep"
          ],
        },
        {
          missionID: "m14-2",
          name: "Don't Be So Sheepish",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Dall Sheep"
          ],
        },
        {
          missionID: "m14-3",
          name: "I Only Have Eyes For Ewe",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Dall Sheep",
            "Harvest another female Dall Sheep",
            "Harvest one last female Dall Sheep"
          ],
        },
        {
          missionID: "m14-4",
          name: "If You Can't Dodge It",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Dall Sheep with a single shot using any ethical weapon"
          ],
        },
        {
          missionID: "m14-5",
          name: "Hoofin' It",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Dall Sheep with a shot through the heart or both lungs. Other organs may be hit",
            "Harvest another male Dall Sheep with a shot through the heart or both lungs in the same hunt. Other organs may be hit"
          ],
        },
        {
          missionID: "m14-6",
          name: "No Ewes Crying Over Spilt Milk",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Dall Sheep using any .243 rifle from over 150 meters (Approx. 492 ft)"
          ],
        },
        {
          missionID: "m14-7",
          name: "Mutton For Punishment",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Dall Sheep weighing over 45kg (Approx. 99 lbs)",
            "Harvest a male Dall Sheep weighing over 90kg (Approx. 198 lbs)"
          ],
        },
        {
          missionID: "m14-8",
          name: "Shear Delights",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Shoot one dall sheep but do not harvest it. Shoot and harvest a second dall sheep, then return to the first and collect it within 5 minutes.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest two Dall Sheep within 5 minutes of one another"
          ],
        },
        {
          missionID: "m14-9",
          name: "The Black Sheep",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Dall Sheep scoring over 160 points with a 100% Harvest Value",
          ],
        },
        {
          missionID: "m14-10",
          name: "Put To Good Ewes",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Dall Sheep scoring less than 35 points",
            "Harvest a female Dall Sheep scoring over 38 points",
            "Harvest a male Dall Sheep scoring less than 80 points",
            "Harvest a male Dall Sheep scoring over 160 points"
          ],
        },
      ],
    },
    {
      id: "m15",
      name: "Eurasian Lynx Missions",
      displayName: "Eurasian Lynx",
      animalID: "an16",
      filterArray: ["r6"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/lynx_eurasian.png",
      bgURL: "https://i.postimg.cc/1RCNdqkM/output.jpg",
      missionsList: [
        {
          missionID: "m15-1",
          name: "The Search for Pakasuchus",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID the call of a Eurasian Lynx",
            "Find a track from a Eurasian Lynx"
          ],
        },
        {
          missionID: "m15-2",
          name: "Modern Fossil Requirement",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Eurasian Lynx"
          ],
        },
        {
          missionID: "m15-3",
          name: "The Brachiosaurus Lynx",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Eurasian Lynx with a weight of 23 kg (Approx. 51 lbs) or higher"
          ],
        },
        {
          missionID: "m15-4",
          name: "The Velocilynx",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w59", "w60", "w61"],
              text: "Use Reverse Draw Crossbow or Tenpoint Carbon Fusion Crossbow or Crossbow Pistol"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Eurasian Lynx with a score of 7 or higher with any Crossbow or Crossbow Pistol"
          ],
        },
        {
          missionID: "m15-5",
          name: "The Predator Becomes the Prey",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq3"],
              text: "You must use Treestand"
            } 
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a male Eurasian Lynx from a Treestand",
            "Spot another male Eurasian Lynx from a Treestand",
            "Spot one final male Eurasian Lynx from a Treestand"
          ],
        },
        {
          missionID: "m15-6",
          name: "Upgrading Equipment",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Shoot one lynx but do not collect it. Rather mark or remember the place. Shoot a second lynx, harvest it, then return within 10 minutes to the first kill to harvest.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest two Eurasian Lynx within 10 minutes of each harvest"
          ],
        },
        {
          missionID: "m15-7",
          name: "The Argentinosaurus Lynx",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked Eurasian Lynx with a weight of 30 kg (Approx. 66 lbs) or higher at a distance under 20 meters (Approx. 65 feet)"
          ],
        },
        {
          missionID: "m15-8",
          name: "The T-Lynx",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked Eurasian Lynx with a score of 9 or higher with any Shotgun using any buckshot at 100% Harvest Value"
          ],
        },
        {
          missionID: "m15-9",
          name: "Pakasuchus",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq3"],
              text: "You must use Treestand"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked male Eurasian Lynx from a Tree Stand while it's standing still",
          ],
        },
        {
          missionID: "m15-10",
          name: "A Distant Relative",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked male Eurasian Lynx at 100% Harvest Value with a score of 9 or higher without penetrating any bones. Only organs may be hit"
          ],
        },
      ],
    },
    {
      id: "m16",
      name: "European Rabbit Missions",
      displayName: "European Rabbit",
      animalID: "an16",
      filterArray: ["r8", "r9"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/european_rabbit.png",
      bgURL: "https://i.postimg.cc/D0mwQcPz/1f1b5a95-dc47-4c46-a519-adf8f610b606.jpg",
      missionsList: [
        {
          missionID: "m16-1",
          name: "Finding the clues",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID tracks from a European Rabbit",
            "ID more tracks from a European Rabbit",
            "ID droppings from a European Rabbit"
          ],
        },
        {
          missionID: "m16-2",
          name: "Rabbit Therapy",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot an European Rabbit",
            "Spot a second European Rabbit",
            "Spot a third European Rabbit"
          ],
        },
        {
          missionID: "m16-3",
          name: "Too many, too fast",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a European Rabbit",
            "Harvest another European Rabbit"
          ],
        },
        {
          missionID: "m16-4",
          name: "Non Strategical Rabbits",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq1"],
              text: "Ground Blind required"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an European Rabbit killed from a Ground Blind",
            "Harvest another European Rabbit killed from a Ground Blind during the same hunt",
            "Harvest another European Rabbit killed from a Ground Blind during the same hunt"
          ],
        },
        {
          missionID: "m16-5",
          name: "Power In Numbers",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w5"],
              text: "You must use .22 Air Rifle"
            } 
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female European Rabbit weighing less than 1,7 kg killed with a .22 Air Rifle",
            "Harvest a female European Rabbit weighing between 1,7 kg and 2,0 kg killed with a .22 Air Rifle",
            "Harvest a female European Rabbit weighing more than 2,0 kg killed with a .22 Air Rifle"
          ],
        },
        {
          missionID: "m16-6",
          name: "Keeping Them On Their Toes",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male European Rabbit killed while spooked with a 12 GA Single Shot Shotgun",
            "Harvest a female European Rabbit killed while spooked with a 12 GA Single Shot Shotgun"
          ],
        },
        {
          missionID: "m16-7",
          name: "Home Invasion",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an European Rabbit killed with any shotgun while it is emerging from or diving into a burrow exit",
            "Harvest a second European Rabbit killed with any shotgun while it is emerging from or diving into a burrow exit during the same hunt",
            "Harvest a third European Rabbit killed with any shotgun while it is emerging from or diving into a burrow exit during the same hunt"
          ],
        },
        {
          missionID: "m16-8",
          name: "A Necessary Evil",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq1"],
              text: "Use Ground blind"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot an European Rabbit during the same hunt",
            "Spot another European Rabbit during the same hunt",
            "Harvest a spooked European Rabbit from a Ground Blind during the same hunt",
            "Harvest another spooked European Rabbit from a Ground Blind during the same hunt"
          ],
        },
        {
          missionID: "m16-9",
          name: "Can't Break Their Spirit",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID tracks from a European Rabbit",
            "ID a second set tracks from a European Rabbit",
            "ID a third set of tracks from a European Rabbit",
            "Spot a European Rabbit",
            "Spot a second European Rabbit",
            "Spot a third European Rabbit"
          ],
        },
        {
          missionID: "m16-10",
          name: "Rabbit Rampage",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ['w41'],
              text: ".22 Pistol"
            }
          ],
          hint: {
            text: "This mission is completed in the Val-des-Bois reserve. Note that these tasks do not all have to be done in the same hunt.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/45/VDB_Euro_Mission_10.png",
            link: ""
          },
          goals: [
            "Harvest a female European Rabbit north of Chalet du Mont-Bleu lodge",
            "Harvest a second female European Rabbit north of Chalet du Mont-Bleu lodge",
            "Harvest a female European Rabbit northwest of The Calm Pond (x 2559, y -848)",
            "Harvest a second female European Rabbit killed with the .22 Pistol north of The Calm Pond (x 2559, y -848)",
            "Harvest a male European Rabbit north of Chalet du Mont-Bleu lodge",
            "Harvest a second male European Rabbit killed with the .22 Pistol north of Chalet du Mont-Bleu lodge",
            "Harvest a male European Rabbit north of The Calm Pond (x 2559, y -848)",
            "Harvest a second male European Rabbit north of The Calm Pond (x 2559, y -848)"
          ],
        },
      ],
    },
    {
      id: "m17",
      name: "Fallow Deer Missions",
      displayName: "Fallow Deer",
      animalID: "an18",
      filterArray: ["r5"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/fallow_deer.png",
      bgURL: "https://i.postimg.cc/fbWdWb1M/1Q8E8Rr9.jpg",
      missionsList: [
        {
          missionID: "m17-1",
          name: "Clued In",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID footprints from a Fallow Deer",
            "ID droppings from a Fallow Deer in the same hunt",
            "ID ID an audio call from a Fallow Deer in the same hunt"
          ],
        },
        {
          missionID: "m17-2",
          name: "Eyes on the Target",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Fallow Deer",
            "Spot another Fallow Deer in the same hunt",
            "Spot a third Fallow Deer in the same hunt"
          ],
        },
        {
          missionID: "m17-3",
          name: "Sampling the Herd",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Fallow Deer",
            "Harvest a male Fallow Deer in the same hunt"
          ],
        },
        {
          missionID: "m17-4",
          name: "Regional Differences",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/29/Fallow_deer_mission_4.png",
            link: ""
          },
          goals: [
            "Harvest a Fallow Deer from Tower 4 (x 8504, y -25)"
          ],
        },
        {
          missionID: "m17-5",
          name: "Unstressed Meat",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked Fallow Deer with any buckshot ammunition"
          ],
        },
        {
          missionID: "m17-6",
          name: "To the North",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/b6/Fallow_deer_mission_6.png",
            link: ""
          },
          goals: [
            "Harvest a Fallow Deer from Tower 5 (x 8814, y -1145) with a heart or lung shot"
          ],
        },
        {
          missionID: "m17-7",
          name: "A Fine Pair",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w42", "w43", "w47", "w46"],
              text:"Use .357, .44, 10mm Semi-Automatic Pistol or .308 Handgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Fallow Deer with a handgun",
            "Harvest a female Fallow Deer with a handgun"
          ],
        },
        {
          missionID: "m17-8",
          name: "Final Land Survey",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq3"],
              text: "Use Tree Stand"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Fallow Deer from a Tree Stand with a single shot",
            "Harvest a female Fallow Deer from a Tree Stand with a single shot in the same hunt"
          ],
        },
        {
          missionID: "m17-9",
          name: "Changing Tactics",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60"],
              text: "Use any bow or crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Chocolate Fallow Deer scoring more than 135 with any bow or crossbow",
          ],
        },
        {
          missionID: "m17-10",
          name: "Full Utility",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Fallow Deer scoring more than 155"
          ],
        },
      ],
    },
    {
      id: "m18",
      name: "Feral Goat Missions",
      displayName: "Feral Goat",
      animalID: "an19",
      filterArray: ["r9"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/feral_goat.png",
      bgURL: "https://i.postimg.cc/D0mwQcPz/1f1b5a95-dc47-4c46-a519-adf8f610b606.jpg",
      missionsList: [
        {
          missionID: "m18-1",
          name: "The Usual Suspects",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID droppings from a Feral Hog",
            "ID droppings from a Red Kangaroo",
            "ID droppings from a Feral Goat"
          ],
        },
        {
          missionID: "m18-2",
          name: "Dragnet Operation",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID footprints of a Feral Goat",
            "ID footprints of a second different Feral Goat in the same hunt",
            "ID footprints of a third different Feral Goat in the same hunt",
            "ID the call of a male Feral Goat in the same hunt",
            "ID the call of a female Feral Goat in the same hunt"
          ],
        },
        {
          missionID: "m18-3",
          name: "Covert Action",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq1", "eq2"],
              text: "Use eaither Ground Blind or Tripod Stand"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Feral Goat from a tower, Ground Blind or Tripod Stand"
          ],
        },
        {
          missionID: "m18-4",
          name: "Police Lineup",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Feral Goat with fur variation Grey",
            "Spot a Feral Goat with fur variation Piebald",
            "Spot a Feral Goat with fur variation Piebald Black"
          ],
        },
        {
          missionID: "m18-5",
          name: "The Scapegoat",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w1", "w2"],
              text: "Use .223 Bolt Action Rifle or .223 Semi-Automatic Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a fleeing Feral Goat with a single shot, using .223 ammunition"
          ],
        },
        {
          missionID: "m18-6",
          name: "Silence of the Goats",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56", "w57", "w58"],
              text: "Recurve Bow, Heavy Recurve Bow, Longbow or Cable-backed Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Feral Goat with a Recurve Bow, Heavy Recurve Bow, Longbow or Cable-backed Bow",
            "Harvest a female Feral Goat with a Recurve Bow, Heavy Recurve Bow, Longbow or Cable-backed Bow"
          ],
        },
        {
          missionID: "m18-7",
          name: "The war on shrubs",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w42", "w43", "w47", "w46"],
              text:"Use .357, .44, 10mm Semi-Automatic Pistol or .308 Handgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Feral Goat with 100% Harvest Value, using any ethical pistol or revolver"
          ],
        },
        {
          missionID: "m18-8",
          name: "An offer you can't refuse",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w6", "w7", "w8", "w9", "w10", "w11", "w12", "w13", "w14", "w15", "w16", "w17"],
              text: "Use any bolt action rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Feral Goat with a Bolt Action Rifle from a distance of at least 120 meters, using only iron sights"
          ],
        },
        {
          missionID: "m18-9",
          name: "Collateral Damage",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Feral Goat with a score of 200 or more",
            "Harvest a male Feral Goat with a score of 90 or less",
            "Harvest a female Feral Goat with a score of 150 or more",
            "Harvest a female Feral Goat with a score of 50 or less"
          ],
        },
        {
          missionID: "m18-10",
          name: "The Goatfather",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Feral Goat weighing at least 60 kg with a single shot, hitting heart or lungs"
          ],
        },
      ],
    },
    {
      id: "m19",
      name: "Feral Hog Missions",
      displayName: "Feral Hog",
      animalID: "an20",
      filterArray: ["r2", "r3", "r7", "r9", "r12"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/feral_hog.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "m19-1",
          name: "On the Matter of Pigs",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Find a Feral Hog track south of the Field Lodge on Logger's Point",
            "Find a Feral Hog track south of the Middle Tower but north of the Field Lodge on Logger's Point",
            "Find a Feral Hog track north of the Middle Tower on Logger's Point"
          ],
        },
        {
          missionID: "m19-2",
          name: "Blowing in the Wind",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Feral Hog from under 45.72m (approx. 150ft.)"
          ],
        },
        {
          missionID: "m19-3",
          name: "Squealer",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/b2/LoggersThreeLakes.png",
            link: ""
          },
          goals: [
            "Harvest a Feral Hog in the Three Lakes area in the north of Logger's Point",
            "Harvest another Feral Hog in the Three Lakes area in the north of Logger's Point during the same hunt"
          ],
        },
        {
          missionID: "m19-4",
          name: "Electric Lady Land",
          earnings: "400",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Once this mission is active, there are feral hogs near the electric station which is the point of interest at the bottom of the Logger's Point map.Two animals from this group must be harvested, not necessarily in the same hunt. Go there quickly and if you don't see them, follow the tracks. Easier is to set up a tent near the station and start your hunt there. Harvesting other pigs that are not part of the mission group will not count, even if you harvest them near the station.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Feral Hogs from the pack raiding the Powerstation"
          ],
        },
        {
          missionID: "m19-5",
          name: "All Along The Watchtower",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Feral Hog from the North Hunting Tower on Logger's Point",
            "Harvest a Feral Hog from the Middle Hunting Tower on Logger's Point",
            "Harvest a Feral Hog from the South Hunting Tower on Logger's Point"
          ],
        },
        {
          missionID: "m19-6",
          name: "Unnatural Selection",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Feral Hog weighing more than 181.437kg (approx. 400lbs)"
          ],
        },
        {
          missionID: "m19-7",
          name: "Uninvited Guests",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51"],
              text:"Use Compound Bow Snakebite"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Feral Hogs with the Snakebite Compound Bow in the area south of the Field Lodge on Logger's Point"
          ],
        },
        {
          missionID: "m19-8",
          name: "Eye of The Hog",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w8"],
              text: "Use .300 Bolt Action Rifle"
            },
            {
              weapons: ["w43"],
              text: "Use .44 Revolver"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Feral Hog using the .300 Rifle",
            "Harvest another Feral Hog using a .44 Magnum Revolver during the same hunt",
            "Harvest another Feral Hog using a shotgun with Slug ammo during the same hunt"
          ],
        },
        {
          missionID: "m19-9",
          name: "Range Finder",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Feral Hog with one shot from between 60.96 meters and 76.2 meters (approx. 200 & 250 ft.) with a scoped weapon",
            "Harvest a Feral Hog with one shot from between 91.44 meters and 106.68 meters (300 & 350 ft.) with a scoped weapon",
            "Harvest a Feral Hog with one shot from between 121.92 meters and 137.16 meters (approx. 400 & 450 ft.) with a scoped weapon"
          ],
        },
        {
          missionID: "m19-10",
          name: "God Save the Queen",
          earnings: "3600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest the Feral 'Queen' Hog terrorizing Canyon Creek"
          ],
        },
      ],
    },
    {
      id: "m20",
      name: "Grey Wolf Missions",
      displayName: "Grey Wolf",
      animalID: "an22",
      filterArray: ["r11"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/wolf.png",
      bgURL: "https://i.postimg.cc/6pvRbSnN/v5B8MaFi.jpg",
      missionsList: [
        {
          missionID: "m20-1",
          name: "On All Fours",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify 3 Grey Wolf tracks from the same animal",
            "Identify a call from a Grey Wolf",
            "Spot 3 Grey Wolfs"
          ],
        },
        {
          missionID: "m20-2",
          name: "Taking on the Pack",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Grey Wolfs in the same hunt"
          ],
        },
        {
          missionID: "m20-3",
          name: "Traditional Hunting Methods",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54"],
              text: "Use Compound bows, Snakebite, Pulsar, Parker Python or Red Dragon"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify droppings from a Grey Wolf",
            "Spot a Grey Wolf",
            "Harvest 2 unspooked Grey Wolfs using any Compound Bow"
          ],
        },
        {
          missionID: "m20-4",
          name: "The Capitoline Wolf",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w59", "w60"],
              text: "Use Reverse Draw or Tenpoint Carbon Fusion Crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot 2 male Grey Wolfs",
            "After spotting the Grey Wolves, harvest 2 male Grey Wolfs from a distance of 20 meters (Approx. 65 ft) or higher using any Crossbow",
            "Finally, harvest a female Grey Wolf with a weight of 50kg (approx. 110 lbs) or higher in Timbergold Trails using any Crossbow"
          ],
        },
        {
          missionID: "m20-5",
          name: "On the Prowl",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq3"],
              text: "Required Tree Stand"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked Grey Wolf from under 20 meters (Approx. 66 ft) while using a Tree Stand",
            "Harvest another unspooked Grey Wolf from under 12 meters (Approx. 39 ft) while using a Tree Stand"
          ],
        },
        {
          missionID: "m20-6",
          name: "Fangs like an Assassin",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Do not collect the first shot wolf but rather wait until you have shot a second. Then harvest both within 5 minutes.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest two Grey Wolves within 5 minutes of each harvest"
          ],
        },
        {
          missionID: "m20-7",
          name: "The Night Lurker, Amarok",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w7"],
              text:".270 Bolt Action Rifle"
            }
          ],
          hint: {
            text: "A manageable way is to call wolves from a treestand. When a dark one stands directly under the stand, shoot straight down aiming in the middle of the animal.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked male dark Grey Wolf using any .270 Bolt Action Rifle in Timbergold Trails with a shot to the heart"
          ],
        },
        {
          missionID: "m20-8",
          name: "Alpha, Beta, Omega",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w59", "w60"],
              text: "Use Reverse Draw or Tenpoint Carbon Fusion Crossbow"
            },
            {
              weapons: ["w51", "w52", "w53", "w54"],
              text: "Use any Compound bow: Snakebite, Pulsar, Parker Python or Red Dragon"
            },
            {
              weapons: ["w7"],
              text: "Use .270 Bolt Action Rifle"
            },
          ],
          hint: {
            text: "The coyote must have spawned in this area. Shooting another coyote that you lured or chased there will not count.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/0/0b/Northernquarter.jpg",
            link: ""
          },
          goals: [
            "Harvest a male Grey Wolf with a weight of 65kg (approx. 143 lbs) or higher in one shot",
            "Harvest a female Grey Wolf with a weight of 40kg (approx. 88 lbs) or higher in one shot",
            "Harvest a Grey Wolf with a lung shot using any Crossbow",
            "Harvest a Grey Wolf with a lung shot using any Compound Bow",
            "Harvest a Grey Wolf with a lung shot using any .270 Bolt Action Rifle",
            "Harvest an unspooked Grey Wolf with a heart shot. Other organs may be hit"
          ],
        },
        {
          missionID: "m20-9",
          name: "The Remaining Followers",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w42", "w43", "w47", "w46", "w50"],
              text:"Use .357, .44, 10mm Semi-Automatic Pistol or .308 Handgun or .50 Muzzleloading pistol"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked common Grey Wolf from under 20 meters (Approx. 66 ft) in the same hunt",
            "Harvest a dark Grey Wolf in one shot in the same hunt",
            "Harvest a brown Grey Wolf with any ethical handgun from over 35 meters (Approx. 115 ft) in the same hunt"
          ],
        },
        {
          missionID: "m20-10",
          name: "The Legendary Fenrir",
          earnings: "3600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/f/fe/Grey_wolf_mission_fenrir.png",
            link: ""
          },
          goals: [
            "Identify a call from a Grey Wolf",
            "Harvest the dark Grey Wolf Fenrir by Brimstone (X: -7.140, Y: -156) in Timbergold Trails"
          ],
        },
      ],
    },
    {
      id: "m21",
      name: "Grizzly Bear Missions",
      displayName: "Grizzly Bear",
      animalID: "an23",
      filterArray: ["r11"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/grizzly_bear.png",
      bgURL: "https://i.postimg.cc/6pvRbSnN/v5B8MaFi.jpg",
      missionsList: [
        {
          missionID: "m21-1",
          name: "Majesty at Best",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Locate 3 Grizzly Bear tracks from the same animal",
            "Then spot a Grizzly Bear in the same hunt",
            "Lastly, harvest a Grizzly Bear in the same hunt"
          ],
        },
        {
          missionID: "m21-2",
          name: "To Catch a Thief",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Grizzly Bear",
            "Harvest one more Grizzly Bear"
          ],
        },
        {
          missionID: "m21-3",
          name: "From Afar",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Grizzly Bear from over 60m (approx. 196ft)",
            "Harvest another Grizzly Bear from over 70m (approx. 230ft)",
            "Harvest another Grizzly Bear from over 80m (approx. 262ft)"
          ],
        },
        {
          missionID: "m21-4",
          name: "Fast and Precise",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "This mission is easier to complete with female bears as they do not spook quickly.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Grizzly Bear with a heart shot on 100% Harvest Value",
            "Harvest one more Grizzly Bear with a heart shot on 100% Harvest Value",
          ],
        },
        {
          missionID: "m21-5",
          name: "Silence is Key",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w52"],
              text: "Required Parker Python"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Grizzly Bear with the Compound Bow Parker Python",
            "Harvest another Grizzly Bear with the Compound Bow Parker Python",
            "Harvest another Grizzly Bear with the Compound Bow Parker Python"
          ],
        },
        {
          missionID: "m21-6",
          name: "Face to Face",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w45"],
              text: "Required 454 revolver"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Grizzly Bear with a single shot while it is charging at you with any .454 Revolver"
          ],
        },
        {
          missionID: "m21-7",
          name: "The Trap is Set",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w8"],
              text:".300 Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Grizzly Bears with the .300 Bolt Action Rifle while it is fleeing"
          ],
        },
        {
          missionID: "m21-8",
          name: "Trickery at Best",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w59"],
              text: "Use Reverse Draw Crossbow"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Grizzly Bear with a heart or lung shot using any Reverse Draw Crossbow"
          ],
        },
        {
          missionID: "m21-9",
          name: "Revenge is Sweet",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56"],
              text:"Heavy Recurve Bow or Recurve Bow"
            },
            {
              weapons: ["w13"],
              text:"7mm Magnum Bullpup Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Grizzly Bear with any Recurve Bow at 100% Harvest Value",
            "Harvest a Grizzly Bear with the 7mm Magnum Bullpup Rifle at 100% Harvest Value"
          ],
        },
        {
          missionID: "m21-10",
          name: "One Final Trophy",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w45"],
              text: "Required 454 revolver"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male blonde Grizzly Bear with any .454 Revolver"
          ],
        },
      ],
    },
    {
      id: "m22",
      name: "Magpie Goose Missions",
      displayName: "Magpie Goose",
      animalID: "an24",
      filterArray: ["r12"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/magpie_goose.png",
      bgURL: "https://i.postimg.cc/BQQxkWM8/bc9b968c-1453-40ca-ae01-1cd5d929f8f7.jpg",
      missionsList: [
        {
          missionID: "m22-1",
          name: "The Budgie Who Could",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID the call of a Magpie Goose",
            "ID the call of another Magpie Goose"
          ],
        },
        {
          missionID: "m22-2",
          name: "Rack Off the Intruders",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Water Buffalo",
            "Harvest a Banteng"
          ],
        },
        {
          missionID: "m22-3",
          name: "Fair Dinkum Shootin'",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 5 Magpie Geese in the same hunt"
          ],
        },
        {
          missionID: "m22-4",
          name: "A Goose Bigger than Dawg",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 airborne Magpie Geese weighin' at least 3 kg (Approx. 7 lbs) in the same hunt"
          ],
        },
        {
          missionID: "m22-5",
          name: "Straight to the Pool Room",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 airborne Magpie Geese scorin' at least 3200 in the same hunt"
          ],
        },
        {
          missionID: "m22-6",
          name: "Aussie Salute",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "The tasks must be done in the order described",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Water Buffalo",
            "Then, harvest an airborne Magpie Goose",
            "Then, harvest another Water Buffalo",
            "Finally, harvest one final airborne Magpie Goose"
          ],
        },
        {
          missionID: "m22-7",
          name: "For the Journos",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "The mission requires 10 geese in total",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 10 airborne Magpie Geese with one shot in the same hunt"
          ],
        },
        {
          missionID: "m22-8",
          name: "Fair Shake of the Sauce Bottle",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w3"],
              text: ".17 HMR Lever Action Rifle",
            }
          ],
          hint: {
            text: "Be sure to lead the shot a bit with the .17 HMR rifle.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Water Buffalo with a 100% Harvest Value shot over 50 meters (Approx. 164 feet)",
            "Harvest an unspooked male Sambar Deer with a double lung shot while standing. Other organs may be hit",
            "Harvest an airborne Magpie Goose using .17 HMR HV Ammunition"
          ],
        },
        {
          missionID: "m22-9",
          name: "Tell Dawg He's Dreamin'",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Use the Magpie Goose Short Range Caller to get the geese to fly close, then step out of the waterfowl blind for the shot. Alternatively lie prone when calling the geese in.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Magpie Goose under 15 meters (Approx. 49 feet) without using a Waterfowl Blind"
          ],
        },
        {
          missionID: "m22-10",
          name: "No Wuckin' Furries",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54"],
              text: "Snakebite, Parker Python, Red Dragon or Pulsar"
            }
          ],
          hint: {
            text: "Use a waterfowl blind close to an area where they might land. Again, use the Magpie Goose Short Range Caller to get the geese to fly close. Lead your shot",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Magpie Goose using any Compound Bow"
          ],
        },
      ],
    },
    {
      id: "m23",
      name: "Mallard Duck Missions",
      displayName: "Mallard Duck",
      animalID: "an25",
      filterArray: ["r7"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/mallard.png",
      bgURL: "https://i.postimg.cc/rpT72FbG/69febbf3-bfcf-42ad-a662-dbc57c0f678d.jpg",
      missionsList: [
        {
          missionID: "m23-1",
          name: "Mallard Hunting: Age Old Pastime",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Mallard",
          ],
        },
        {
          missionID: "m23-2",
          name: "The Plight Of Mrs Johnson",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify the call of a Mallard",
          ],
        },
        {
          missionID: "m23-3",
          name: "The Long Arm Of The Law",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Mallard using any shotgun"
          ],
        },
        {
          missionID: "m23-4",
          name: "Introducing The Researcher",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w34"],
              text: "12 GA Pump Action Shotgun",
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 airborne Mallards using a 12 GA Pump Action Shotgun in the same hunt"
          ],
        },
        {
          missionID: "m23-5",
          name: "They Talk!",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 unspooked airborne Mallards in the same hunt"
          ],
        },
        {
          missionID: "m23-6",
          name: "They Attack!",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq4"],
              text: "Waterfowl Blind is required"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 airborne Mallards from a Waterfowl Blind in the same hunt"
          ],
        },
        {
          missionID: "m23-7",
          name: "They Are Getting Bigger!",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w37"],
              text: "12 GA Blaser F3 Game O/U Shotgun",
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 airborne Mallards weighing at least 1 kg (approx. 2.2 lbs.) using a 12 GA Blaser F3 Game O/U Shotgun in the same hunt"
          ],
        },
        {
          missionID: "m23-8",
          name: "The Secret Code",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w36"],
              text: "12 GA Side By Side Shotgun",
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 spooked airborne Mallards using a Side By Side shotgun in the same hunt",
          ],
        },
        {
          missionID: "m23-9",
          name: "Breaking The Code",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 airborne Mallards from a maximum distance of 20 meters (approx. 66 ft.) in the same hunt"
          ],
        },
        {
          missionID: "m23-10",
          name: "Exposing The Truth",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne male Mallard weighing at least 1.2 kg ( approx. 2.6 lbs.)"
          ],
        },
      ],
    },
    {
      id: "m24",
      name: "Moose Missions",
      displayName: "Moose",
      animalID: "an26",
      filterArray: ["r4", "r6", "r10"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/moose.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "m24-1",
          name: "It Takes Two",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID a Call from a Male Moose",
            "ID a Call from a Female Moose",
          ],
        },
        {
          missionID: "m24-2",
          name: "Tankbuster",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w8"],
              text: ".300 Bolt Action Rifle",
            },
          ],
          hint: {
            text: "Even though the description says 'lung and/or heart shots only', the mission tasks can be completed if other organs are also hit, as long as heart or lungs are hit.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Female Moose with lung and/or heart shots only, using the .300 Rifle",
          ],
        },
        {
          missionID: "m24-3",
          name: "Out of Nowhere",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Use the Moose Caller to lure the moose close. Moose are not easily scared.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked male Moose from less than 25m"
          ],
        },
        {
          missionID: "m24-4",
          name: "Sweet Sixteen",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "16 points means that the palm on each side needs 8 points. This is usually a decent score. Use the wide and open areas of Whiterime Ridge to spot the moose easier.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Moose with at least 16 typical points using Slug"
          ],
        },
        {
          missionID: "m24-5",
          name: "Road Kill",
          earnings: "600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "The moose spawns at the given coordinates (see map) and moves around like any animal. The mission can be completed easier when placing a tent near these coordinates and get to the location as quickly as possible.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/1/10/Moose_road_kill_mission_coordinates.png",
            link: ""
          },
          goals: [
            "Track down and harvest the trespassing male Moose, last seen on the road, just east of the bridge (X: -10.430 Y: -2.513)"
          ],
        },
        {
          missionID: "m24-6",
          name: "Campers Delight",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Moose Bull with at least 18 typical points from a Treestand, Blind, Tripod Stand or Tower"
          ],
        },
        {
          missionID: "m24-7",
          name: "Trespasser",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "The Trapper's Rest Road reaches from the Trapper's Rest Lodge to the eastern border of Redfeather Falls.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/d/d4/TrappersRestRoad.png",
            link: ""
          },
          goals: [
            "Kill a male Moose anywhere on the Trapper's Rest road"
          ],
        },
        {
          missionID: "m24-8",
          name: "Moose For a Week",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51"],
              text: "Compound Bow Snakebite",
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Moose weighing more than 544kg (approx. 1200lbs) with the Snakebite Compound Bow",
          ],
        },
        {
          missionID: "m24-9",
          name: "Getting Slim",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "There is no rush to shoot 3 moose in quick suggestion. The mission does not require you to shoot, but to harvest them within 15 minutes. Don't start with the harvesting before you have shot the third moose. This mission cannot be done in multiplayer.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Moose within 15 minutes"
          ],
        },
        {
          missionID: "m24-10",
          name: "Mad Bull",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Male Moose while it is charging you"
          ],
        },
      ],
    },
    {
      id: "m25",
      name: "Mule Deer Missions",
      displayName: "Mule Deer",
      animalID: "an27",
      filterArray: ["r2", "r11"], // Reservati na kojim se nalazi
      missionPackValue: "12.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/mule_deer.png",
      bgURL: "https://i.postimg.cc/2jdsTWKk/5afad3da-96d6-480e-86d9-609348d15516.jpg",
      missionsList: [
        {
          missionID: "m25-1",
          name: "First Mule Deer",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Mule Deer buck",
          ],
        },
        {
          missionID: "m25-2",
          name: "A Longer Range",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Take a Mule Deer buck from at least 47.52m (approx. 150ft.)",
          ],
        },
        {
          missionID: "m25-3",
          name: "More Points",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "6 points means the buck has a least 3 points on each antler.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Mule Deer buck with at least 6 typical points"
          ],
        },
        {
          missionID: "m25-4",
          name: "Big Haul",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Mule Deer bucks weighing at least 91Kg (approx. 200lbs)."
          ],
        },
        {
          missionID: "m25-5",
          name: "Extreme Range",
          earnings: "500",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Take a Mule Deer buck from 137.16m (approx. 450ft.) or more"
          ],
        },
        {
          missionID: "m25-6",
          name: "Even Closer",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Take a Mule Deer buck, from 18.29m (approx. 60ft.) or less"
          ],
        },
        {
          missionID: "m25-7",
          name: "Points o'Plenty",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Mule Deer buck with at least 10 typical points"
          ],
        },
        {
          missionID: "m25-8",
          name: "Concerto",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify a call from a Mule Deer buck",
            "Identify a call from a Mule Deer doe",
          ],
        },
        {
          missionID: "m25-9",
          name: "Chasin Tail",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Find the tracks from three different Mule Deer within a span of 5 min"
          ],
        },
        {
          missionID: "m25-10",
          name: "270 Degree Angle",
          earnings: "1400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w7"],
              text: ".270 Bolt Action Rifle",
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Mule Deer buck from at least 82.29m (approx. 270ft.), using the .270 rifle"
          ],
        },
        {
          missionID: "m25-11",
          name: "Easy Does It",
          earnings: "2000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w43"],
              text: ".44 Revolver",
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 Mule Deer does using a .44 Magnum Revolver"
          ],
        },
        {
          missionID: "m25-12",
          name: "5 From Above",
          earnings: "3500",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 5 Mule Deers from a Hunting Tower"
          ],
        },
      ],
    },
    {
      id: "m26",
      name: "Pheasant Missions",
      displayName: "Pheasant",
      animalID: "an29",
      filterArray: ["r2", "r5"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/pheasant.png",
      bgURL: "https://i.postimg.cc/fbWdWb1M/1Q8E8Rr9.jpg",
      missionsList: [
        {
          missionID: "m26-1",
          name: "Call Me",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify a Pheasant call",
            "Spot a Pheasant",
          ],
        },
        {
          missionID: "m26-2",
          name: "Straight Flush",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Pheasant",
          ],
        },
        {
          missionID: "m26-3",
          name: "Run n' Gun",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Pheasant rooster"
          ],
        },
        {
          missionID: "m26-4",
          name: "Graduation Day",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Pheasant rooster with a score of 21 or more"
          ],
        },
        {
          missionID: "m26-5",
          name: "Dinner For Two",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 airborne Pheasant hens weighing at least 2 pounds"
          ],
        },
        {
          missionID: "m26-6",
          name: "Lucas's Challenge",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 airborne roosters with a score of at least 22 in the same hunt"
          ],
        },
        {
          missionID: "m26-7",
          name: "A Family Matter",
          earnings: "1000",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 airborne Pheasants from the group under the bridge in Canyon Creek"
          ],
        },
        {
          missionID: "m26-8",
          name: "Pheasant Cowboy",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w41"],
              text: ".22 Pistol",
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Pheasant rooster scoring at least 23 with a .22 Pistol",
          ],
        },
        {
          missionID: "m26-9",
          name: "Shock 'n Awe",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Pheasant south of the Field Lodge on Logger's Point",
            "Harvest an airborne Pheasant south of the Middle Tower but north of the Field Lodge on Logger's Point",
            "Harvest an airborne Pheasant north of the Middle Tower on Logger's Point"
          ],
        },
        {
          missionID: "m26-10",
          name: "A Challenge You Can't Refuse",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51"],
              text: "Compound Bow Snakebite",
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Pheasant with the Snakebite Compound Bow"
          ],
        },
      ],
    },
    {
      id: "m27",
      name: "Polar Bear Missions",
      displayName: "Polar Bear",
      animalID: "an30",
      filterArray: ["r10"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/polar_bear.png",
      bgURL: "https://i.postimg.cc/SsCrSWMJ/fa6113a6-3064-45df-89c9-a14cfb9c251d.jpg",
      missionsList: [
        {
          missionID: "m27-1",
          name: "An Odd Predicament",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Locate 3 Polar Bear tracks from the same animal",
          ],
        },
        {
          missionID: "m27-2",
          name: "Suspicious Findings",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked Polar Bear",
          ],
        },
        {
          missionID: "m27-3",
          name: "A Shocking Discovery",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID Polar Bear droppings",
            "ID another pile of Polar Bear droppings"
          ],
        },
        {
          missionID: "m27-4",
          name: "Someone's Prowling Around These Parts",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/7/74/Kosatka.png",
            link: ""
          },
          goals: [
            "First, harvest a Polar Bear with a score of 25 or higher with 100% Harvest Value",
            "Then, head over to Kosatka Harbour (X: -5.233, Y: -12.676) in Whiterime Ridge in the same hunt"
          ],
        },
        {
          missionID: "m27-5",
          name: "Signs of the Culprit",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq2"],
              text: "Tripod Stand"
            },
            {
              equipments: ["eq3"],
              text: "Tree Stand"
            }
          ],
          hint: {
            text: "Put your stand(s) as in the picture. Start at the other lodge and fast travel to this lodge. This will increase the chances of having a bear around. Then walk to the stand and only then start spotting. Fast traveling to lodges does not cost anything.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/0/06/Pb_mission_5_help.png",
            link: ""
          },
          goals: [
            "First, spot a Polar Bear without spooking it",
            "Then, spot a Polar Bear without spooking it from a Tripod Stand",
            "Finally, spot a Polar Bear without spooking it from a Tree Stand"
          ],
        },
        {
          missionID: "m27-6",
          name: "Making Some Noise",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w21", "w30", "w20", "w17"],
              text: ""
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked Polar Bear while using either .45-70 Government, .405 Ammunition or .340 Weatherby Magnum Ammunition",
            "Harvest another unspooked Polar Bear while using either .45-70 Government, .405 Ammunition or .340 Weatherby Magnum Ammunition"
          ],
        },
        {
          missionID: "m27-7",
          name: "Clearing the Path",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest two Polar Bears within 10 minutes"
          ],
        },
        {
          missionID: "m27-8",
          name: "In Pursuit of the Truth",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Polar Bear with one shot under 20 meters (approx. 66 ft) while it's charging",
            "Harvest another Polar Bear with one shot under 20 meters (approx. 66 ft) while it's charging"
          ],
        },
        {
          missionID: "m27-9",
          name: "Bear-demic",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked male Polar Bear at 100% Harvest Value",
            "Harvest another unspooked male Polar Bear at 100% Harvest Value",
            "Harvest an unspooked female Polar Bear at 100% Harvest Value",
            "Harvest another unspooked female Polar Bear at 100% Harvest Value"
          ],
        },
        {
          missionID: "m27-10",
          name: "The Puppet",
          earnings: "3600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest Angelica's Polar Bear by the peninsula north of Whiterime Ridge (X: -2.436, Y: -12.426) while it's charging"
          ],
        },
      ],
    },
    {
      id: "m28",
      name: "Ptarmigan Missions",
      displayName: "Ptarmigan",
      animalID: "an36",
      filterArray: ["r6", "r8", "r11"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/ptarmigan_rock.png",
      bgURL: "https://i.postimg.cc/SsCrSWMJ/fa6113a6-3064-45df-89c9-a14cfb9c251d.jpg",
      missionsList: [
        {
          missionID: "m28-1",
          name: "Haud Yer Wheesht!",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID 3 tracks from any species of Ptarmigan",
          ],
        },
        {
          missionID: "m28-2",
          name: "All Ptarmigans a' Jock Tamson's Bairns!",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest one of any species of Ptarmigan while it's airborne",
          ],
        },
        {
          missionID: "m28-3",
          name: "It's a Lang Road That's No Goat a Turnin'!",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Rock Ptarmigan with any Shotgun",
            "Harvest another airborne Rock Ptarmigan with any Shotgun",
            "Harvest one final airborne Rock Ptarmigan with any Shotgun"
          ],
        },
        {
          missionID: "m28-4",
          name: "Guid Gear Comes in Sma' Bulk!",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/7/74/Kosatka.png",
            link: ""
          },
          goals: [
            "Harvest 2 airborne Rock Ptarmigans weighing less than 0.55 kg (Approx. 1.21 lbs)",
          ],
        },
        {
          missionID: "m28-5",
          name: "It's a Sair Ficht For Half a Loaf!",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Willow Ptarmigan with a score lower than 500",
          ],
        },
        {
          missionID: "m28-6",
          name: "Noo Jist Haud On!",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest two airborne Willow Ptarmigan within 10 minutes of each harvest",
          ],
        },
        {
          missionID: "m28-7",
          name: "Dinnae Teach Yer Granny Tae Suck Eggs!",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "First, harvest an airborne White-tailed Ptarmigan",
            "Then, harvest another airborne White-tailed Ptarmigan with a weight of 0.4 kg (Approx. 0.88 lbs) or higher",
            "Finally, harvest another airborne White-tailed Ptarmigan with a score of 400 or higher"
          ],
        },
        {
          missionID: "m28-8",
          name: "Bletherin' Birds, Ah Tell Ye!",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "First, identify a call from a White-tailed Ptarmigan",
            "Then, harvest 3 airborne White-tailed Ptarmigans with the 12 GA Single Shot Shotgun at 100% Harvest Value"
          ],
        },
        {
          missionID: "m28-9",
          name: "The Baw's on The Slates!",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest one of any species of Ptarmigan at over 25 meters (Approx. 82 feet) while it's airborne",
          ],
        },
        {
          missionID: "m28-10",
          name: "Speak o' the Devil!",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Rock Ptarmigan with a score of 600 or higher shot at under 20 meters (Approx. 66 feet)",
            "Harvest an airborne Willow Ptarmigan with a score of 700 or higher shot at under 20 meters (Approx. 66 feet)",
            "Harvest an airborne White-tailed Ptarmigan with a score of 400 or higher shot at under 20 meters (Approx. 66 feet)"
          ],
        },
      ],
    },
    {
      id: "m29",
      name: "Puma Missions",
      displayName: "Puma",
      animalID: "an31",
      filterArray: ["r11"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/puma.png",
      bgURL: "https://i.postimg.cc/SsCrSWMJ/fa6113a6-3064-45df-89c9-a14cfb9c251d.jpg",
      missionsList: [
        {
          missionID: "m29-1",
          name: "Meow from the Hills",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/85/Puma_mission_1.png",
            link: ""
          },
          goals: [
            "Head to Brimstone (x -7122, y -136) in Timbergold Trails",
            "Identify the call of a Puma in the same hunt"
          ],
        },
        {
          missionID: "m29-2",
          name: "Cat Herds or Hard Cats?",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify tracks or droppings of a Puma in the same hunt",
            "Identify more tracks or droppings of a Puma in the same hunt",
            "Spot a Puma in the same hunt"
          ],
        },
        {
          missionID: "m29-3",
          name: "Hiding Mews",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Puma with one shot from any ethical rifle except a Muzzleloader",
          ],
        },
        {
          missionID: "m29-4",
          name: "Quiet Paws",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60"],
              text: "Any bow or crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Puma using any bow or crossbow. The Puma should not be running away or charging you",
          ],
        },
        {
          missionID: "m29-5",
          name: "Cold Revenge",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60"],
              text: "Any bow or crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/f/fe/Puma_mission_5.png",
            link: ""
          },
          goals: [
            "Head out to Porcupine Ridge (x -6019, y -1152)",
            "Harvest a male Puma with any bow or crossbow in the same hunt from under 30m (Approx. 98 ft)"
          ],
        },
        {
          missionID: "m29-6",
          name: "Return of the Cat Lady",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/8c/Puma_mission_6.png",
            link: ""
          },
          goals: [
            "Id footprints of a Puma south of Brimstone (X: -7122, Y: -136)",
            "Id footprints of a Puma north of Brimstone (X: -7122, Y: -136)",
            "Id footprints of a Puma north of Ol' Reynolds' Lost Nugget (X: -5404, Y: -2010)",
            "Id droppings of Puma",
            "Harvest a Puma with one shot from any ethical weapon"
          ],
        },
        {
          missionID: "m29-7",
          name: "Of Cats and Wolves",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID footprints of a Rocky Mountain Elk",
            "Spot a Rocky Mountain Elk in the same hunt",
            "Spot a Bighorn Sheep in the same hunt",
            "Spot a Puma in the same hunt",
            "Spot a Grey Wolf in the same hunt",
            "Harvest a Puma in the same hunt when the animal is idle"
          ],
        },
        {
          missionID: "m29-8",
          name: "Say 'MEOW!'",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/41/Puma_mission_8.png",
            link: ""
          },
          goals: [
            "ID footprints from a Puma in the same hunt",
            "ID droppings from a Puma in the same hunt",
            "ID a call from a Puma in the same hunt",
            "Harvest a Puma with a single shot through the heart and/or lungs in the same hunt. No other vital organs or bones should be hit"
          ],
        },
        {
          missionID: "m29-9",
          name: "Kitty Connoisseur",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w12"],
              text: "6.5x55 Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Dark Red Puma first",
            "Harvest another Puma from 75m or more (approx. 245 ft) with a 6.5x55 Bolt Action Rifle"
          ],
        },
        {
          missionID: "m29-10",
          name: "Smilodon concolor",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Puma weighing 92 kg (approx. 220 lbs.) or more with 100% Harvest Value",
          ],
        },
      ],
    },
    {
      id: "m30",
      name: "Red Deer Missions",
      displayName: "Red Deer",
      animalID: "an32",
      filterArray: ["r8", "r5"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/red_deer.png",
      bgURL: "https://i.postimg.cc/fbWdWb1M/1Q8E8Rr9.jpg",
      missionsList: [
        {
          missionID: "m30-1",
          name: "Easy Going",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Deer",
          ],
        },
        {
          missionID: "m30-2",
          name: "Drill Sergeant Doc",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "You must do objectives in order",
            imageURL: "",
            link: ""
          },
          goals: [
            "First: ID Red Deer Tracks",
            "Then spot a Red Deer during the same hunt",
            "After that, ID a call of a Red Deer during the same hunt"
          ],
        },
        {
          missionID: "m30-3",
          name: "A Touch Of Class",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Red Deer of at least 120 points",
          ],
        },
        {
          missionID: "m30-4",
          name: "Prime Cuts",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Red Deers weighing at least 200 kg (approx. 441 lbs)",
          ],
        },
        {
          missionID: "m30-5",
          name: "Meat Robbery",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w37"],
              text: "12 GA Blaser F3 Game O/U Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Deer weighing at least 200 kg (approx. 441 lbs.) using a 12 GA Blaser F3 Game O/U Shotgun loaded with Slug Ammunition",
          ],
        },
        {
          missionID: "m30-6",
          name: "Surgical Precision",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w16"],
              text: "9.3x62 Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest female Red Deer using a 9.3x62 Anschütz 1780 D FL Bolt Action Rifle with a heart shot",
          ],
        },
        {
          missionID: "m30-7",
          name: "All In",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "This mission will only complete if you do step by step in the order listed",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID Tracks of a male Red Deer",
            "Harvest a male Red Deer while crouching during the same hunt",
            "ID Tracks of another male Red Deer during the same hunt",
            "Harvest the a male Red Deer while prone during the same hunt",
            "ID Tracks of a female Red Deer during the same hunt",
            "Harvest a female Red Deer while crouching during the same hunt",
            "ID Tracks of another female Red Deer during the same hunt",
            "Harvest a female Red Deer while prone during the same hunt"
          ],
        },
        {
          missionID: "m30-8",
          name: "Shame On You",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq1"],
              text: "Ground Blind"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Deer at a minimum of 100 meters (approx. 328 ft) using a Ground Blind",
            "Harvest a Red Deer at a minimum of 100 meters (approx. 328 ft) using a Ground Blind during the same hunt"
          ],
        },
        {
          missionID: "m30-9",
          name: "On The Arrogance Of Deer",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w46"],
              text: ".308 Handgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Deer using a .308 'Rival' Handgun from under 30 meters (approx. 98 ft.)",
          ],
        },
        {
          missionID: "m30-10",
          name: "Leaving The Nest",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w9"],
              text: ".308 Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Red Deer of at least 200 points using a .308 Anschütz 1780 D FL Bolt Action Rifle",
          ],
        },
      ],
    },
    {
      id: "m31",
      name: "Red Fox Missions",
      displayName: "Red Fox",
      animalID: "an33",
      filterArray: ["r5", "r6", "r8", "r9"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/red_fox.png",
      bgURL: "https://i.postimg.cc/PJDBkpt4/d03d6303-7514-4422-9301-8d7f6f86172a.jpg",
      missionsList: [
        {
          missionID: "m31-1",
          name: "Something Rotten In The Evergreen Hunting Reserve",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID tracks from a Red Fox",
            "ID tracks from a Red Fox",
            "ID a call from a Red Fox",
            "ID a call from a Red Fox"
          ],
        },
        {
          missionID: "m31-2",
          name: "This Town Ain't Big Enough For The Both Of Us",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Red Fox",
            "Harvest a Red Fox during the same hunt",
          ],
        },
        {
          missionID: "m31-3",
          name: "Making A Scene",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Red Foxes during the same hunt",
          ],
        },
        {
          missionID: "m31-4",
          name: "Going Undercover",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Fox of at least 9 kg (approx. 20 lbs)",
          ],
        },
        {
          missionID: "m31-5",
          name: "Playing Along",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Red Foxes while prone during the same hunt",
          ],
        },
        {
          missionID: "m31-6",
          name: "The Insider",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w1"],
              text: ".223 Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Fox using a .223 Bolt Action Rifle at a minimum distance of 70 meters (approx. 230 ft)",
          ],
        },
        {
          missionID: "m31-7",
          name: "It's All So Quiet",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w42"],
              text: ".357 Revolver"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Fox of at least 10 kg (approx. 22 lbs) using a .357 Handgun",
            "Harvest a Red Fox of at least 10 kg (approx. 22 lbs) using a .357 Handgun"
          ],
        },
        {
          missionID: "m31-8",
          name: "Fat Boom",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w37"],
              text: "12 GA Blaser F3 Game O/U Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID five tracks, droppings or calls of the same Red Fox",
            "Harvest a Red Fox of at least 11 kg (approx. 24 lbs) using a 12 GA Blaser F3 Game O/U Shotgun loaded with Buckshot during the same hunt"
          ],
        },
        {
          missionID: "m31-9",
          name: "Supernatural Ninja",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w52"],
              text: "Compound Bow Parker Python"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Red Foxes using a Parker Python Compound Bow during the same hunt",
          ],
        },
        {
          missionID: "m31-10",
          name: "The Dignity Of Foxes",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq2"],
              text: "Tripod Stand"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Red Foxes of maximum 8 kg using a Tripod, during the same hunt",
          ],
        },
      ],
    },
    {
      id: "m32",
      name: "Red Kangaroo Missions",
      displayName: "Red Kangaroo",
      animalID: "an34",
      filterArray: ["r9"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/red_kangaroo.png",
      bgURL: "https://i.postimg.cc/D0mwQcPz/1f1b5a95-dc47-4c46-a519-adf8f610b606.jpg",
      missionsList: [
        {
          missionID: "m32-1",
          name: "The Big Jumper",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID tracks from a Red Kangaroo",
            "ID a second set tracks from a Red Kangaroo",
            "ID a third set tracks from a Red Kangaroo"
          ],
        },
        {
          missionID: "m32-2",
          name: "Seeing Red",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID dropping from a Red Kangaroo",
            "Then spot a Red Kangaroo during the same hunt",
          ],
        },
        {
          missionID: "m32-3",
          name: "Speedster",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Kangaroo",
          ],
        },
        {
          missionID: "m32-4",
          name: "True Kangaroo Hunter",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked Red Kangaroo with a single shot to the brain",
          ],
        },
        {
          missionID: "m32-5",
          name: "Gender Science",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a female Red Kangaroo during the same hunt",
            "Harvest a female Red Kangaroo during the same hunt",
            "Spot a male Red Kangaroo during the same hunt",
            "Harvest a male Red Kangaroo during the same hunt"
          ],
        },
        {
          missionID: "m32-6",
          name: "Hat-trick",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w28"],
              text: "8x57 IS K98k Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Red Kangaroos using the 8x57 K98k Bolt Action Rifle in the same hunt",
          ],
        },
        {
          missionID: "m32-7",
          name: "Big And Slow",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w57"],
              text: "Longbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Red Kangaroo",
            "Harvest an unspooked Red Kangaroo using a Longbow",
            "Spot another Red Kangaroo",
            "Harvest another unspooked Red Kangaroo using a Longbow"
          ],
        },
        {
          missionID: "m32-8",
          name: "Little Hooligan",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID tracks from a Red Kangaroo during the same session",
            "ID dropping from a Red Kangaroo during the same session",
            "Spot a Red Kangaroo during the same session",
            "Harvest a Red Kangaroo killed with a single shot at a distance of minimum 30 meters using the 12 GA Single Shot Shotgun during the same session"
          ],
        },
        {
          missionID: "m32-9",
          name: "Big Boxer",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w19"],
              text: ".30-06 Lever Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Red Kangaroo weighing at least 33.5 kilos using a .30-06 Lever Action Rifle",
            "Harvest a male Red Kangaroo weighing at least 75 kilos using a .30-06 Lever Action Rifle"
          ],
        },
        {
          missionID: "m32-10",
          name: "Barely Seeing Red",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w9", "w15", "w16"],
              text: ".308 Anschütz 1780 D FL Bolt Action Rifle, 8x57 IS Anschütz 1780 D FL Bolt Action Rifle, 9.3x62 Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked Red Kangaroo scoring at least 75 with a single shot at a distance of at least 75 meters with any scoped Anchütz rifle",
            "Harvest another unspooked Red Kangaroo scoring at least 75 with a single shot at a distance of at least 75 meters with any scoped Anchütz rifle weapon during the same hunt"
          ],
        },
      ],
    },
    {
      id: "m33",
      name: "Reindeer Missions",
      displayName: "Reindeer",
      animalID: "an35",
      filterArray: ["r6"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/reindeer.png",
      bgURL: "https://i.postimg.cc/1RCNdqkM/output.jpg",
      missionsList: [
        {
          missionID: "m33-1",
          name: "Opening Credits",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Reindeer bull",
            "Spot a Reindeer cow",
          ],
        },
        {
          missionID: "m33-2",
          name: "For Dramatic Effect",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID a call of a Reindeer bull",
            "ID a call of a Reindeer cow",
          ],
        },
        {
          missionID: "m33-3",
          name: "Horrible Terrible Nature",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Reindeer",
          ],
        },
        {
          missionID: "m33-4",
          name: "Tensions Rise",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Reindeers at 100% Harvest Value in the same hunt",
          ],
        },
        {
          missionID: "m33-5",
          name: "Become Part Of The Herd",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Find the tracks of three different Reindeer within 5 minutes"
          ],
        },
        {
          missionID: "m33-6",
          name: "Are We Reindeer? No We Are Human!",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w49"],
              text: ".50 Inline Muzzleloader"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Reindeer using the Inline Muzzleloader loaded with a .45 Saboted Bullet without a scope",
          ],
        },
        {
          missionID: "m33-7",
          name: "The Reindeer Man Cometh",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w15", "w28"],
              text: "8x57 IS K98k Bolt Action Rifle"
            }
          ],
          hint: {
            text: "The reindeer must be shot from the towers in the order they are listed",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/66/Reindeer_mission_7_towers.png",
            link: ""
          },
          goals: [
            "Harvest a Reindeer from Tower 1 (the south eastern tower) in Hemmeldal using 8x57 ammunition",
            "Harvest a Reindeer from Tower 2 (the central tower) in Hemmeldal using 8x57 ammunition",
            "Harvest a Reindeer from Tower 3 (the northern tower) in Hemmeldal using 8x57 ammunition"
          ],
        },
        {
          missionID: "m33-8",
          name: "Eye In The Sky",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w18"],
              text: ".30-30 Lever Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Reindeer from a maximum of 20 meter (approx. 66 ft.) using a .30-30 Lever Action Rifle",
            "Harvest another Reindeer from a maximum of 20 meter (approx. 66 ft.) using a .30-30 Lever Action Rifle in the same hunt",
          ],
        },
        {
          missionID: "m33-9",
          name: "The Sleeping Reindeer",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Reindeer bull at 100% Harvest Value with one heart shot",
          ],
        },
        {
          missionID: "m33-10",
          name: "The Unraveling",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w52"],
              text: "Compound Bow Parker Python"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Reindeer from at least 75 meter (approx. 246 ft.) using a Parker Python Compound Bow"
          ],
        },
      ],
    },
    {
      id: "m34",
      name: "Rocky Mountain Elk Missions",
      displayName: "Rocky Mountain Elk",
      animalID: "an37",
      filterArray: ["r11"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/rocky_mountain_elk.png",
      bgURL: "https://i.postimg.cc/2jdsTWKk/5afad3da-96d6-480e-86d9-609348d15516.jpg",
      missionsList: [
        {
          missionID: "m34-1",
          name: "Fresh Produce",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Rocky Mountain Elk",
          ],
        },
        {
          missionID: "m34-2",
          name: "Bugle Boy",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Rocky Mountain Elk",
          ],
        },
        {
          missionID: "m34-3",
          name: "Turf Wars",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a male Rocky Mountain Elk",
            "ID droppings from a male Rocky Mountain Elk"
          ],
        },
        {
          missionID: "m34-4",
          name: "Fighting Flora",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w21", "w30"],
              text: ".45-70 Government Lever Action Rifle, .45-70 Buffalo Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Rocky Mountain Elk using any .45-70 rifle without hitting it in the intestines",
            "Harvest another Rocky Mountain Elk using any .45-70 rifle without hitting it in the intestines in the same hunt"
          ],
        },
        {
          missionID: "m34-5",
          name: "Verification",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Rocky Mountain Elk with more than 10 typical points",
            "Then harvest a male Rocky Mountain Elk with less than 10 typical points",
            "Then harvest a female Rocky Mountain Elk"
          ],
        },
        {
          missionID: "m34-6",
          name: "Traditions",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56"],
              text: "Heavy Recurve Bow, Recurve Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 male Rocky Mountain Elks with any Recurve Bow from less than 30m in the same hunt",
          ],
        },
        {
          missionID: "m34-7",
          name: "Sensus",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w19", "w25", "w26"],
              text: ".30-06 Lever Action Rifle, .30-06 Bolt Action Rifle, .30-06 Stutzen Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 female Rocky Mountain Elks with .30-06 ammunition in the same hunt",
          ],
        },
        {
          missionID: "m34-8",
          name: "Rock and Roll",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Rocky Mountain Elk with more than 12 typical points using any ethical rifle ammunition",
            "Harvest another male Rocky Mountain Elk with more than 12 typical points using any ethical rifle ammunition",
          ],
        },
        {
          missionID: "m34-9",
          name: "True Love",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w45"],
              text: ".454 Revolver"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Rocky Mountain Elk with .454 ammunition",
            "Harvest a female Rocky Mountain Elk with .454 ammunition in the same hunt"
          ],
        },
        {
          missionID: "m34-10",
          name: "Main Attraction",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq1", "eq2", "eq3", "eq5"],
              text: "Ground Blind, Tripod Stand, Tree Stand, Tower"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Rocky Mountain Elk with more than 14 typical points using a blind, tower, stand or shooting tripod rest from less than 50m"
          ],
        },
      ],
    },
    {
      id: "m35",
      name: "Roe Deer Missions",
      displayName: "Roe Deer",
      animalID: "an38",
      filterArray: ["r5", "r6", "r8"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/roe_deer.png",
      bgURL: "https://i.postimg.cc/1RCNdqkM/output.jpg",
      missionsList: [
        {
          missionID: "m35-1",
          name: "An Unknown Friend",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID a Roe Deer call",
            "ID Roe Deer tracks during the same outing",
            "ID Roe Deer droppings during the same outing"
          ],
        },
        {
          missionID: "m35-2",
          name: "The Mystery Thickens",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Roe Deer buck scoring at least 120 points",
          ],
        },
        {
          missionID: "m35-3",
          name: "The Inside Man",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Orm's Stone is the rune stone west of the Drängstorp Lodge. Make sure to move close to the stone, then wait for the confirmation to be displayed.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/3/3b/Roe_deer_mission_3_hint.png",
            link: ""
          },
          goals: [
            "Travel to Orm's Stone in Hemmeldal",
          ],
        },
        {
          missionID: "m35-4",
          name: "Foul Play",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w15"],
              text: "8x57 IS Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Roe Deer using a 8x57 IS Anschütz 1780 D FL Bolt Action Rifle from a minimum of 100 meters",
          ],
        },
        {
          missionID: "m35-5",
          name: "Payback",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 Roe Deers using 12 GA Buckshot in the same hunt",
          ],
        },
        {
          missionID: "m35-6",
          name: "Death Notice",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w19"],
              text: ".30-06 Lever Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Roe Deers weighing at least 25 kg using a .30-06 Lever Action Rifle in the same hunt",
          ],
        },
        {
          missionID: "m35-7",
          name: "Cleaning Up",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 Roe Deers buck scoring at least 140 points",
          ],
        },
        {
          missionID: "m35-8",
          name: "Silent Justice",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54"],
              text: "Compound Bows: Snakebite, Parker Python, Red Dragon or Pulsar"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Roe Deer bucks using a Compound Bow weighing at least 30 kg in the same hunt",
          ],
        },
        {
          missionID: "m35-9",
          name: "Taking A Stand",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq3"],
              text: "Tree Stand"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Roe Deers using a Tree Stand in the same hunt",
          ],
        },
        {
          missionID: "m35-10",
          name: "Boss Fight",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID the calls of a 3 unique Roe Deers",
            "After those calls are registered: Harvest a Roe Deer buck scoring at least 160 points in the same hunt"
          ],
        },
      ],
    },
    {
      id: "m36",
      name: "Roosevelt Elk Missions",
      displayName: "Roosevelt Elk",
      animalID: "an39",
      filterArray: ["r1", "r3", "r4"], // Reservati na kojim se nalazi
      missionPackValue: "17.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/roosevelt_elk.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "m36-1",
          name: "Getting Hooked - Part 1",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot an Elk",
          ],
        },
        {
          missionID: "m36-2",
          name: "Getting Hooked - Part 2",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Locate 3 Roosevelt Elk tracks",
          ],
        },
        {
          missionID: "m36-3",
          name: "Getting Hooked - Part 3",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Elk",
          ],
        },
        {
          missionID: "m36-4",
          name: "Twilight Aria",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify a call from a male Elk",
            "Identify a call from a female Elk"
          ],
        },
        {
          missionID: "m36-5",
          name: "Renegades",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Elk",
            "Harvest a female Elk"
          ],
        },
        {
          missionID: "m36-6",
          name: "6 Points of Madness",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Elk with at least 6 typical points",
          ],
        },
        {
          missionID: "m36-7",
          name: "Introductions - Part 1",
          earnings: "500",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a fine female Elk",
            "Spot a dandy male Elk"
          ],
        },
        {
          missionID: "m36-8",
          name: "Introductions - Part 2",
          earnings: "500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify the a tracks from three different Roosevelt Elk within a span of 5 min",
          ],
        },
        {
          missionID: "m36-9",
          name: "Acceptance",
          earnings: "500",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Elk from under 45.72m",
          ],
        },
        {
          missionID: "m36-10",
          name: "Taking Down the King",
          earnings: "700",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Elk Bull over 453.6kg"
          ],
        },
        {
          missionID: "m36-11",
          name: "Requests & Favors",
          earnings: "900",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Elk Bull with at least 10 typical points"
          ],
        },
        {
          missionID: "m36-12",
          name: "Take an Elk from a Tower",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Elk from a Hunting Tower"
          ],
        },
        {
          missionID: "m36-13",
          name: "Lucky 7",
          earnings: "1500",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "The tasks will complete in the given order. Even if you harvest a 14pt. bull right at the start, the 2pt. task will complete",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a 2pt Elk Bull",
            "Harvest a 4pt Elk Bull",
            "Harvest a 6pt Elk Bull",
            "Harvest a 8pt Elk Bull",
            "Harvest a 10pt Elk Bull",
            "Harvest a 12pt Elk Bull",
            "Harvest a 14pt Elk Bull"
          ],
        },
        {
          missionID: "m36-14",
          name: "In Your Face",
          earnings: "1700",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Elk Bull from 15.24m or less"
          ],
        },
        {
          missionID: "m36-15",
          name: "Magnum Opus",
          earnings: "2100",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w43"],
              text: ".44 Revolver"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Elk Cow with a scoped .44 Magnum Revolver",
            "Harvest an Elk Cow with a scoped .44 Magnum Revolver"
          ],
        },
        {
          missionID: "m36-16",
          name: "Perfect Your Range",
          earnings: "2600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Elk at a range of 59.43m - 62.49m"
          ],
        },
        {
          missionID: "m36-17",
          name: "Against the Clock...",
          earnings: "700",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Player must kill both animals and harvest.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an Elk 5 minutes after another"
          ],
        },
      ],
    },
    {
      id: "m37",
      name: "Rusa Deer Missions",
      displayName: "Rusa Deer",
      animalID: "an40",
      filterArray: ["r12"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/rusa_deer.png",
      bgURL: "https://i.postimg.cc/BQQxkWM8/bc9b968c-1453-40ca-ae01-1cd5d929f8f7.jpg",
      missionsList: [
        {
          missionID: "m37-1",
          name: "Episode 1: The Fundamentals of the Rusa",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID a Rusa Deer dropping",
            "Spot a Rusa Deer",
          ],
        },
        {
          missionID: "m37-2",
          name: "Episode 2: The Two Rusa",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 male Rusa Deers in the same hunt",
          ],
        },
        {
          missionID: "m37-3",
          name: "Episode 3: The Return of the Rusa",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56"],
              text: "Recurve or Heavy recurve bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "First, harvest an unspooked male Rusa Deer with any Recurve Bow at over 40 meters",
            "Then, harvest a male Rusa Deer with one shot while standing at under 20 meters"
          ],
        },
        {
          missionID: "m37-4",
          name: "Episode 4: An Unexpected Rusa",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked male Rusa Deer weighing less than 130 kg",
            "Harvest a male Feral Hog in Piccabeen Bay"
          ],
        },
        {
          missionID: "m37-5",
          name: "Episode 5: The Desolation of Rusa",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w59", "w60"],
              text: "Reverse Draw Crossbow or Tenpoint Carbon Fusion Crossbow",
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Rusa Deer",
            "Spot another Rusa Deer",
            "Harvest a Sambar Deer with a weight of 420 kg or higher using any Crossbow with one shot"
          ],
        },
        {
          missionID: "m37-6",
          name: "Episode 6: The Battle of the Five Rusa",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w49", "w50"],
              text: "Use Inline Muzzleloaderor Muzzleloader Pistol"
            }
          ],
          hint: {
            text: "Use Inline Muzzleloader with .50 Conical Bullet or Muzzleloader Pistol with .50 Lead Bullet",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 male Rusa Deers at 100% Harvest Value",
            "Finally, harvest a charging Water Buffalo with any ethical Muzzleloader ammo"
          ],
        },
        {
          missionID: "m37-7",
          name: "Episode 7: The Phantom Rusa",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Rusa Deer within 5 minutes",
          ],
        },
        {
          missionID: "m37-8",
          name: "Episode 8: Revenge of the Rusa",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq1", "eq2", "eq3", "eq5", "eq6"],
              text: "Ground Blind, Tripod Stand, Tree Stand, Tower, Shooting Tripod"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "First, harvest an unspooked male Rusa Deer with a heartshot. Other organs may be hit",
            "Then, harvest an unspooked male Rusa Deer at under 20 meters while standing",
            "Finally, harvest an unspooked male Rusa Deer at 100% Harvest Value from a Treestand, Blind, Tripod Stand, Tower or Shooting Tripod"
          ],
        },
        {
          missionID: "m37-9",
          name: "Episode 9: The Rusa Awakens",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Rusa Deer with a heartshot at 30 meters or further with a score of 120 or higher. Other organs may be hit.",
          ],
        },
        {
          missionID: "m37-10",
          name: "Episode 10: The Last Rusa",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "This is only possible with a shotgun and buckshot ammo. Use a lure to bring two rusa deer (preferably females) come to the same spot so that they overlap. Then shot on chest level between both of them.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Kill two Rusa Deer at the same time with a single shot",
          ],
        },
      ],
    },
    {
      id: "m38",
      name: "Sambar Deer Missions",
      displayName: "Sambar Deer",
      animalID: "an41",
      filterArray: ["r12"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/sambar_deer.png",
      bgURL: "https://i.postimg.cc/BQQxkWM8/bc9b968c-1453-40ca-ae01-1cd5d929f8f7.jpg",
      missionsList: [
        {
          missionID: "m38-1",
          name: "Entering the Odd Zone",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID tracks from a Sambar Deer",
            "ID droppings from a Sambar Deer",
            "Identify a call from a Sambar Deer"
          ],
        },
        {
          missionID: "m38-2",
          name: "Sample Analysis",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Sambar Deers in the same hunt",
          ],
        },
        {
          missionID: "m38-3",
          name: "Second-Rate Results",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 male Sambar Deers at 100% Harvest Value in the same hunt",
          ],
        },
        {
          missionID: "m38-4",
          name: "Sambar Epidemic",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56"],
              text: "Heavy Recurve Bow or Recurve Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Sambar Deer using any Recurve Bow with one shot",
          ],
        },
        {
          missionID: "m38-5",
          name: "Inconclusive Results",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a male Sambar Deer",
            "Spot a female Sambar Deer",
            "After completing the first two objectives, harvest a Sambar Deer with a weight of 300 kg or higher at 100% Harvest Value"
          ],
        },
        {
          missionID: "m38-6",
          name: "Witchcraft? No. Science!",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "First, harvest a male Sambar Deer at 100% Harvest Value with a weight of 420 kg or higher",
            "Then, harvest a male Sambar Deer at 100% Harvest Value with a score of 180 or higher",
            "Then, harvest a female Sambar Deer at 100% Harvest Value with one shot",
            "Then, harvest a female Sambar Deer at 100% Harvest Value with a weight of 200 kg or lower",
            "Finally, harvest any Sambar Deer at 100% Harvest Value with any shotgun using Slug Shells"
          ],
        },
        {
          missionID: "m38-7",
          name: "Shoot for Your Life",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest two male Sambar Deer within 10 minutes of each harvest",
          ],
        },
        {
          missionID: "m38-8",
          name: "The Resistance",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Sambar Deer at 100% Harvest Value with a score of 177 or higher at under 40 meters",
            "Then, harvest a male Sambar Deer at 100% Harvest Value with a score of 188 or higher at under 30 meters",
            "Finally, harvest a male Sambar Deer at 100% Harvest Value with a score of 199 or higher at under 25 meters"
          ],
        },
        {
          missionID: "m38-9",
          name: "A Shocking Turn of Events",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq3"],
              text: "Tree Stand"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Sambar Deer at 100% Harvest Value at over 20 meters from a Tree Stand and in the same hunt",
            "Harvest a female Sambar Deer at 100% Harvest Value at over 30 meters from a Tree Stand and in the same hunt"
          ],
        },
        {
          missionID: "m38-10",
          name: "Patient Zero",
          earnings: "3600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 'Patient Zero' by the large beach north of Piccabeen Bay (X: 6.273, Y: 6.330) at over 100 meters (Approx. 328 feet) with 100% Harvest Value",
          ],
        },
      ],
    },
    {
      id: "m39",
      name: "Sitka Deer Missions",
      displayName: "Sitka Deer",
      animalID: "an42",
      filterArray: ["r10"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/sitka_deer.png",
      bgURL: "https://i.postimg.cc/SsCrSWMJ/fa6113a6-3064-45df-89c9-a14cfb9c251d.jpg",
      missionsList: [
        {
          missionID: "m39-1",
          name: "Theres Been a Disappearance",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify the call of a Sitka Deer",
          ],
        },
        {
          missionID: "m39-2",
          name: "Got What it Takes?",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify a set of footprints of a Sitka Deer",
            "Spot a Sitka Deer in the same hunt"
          ],
        },
        {
          missionID: "m39-3",
          name: "Dinnertime",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60"],
              text: "Use any bow or crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Sitka Deer with a weight less than 80 kg using any bow including crossbows",
          ],
        },
        {
          missionID: "m39-4",
          name: "Unexpected Visitor",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Sitka Deer with a weight less than 75 kg using any permitted ammunition",
            "Harvest another Sitka Deer with a weight less than 75 kg using any permitted ammunition"
          ],
        },
        {
          missionID: "m39-5",
          name: "The Smell of Fear",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60"],
              text: "Use any bow or crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Sitka Deer using any bow including crossbows at 100% Harvest Value",
            "Harvest another Sitka Deer using any bow including crossbows at 100% Harvest Value",
          ],
        },
        {
          missionID: "m39-6",
          name: "Full Moon",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify the call of a Sitka Deer",
            "Spot a Sitka Deer in the same hunt",
            "dentify droppings of a Sitka Deer in the same hunt",
            "Harvest a Sitka Deer buck with a score of at least 60 in the same hunt",
          ],
        },
        {
          missionID: "m39-7",
          name: "Sneaky Suspicions",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w42"],
              text: ".357 Revolver"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Sitka Deer using a .357 Revolver with no scope from a distance between 10-15 meters",
            "Harvest a Sitka Deer using a .357 Revolver with no scope from a distance between 20-25 meters",
            "Harvest a Sitka Deer using a .357 Revolver with no scope from a distance between 30-35 meters",
            "Harvest a Sitka Deer using a .357 Revolver with no scope from a distance between 40-45 meters"
          ],
        },
        {
          missionID: "m39-8",
          name: "The Legend of Afterland Lodge",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq2", "eq3"],
              text: "Use Treestand or Tripod"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "First: Start a hunt from Afterland Lodge in Whiterime Ridge",
            "Then: Harvest a Sitka Deer buck with a score of 50 or more from a Tree Stand or tripod",
            "Harvest another Sitka Deer buck with a score of 50 or more from a Tree Stand or tripod in the same hunt"
          ],
        },
        {
          missionID: "m39-9",
          name: "Stone Cold Heart",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Sitka Deer with a shot to the heart",
            "Harvest another Sitka Deer with a shot to the heart",
            "Harvest another Sitka Deer with a shot to the heart"
          ],
        },
        {
          missionID: "m39-10",
          name: "Blood Moon Rising",
          earnings: "3600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest the Sitka Deer, 'Wendigo' with a shotgun loaded with slugs in the northern forests of Whiterime Ridge near the frozen waterfall (X: -4167, Y: -11501)",
          ],
        },
      ],
    },
    {
      id: "m40",
      name: "Snow Goose Missions",
      displayName: "Snow Goose",
      animalID: "an43",
      filterArray: ["r10"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/snow_goose.png",
      bgURL: "https://i.postimg.cc/SsCrSWMJ/fa6113a6-3064-45df-89c9-a14cfb9c251d.jpg",
      missionsList: [
        {
          missionID: "m40-1",
          name: "When Snow Falls, Nature Listens",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID the call of a Snow Goose",
            "Then ID the droppings of a Snow Goose in the same hunt"
          ],
        },
        {
          missionID: "m40-2",
          name: "Geese of a Feather",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "Harvest the blue color goose after two others, or it will count against task 1 or 2. In that case you would need to shoot another blue one.",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Snow Goose",
            "Then harvest another airborne Snow Goose in the same hunt",
            "Then harvest an airborne Snow Goose (Blue color variation) in the same hunt"
          ],
        },
        {
          missionID: "m40-3",
          name: "Meat Market",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 airborne Snow Geese weighing at least 3.2 kg in the same hunt",
          ],
        },
        {
          missionID: "m40-4",
          name: "The Fat Of The Land",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 airborne Snow Geese scoring at least 3500 in the same hunt"
          ],
        },
        {
          missionID: "m40-5",
          name: "Let It Snow, Let It Snow, Let It Snow",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w34"],
              text: "12 GA Pump Action Shotgun"
            },
            {
              weapons: ["w40"],
              text: "20 GA Semi-Automatic Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 airborne Snow Geese using a 12 GA Single Shot Shotgun in the same hunt",
            "Harvest 3 airborne Snow Geese using a 12 GA Pump Action Shotgun in the same hunt",
            "Harvest 3 airborne Snow Geese using a 20 GA Semi-Automatic Shotgun in the same hunt"
          ],
        },
        {
          missionID: "m40-6",
          name: "Blind Call",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq4"],
              text: "Waterfowl Blind"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 airborne Snow Geese from a Waterfowl Blind at a maximum distance of 15 meter in the same hunt",
          ],
        },
        {
          missionID: "m40-7",
          name: "A Fox With An Eagle Eye",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Snow Goose from a minimum of 60 meters",
            "Harvest another airborne Snow Goose from a minimum of 70 meters in the same hunt",
            "Harvest another airborne Snow Goose from a minimum of 80 meters in the same hunt",
          ],
        },
        {
          missionID: "m40-8",
          name: "Catch .22",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w4", "w41"],
              text: "Use .22 Pistol or .22 Semi-Automatic Rifle Plinkington"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 airborne Snow Geese using a .22 ammo in the same hunt",
          ],
        },
        {
          missionID: "m40-9",
          name: "Snowflakes Are Kisses From Heaven",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Snow Goose under 15 meters without using a Waterfowl Blind",
          ],
        },
        {
          missionID: "m40-10",
          name: "A Bad Deed Written On Snow",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54"],
              text: "Use any compound bow:  Snakebite, Parker Python, Red Dragon or Pulsar"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Snow Goose (blue color variation) using any Compound Bow",
          ],
        },
      ],
    },
    {
      id: "m41",
      name: "Snowshoe Hare Missions",
      displayName: "Snowshoe Hare",
      animalID: "an44",
      filterArray: ["r10"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/snowshoe_hare.png",
      bgURL: "https://i.postimg.cc/SsCrSWMJ/fa6113a6-3064-45df-89c9-a14cfb9c251d.jpg",
      missionsList: [
        {
          missionID: "m41-1",
          name: "Smelly Evidence",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID droppings from a Snowshoe Hare",
            "ID more droppings from a Snowshoe Hare in the same hunt"
          ],
        },
        {
          missionID: "m41-2",
          name: "Finding the Intruder",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Snowshoe Hare",
            "Harvest a Snowshoe Hare",
          ],
        },
        {
          missionID: "m41-3",
          name: "By The Book",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest two Snowshoe Hares with 5 minutes of the first harvest",
          ],
        },
        {
          missionID: "m41-4",
          name: "Don't Save the Queens",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 female Snowshoe Hares"
          ],
        },
        {
          missionID: "m41-5",
          name: "Any Other Hare Around?",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot 5 Snowshoe Hares in the same hunt",
          ],
        },
        {
          missionID: "m41-6",
          name: "Something to Eat",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Snowshoe Hares weighing at least 1,3 kg in the same hunt",
          ],
        },
        {
          missionID: "m41-7",
          name: "Taking the Heirs",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 male Snowshoe Hares in the same hunt",
          ],
        },
        {
          missionID: "m41-8",
          name: "Foxtrot is Secured",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Find a set of Snowshoe Hare tracks",
            "Then find another set of Snowshoe Hare tracks in the same hunt",
            "Then ID droppings of a Snowshoe Hare in the same hunt",
            "Then spot a Snowshoe Hare in the same hunt",
            "Then harvest a Snowshoe Hare in the same hunt"
          ],
        },
        {
          missionID: "m41-9",
          name: "Careful with the Choke",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Snowshoe Hares using any 12GA Shotgun from a distance of at least 30 meters in the same hunt",
          ],
        },
        {
          missionID: "m41-10",
          name: "Something to Compensate With",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 male Snowshoe Hares scoring at least 1500",
          ],
        },
      ],
    },
    {
      id: "m42",
      name: "The Ducks Missions",
      displayName: "The Ducks",
      animalID: "an2",
      filterArray: ["r7"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/2b/American_black_duck_male_common.png",
      bgURL: "https://i.postimg.cc/rpT72FbG/69febbf3-bfcf-42ad-a662-dbc57c0f678d.jpg",
      missionsList: [
        {
          missionID: "m42-1",
          name: "First Audition",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Mallard",
            "Spot an American Black Duck",
            "Spot a Northern Pintail",
            "Spot a Gadwall"
          ],
        },
        {
          missionID: "m42-2",
          name: "The Soprano",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne female Northern Pintail",
            "Harvest an airborne male Northern Pintail in the same uhnt",
          ],
        },
        {
          missionID: "m42-3",
          name: "The Baritone",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w37"],
              text: "12 GA Blaser F3 Game O/U Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 airborne American Black Ducks with a 12 GA Blaser F3 Game O/U Shotgun in the same hunt",
            "Harvest 3 airborne Mallards with a 12 GA Blaser F3 Game O/U Shotgun in the same hunt"
          ],
        },
        {
          missionID: "m42-4",
          name: "Sprechgesang",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Gadwall from a maximum distance of 20 meters"
          ],
        },
        {
          missionID: "m42-5",
          name: "Backing Vocals",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w40"],
              text: "20 GA Semi-Automatic Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 airborne Mallards with a 20 GA Semi-Automatic Shotgun",
            "Harvest 3 airborne American Black Ducks with a 20 GA Semi-Automatic Shotgun",
            "Harvest 3 airborne Northern Pintails with a 20 GA Semi-Automatic Shotgun",
            "Harvest 3 airborne Gadwalls with a 20 GA Semi-Automatic Shotgun",
          ],
        },
        {
          missionID: "m42-6",
          name: "Resonating Bodies",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Mallard weighing at least 1.2 kg",
            "Harvest an airborne American Black Duck weighing at least 1.2 kg",
            "Harvest an airborne Northern Pintail weighing at least 1.0 kg",
            "Harvest an airborne Gadwall weighing at least 1.0 kg"
          ],
        },
        {
          missionID: "m42-7",
          name: "Bird Rights",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Register an audio clue of a Mallard",
            "Register an audio clue of an American Black Duck",
            "Register an audio clue of a Northern Pintail",
            "Register an audio clue of a Gadwall",
            "Register an audio clue of a Canada Goose",
            "Register an audio clue of a Pheasant",
            "Register an audio clue of a Turkey",
            "Register an audio clue of a Rock Ptarmigan",
            "Register an audio clue of a Willow Ptarmigan"
          ],
        },
        {
          missionID: "m42-8",
          name: "Silencing the Critics",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Mallard with a single shot using any shotgun from a minimum distance of 45 meters",
            "Harvest an airborne American Black Duck with a single shot using any shotgun from a minimum distance of 45 meters",
            "Harvest an airborne Northern Pintail with a single shot using any shotgun from a minimum distance of 45 meters",
            "Harvest an airborne Gadwall with a single shot using any shotgun from a minimum distance of 45 meters"
          ],
        },
        {
          missionID: "m42-9",
          name: "Dress Rehearsal",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Mallard with a .22 Pistol without using a tower, stand, blind or shooting tripod rest",
            "Harvest an airborne American Black Duck with a .22 Pistol without using a tower, stand, blind or shooting tripod rest",
            "Harvest an airborne Northern Pintail with a .22 Pistol without using a tower, stand, blind or shooting tripod rest",
            "Harvest an airborne Gadwall with a .22 Pistol without using a tower, stand, blind or shooting tripod rest"
          ],
        },
        {
          missionID: "m42-10",
          name: "The Grand Premiere",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w5"],
              text: "Use .22 Air Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Mallard with the .22 Air Rifle",
            "Harvest an airborne Northern Pintail with the .22 Air Rifle",
            "Harvest an airborne American Black Duck with the .22 Air Rifle",
            "Harvest an airborne Gadwall with the .22 Air Rifle"
          ],
        },
      ],
    },
    {
      id: "m43",
      name: "Turkey Missions",
      displayName: "Turkey",
      animalID: "an45",
      filterArray: ["r1", "r3"], // Reservati na kojim se nalazi
      missionPackValue: "11.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/turkey.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "m43-1",
          name: "Turkey Training",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Turkey",
          ],
        },
        {
          missionID: "m43-2",
          name: "Triple Turkey Tracker",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 male Turkeys",
          ],
        },
        {
          missionID: "m43-3",
          name: "Caruncle Crusher",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Take a male Turkey from under 9.144m",
          ],
        },
        {
          missionID: "m43-4",
          name: "Longbeard",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Turkey with a beard length of at least 3 inches"
          ],
        },
        {
          missionID: "m43-5",
          name: "The Bearded Lady",
          earnings: "500",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Turkey hen with a beard",
          ],
        },
        {
          missionID: "m43-6",
          name: "I Got Spurs",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Turkey with a set of 1/2 inch spurs or more",
          ],
        },
        {
          missionID: "m43-7",
          name: "Turkey Special",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Turkey with a weight of at least 9.072kg",
          ],
        },
        {
          missionID: "m43-8",
          name: "Eagle Eye",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot 3 Turkeys in the same hunt",
          ],
        },
        {
          missionID: "m43-9",
          name: "I Believe I Can Fly",
          earnings: "1300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Turkeys from a Hunting Tower",
          ],
        },
        {
          missionID: "m43-10",
          name: "Tommy Gunned",
          earnings: "2000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w36"],
              text: "12 GA Side By Side Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 male Turkeys using the SxS Shotgun",
          ],
        },
        {
          missionID: "m43-11",
          name: "Too many numbers...",
          earnings: "3800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w41"],
              text: ".22 Pistol"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 male Turkeys, with a .22 Pistol, from 13.5m or less",
          ],
        },
      ],
    },
    {
      id: "m44",
      name: "Water Buffalo Missions",
      displayName: "Water Buffalo",
      animalID: "an46",
      filterArray: ["r12"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/water_buffalo.png",
      bgURL: "https://i.postimg.cc/BQQxkWM8/bc9b968c-1453-40ca-ae01-1cd5d929f8f7.jpg",
      missionsList: [
        {
          missionID: "m44-1",
          name: "Where It All Began",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/9/9a/Piccabeen_lighthouse_mission.png",
            link: ""
          },
          goals: [
            "Visit Saint Pauli's Lighthouse (X: 7.553, Y: 8.725) in Piccabeen Bay",
          ],
        },
        {
          missionID: "m44-2",
          name: "Retracing Dawg's Steps",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID tracks or droppings from a Water Buffalo",
            "Spot a Water Buffalo",
          ],
        },
        {
          missionID: "m44-3",
          name: "In the Swamps, They Roam",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31",
                "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Water Buffalo",
            "Harvest a female Water Buffalo"
          ],
        },
        {
          missionID: "m44-4",
          name: "Honorary Horns",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31",
                "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an unspooked Water Buffalo with a score of 180 or higher"
          ],
        },
        {
          missionID: "m44-5",
          name: "Brute Force Required",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31",
                "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a charging Water Buffalo",
          ],
        },
        {
          missionID: "m44-6",
          name: "So Many Horns, So Little Time",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31",
                "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 male Water Buffalos in the same hunt",
          ],
        },
        {
          missionID: "m44-7",
          name: "The Bigger They Are, The Harder They Fall",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w17"],
              text: ".340 Weatherby Magnum Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "First, harvest an unspooked Water Buffalo with a weight of 700 kg or higher using the .340 Weatherby Magnum Bolt Action Rifle",
            "Then, harvest another unspooked Water Buffalo but with a weight of 900 kg or higher using the .340 Weatherby Magnum Bolt Action Rifle"
          ],
        },
        {
          missionID: "m44-8",
          name: "Stand Tall and Fear Nothing",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31",
                "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a charging Water Buffalo with a score of 200 or higher while standing",
          ],
        },
        {
          missionID: "m44-9",
          name: "Even Small Fries Can Pack a Punch",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w45"],
              text: ".454 Revolver"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Water Buffalo with one shot using any .454 Revolver",
          ],
        },
        {
          missionID: "m44-10",
          name: "A New Legend is Born",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31",
                "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest the 'Ravager Buffalo' by the large beach north of Piccabeen Bay (X: 6.273, Y: 6.330) at under 10 meters (Approx. 32 feet) while it's charging",
          ],
        },
      ],
    },
    {
      id: "m45",
      name: "Whitetail Deer Missions",
      displayName: "Whitetail Deer",
      animalID: "an47",
      filterArray: ["r1", "r2", "r3", "r4", "r7"], // Reservati na kojim se nalazi
      missionPackValue: "17.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/whitetail_deer.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "m45-1",
          name: "Track a Whitetail Deer",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Locate 3 Whitetail Deer tracks from the same animal",
          ],
        },
        {
          missionID: "m45-2",
          name: "Spot a Whitetail Deer",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Whitetail Deer",
          ],
        },
        {
          missionID: "m45-3",
          name: "Harvest a Whitetail Deer",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer",
          ],
        },
        {
          missionID: "m45-4",
          name: "Take a 8pt Whitetail Deer",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer buck with at least 8 typical points"
          ],
        },
        {
          missionID: "m45-5",
          name: "A Favor for a Friend",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer buck with at least 10 typical points",
          ],
        },
        {
          missionID: "m45-6",
          name: "Dinner for a Week",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Whitetail Deer bucks with a weight of at least 68kg",
          ],
        },
        {
          missionID: "m45-7",
          name: "Be Vewwy, Vewwy Qwiet",
          earnings: "500",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer Buck, from under 46m",
          ],
        },
        {
          missionID: "m45-8",
          name: "The Long Shot",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Take a Whitetail Deer buck with at least 8 typical points from 115m or more",
          ],
        },
        {
          missionID: "m45-9",
          name: "A Cull",
          earnings: "700",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Whitetail Deer does",
          ],
        },
        {
          missionID: "m45-10",
          name: "The Spotter, Pt. 1",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Whitetail Deer buck from a Hunting Tower",
            "Spot a Whitetail Deer doe from a Hunting Tower"
          ],
        },
        {
          missionID: "m45-11",
          name: "The Spotter, Pt. 2",
          earnings: "800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer from a Hunting Tower",
          ],
        },
        {
          missionID: "m45-12",
          name: "Big Rack",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer with at least 12 typical points",
          ],
        },
        {
          missionID: "m45-13",
          name: "Big Score",
          earnings: "1300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Whitetail Deer with a score of 150 or more",
          ],
        },
        {
          missionID: "m45-14",
          name: "Big Rack, up close!",
          earnings: "1600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer buck with at least 12 typical points using a Shotgun with Buckshot ammo",
          ],
        },
        {
          missionID: "m45-15",
          name: "Shotgun Doe Cull",
          earnings: "2100",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 Whitetail Does using a Shotgun with Buckshot ammo",
          ],
        },
        {
          missionID: "m45-16",
          name: "Nice Sidearm...",
          earnings: "2600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w43"],
              text: ".44 Magnum Revolver"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest Whitetail Deer Buck using a .44 Magnum Revolver",
          ],
        },
        {
          missionID: "m45-17",
          name: "I'll give you a Buck for each...",
          earnings: "3800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w7"],
              text: ".270 Bolt Action Rifle"
            },
            {
              weapons: ["w19"],
              text: ".30-06 Lever Action Rifle"
            },
            {
              weapons: ["w8"],
              text: ".300 Bolt Action Rifle"
            },
            {
              weapons: ["w42"],
              text: ".357 Revolver"
            },
            {
              weapons: ["w43"],
              text: ".44 Revolver"
            },
            {
              weapons: ["w34"],
              text: "12 GA Pump Action Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Whitetail Deer using any .243 Rifle",
            "Harvest a male Whitetail Deer using any .270 Rifle",
            "Harvest a male Whitetail Deer using any .30-06 Lever Action Rifle",
            "Harvest a male Whitetail Deer using any .300 Rifle",
            "Harvest a male Whitetail Deer using a .357 Magnum",
            "Harvest a male Whitetail Deer using a .44 Magnum Revolver",
            "Harvest a male Whitetail Deer using any 12 GA Pump-Action Shotgun"
          ],
        },
      ],
    },
    {
      id: "m46",
      name: "Wild Boar Missions",
      displayName: "Wild Boar",
      animalID: "an49",
      filterArray: ["r5"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/wild_boar.png",
      bgURL: "https://i.postimg.cc/fbWdWb1M/1Q8E8Rr9.jpg",
      missionsList: [
        {
          missionID: "m46-1",
          name: "An Old Acquaintance",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID a set of Wild Boar tracks",
            "ID Wild Boar droppings"
          ],
        },
        {
          missionID: "m46-2",
          name: "Boared to Death",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot a Wild Boar",
            "Harvest a Wild Boar",
          ],
        },
        {
          missionID: "m46-3",
          name: "Three Little Piggies",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 Wild Boars in the same hunt",
          ],
        },
        {
          missionID: "m46-4",
          name: "Mother's Day",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Wild Boar of at least 181.437 kg and with at least an 800 point score"
          ],
        },
        {
          missionID: "m46-5",
          name: "Family Values",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq2"],
              text: "Tripod Stand"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Wild Boars using a Tripod Stand",
          ],
        },
        {
          missionID: "m46-6",
          name: "It's Lützen All Over Again",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w48"],
              text: ".50 Cap Lock Muzzleloader"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 4 Wild Boars using a .50 Cap Lock Muzzleloader in the same hunt",
          ],
        },
        {
          missionID: "m46-7",
          name: "Up Close and Personal",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Wild Boar from under 27.43m without using a stand",
            "Harvest a female Wild Boar from under 27.43m without using a stand"
          ],
        },
        {
          missionID: "m46-8",
          name: "Old School",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w60"],
              text: "Tenpoint Carbon Fusion Crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 Wild Boars using a Tenpoint Carbon Fusion Crossbow",
          ],
        },
        {
          missionID: "m46-9",
          name: "Older School",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56"],
              text: "Heavy Recurve Bow or Recurve Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 female Wild Boars using a Recurve Bow",
          ],
        },
        {
          missionID: "m46-10",
          name: "There Can Be Only One",
          earnings: "3600",
          singleplayer: true,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "The hog will spawn and move around, so get to the site as soon as you can. The easiest is if you place a tent nearby and start your session there. The tower at these coordinates can be found here",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/5/5a/Wb_mission10_hint.png",
            link: ""
          },
          goals: [
            "Harvest the Dark Wild Boar near the southern Hunting Tower in Hirschfelden (X:8711, Y:1487)",
          ],
        },
      ],
    },
    {
      id: "m47",
      name: "Wood Grouse Missions",
      displayName: "Wood Grouse",
      animalID: "an51",
      filterArray: ["r5", "r6", "r8"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.thehunter.com/static/img/statistics/wood_grouse.png",
      bgURL: "https://i.postimg.cc/1RCNdqkM/output.jpg",
      missionsList: [
        {
          missionID: "m47-1",
          name: "A New Menace",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID 3 tracks from a Wood Grouse",
          ],
        },
        {
          missionID: "m47-2",
          name: "Sound It Out",
          earnings: "200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID an audio clue from a Wood Grouse",
          ],
        },
        {
          missionID: "m47-3",
          name: "Priorities",
          earnings: "300",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Wood Grouse",
          ],
        },
        {
          missionID: "m47-4",
          name: "Fair Division",
          earnings: "400",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 3 male Wood Grouse"
          ],
        },
        {
          missionID: "m47-5",
          name: "Checking Skirts",
          earnings: "600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest any airborne female Ptarmigan",
            "Harvest an airborne female Wood Grouse"
          ],
        },
        {
          missionID: "m47-6",
          name: "A Shot in the Dark",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 male Wood Grouse weighing less than 5.5 kg",
          ],
        },
        {
          missionID: "m47-7",
          name: "Sizing Up",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Wood Grouse weighing more than 5.5kg from more than 30m",
            "Harvest another male Wood Grouse weighing more than 5.5kg from more than 40m"
          ],
        },
        {
          missionID: "m47-8",
          name: "Student and Master",
          earnings: "1200",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60", "w61"],
              text: "Use any Bow, crossbow or crossbow pistol"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID any clue (footprints, droppings, or audio) from a Wood Grouse",
            "Spot a Wood Grouse",
            "Harvest a male Wood Grouse with any bow or crossbow",
            "Harvest a female Wood Grouse with any bow or crossbow"
          ],
        },
        {
          missionID: "m47-9",
          name: "Process of Elimination",
          earnings: "1800",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest 2 male Wood Grouse with any 12 GA Shotgun in Hirschfelden",
            "Harvest 2 male Wood Grouse with any 12 GA Shotgun in Hemmeldal",
            "Harvest 2 male Wood Grouse with any 12 GA Shotgun in Val-des-Bois",
          ],
        },
        {
          missionID: "m47-10",
          name: "The Drumstick Challenge",
          earnings: "3600",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w1", "w2"],
              text: ".223 Bolt Action Rifle or .223 Semi-Automatic Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne male Wood Grouse scoring more than 6300 using .223 ammunition from more than 50m",
          ],
        },
      ],
    },
    // reserves
    {
      id: "r1a",
      name: "Whiteheart Sightseeing Missions",
      displayName: "Whiteheart Sightseeing",
      animalID: "r1",
      filterArray: ["r1"], // Reservati na kojim se nalazi
      missionPackValue: "1.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/a/a5/Whitehart_icon.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "r1a-1",
          name: "Sightseer",
          earnings: "100",
          singleplayer: false,
          sameHunt: false,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/e/e3/Mission_sightseer.jpg",
            link: ""
          },
          goals: [
            "Walk through Boulder Pass",
            "Visit the Awi'Usdi Stones",
            "Visit Forest Lake"
          ],
        },
        {
          missionID: "r1a-2",
          name: "North to South",
          earnings: "150",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "All objectives must be completed during one expedition",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/2c/Mission_nts_taba.jpg",
            link: ""
          },
          goals: [
            "Start from the Causeway Lodge",
            "Arrive at the South Cliff Lodge"
          ],
        },
        {
          missionID: "r1a-3",
          name: "The Campsite",
          earnings: "250",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/c5/Mission_thecampsite.jpg",
            link: ""
          },
          goals: [
            "Visit the Campsite",
          ],
        },
        {
          missionID: "r1a-4",
          name: "There and Back Again",
          earnings: "500",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "All objectives must be completed during one expedition",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/2c/Mission_nts_taba.jpg",
            link: ""
          },
          goals: [
            "Start from the Causeway Lodge",
            "Make it to the South Cliff Lodge",
            "Arrive back at the Causeway Lodge"
          ],
        },
      ],
    },
    {
      id: "r1b",
      name: "Whiteheart Travel Missions",
      displayName: "Whiteheart Travel",
      animalID: "r1",
      filterArray: ["r1"], // Reservati na kojim se nalazi
      missionPackValue: "10.700gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/a/a5/Whitehart_icon.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "r1b-1",
          name: "Tracking The Southern Movement",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/1/1d/Wh_mission_1.png",
            link: ""
          },
          goals: [
            "Start at South Cliff Lodge in Whitehart Island",
            "Then arrive at Tower 18 (x -13913, y 8529) in the same hunt",
            "Then arrive at Tower 16 (x -14256, y 8799) in the same hunt",
            "Then arrive at Tower 13 (x -14189, y 8111) in the same hunt",
            "Then arrive at Tower 15 (x -14615, y 7637) in the same hunt",
            "At any point during the same hunt, ID tracks from a Roosevelt Elk",
            "At any point during the same hunt, ID more tracks from a Roosevelt Elk",
            "At any point during the same hunt, ID an audio clue from a Roosevelt Elk",
            "At any point during the same hunt, spot a Roosevelt Elk"
          ],
        },
        {
          missionID: "r1b-2",
          name: "Tracking The Northern Movement",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/1/1c/Wh_mission_2.png",
            link: ""
          },
          goals: [
            "Start at the Causeway Lodge in Whitehart Island",
            "Then arrive at Tower 1 (x -13888, y 3352) in the same hunt",
            "Then arrive at Tower 11 (x -14437, y 3334) in the same hunt",
            "Then arrive at Tower 8 (x -13918, y 3903) in the same hunt",
            "At any point during the same hunt, ID an audio clue from a Roosevelt Elk",
            "At any point during the same hunt, ID one more audio clue from another Roosevelt Elk",
            "At any point during the same hunt, ID tracks from a Roosevelt Elk",
            "At any point during the same hunt, ID droppings from a Roosevelt Elk",
            "At any point during the same hunt, spot a Roosevelt Elk"
          ],
        },
        {
          missionID: "r1b-3",
          name: "Removing The Competition",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/c7/Wh_mission_3.png",
            link: ""
          },
          goals: [
            "Start at the Causeway Lodge in Whitehart Island",
            "Then arrive at Tower 8 (x -13918, y 3903) in the same hunt",
            "Then arrive at Tower 12 (x -13836, y 5038) in the same hunt",
            "Then arrive at Tower 4 (x -13513, y 4753) in the same hunt",
            "Then arrive at Tower 3 (x -13471, y 4441) in the same hunt",
            "Then arrive at Tower 2 (x -13389, y 4024) in the same hunt",
            "At any point during the same hunt, harvest a Blacktail Deer",
            "At any point during the same hunt, harvest a Coyote",
            "At any point during the same hunt, harvest a Turkey",
            "At any point during the same hunt, harvest another Blacktail Deer"
          ],
        },
        {
          missionID: "r1b-4",
          name: "Removing The Rest Of The Competition",
          earnings: "500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/8e/Wh_mission_4.png",
            link: ""
          },
          goals: [
            "Start at South Cliff Lodge in Whitehart Island",
            "Then arrive at Tower 13 (x -14189, y 8111) in the same hunt",
            "Then arrive at Tower 15 (x -14615, y 7637) in the same hunt",
            "Then arrive at Tower 9 (x -14015, y 6837) in the same hunt",
            "Then arrive at Tower 19 (x -13594, y 7302) in the same hunt",
            "At any point during the same hunt, harvest a Coyote",
            "At any point during the same hunt, harvest a Whitetail Deer",
            "At any point during the same hunt, harvest a second Whitetail Deer",
            "At any point during the same hunt, harvest a third Whitetail Deer"
          ],
        },
        {
          missionID: "r1b-5",
          name: "Investigate The Center",
          earnings: "700",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/5/52/Wh_mission_5.png",
            link: ""
          },
          goals: [
            "Start at the Causeway Lodge in Whitehart Island",
            "Then arrive at Tower 8 (x -13918, y 3903) in the same hunt",
            "Then arrive at Tower 6 (x -14478, y 5114) in the same hunt",
            "Then arrive at Tower 17 (x -13928, y 6285) in the same hunt",
            "Then arrive at Tower 12 (x -13836, y 5038) in the same hunt",
            "At any point during the same hunt, ID dropping from a Roosevelt Elk",
            "At any point during the same hunt, ID an audio clue from a Roosevelt Elk",
            "At any point during the same hunt, ID tracks from a Roosevelt Elk",
            "At any point during the same hunt, ID more tracks from a Roosevelt Elk",
            "At any point during the same hunt, ID a third set of tracks from a Roosevelt Elk"
          ],
        },
        {
          missionID: "r1b-6",
          name: "Caring For The Weak",
          earnings: "1000",
          singleplayer: false,
          sameHunt: false,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w9", "w15", "w16"],
              text: "Use any Anschütz rifle"
            }
          ],
          hint: {
            text: "Note that these objectives do not need to be done in one hunt, but travel must be done in one hunt",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/f/f3/Wh_mission_6.png",
            link: ""
          },
          goals: [
            "Start at the Causeway Lodge in Whitehart Island",
            "Then arrive at Tower 2 (x -13389, y 4024)",
            "Then arrive at Tower 6 (x -14478, y 5114)",
            "Then arrive at Tower 17 (x -13928, y 6285)",
            "Then arrive at Tower 12 (x -13836, y 5038)",
            "At any point while in Whitehart Island, ID a clue from a Coyote",
            "At any point while in Whitehart Island, harvest a male Roosevelt Elk with a weight below 380kg killed with a single shot from any Anschütz rifle",
            "At any point while in Whitehart Island, harvest a female Roosevelt Elk with a weight below 270kg killed with a single shot from any Anschütz rifle",
            "At any point while in Whitehart Island, harvest another female Roosevelt Elk with a weight below 270kg killed with a single shot from any Anschütz rifle",
            "At any point while in Whitehart Island, ID a clue from a Roosevelt Elk"
          ],
        },
        {
          missionID: "r1b-7",
          name: "Making A Safe Return",
          earnings: "1300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/e/ea/Wh_mission_7.png",
            link: ""
          },
          goals: [
            "Start at the Causeway Lodge in Whitehart Island",
            "Then arrive at Tower 8 (x -13918, y 3903) in the same hunt",
            "Then arrive at the Awi'Usdi Stones in the same hunt",
            "Then arrive at Tower 6 (x -14478, y 5114) in the same hunt",
            "Then arrive at the Campsite in the same hunt",
            "At any point during the same hunt, ID an audio clue from a Coyote",
            "At any point during the same hunt, ID dropping from a Coyote",
            "At any point during the same hunt, ID tracks from a Coyote",
            "At any point during the same hunt, harvest 3 Coyotes killed by a 12 GA Single Shot Shotgun"
          ],
        },
        {
          missionID: "r1b-8",
          name: "Check For A Northern Return",
          earnings: "1600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w9", "w15", "w16"],
              text: "Use any Anschütz rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/a/a2/Wh_mission_8.png",
            link: ""
          },
          goals: [
            "Start at the Causeway Lodge in Whitehart Island",
            "Then arrive at Tower 5 (x -13651, y 3412) in the same hunt",
            "Then arrive at Tower 1 (x -13888, y 3352) in the same hunt",
            "Then arrive at Tower 11 (x -14437, y 3334) in the same hunt",
            "Then arrive at Tower 8 (x -13918, y 3903) in the same hunt",
            "Then arrive at the Awi'Usdi Stones in the same hunt",
            "At any point during the same hunt, ID an audio clue from a Roosevelt Elk",
            "At any point during the same hunt, ID tracks from a Roosevelt Elk",
            "At any point during the same hunt, ID more tracks from a Roosevelt Elk",
            "At any point during the same hunt, ID a clue from a Roosevelt Elk",
            "At any point during the same hunt, harvest a male Roosevelt Elk with a weight below 380 killed with a single shot from any Anschütz rifle"
          ],
        },
        {
          missionID: "r1b-9",
          name: "Check For A Southern Return",
          earnings: "2000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w13"],
              text: "7mm Magnum Bullpup Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/f/fa/Wh_mission_9.png",
            link: ""
          },
          goals: [
            "Start at South Cliff Lodge in Whitehart Island",
            "Then arrive at Tower 18 (x -13913, y 8529) in the same hunt",
            "Then arrive at Tower 16 (x -14256, y 8799) in the same hunt",
            "Then arrive at Tower 13 (x -14189, y 8111) in the same hunt",
            "Then arrive at Tower 15 (x -14615, y 7637) in the same hunt",
            "Then arrive at Tower 14 (x -15299, y 7723) in the same hunt",
            "At any point during the same hunt, ID an audio clue from a Roosevelt Elk",
            "At any point during the same hunt, ID droppings from a Roosevelt Elk",
            "At any point during the same hunt, ID tracks from a Roosevelt Elk",
            "At any point during the same hunt, harvest a female Roosevelt Elk with a weight below 270 killed with a single shot from the 7mm Magnum Bullpup Rifle"
          ],
        },
        {
          missionID: "r1b-10",
          name: "Patrol The Island",
          earnings: "3000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w52"],
              text: "Compound Bow Parker Python"
            }
          ],
          hint: {
            text: "Note that these objectives do not need to be done in one hunt",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/1/1b/Wh_mission_10.png",
            link: ""
          },
          goals: [
            "Start at South Cliff Lodge in Whitehart Island.",
            "Then arrive at Tower 18 (x -13913, y 8529).",
            "Then arrive at Tower 13 (x -14189, y 8111).",
            "Then arrive at Tower 14 (x -15299, y 7723).",
            "Then arrive at Tower 19 (x -13594, y 7302).",
            "Then arrive at Tower 12 (x -13836, y 5038).",
            "Then arrive at Tower 3 (x -13471, y 4441).",
            "Then arrive at Tower 4 (x -13513, y 4753).",
            "Then arrive at Tower 2 (x -13389, y 4024).",
            "Then arrive at Tower 5 (x -13651, y 3412).",
            "Then arrive at Tower 1 (x -13888, y 3352).",
            "Then arrive at Tower 11 (x -14437, y 3334).",
            "Then arrive at Tower 10 (x -14735, y 3429).",
            "Then arrive at Tower 6 (x -14478, y 5114).",
            "Then arrive at the Awi'Usdi Stones.",
            "Then arrive at Tower 17 (x -13928, y 6285).",
            "At any point while in Whitehart Island, harvest a female Roosevelt Elk with a weight below 270 killed with a single arrow from the Compound Bow Parker Python.",
            "At any point while in Whitehart Island, harvest a Whitetail Deer.",
            "At any point while in Whitehart Island, harvest a Blacktail Deer.",
            "At any point while in Whitehart Island, harvest a Turkey.",
            "At any point while in Whitehart Island, harvest a Coyote."
          ],
        },
      ],
    },
    {
      id: "r3",
      name: " Settler Creeks Missions",
      displayName: "Settler Creeks Travel",
      animalID: "r3",
      filterArray: ["r3"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/0/08/Settler_Creeks_EW_icon.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "r3-1",
          name: "From The Left",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/e/e5/Sc_mission_1.png",
            link: ""
          },
          goals: [
            "Start from Highland Lodge in Settler Creeks.",
            "Then arrive at Tower 9 (x -8173, y 4723) in the same hunt.",
            "Then arrive at Tower 1 (x -8130, y 4344) in the same hunt.",
            "Then arrive at tower 11 (x -8275, y 4072) in the same hunt.",
            "At any point during the same hunt, ID any clue from a Feral Hog.",
            "At any point during the same hunt, harvest a male Feral Hog weighing at least 170kg."
          ],
        },
        {
          missionID: "r3-2",
          name: "Adding Deer To The Menu",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/5/5f/Sc_mission_2.png",
            link: ""
          },
          goals: [
            "Start from Homestead Lodge in Settler Creeks.",
            "Then arrive at Tower 10 (x -6200, y 4814) in the same hunt.",
            "Then arrive at Tower 6 (x -6494, y 4094) in the same hunt.",
            "Then arrive at Tower 8 (x -7085, y 3680) in the same hunt.",
            "At any point during the same hunt, harvest a Whitetail Deer"
          ],
        },
        {
          missionID: "r3-3",
          name: "Can't Handle The Success",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/1/15/Sc_mission_3.png",
            link: ""
          },
          goals: [
            "Start from Homestead Lodge in Settler Creeks.",
            "Then arrive at Tower 4 (x -6889, y 5005) in the same hunt.",
            "Then arrive at Tower 3 (x -7438, y 4984) in the same hunt.",
            "Then arrive at Fort David in the same hunt.",
            "Then arrive at Tower 5 (x -6582, y 6229) in the same hunt.",
            "At any point during the same hunt, ID any clue from a Roosevelt Elk.",
            "At any point during the same hunt, ID another clue from a Roosevelt Elk.",
            "At any point during the same hunt, harvest a Cottontail Rabbit"
          ],
        },
        {
          missionID: "r3-4",
          name: "Empty Bellies",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/45/Sc_mission_4.png",
            link: ""
          },
          goals: [
            "Start from Highland Lodge in Settler Creeks.",
            "Then arrive at Tower 2 (x -7583, y 4572) in the same hunt.",
            "Then arrive at Tower 3 (x -7438, y 4984) in the same hunt.",
            "At any point during the same hunt, ID an audio clue from a Roosevelt Elk.",
            "At any point during the same hunt, harvest a Roosevelt Elk.",
            "At any point during the same hunt, harvest another Roosevelt Elk."
          ],
        },
        {
          missionID: "r3-5",
          name: "Never Brief On An Empty Stomach",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/ca/Sc_mission_5.png",
            link: ""
          },
          goals: [
            "Start from Homestead Lodge in Settler Creeks.",
            "Then arrive at Tower 5 (x -6582, y 6229) in the same hunt.",
            "Then arrive at Fort David in the same hunt.",
            "Then arrive at Tower 4 (x -6889, y 5005) in the same hunt.",
            "At any point during the same hunt, ID any clue from a Black Bear.",
            "At any point during the same hunt, ID any clue from a Cottontail Rabbit.",
            "At any point during the same hunt, harvest a Cottontail Rabbit.",
            "At any point during the same hunt, harvest a Turkey.",
            "At any point during the same hunt, harvest another Turkey"
          ],
        },
        {
          missionID: "r3-6",
          name: "Back To Success",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w22"],
              text: "7mm Break-Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/45/Sc_mission_6.png",
            link: ""
          },
          goals: [
            "Start from Highland Lodge in Settler Creeks.",
            "Then arrive at Tower 2 (x -7583, y 4572) in the same hunt.",
            "Then arrive at Tower 3 (x -7438, y 4984) in the same hunt.",
            "Then arrive at Tower 4 (x -6889, y 5005) in the same hunt.",
            "Then arrive at Tower 10 (x -6200, y 4814) in the same hunt.",
            "At any point during the same hunt, ID an audio clue from a Roosevelt Elk.",
            "At any point during the same hunt, harvest a Roosevelt Elk with the 7mm Break-Action Rifle.",
            "At any point during the same hunt, harvest a Turkey."
          ],
        },
        {
          missionID: "r3-7",
          name: "Small Game Night",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58"],
              text: "Use any bow"
            }
          ],
          hint: {
            text: "Note that these objectives do not need to be done in one hunt.",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/ce/Sc_mission_7.png",
            link: ""
          },
          goals: [
            "Start from Highland Lodge in Settler Creeks.",
            "Then arrive at Tower 2 (x -7583, y 4572).",
            "Then arrive at Tower 7 (x -7150, y 4433).",
            "Then arrive at Tower 4 (x -6889, y 5005).",
            "Then arrive at Tower 6 (x -6494, y 4094).",
            "At any point while in Settler Creeks, ID an audio clue from a Whitetail Deer.",
            "At any point while in Settler Creeks, harvest a Whitetail Deer.",
            "At any point while in Settler Creeks, harvest a Turkey.",
            "At any point while in Settler Creeks, harvest another Turkey.",
            "At any point while in Settler Creeks, harvest a Cottontail Rabbit killed with any Bow*."
          ],
        },
        {
          missionID: "r3-8",
          name: "Tasty Bear",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w19"],
              text: ".30-06 Lever Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/b6/Sc_mission_8.png",
            link: ""
          },
          goals: [
            "Start from Highland Lodge in Settler Creeks.",
            "Then arrive at Tower 1 (x -8130, y 4344) in the same hunt.",
            "Then arrive at Tower 11 (x -8275, y 4072) in the same hunt.",
            "Then arrive at Tower 8 (x -7085, y 3680) in the same hunt.",
            "Then arrive at Tower 6 (x -6494, y 4094) in the same hunt.",
            "At any point during the same hunt, ID tracks from a Feral Hog.",
            "At any point during the same hunt, ID an audio clue from a Feral Hog.",
            "At any point during the same hunt, ID any clue from a Black Bear.",
            "At any point during the same hunt, harvest a Black Bear killed with a .30-06 Lever Action Rifle."
          ],
        },
        {
          missionID: "r3-9",
          name: "Preparing For The Feast",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54"],
              text: "Use any compound bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/b1/Sc_mission_9.png",
            link: ""
          },
          goals: [
            "Start at Homestead Lodge in Settler Creeks.",
            "Then arrive at Tower 5 (x -6582, y 6229) in the same hunt.",
            "Then arrive at Fort David in the same hunt.",
            "Then arrive at Tower 4 (x -6889, y 5005) in the same hunt.",
            "Then arrive at Tower 10 (x -6200, y 4814) in the same hunt.",
            "Then arrive at Tower 7 (x -7150, y 4433) in the same hunt.",
            "At any point during the same hunt, ID any clue from a Cottontail Rabbit.",
            "At any point during the same hunt, harvest a Cottontail Rabbit.",
            "At any point during the same hunt, ID any clue from a Whitetail Deer.",
            "At any point during the same hunt, harvest a Whitetail Deer killed with any Compound Bow.",
            "At any point during the same hunt, harvest a Roosevelt Elk."
          ],
        },
        {
          missionID: "r3-10",
          name: "Couples Dinner",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w13"],
              text: "7mm Magnum Bullpup Rifle"
            }
          ],
          hint: {
            text: "Note that these objectives do not need to be done in one hunt",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/9/9b/Sc_mission_10.png",
            link: ""
          },
          goals: [
            "Start at Homestead Lodge in Settler Creeks.",
            "Then arrive at Tower 5 (x -6582, y 6229).",
            "Then arrive at Fort David.",
            "Then arrive at Sergeant's Rest Campsite.",
            "Then arrive at Tower 9 (x -8173, y 4723).",
            "Then arrive at Tower 1 (x -8130, y 4344).",
            "Then arrive at Tower 11 (x -8275, y 4072).",
            "Then arrive at Tower 8 (x -7085, y 3680).",
            "Then arrive at Tower 6 (x -6494, y 4094).",
            "Then arrive at Tower 10 (x -6200, y 4814).",
            "Then arrive at Tower 4 (x -6889, y 5005).",
            "At any point while in Settler Creeks, harvest a Cottontail Rabbit.",
            "At any point while in Settler Creeks, harvest a Feral Hog killed with the 7mm Magnum Bullpup Rifle.",
            "At any point while in Settler Creeks, ID droppings from a Black Bear.",
            "At any point while in Settler Creeks, ID tracks from a Black Bear.",
            "At any point while in Settler Creeks, harvest a male Black Bear.",
            "At any point while in Settler Creeks, harvest a female Black Bear.",
            "At any point while in Settler Creeks, harvest a Whitetail Deer.",
            "At any point while in Settler Creeks, harvest a Roosevelt Elk."
          ],
        },
      ],
    },
    {
      id: "r4",
      name: "Redfeather Falls Missions",
      displayName: "Redfeather Falls Travel",
      animalID: "r4",
      filterArray: ["r4"], // Reservati na kojim se nalazi
      missionPackValue: "10.700gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/bc/RFF_icon2.png",
      bgURL: "https://i.postimg.cc/7ZZx892Y/1962ea2d-0595-4b0e-bd3f-5396ce20c84d.jpg",
      missionsList: [
        {
          missionID: "r4-1",
          name: "A Dirty Job",
          earnings: "100",
          singleplayer: true,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/3/35/RFF_missions_1.png",
            link: ""
          },
          goals: [
            "Start at Darkwood Lodge in Redfeather Falls.",
            "Then arrive at Tower 4 (x -10023, y -2535) in the same hunt.",
            "Then arrive at the old tree stand (that the locals for some reason call Tower 6, x -10176, y -3696) in the same hunt.",
            "Then arrive at The Crater (x -11265, y -4000) in the same hunt.",
            "At any point during the same hunt, ID droppings from a Roosevelt Elk.",
            "At any point during the same hunt, ID more droppings from a Roosevelt Elk.",
            "At any point during the same hunt, ID droppings from a Blacktail Deer."
          ],
        },
        {
          missionID: "r4-2",
          name: "Dropping dropping dropping",
          earnings: "200",
          singleplayer: true,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/40/RFF_missions_2.png",
            link: ""
          },
          goals: [
            "Start at Trapper's Rest Lodge in Redfeather Falls.",
            "Then arrive at Tower 3 (x -10957, y -1741) in the same hunt.",
            "Then arrive at Tower 2 (x -12115, y -1979) in the same hunt.",
            "At any point during the same hunt, ID droppings from a Whitetail Deer.",
            "At any point during the same hunt, ID droppings from a Moose.",
            "At any point during the same hunt, ID droppings from a Black Bear."
          ],
        },
        {
          missionID: "r4-3",
          name: "A Mess",
          earnings: "300",
          singleplayer: true,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/5/5a/RFF_missions_3.png",
            link: ""
          },
          goals: [
            "Start at Darkwood Lodge in Redfeather Falls.",
            "Then arrive at The Crater (x -11265, y -4000) in the same hunt.",
            "Then arrive at The Lonely Creek (x -10746, y -5436) in the same hunt.",
            "Then arrive at Peak Forest (x -12263, y -6367) in the same hunt.",
            "At any point during the same hunt, ID droppings from a Moose.",
            "At any point during the same hunt, ID droppings from a Roosevelt Elk.",
            "At any point during the same hunt, ID droppings from a Blacktail Deer.",
            "At any point during the same hunt, ID droppings from a Black Bear."
          ],
        },
        {
          missionID: "r4-4",
          name: "Thinning Out The Population: Roosevelt Elk",
          earnings: "500",
          singleplayer: true,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/a/aa/RFF_missions_4.png",
            link: ""
          },
          goals: [
            "Start at Darkwood Lodge in Redfeather Falls.",
            "Then arrive at Tower 6 (x -10176, y -3696) in the same hunt.",
            "Then arrive at Tower 4 (x -10023, y -2535) in the same hunt.",
            "At any point during the same hunt, harvest a Roosevelt Elk.",
            "At any point during the same hunt, harvest a second Roosevelt Elk.",
            "At any point during the same hunt, harvest a third Roosevelt Elk.",
            "At any point during the same hunt, harvest a fourth Roosevelt Elk.",
            "At any point during the same hunt, harvest a fifth Roosevelt Elk."
          ],
        },
        {
          missionID: "r4-5",
          name: "Thinning Out The Population: Deer",
          earnings: "700",
          singleplayer: true,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/c2/RFF_missions_5.png",
            link: ""
          },
          goals: [
            "Start at Trapper's Rest Lodge in Redfeather Falls.",
            "Then arrive at Tower 2 (x -12115, y -1979) in the same hunt.",
            "Then arrive at Tower 1 (x -11806, y -2588) in the same hunt.",
            "Then arrive at The Crater (x -11265, y -4000) in the same hunt.",
            "At any point during the same hunt, harvest a Whitetail Deer.",
            "At any point during the same hunt, harvest a second Whitetail Deer.",
            "At any point during the same hunt, harvest a third Whitetail Deer.",
            "At any point during the same hunt, harvest a Blacktail Deer.",
            "At any point during the same hunt, harvest a second Blacktail Deer."
          ],
        },
        {
          missionID: "r4-6",
          name: "Thinning Out The Population: Moose and Bears",
          earnings: "1000",
          singleplayer: true,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w22"],
              text: "7mm Break-Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/7/70/RFF_missions_6.png",
            link: ""
          },
          goals: [
            "Start at Trapper's Rest Lodge in Redfeather Falls.",
            "Then arrive at The Crater (x -11265, y -4000) in the same hunt.",
            "Then arrive at The Lonely Creek (x -10746, y -5436) in the same hunt.",
            "Then arrive at Peak Forest (x -12263, y -6367) in the same hunt.",
            "At any point during the same hunt, harvest a Black Bear killed with any 7mm Break Action Rifle.",
            "At any point during the same hunt, harvest a Moose.",
            "At any point during the same hunt, harvest a second Moose.",
            "At any point during the same hunt, harvest a third Moose.",
            "At any point during the same hunt, harvest a second Black Bear killed with any 7mm Break Action Rifle."
          ],
        },
        {
          missionID: "r4-7",
          name: "Check The Situation",
          earnings: "1300",
          singleplayer: true,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w13", "w22"],
              text: "7mm Magnum Bullpup Rifle, 7mm Magnum Break Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/d/da/RFF_missions_7.png",
            link: ""
          },
          goals: [
            "Start at Trapper's Rest Lodge in Redfeather Falls.",
            "Then arrive at Tower 3 (x -10957, y -1741) in the same hunt.",
            "Then arrive at Tower 4 (x -10023, y -2535) in the same hunt.",
            "Then arrive at Tower 6 (x -10176, y -3696) in the same hunt.",
            "At any point during the same hunt, ID a clue from a Whitetail Deer.",
            "At any point during the same hunt, ID an audio clue from a Moose.",
            "At any point during the same hunt, spot a Moose.",
            "At any point during the same hunt, harvest a Moose killed with 7mm ammunition.",
            "At any point during the same hunt, spot a Whitetail Deer.",
            "At any point during the same hunt, ID droppings from a Blacktail Deer.",
            "At any point during the same hunt, ID tracks from a Blacktail Deer.",
            "At any point during the same hunt, harvest a Blacktail Deer killed with 7mm ammunition."
          ],
        },
        {
          missionID: "r4-8",
          name: "Calming Down",
          earnings: "1600",
          singleplayer: true,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w48"],
              text: ".50 Cap Lock Muzzleloader"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/bc/RFF_missions_8.png",
            link: ""
          },
          goals: [
            "Start at Darkwood Lodge in Redfeather Falls.",
            "Then arrive at Tower 6 (x -10176, y -3696) in the same hunt.",
            "Then arrive at The Crater (x -11265, y -4000) in the same hunt.",
            "Then arrive at Tower 1 (x -11806, y -2588) in the same hunt.",
            "At any point during the same hunt, harvest a Roosevelt Elk.",
            "At any point during the same hunt, harvest a Moose.",
            "At any point during the same hunt, harvest a Blacktail Deer.",
            "At any point during the same hunt, harvest a Whitetail Deer.",
            "At any point during the same hunt, harvest a Black Bear killed with the .50 Cap Lock Muzzleloader."
          ],
        },
        {
          missionID: "r4-9",
          name: "Last Drop(ings)",
          earnings: "2000",
          singleplayer: true,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w60"],
              text: "Tenpoint Carbon Fusion Crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/2a/RFF_missions_9.png",
            link: ""
          },
          goals: [
            "Start at Darkwood Lodge in Redfeather Falls.",
            "Then arrive at Tower 6 (x -10176, y -3696) in the same hunt.",
            "Then arrive at The Lonely Creek (x -10746, y -5436) in the same hunt.",
            "At any point during the same hunt, ID dropping from a Roosevelt Elk.",
            "At any point during the same hunt, ID dropping from a Blacktail Deer.",
            "At any point during the same hunt, ID an audio clue from a Moose.",
            "At any point during the same hunt, ID dropping from a Moose.",
            "At any point during the same hunt, harvest a Moose killed with the Tenpoint Carbon Fusion Crossbow.",
            "At any point during the same hunt, ID dropping from a Black Bear.",
            "At any point during the same hunt, ID an audio clue from a Whitetail Deer."
          ],
        },
        {
          missionID: "r4-10",
          name: "The Oldies",
          earnings: "3000",
          singleplayer: true,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w34"],
              text: "12 GA Pump Action Shotgun"
            }
          ],
          hint: {
            text: "Note that these objectives do not need to be done in one hunt",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/2d/RFF_missions_10.png",
            link: ""
          },
          goals: [
            "Start at Darkwood Lodge in Redfeather Falls.",
            "Then arrive at Tower 6 (x -10176, y -3696).",
            "Then arrive at Tower 4 (x -10023, y -2535).",
            "Then arrive at Tower 3 (x -10957, y -1731).",
            "Then arrive at Tower 2 (x -12115, y -1979).",
            "Then arrive at Crater (x -11265, y -4000).",
            "Then arrive at The Lonely Creek (x -10746, y -5436).",
            "Then arrive at Peak Forest (x -12263, y -6367).",
            "At any point while in Redfeather Falls, harvest a male Roosevelt Elk weighing at least 435 kg.",
            "At any point while in Redfeather Fallss, harvest a female Whitetail Deer weighing at least 51 kg.",
            "At any point while in Redfeather Falls, harvest a female Blacktail Deer weighing at least 51 kg.",
            "At any point while in Redfeather Falls, harvest a male Moose weighing at least 525 kg.",
            "At any point while in Redfeather Falls, harvest a male Black Bear weighing at least 220 kg killed by the 12 GA Pump Action Shotgun."
          ],
        },
      ],
    },
    {
      id: "r5",
      name: "Hirschfelden Missions",
      displayName: "Hirschfelden Travel",
      animalID: "r5",
      filterArray: ["r5"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/f/f0/Hirschfelden_icon.png",
      bgURL: "https://i.postimg.cc/fbWdWb1M/1Q8E8Rr9.jpg",
      missionsList: [
        {
          missionID: "r5-1",
          name: "Learn From The Land",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/23/HF_Mission_1.png",
            link: ""
          },
          goals: [
            "Start at Müllerwaldhütte in Hirschfelden.",
            "Then arrive at Tower 7 (x 9992, y -50) during the same hunt.",
            "Then arrive at Tower 5 (x 8814, y -1145) during the same hunt.",
            "At any point during the same hunt, ID any clue from a Pheasant.",
            "At any point during the same hunt, ID any clue from a Wild Boar.",
            "At any point during the same hunt, ID any clue from a Roe Deer."
          ],
        },
        {
          missionID: "r5-2",
          name: "Learn The Rest",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/5/59/HF_Mission_2.png",
            link: ""
          },
          goals: [
            "Start at Rittersteinhütte in Hirschfelden.",
            "Then arrive at Tower 1 (x 8711, y 1487) during the same hunt.",
            "Then arrive at Tower 6 (x 10186, y 1253) during the same hunt.",
            "At any point during the same hunt, ID any clue from a Red Deer.",
            "At any point during the same hunt, ID any clue from a Red Fox.",
            "At any point during the same hunt, Spot a Canada Goose."
          ],
        },
        {
          missionID: "r5-3",
          name: "The First Wurst",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/d/d8/HF_Mission_3.png",
            link: ""
          },
          goals: [
            "Start at Müllerwaldhütte in Hirschfelden.",
            "Then arrive at Tower 4 (x 8504, y -25) during the same hunt.",
            "Then arrive at Tower 2 (x 8849, y 335) during the same hunt.",
            "Then arrive at Tower 3 (x 9075, y 248) during the same hunt.",
            "Then arrive at Tower 1 (x 8711, y 1487) during the same hunt.",
            "At any point during the same hunt, harvest a Wild Boar.",
            "At any point during the same hunt, harvest another Wild Boar."
          ],
        },
        {
          missionID: "r5-4",
          name: "If At First You Fail",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/0/03/HF_Mission_4.png",
            link: ""
          },
          goals: [
            "Start at Rittersteinhütte in Hirschfelden.",
            "Then arrive at Tower 1 (x 8711, y 1487) during the same hunt.",
            "Then arrive at Tower 7 (x 9992, y -50) during the same hunt.",
            "Then arrive at Tower 6 (x 10186, y 1253) during the same hunt.",
            "At any point during the same hunt, ID tracks of a Red Deer.",
            "At any point during the same hunt, harvest a Canada Goose."
          ],
        },
        {
          missionID: "r5-5",
          name: "Third Times The Charm",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/22/HF_Mission_5.png",
            link: ""
          },
          goals: [
            "Start at Müllerwaldhütte in Hirschfelden.",
            "Then arrive at Tower 7 (x 9992, y -50) during the same hunt.",
            "Then arrive at Tower 5 (x 8814, y -1145) during the same hunt.",
            "Then arrive at Tower 4 (x 8504, y -25) during the same hunt.",
            "At any point during the same hunt, ID droppings from a Wild Boar.",
            "At any point during the same hunt, ID more droppings from a Wild Boar.",
            "At any point during the same hunt, harvest a Wild Boar.",
            "At any point during the same hunt, harvest a Canada Goose."
          ],
        },
        {
          missionID: "r5-6",
          name: "Cleanse The Boars",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/c8/HF_Mission_6.png",
            link: ""
          },
          goals: [
            "Start at Müllerwaldhütte in Hirschfelden.",
            "Then arrive at Tower 7 (x 9992, y -50) during the same hunt.",
            "Then arrive at Tower 6 (x 10186, y 1253) during the same hunt.",
            "Then arrive at Tower 3 (x 9075, y 248) during the same hunt.",
            "At any point during the same hunt, harvest an airborne Pheasant killed with any Shotgun.",
            "At any point during the same hunt, harvest a second airborne Pheasant killed with any Shotgun.",
            "At any point during the same hunt, harvest a third airborne Pheasant killed with any Shotgun.",
            "At any point during the same hunt, harvest a fourth airborne Pheasant killed with any Shotgun.",
            "At any point during the same hunt, harvest a fifth airborne Pheasant killed with any Shotgun."
          ],
        },
        {
          missionID: "r5-7",
          name: "Red Is The Key",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w57"],
              text: "Longbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/a/a5/HF_Mission_7.png",
            link: ""
          },
          goals: [
            "Start at Rittersteinhütte in Hirschfelden.",
            "Then arrive at Tower 1 (x 8711, y 1487) during the same hunt.",
            "Then arrive at Tower 2 (x 8849, y 335) during the same hunt.",
            "Then arrive at Tower 3 (x 9075, y 248) during the same hunt.",
            "At any point during the same hunt, ID droppings from a Red Deer.",
            "At any point during the same hunt, ID droppings from a Red Fox.",
            "At any point during the same hunt, harvest a Red Fox killed with a Longbow."
          ],
        },
        {
          missionID: "r5-8",
          name: "Mixing It Up",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w15"],
              text: "8x57 IS Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/81/HF_Mission_8.png",
            link: ""
          },
          goals: [
            "Start at Mullerwaldhütte in Hirschfelden.",
            "Then arrive at Tower 7 (x 9992, y -50) during the same hunt.",
            "Then arrive at Tower 6 (x 10186, y 1253) during the same hunt.",
            "Then arrive at Tower 3 (x 9075, y 248) during the same hunt.",
            "Then arrive at Tower 4 (x 8504, y -25) during the same hunt.",
            "At any point during the same hunt, harvest a Pheasant.",
            "At any point during the same hunt, harvest a Canada Goose.",
            "At any point during the same hunt, harvest a Roe Deer killed with a 8x57 IS Anschütz 1780 D FL Bolt Action Rifle.",
            "At any point during the same hunt, harvest a Red Deer."
          ],
        },
        {
          missionID: "r5-9",
          name: "Double Deer Wurst",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w37"],
              text: "12 GA Blaser F3 Game O/U Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/8a/HF_Mission_9.png",
            link: ""
          },
          goals: [
            "Start at Rittersteinhütte in Hirschfelden.",
            "Then arrive at Tower 2 (x 8849, y 335) during the same hunt.",
            "Then arrive at Tower 4 (x 8504, y -25) during the same hunt.",
            "Then arrive at Tower 7 (x 9992, y -50) during the same hunt.",
            "At any point during the same hunt, ID an audio clue from a Roe Deer.",
            "At any point during the same hunt, harvest a Roe Deer.",
            "At any point during the same hunt, ID an audio clue from a Red Deer.",
            "At any point during the same hunt, harvest a Red Deer killed with a 12 GA Blaser F3 Game O/U Shotgun.",
            "At any point during the same hunt, ID an audio clue from a Wild Boar.",
            "At any point during the same hunt, harvest a Wild Boar."
          ],
        },
        {
          missionID: "r5-10",
          name: "A Wurst To Remember",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w46"],
              text: ".308 Handgun"
            }
          ],
          hint: {
            text: "Note that these objectives do not need to be done in one hunt",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/45/HF_Mission_10.png",
            link: ""
          },
          goals: [
            "Start at Müllerwaldhütte in Hirschfelden.",
            "Then arrive at Tower 5 (x 8814, y -1145).",
            "Then arrive at Tower 4 (x 8504, y -25).",
            "Then arrive at Tower 3 (x 9075, y 248).",
            "Then arrive at Tower 1 (x 8711, y 1487).",
            "Then arrive at Tower 6 (x 10186, y 1253).",
            "At any point while in Hirschfelden, harvest a Wild Boar killed with .308 Handgun",
            "At any point while in Hirschfelden, harvest a Pheasant.",
            "At any point while in Hirschfelden, harvest a Red Deer.",
            "At any point while in Hirschfelden, harvest a Roe Deer.",
            "At any point while in Hirschfelden, harvest a Red Fox.",
            "At any point while in Hirschfelden, harvest a Canada Goose."
          ],
        },
      ],
    },
    {
      id: "r6",
      name: "Hemmeldal Missions",
      displayName: "Hemmeldal Travel",
      animalID: "r6",
      filterArray: ["r6"], // Reservati na kojim se nalazi
      missionPackValue: "10.700gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/f/ff/Hemmeldal_Icon.png",
      bgURL: "https://i.postimg.cc/1RCNdqkM/output.jpg",
      missionsList: [
        {
          missionID: "r6-1",
          name: "Contamination Check In The North",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/f/f2/Hemmeldal_mission_1.png",
            link: ""
          },
          goals: [
            "Start at Koppartorp Lodge in Hemmeldal.",
            "Then arrive at Tower 3 (x 7840, y -5589) in the same hunt.",
            "Then arrive at Grimulfr's Sten in the same hunt.",
            "At any point during the same hunt, ID droppings from a Moose.",
            "At any point during the same hunt, ID tracks from a Moose.",
            "At any point during the same hunt, ID a clue from a Reindeer.",
            "At any point during the same hunt, spot a Reindeer."
          ],
        },
        {
          missionID: "r6-2",
          name: "Contamination Check In The South",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/cc/Hemmeldal_mission_2.png",
            link: ""
          },
          goals: [
            "Start at Drängstorp Lodge in Hemmeldal.",
            "Then arrive at Tower 1 (x 8713, y -3776) in the same hunt.",
            "Then arrive at Tower 2 (x 7780, y -4207) in the same hunt.",
            "Then arrive at Orm's Sten (x 7048, y -3455) in the same hunt.",
            "At any point during the same hunt, ID an audio clue from a Red Fox.",
            "At any point during the same hunt, ID a clue from a Brown Bear.",
            "At any point during the same hunt, spot a Brown Bear.",
            "At any point during the same hunt, ID tracks from a Roe Deer.",
            "At any point during the same hunt, harvest a Roe Deer."
          ],
        },
        {
          missionID: "r6-3",
          name: "It Is In Their Bodies",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/69/Hemmeldal_mission_3.png",
            link: ""
          },
          goals: [
            "Start at Drängstorp Lodge in Hemmeldal.",
            "Then arrive at Tower 1 (x 8713, y -3776) in the same hunt.",
            "Then arrive at Tower 2 (x 7780, y -4207) in the same hunt.",
            "Then arrive at Hemmeldal Stenar in the same hunt.",
            "At any point during the same hunt, spot a Red Fox.",
            "At any point during the same hunt, harvest a Red Fox.",
            "At any point during the same hunt, ID droppings from a Brown Bear.",
            "At any point during the same hunt, harvest a Brown Bear.",
            "At any point during the same hunt, harvest a Moose."
          ],
        },
        {
          missionID: "r6-4",
          name: "Pinpoint The Source",
          earnings: "500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/d/d0/Hemmeldal_mission_4.png",
            link: ""
          },
          goals: [
            "Start at Koppartorp Lodge in Hemmeldal.",
            "Then arrive at Grimulfr's Sten in the same hunt.",
            "Then arrive at Orm's Sten (x 7048, y -3455) in the same hunt.",
            "At any point during the same hunt, ID an audio clue from a Moose.",
            "At any point during the same hunt, harvest a Moose.",
            "At any point during the same hunt, harvest a Reindeer.",
            "At any point during the same hunt, harvest a Roe Deer."
          ],
        },
        {
          missionID: "r6-5",
          name: "Source Removed",
          earnings: "700",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/e/e9/Hemmeldal_mission_5.png",
            link: ""
          },
          goals: [
            "Start at Drängstorp Lodge in Hemmeldal.",
            "Then arrive at Orm's Sten (x 7048, y -3455) in the same hunt.",
            "At any point during the same hunt, harvest any animal except Red Fox southwest of Tower 2.",
            "At any point during the same hunt, harvest any animal except Red Fox southwest of Tower 2.",
            "At any point during the same hunt, harvest any animal except Red Fox southwest of Tower 2."
          ],
        },
        {
          missionID: "r6-6",
          name: "South East Cleared",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w8"],
              text: ".300 Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/b4/Hemmeldal_mission_6.png",
            link: ""
          },
          goals: [
            "Start at Drängstorp Lodge in Hemmeldal.",
            "Then arrive at Tower 1 (x 8713, y -3776) in the same hunt.",
            "At any point during the same hunt, harvest any animal except Red Fox southeast of Tower 2 killed with .300 Nosler AccuBond ammunition.",
            "At any point during the same hunt, harvest any animal except Red Fox southeast of Tower 2 killed with .300 Nosler AccuBond ammunition.",
            "At any point during the same hunt, harvest any animal except Red Fox northeast of Tower 2 but south of Hemmeldal Stenar.",
            "At any point during the same hunt, harvest any animal except Red Fox northeast of Tower 2 but south of Hemmeldal Stenar."
          ],
        },
        {
          missionID: "r6-7",
          name: "Clearing The North",
          earnings: "1300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w43"],
              text: ".44 Revolver"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/9/9e/Hemmeldal_mission_7.png",
            link: ""
          },
          goals: [
            "Start at Koppartorp Lodge in Hemmeldal.",
            "Then arrive at Hemmeldal Stenar in the same hunt.",
            "At any point during the same hunt, harvest any animal except Red Fox northeast of Hemmeldal Stenar.",
            "At any point during the same hunt, harvest any animal except Red Fox northeast of Hemmeldal Stenar.",
            "At any point during the same hunt, harvest a Reindeer or Roe Deer northwest of Hemmeldal Stenar killed with .44 Nosler Sporting Handgun ammunition.",
            "At any point during the same hunt, harvest a Reindeer or Roe Deer northwest of Hemmeldal Stenar killed with .44 Nosler Sporting Handgun ammunition."
          ],
        },
        {
          missionID: "r6-8",
          name: "Still Contaminated",
          earnings: "1600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/b2/Hemmeldal_mission_8.png",
            link: ""
          },
          goals: [
            "Start at Koppartorp Lodge in Hemmeldal.",
            "Then arrive at Hemmeldal Stenar in the same hunt.",
            "Then arrive at Grimulfr's Sten in the same hunt.",
            "At any point during the same hunt, ID tracks from a Moose.",
            "At any point during the same hunt, ID tracks from a Roe Deer.",
            "At any point during the same hunt, ID tracks from a Reindeer.",
            "At any point during the same hunt, ID tracks from a Brown Bear."
          ],
        },
        {
          missionID: "r6-9",
          name: "Second Source Found",
          earnings: "2000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60"],
              text: "Any Bow or Crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/0/06/Hemmeldal_mission_9.png",
            link: ""
          },
          goals: [
            "Start at Koppartorp Lodge in Hemmeldal.",
            "Then arrive at Hemmeldal Stenar in the same hunt.",
            "Then arrive at Grimulfr's Sten in the same hunt.",
            "At any point during the same hunt, ID tracks from a Moose.",
            "At any point during the same hunt, harvest a Moose.",
            "At any point during the same hunt, harvest a Roe Deer.",
            "At any point during the same hunt, harvest a Reindeer killed by any Bow or Crossbow.",
            "At any point during the same hunt, harvest a Brown Bear."
          ],
        },
        {
          missionID: "r6-10",
          name: "Final Sweep",
          earnings: "3000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w42"],
              text: ".357 Revolver"
            }
          ],
          hint: {
            text: "Note that these objectives do not need to be done in one hunt",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/9/95/Hemmeldal_mission_10.png",
            link: ""
          },
          goals: [
            "Start at Drängstorp Lodge in Hemmeldal.",
            "Then arrive at Tower 1 (x 8713, y -3776).",
            "Then arrive at Tower 2 (x 7780, y -4207).",
            "Then arrive at Orm's Sten (x 7048, y -3455).",
            "Then arrive at Grimulfr's Sten.",
            "Then arrive at Tower 3 (x 7840, y -5589).",
            "Then arrive at Hemmeldal Stenar.",
            "At any point while in Hemmeldal, harvest a Red Fox killed with .357 Nosler Sporting Handgun Ammunition.",
            "At any point while in Hemmeldal, harvest a Roe Deer.",
            "At any point while in Hemmeldal, harvest a Brown Bear.",
            "At any point while in Hemmeldal, harvest a Reindeer.",
            "At any point while in Hemmeldal, harvest a Moose."
          ],
        },
      ],
    },
    {
      id: "r7",
      name: "Rougarou Bayou Missions",
      displayName: "Rougarou Bayou Travel",
      animalID: "r7",
      filterArray: ["r7"], // Reservati na kojim se nalazi
      missionPackValue: "10.700gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/c9/Rougarou_Icon.png",
      bgURL: "https://i.postimg.cc/rpT72FbG/69febbf3-bfcf-42ad-a662-dbc57c0f678d.jpg",
      missionsList: [
        {
          missionID: "r7-1",
          name: "Places To Remember",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/61/RB_mission_1.png",
            link: ""
          },
          goals: [
            "Start at Whispering Woods Lodge.",
            "Then arrive at Fort Stillwater in the same hunt.",
            "Then arrive at The Solitary End (x -3900, y 10245) in the same hunt.",
            "At any point during the same hunt, ID tracks from a Black Bear.",
            "At any point during the same hunt, ID droppings from a Feral Hog.",
            "At any point during the same hunt, spot a Mallard."
          ],
        },
        {
          missionID: "r7-2",
          name: "Ellas Heart",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/d/db/RB_mission_2.png",
            link: ""
          },
          goals: [
            "Start at Whispering Woods Lodge.",
            "Then arrive at Ella's Heart (x -1767, y 8665) in the same hunt.",
            "At any point during the same hunt, ID tracks from a Black Bear.",
            "At any point during the same hunt, ID droppings from a Black Bear.",
            "At any point during the same hunt, spot a Black Bear.",
            "At any point during the same hunt, ID tracks from a Whitetail Deer.",
            "At any point during the same hunt, ID another set of tracks from a Whitetail Deer."
          ],
        },
        {
          missionID: "r7-3",
          name: "Sprouts Of Life",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/f/f5/RB_mission_3.png",
            link: ""
          },
          goals: [
            "Start at L'île du Canard Noir.",
            "Then arrive at Fort Stillwater Watchtower (x -3797, y 8754) in the same hunt.",
            "At any point during the same hunt, spot a Mallard.",
            "At any point during the same hunt, harvest a Mallard that was shot while airborne.",
            "At any point during the same hunt, harvest a Mallard that was shot while swimming."
          ],
        },
        {
          missionID: "r7-4",
          name: "E.L. <3 E.R.",
          earnings: "500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/64/RB_mission_4.png",
            link: ""
          },
          goals: [
            "Start at L'île du Canard Noir.",
            "Then arrive at the end of Riverhead Landing dock in the same hunt.",
            "At any point during the same hunt, ID tracks from a Black Bear.",
            "At any point during the same hunt, ID another set of tracks from a Black Bear.",
            "At any point during the same hunt, ID droppings from a Black Bear.",
            "At any point during the same hunt, spot a Black Bear.",
            "At any point during the same hunt, harvest a Black Bear."
          ],
        },
        {
          missionID: "r7-5",
          name: "Protecting The Heart",
          earnings: "700",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/3/37/RB_mission_5.png",
            link: ""
          },
          goals: [
            "Start at Whispering Woods Lodge.",
            "Then arrive in the vicinity of Ella's Heart (x -1767, y 8665).",
            "At any point while in Rougarou Bayou, harvest a Feral Hog close to Ella's Heart.",
            "At any point while in Rougarou Bayou, harvest a second Feral Hog close to Ella's Heart.",
            "At any point while in Rougarou Bayou, harvest a third Feral Hog close to Ella's Heart."
          ],
        },
        {
          missionID: "r7-6",
          name: "Mallard Date",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/5/50/RB_mission_6.png",
            link: ""
          },
          goals: [
            "Start at Whispering Woods Lodge.",
            "Then arrive at the blue boat in Laurent's Rest (x -2717, y 9396) in the same hunt.",
            "At any point during the same hunt, ID an audio clue from a Mallard.",
            "At any point during the same hunt, spot a Mallard.",
            "At any point during the same hunt, spot another Mallard.",
            "At any point during the same hunt, harvest a Mallard that was shot while airborne.",
            "At any point during the same hunt, harvest another Mallard that was shot while airborne."
          ],
        },
        {
          missionID: "r7-7",
          name: "Hunting Runs Number 1",
          earnings: "1300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/8d/RB_mission_7.png",
            link: ""
          },
          goals: [
            "Start at L'île du Canard Noir.",
            "Then arrive at One-armed Thaddeus' Place in the same hunt.",
            "Then arrive at Fort Stillwater in the same hunt.",
            "Then arrive at Solitary End (x -3900, y 10245) in the same hunt.",
            "At any point during the same hunt, ID tracks from a Feral Hog.",
            "At any point during the same hunt, ID another set of tracks from a Feral Hog.",
            "At any point during the same hunt, ID droppings from a Feral Hog.",
            "At any point during the same hunt, ID an audio clue from a Feral Hog.",
            "At any point during the same hunt, spot a Feral Hog.",
            "At any point during the same hunt, spot another Feral Hog.",
            "At any point during the same hunt, harvest a Feral Hog.",
            "At any point during the same hunt, harvest a second Feral Hog.",
            "At any point during the same hunt, harvest a third Feral Hog."
          ],
        },
        {
          missionID: "r7-8",
          name: "Hunting Runs Number 2",
          earnings: "1600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w29"],
              text: ".303 British Bolt Action Rifle"
            },
            {
              weapons: ["w18"],
              text: ".30-30 Lever Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/5/54/RB_mission_8.png",
            link: ""
          },
          goals: [
            "Start at L'île du Canard Noir.",
            "Then arrive at One-armed Thaddeus' Place in the same hunt.",
            "Then arrive at Ella's Heart (x -1767, y 8665) in the same hunt.",
            "Then arrive at Knobby Point (x -399, y 8320) in the same hunt.",
            "At any point during the same hunt, ID an audio clue from a Whitetail Deer.",
            "At any point during the same hunt, spot a male Whitetail Deer.",
            "At any point during the same hunt, spot a female Whitetail Deer.",
            "At any point during the same hunt, harvest a Whitetail Deer buck using a .303 British Bolt Action Rifle.",
            "At any point during the same hunt, harvest a female Whitetail Deer shot with a .30-30 Lever Action Rifle."
          ],
        },
        {
          missionID: "r7-9",
          name: "Hunting Runs Number 3",
          earnings: "2000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w19"],
              text: ".30-06 Lever Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/bb/RB_mission_9.png",
            link: ""
          },
          goals: [
            "Start at Whispering Woods Lodge.",
            "Then arrive at The Solitary End (x -3900, y 10245) in the same hunt.",
            "Then arrive at Knobby Point (x -399, y 8320) in the same hunt.",
            "Then arrive at Riverhead Landing in the same hunt.",
            "At any point during the same hunt, harvest a Mallard that was shot while airborne.",
            "At any point during the same hunt, harvest a second Mallard that was shot while airborne.",
            "At any point during the same hunt, harvest a third Mallard that was shot while airborne.",
            "At any point during the same hunt, harvest a Black Bear shot with a .30-06 Lever Action Rifle."
          ],
        },
        {
          missionID: "r7-10",
          name: "Fin",
          earnings: "3000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w19"],
              text: ".30-06 Lever Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/0/0e/RB_mission_10.png",
            link: ""
          },
          goals: [
            "Start at Drängstorp Lodge in Hemmeldal.",
            "Then arrive at Tower 1 (x 8713, y -3776).",
            "Then arrive at Tower 2 (x 7780, y -4207).",
            "Then arrive at Orm's Sten (x 7048, y -3455).",
            "Then arrive at Grimulfr's Sten.",
            "Then arrive at Tower 3 (x 7840, y -5589).",
            "Then arrive at Hemmeldal Stenar.",
            "At any point while in Hemmeldal, harvest a Red Fox killed with .357 Nosler Sporting Handgun Ammunition.",
            "At any point while in Hemmeldal, harvest a Roe Deer.",
            "At any point while in Hemmeldal, harvest a Brown Bear.",
            "At any point while in Hemmeldal, harvest a Reindeer.",
            "At any point while in Hemmeldal, harvest a Moose."
          ],
        },
      ],
    },
    {
      id: "r8",
      name: "Val-des-Bois Missions",
      displayName: "Val-des-Bois Travel",
      animalID: "r8",
      filterArray: ["r8"], // Reservati na kojim se nalazi
      missionPackValue: "10.700gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/66/Val-des-bois_icon.png",
      bgURL: "https://i.postimg.cc/PJDBkpt4/d03d6303-7514-4422-9301-8d7f6f86172a.jpg",
      missionsList: [
        {
          missionID: "r8-1",
          name: "The Evil Grin",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/d/df/Vdb_mission_1.png",
            link: ""
          },
          goals: [
            "Start at Chalet du Mont-Bleu Lodge in Val-des-Bois.",
            "Then arrive at the left eye of The Evil Grin (x 3798, y -1413) in the same hunt.",
            "At any point during the same hunt, ID a clue from a Brown Bear.",
            "At any point during the same hunt, ID a clue from a Red Fox.",
            "At any point during the same hunt, ID a set of tracks from a Red Deer.",
            "At any point during the same hunt, ID a clue from a Roe Deer."
          ],
        },
        {
          missionID: "r8-2",
          name: "The Calm Pond",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/8c/Vdb_mission_2.png",
            link: ""
          },
          goals: [
            "Start at Maison du Néant Lodge in Val-des-Bois.",
            "Then arrive at The Calm Pond (x 2559, y -848) in the same hunt.",
            "Then arrive at L'ancien Château in the same hunt.",
            "At any point during the same hunt, ID a clue from a Red Deer.",
            "At any point during the same hunt, ID a clue from a Red Fox.",
            "At any point during the same hunt, ID a set of tracks from a Roe Deer."
          ],
        },
        {
          missionID: "r8-3",
          name: "Deliver Some Bones",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/0/06/Vdb_mission_3.png",
            link: ""
          },
          goals: [
            "Start at Chalet du Mont-Bleu Lodge in Val-des-Bois.",
            "Then arrive at the left eye of The Evil Grin (x 3798, y -1413) in the same hunt.",
            "At any point during the same hunt, ID a clue from a Red Deer.",
            "At any point during the same hunt, harvest a Red Deer.",
            "At any point during the same hunt, harvest a Red Fox.",
            "At any point during the same hunt, harvest a Roe Deer."
          ],
        },
        {
          missionID: "r8-4",
          name: "Pelts All Around",
          earnings: "500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/3/3c/Vdb_mission_4.png",
            link: ""
          },
          goals: [
            "Start at Maison du Néant Lodge in Val-des-Bois.",
            "Then arrive at The Calm Pond (x 2559, y -848) in the same hunt.",
            "Then arrive at L'ancien Château in the same hunt.",
            "Then arrive at the left eye of The Evil Grin (x 3798, y -1413) in the same hunt.",
            "At any point during the same hunt, ID a set of tracks from a Red Fox.",
            "At any point during the same hunt, harvest a Red Fox.",
            "At any point during the same hunt, harvest another Red Fox.",
            "At any point during the same hunt, harvest a Brown Bear."
          ],
        },
        {
          missionID: "r8-5",
          name: "Horn Mug",
          earnings: "700",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/e/ee/Vdb_mission_5.png",
            link: ""
          },
          goals: [
            "Start at Chalet du Mont-Bleu Lodge in Val-des-Bois.",
            "Then arrive at L'ancien Château in the same hunt.",
            "Then arrive at La Chapelle du Saint Perdu in the same hunt.",
            "At any point during the same hunt, harvest a Red Fox.",
            "At any point during the same hunt, ID an audio clue from an Alpine Ibex.",
            "At any point during the same hunt, harvest a male Alpine Ibex."
          ],
        },
        {
          missionID: "r8-6",
          name: "Stuffed Animals",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58"],
              text: "Use any bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/86/Vdb_mission_6.png",
            link: ""
          },
          goals: [
            "Start at Maison du Néant Lodge in Val-des-Bois.",
            "Then arrive at L'ancien Château in the same hunt.",
            "Then arrive at The Devil's Teapot (x 3096, y -2203) in the same hunt.",
            "At any point during the same hunt, ID a clue from a Brown Bear.",
            "At any point during the same hunt, harvest a Brown Bear killed with any bow.",
            "At any point during the same hunt, harvest an Alpine Ibex."
          ],
        },
        {
          missionID: "r8-7",
          name: "More Stuffed Animals",
          earnings: "1300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58"],
              text: "Use any bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/b2/Vdb_mission_7.png",
            link: ""
          },
          goals: [
            "Start at Maison du Néant Lodge in Val-des-Bois.",
            "Then arrive at L'ancien Château in the same hunt.",
            "Then arrive at La Chapelle du Saint Perdu in the same hunt.",
            "At any point during the same hunt, harvest a Roe Deer with a score of at least 160.",
            "At any point during the same hunt, harvest an Alpine Ibex killed with any Bow"
          ],
        },
        {
          missionID: "r8-8",
          name: "Freak Of Nature",
          earnings: "1600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/7/72/Vdb_mission_8.png",
            link: ""
          },
          goals: [
            "Start at Maison du Néant Lodge in Val-des-Bois.",
            "Then arrive at L'ancien Château in the same hunt.",
            "Then arrive at La Chapelle du Saint Perdu in the same hunt.",
            "At any point during the same hunt, harvest a Red Deer killed with any Shotgun.",
            "At any point during the same hunt, harvest a Roe Deer killed with any Shotgun.",
            "At any point during the same hunt, harvest an Alpine Ibex killed with any Shotgun.",
            "At any point during the same hunt, harvest another Alpine Ibex killed with any Shotgun."
          ],
        },
        {
          missionID: "r8-9",
          name: "Pleased At Last",
          earnings: "2000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/c5/Vdb_mission_9.png",
            link: ""
          },
          goals: [
            "Start at Chalet du Mont-Bleu Lodge in Val-des-Bois.",
            "Then arrive at the left eye of The Evil Grin (x 3798, y -1413) in the same hunt.",
            "Then arrive at L'ancien Château in the same hunt.",
            "Then arrive at The Calm Pond (x 2559, y -848) in the same hunt.",
            "At any point during the same hunt, ID an audio clue from an Alpine Ibex.",
            "At any point during the same hunt, ID a set of tracks from a Brown Bear.",
            "At any point during the same hunt, ID a clue from a Red Fox.",
            "At any point during the same hunt, spot a Red Fox.",
            "At any point during the same hunt, ID droppings from a Roe Deer.",
            "At any point during the same hunt, ID a clue from a Red Deer."
          ],
        },
        {
          missionID: "r8-10",
          name: "Mutant",
          earnings: "3000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w13", "w22"],
              text: "7mm Magnum Bullpup Rifle or 7mm Magnum Break Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/bb/Vdb_mission_10.png",
            link: ""
          },
          goals: [
            "Start at Maison du Néant Lodge in Val-des-Bois.",
            "Then arrive at The Calm Pond (x 2559, y -848).",
            "Then arrive at L'ancien Château.",
            "Then arrive at the left eye of The Evil Grin (x 3798, y -1413).",
            "Then arrive at La Chapelle du Saint Perdu.",
            "At any point while in Val-des-Bois, harvest a Red Deer killed with either 7mm Magnum Bullpup Rifle or the 7mm Magnum Break Action Rifle.",
            "At any point while in Val-des-Bois, harvest a Red Fox.",
            "At any point while in Val-des-Bois, harvest a Roe Deer killed with either 7mm Magnum Bullpup Rifle or the 7mm Magnum Break Action Rifle.",
            "At any point while in Val-des-Bois, harvest a Brown Bear killed with either 7mm Magnum Bullpup Rifle or the 7mm Magnum Break Action Rifle.",
            "At any point while in Val-des-Bois, harvest an Alpine Ibex killed with either 7mm Magnum Bullpup Rifle or the 7mm Magnum Break Action Rifle.",
            "At any point while in Val-des-Bois, harvest an European Rabbit."
          ],
        },
      ],
    },
    {
      id: "r9",
      name: "Bushrangers Run Missions",
      displayName: "Bushrangers Run Travel",
      animalID: "r9",
      filterArray: ["r9"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/22/Bushrangers_run_icon.png",
      bgURL: "https://i.postimg.cc/D0mwQcPz/1f1b5a95-dc47-4c46-a519-adf8f610b606.jpg",
      missionsList: [
        {
          missionID: "r9-1",
          name: "A Quick Wander",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/e/e8/BRR_Mission_1.png",
            link: ""
          },
          goals: [
            "Start at Copper Hills Lodge.",
            "Then arrive at the Desert's Eye (x: 2137, y: 10999) in the same hunt.",
            "Then arrive at Bay View (x: 1491, y: 11242) in the same hunt.",
            "ID any clue (footprints, droppings, or audio) from a European Rabbit at any point in the same hunt.",
            "ID any clue (footprints, droppings, or audio) from a Red Fox at any point in the same hunt.",
            "ID any clue (footprints, droppings, or audio) from a Feral Goat at any point in the same hunt."
          ],
        },
        {
          missionID: "r9-2",
          name: "Take a Stroll",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/b5/BRR_Mission_2.png",
            link: ""
          },
          goals: [
            "Start at Walkabout Creek.",
            "Then arrive at Gibber Pass (x: 2906, y: 11577) in the same hunt.",
            "Then arrive at The Dust Farm (x: 2778, y: 12269) in the same hunt.",
            "Then arrive at Ghost Pond (x: 3877, y: 11249) in the same hunt.",
            "ID footprints from a Feral Hog at any point in the same hunt.",
            "ID an audio call from a Red Kangaroo at any point in the same hunt.",
            "ID droppings from a Feral Goat at any point in the same hunt.",
            "ID footprints from an Axis Deer at any point in the same hunt."
          ],
        },
        {
          missionID: "r9-3",
          name: "Enjoy the Beach",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/a/a8/BRR_Mission_3.png",
            link: ""
          },
          goals: [
            "Start at Copper Hills Lodge.",
            "Then arrive at Mimis' Beach (x: 1820, y: 10236) in the same hunt.",
            "Then arrive at Open Country (x: 2064, y: 9556) in the same hunt.",
            "Then arrive at Yabby Bay (x: 2250, y: 8984) in the same hunt.",
            "Spot a Red Fox at any point in the same hunt.",
            "Spot a European Rabbit at any point in the same hunt.",
            "Spot a Feral Goat at any point in the same hunt.",
            "Harvest a Feral Goat at any point in the same hunt."
          ],
        },
        {
          missionID: "r9-4",
          name: "Boots on the Ground",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/b/be/BRR_Mission_4.png",
            link: ""
          },
          goals: [
            "Start at Copper Hills Lodge.",
            "Then arrive at Copper Ridge (x: 2223, y: 11601).",
            "Then arrive at The Dust Farm (x: 2778, y: 12269).",
            "Then arrive at Gibber Pass (x: 2906, y: 11577).",
            "Then arrive at Ghost Pond (x: 3877, y: 11249).",
            "Spot a Feral Hog.",
            "Spot a Red Kangaroo.",
            "Spot an Axis Deer.",
            "Harvest a Feral Hog.",
            "Harvest a Red Kangaroo.",
            "Harvest an Axis Deer."
          ],
        },
        {
          missionID: "r9-5",
          name: "Lay of the Land",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/6e/BRR_Mission_5.png",
            link: ""
          },
          goals: [
            "Start at Walkabout Creek.",
            "Then arrive at Ghost Pond (x: 3877, y: 11249).",
            "Then arrive at Kumanjayi's Butte (x: 3137, y: 10442).",
            "Then arrive at Lonely Billabong (x: 2868, y: 10241).",
            "Then arrive at Open Country (x: 2064, y: 9556).",
            "Harvest a Feral Hog.",
            "Harvest a male Axis Deer scoring at least 130.",
            "Harvest a Red Kangaroo.",
            "Harvest a Feral Goat from more than 30 meters (approx. 98 ft.)"
          ],
        },
        {
          missionID: "r9-6",
          name: "Distribution Checks",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/1/10/BRR_Mission_6.png",
            link: ""
          },
          goals: [
            "Start at Copper Hills Lodge.",
            "Then arrive at Desert's Eye (x: 2137, y: 10999).",
            "Then arrive at Bay View (x: 1491, y: 11242).",
            "Then arrive at Mimis' Beach (x: 1820, y: 10236).",
            "Then arrive at Yabby Bay (x: 2250, y: 8984).",
            "Then arrive at Open Country (x: 2064, y: 9556).",
            "Harvest a Red Fox with buckshot.",
            "Harvest a European Rabbit.",
            "Harvest any Piebald Feral Hog."
          ],
        },
        {
          missionID: "r9-7",
          name: "Full Circle",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/9/91/BRR_Mission_7.png",
            link: ""
          },
          goals: [
            "Start at Copper Hills Lodge.",
            "Then arrive at Desert's Eye (x: 2137, y: 10999).",
            "Then arrive at Lonely Billabong (x: 2868, y: 10241).",
            "Then arrive at Kumanjayi's Butte (x: 3137, y: 10442).",
            "Then arrive at Ghost Pond (x: 3877, y: 11249).",
            "Then arrive at The Dust Farm (x: 2778, y: 12269).",
            "Then arrive at Copper Ridge (x: 2223, y: 11601).",
            "Then arrive at Copper Hills Lodge.",
            "Harvest a Feral Hog at less than 25 meters (approx. 82 ft.).",
            "Harvest a Red Kangaroo using any permitted shotgun ammunition.",
            "Harvest an Axis Deer.",
            "Harvest a male Red Fox."
          ],
        },
        {
          missionID: "r9-8",
          name: "Proof of Tread",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60"],
              text: "Use any bow or crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/43/BRR_Mission_8.png",
            link: ""
          },
          goals: [
            "Start at Walkabout Creek.",
            "Then arrive at Desert's Eye (x: 2137, y: 10999).",
            "Then arrive at Bay View (x: 1491, y: 11242).",
            "Then arrive at Copper Ridge (x: 2223, y: 11601).",
            "Then arrive at Gibber Pass (x: 2906, y: 11577).",
            "Then arrive at Lonely Billabong (x: 2868, y: 10241).",
            "Then arrive at Kumanjayi's Butte (x: 3137, y: 10442).",
            "Harvest a male Feral Hog with any bow or crossbow.",
            "Harvest a male Red Kangaroo with any bow or crossbow.",
            "Harvest a male Axis Deer with any bow or crossbow."
          ],
        },
        {
          missionID: "r9-9",
          name: "Medium-Rare",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/41/BRR_Mission_9.png",
            link: ""
          },
          goals: [
            "Start at Copper Hills Lodge.",
            "Then arrive at Bay View (x: 1491, y: 11242).",
            "Then arrive at Desert's Eye (x: 2137, y: 10999).",
            "Then arrive at Lonely Billabong (x: 2868, y: 10241).",
            "Harvest a male Red Fox with a color other than Common.",
            "Harvest a male European Rabbit with birdshot.",
            "Harvest a male Feral Goat with a color other than Common."
          ],
        },
        {
          missionID: "r9-10",
          name: "Walkabout",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w46", "w42", "w43", "w47"],
              text: ".308 Handgun or .357 Revolver or .44 Revolver or 10mm Semi-Automatic Pistol"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/1/1a/BRR_Mission_10.png",
            link: ""
          },
          goals: [
            "Start at Copper Hills Lodge.",
            "Then arrive at Desert's Eye (x: 2137, y: 10999).",
            "Then arrive at Mimis' Beach (x: 1820, y: 10236).",
            "Then arrive at Yabby Bay (x: 2250, y: 8984).",
            "Then arrive at Lonely Billabong (x: 2868, y: 10241).",
            "Then arrive at Ghost Pond (x: 3877, y: 11249).",
            "Then arrive at The Dust Farm (x: 2778, y: 12269).",
            "Then arrive at Copper Ridge (x: 2223, y: 11601).",
            "Then arrive at Gibber Pass (x: 2906, y: 11577).",
            "Then arrive at Walkabout Creek.",
            "Harvest a female Red Fox with any .243 rifle.",
            "Harvest a female European Rabbit with birdshot.",
            "Harvest a female Feral Goat scoring more than 100.",
            "Harvest a female Feral Hog with a slug.",
            "Harvest a female Red Kangaroo with a shot to the heart and/or lungs.",
            "Harvest a female Axis Deer with any ethical handgun."
          ],
        },
      ],
    },
    {
      id: "r10",
      name: "Whiterime Ridge Missions",
      displayName: "Whiterime Ridge Travel",
      animalID: "r10",
      filterArray: ["r10"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/5/55/WR_icon.png",
      bgURL: "https://i.postimg.cc/SsCrSWMJ/fa6113a6-3064-45df-89c9-a14cfb9c251d.jpg",
      missionsList: [
        {
          missionID: "r10-1",
          name: "Hot as ice",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/a/a8/Wrr_mission_1.png",
            link: ""
          },
          goals: [
            "Start at Afterland Lodge in Whiterime Ridge.",
            "Then arrive at Tatanka Hot Springs (x: -4047, y: -8788) in the same hunt.",
            "Then visit the freezing sea waters of Bison Horns Bay (x -3325, y -8922) in the same hunt.",
            "At any point during the same hunt, ID any clue (footprints, droppings, or audio) from a Bison.",
            "At any point during the same hunt, ID any clue (footprints, droppings, or audio) from a Moose."
          ],
        },
        {
          missionID: "r10-2",
          name: "White Dreams",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/89/Wrr_mission_2.png",
            link: ""
          },
          goals: [
            "Start at Danforth's Refuge in Whiterime Ridge.",
            "Then arrive at Raven's Pass (x -5288, y -12120) in the same hunt.",
            "Then arrive at Frigid Rapids (x -4185, y -11660) in the same hunt.",
            "Then arrive at Snaketongue Fall (x -4390, y -11468) in the same hunt.",
            "At any point during the same hunt, ID an audio clue from an Arctic Fox.",
            "At any point during the same hunt, ID footprints from an Arctic Fox.",
            "At any point during the same hunt, spot an Arctic Fox."
          ],
        },
        {
          missionID: "r10-3",
          name: "Search the Frost",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/d/d3/Wrr_mission_3.png",
            link: ""
          },
          goals: [
            "Start at Danforth's Refuge in Whiterime Ridge.",
            "Then arrive at Kosatka Harbour (x -5233, y 12676) in the same hunt.",
            "Then arrive at Kaner Point (x -2436, y -12426) in the same hunt.",
            "At any point during the same hunt, ID footprints from a Polar Bear.",
            "At any point during the same hunt, ID droppings from a Polar Bear.",
            "At any point during the same hunt, harvest an Arctic Fox."
          ],
        },
        {
          missionID: "r10-4",
          name: "Blessings of the Land",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/7/7b/Wrr_mission_4.png",
            link: ""
          },
          goals: [
            "Start at Danforth's Refuge in Whiterime Ridge.",
            "Then arrive at Windy Hill (-6464, y -10096) in the same hunt.",
            "At any point during the same hunt, ID footprints or droppings from a Snowshoe Hare.",
            "At any point during the same hunt, ID footprints from a Moose.",
            "At any point during the same hunt, ID droppings from a Moose.",
            "At any point during the same hunt, spot a Moose.",
            "At any point during the same hunt, ID footprints from a Bison.",
            "At any point during the same hunt, ID droppings from a Bison.",
            "At any point during the same hunt, spot a Bison."
          ],
        },
        {
          missionID: "r10-5",
          name: "Caution in the Snow",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/64/Wrr_mission_5.png",
            link: ""
          },
          goals: [
            "Start at Afterland Lodge in Whiterime Ridge.",
            "Then arrive at the Frozen Lake (x -4936, y -9320) in the same hunt.",
            "Then arrive at the Chute (x -4633, y -11152) in the same hunt.",
            "Then arrive at Snaketongue Fall (x -4390, y -11468) in the same hunt.",
            "Then arrive at Frigid Rapids (x -4185, y -11660) in the same hunt.",
            "At any point during the same hunt, ID footprints from a Dall Sheep.",
            "At any point during the same hunt, ID droppings from a Dall Sheep.",
            "At any point during the same hunt, ID footprints from a Sitka Deer.",
            "At any point during the same hunt, ID droppings from a Sitka Deer.",
            "At any point during the same hunt, spot a Sitka Deer.",
            "At any point during the same hunt, harvest a Sitka Deer with one shot."
          ],
        },
        {
          missionID: "r10-6",
          name: "Anger of the Sky",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/3/3d/Wrr_mission_6.png",
            link: ""
          },
          goals: [
            "Start at Afterland Lodge in Whiterime Ridge.",
            "Then arrive at Tatanka Hot Springs (x: -4047, y: -8788).",
            "Then arrive at Bison Horns Bay (x -3325, y -8922).",
            "Then arrive at Sedna's Bay (x -2568, y -10784).",
            "Then arrive at Frigid Rapids (x -4185, y -11660).",
            "Spot a Snowshoe Hare.",
            "Harvest a Snowshoe Hare weighing at least 1,3 kg (approx. 2,87 lbs).",
            "Spot a Dall Sheep.",
            "Harvest a Dall Sheep scoring at least 150 using any .243 rifle.",
            "Harvest a male Moose.",
            "Harvest a Bison.",
            "Harvest a Polar Bear scoring at least 25."
          ],
        },
        {
          missionID: "r10-7",
          name: "Listen to Prey, Hunt the Predator",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/f/f7/Wrr_mission_7.png",
            link: ""
          },
          goals: [
            "Start at Afterland Lodge in Whiterime Ridge.",
            "Then arrive at Tatanka Hot Springs (x: -4047, y: -8788).",
            "Then arrive at Frozen Lake (x -4936, y -9320).",
            "Then arrive at the Chute (x -4633, y -11466).",
            "Then arrive at Snaketongue Fall (x -4390, y -11468).",
            "Then arrive at Kaner Point (x -2436, y -12426).",
            "ID an audio clue from a Moose.",
            "ID an audio clue from a Bison.",
            "ID an audio clue from a Sitka Deer.",
            "ID an audio clue from a Dall Sheep.",
            "ID any clue (footprints, droppings, or audio) from a Polar Bear.",
            "Harvest a Polar Bear with a single shot.",
            "ID any clue (footprints, droppings, or audio) from an Arctic Fox.",
            "Harvest an Arctic Fox using buckshot."
          ],
        },
        {
          missionID: "r10-8",
          name: "Small Prey",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/e/e8/Wrr_mission_8.png",
            link: ""
          },
          goals: [
            "Start at Danforth's Refuge in Whiterime Ridge.",
            "Then arrive at Windy Hill (-6464, y -10096).",
            "Then arrive at Snaketongue Fall (x -4390, y -11468).",
            "ID any clue (footprints, droppings, or audio) from a male Bison.",
            "ID any clue (footprints, droppings, or audio) from a Moose.",
            "Harvest a Snowshoe Hare.",
            "Harvest a male Sitka Deer with a score of 50 or more.",
            "Harvest a male Dall Sheep."
          ],
        },
        {
          missionID: "r10-9",
          name: "Keep the Balance",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60"],
              text: "Use any bow or crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/7/7a/Wrr_mission_9.png",
            link: ""
          },
          goals: [
            "Start at Afterland Lodge in Whiterime Ridge.",
            "Then arrive at Frozen Lake (x -4936, y -9320).",
            "Then arrive at Windy Hill (x -6464, y -10096).",
            "Then arrive at Kosatka Harbor (x -5233, y -12676).",
            "Harvest a charging Moose with any bow or crossbow.",
            "Harvest a charging Bison with any bow or crossbow.",
            "Harvest a charging Polar Bear with any bow or crossbow."
          ],
        },
        {
          missionID: "r10-10",
          name: "Show your Mastery",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58"],
              text: "Use any bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/c4/Wrr_mission_10.png",
            link: ""
          },
          goals: [
            "Start at Afterland Lodge in Whiterime Ridge.",
            "Then arrive at Bison Horns Bay (x -3325, y -8922).",
            "Then arrive at Sedna's Bay (x -2568, y -10784).",
            "Then arrive at Snaketongue Fall (x -4390, y -11468).",
            "Then arrive at Raven's Pass (x -5288, y -12120).",
            "Then arrive at Danforth's Refuge.",
            "Harvest a Moose with any bow.",
            "Harvest a Bison with any bow.",
            "Harvest a Polar Bear with any bow.",
            "Harvest a Snowshoe Hare with any bow.",
            "Harvest a Sitka Deer with any bow.",
            "Harvest a Dall Sheep with any bow.",
            "Harvest an Arctic Fox with any bow."
          ],
        },
      ],
    },
    {
      id: "r11",
      name: "Timbergold Trails Missions",
      displayName: "Timbergold Trails Travel",
      animalID: "r11",
      filterArray: ["r11"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/ce/TT_icon.png",
      bgURL: "https://i.postimg.cc/6pvRbSnN/v5B8MaFi.jpg",
      missionsList: [
        {
          missionID: "r11-1",
          name: "Gold of the past",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/9/9a/Tt_mission_1.png",
            link: ""
          },
          goals: [
            "Start at Goldhorn Pass in Timbergold Trails.",
            "Then arrive at The Dredge (x: -6807, y: 1380) in the same hunt.",
            "Then arrive at The Flats (x: -6239, y: 1753) in the same hunt.",
            "At any point during the same hunt, ID any clue (footprints, droppings, or audio) from a Rocky Mountain Elk.",
            "At any point during the same hunt, spot a Rocky Mountain Elk.",
            "At any point during the same hunt, ID any clue (footprints, droppings, or audio) from a Grey Wolf.",
            "At any point during the same hunt, spot a Grey Wolf."
          ],
        },
        {
          missionID: "r11-2",
          name: "Old Roots",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/8f/Tt_mission_2.png",
            link: ""
          },
          goals: [
            "Start at Everfall Lodge in Timbergold Trails.",
            "Then arrive at Dead Rose (x: -4128, y: -150) in the same hunt.",
            "Then arrive at Firewatch Tower (x: -4977, y: 3) in the same hunt.",
            "Then arrive at Owl's Perch (x: -4174, y: -502) in the same hunt.",
            "At any point during the same hunt, ID a call from a Rocky Mountain Elk.",
            "At any point during the same hunt, spot a Rocky Mountain Elk.",
            "At any point during the same hunt, ID footprints from a Grizzly Bear.",
            "At any point during the same hunt, spot a Grizzly Bear."
          ],
        },
        {
          missionID: "r11-3",
          name: "Dangerous Suspicion",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/44/Tt_mission_3.png",
            link: ""
          },
          goals: [
            "Begin at Everfall Lodge in Timbergold Trails.",
            "Then arrive at Firewatch Tower (x: -4977, y: 3) in the same hunt.",
            "Then arrive at Riverpine Cabin (x: -4583, y: 1060) in the same hunt.",
            "At any point during the same hunt, ID any clue (footprints, droppings, or audio) from a Grizzly Bear.",
            "At any point during the same hunt, spot a Grizzly Bear.",
            "At any point during the same hunt, harvest a Grizzly Bear with one shot."
          ],
        },
        {
          missionID: "r11-4",
          name: "Mountain Trail",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/8b/Tt_mission_4.png",
            link: ""
          },
          goals: [
            "Start at Goldhorn Pass in Timbergold Trails.",
            "Then arrive at Brimstone (x: -7140, y: -156) in the same hunt.",
            "Then arrive at the Brimstone Tunnel entrance located at (x-7339, y: 39) in the same hunt. Go through the tunnel (default key: E).",
            "Then arrive at Porcupine Ridge (x -6019, y -1152) in the same hunt.",
            "At any point during the same hunt, ID any clue (footprints, droppings, or audio) from a Bighorn Sheep.",
            "At any point during the same hunt, spot a Bighorn Sheep.",
            "At any point during the same hunt, ID any clue (footprints, droppings, or audio) from a White-tailed Ptarmigan.",
            "At any point during the same hunt, harvest an airborne White-tailed Ptarmigan.",
            "At any point during the same hunt, harvest another airborne White-tailed Ptarmigan."
          ],
        },
        {
          missionID: "r11-5",
          name: "Another Circumstance",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60"],
              text: "Use any bow or crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/2f/Tt_mission_5.png",
            link: ""
          },
          goals: [
            "Begin at Everfall Lodge in Timbergold Trails.",
            "Then arrive at Fred's Last Stand (x: -5166, y: 940) in the same hunt.",
            "Then arrive at The Flats (x: -6239, y: 1753) in the same hunt.",
            "At any point during the same hunt, ID any clue (footprints, droppings, or audio) from a Rocky Mountain Elk.",
            "At any point during the same hunt, harvest a male Rocky Mountain Elk using any Bow or Crossbow.",
            "At any point during the same hunt, ID footprints from a Grey Wolf.",
            "At any time during the same hunt, ID droppings from a Grey Wolf.",
            "At any point during the same hunt, ID a call from a Grey Wolf.",
            "At any point during the same hunt, spot a Grey Wolf."
          ],
        },
        {
          missionID: "r11-6",
          name: "In Wolf's Clothing",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/cf/Tt_mission_6.png",
            link: ""
          },
          goals: [
            "Start at Goldhorn Pass in Timbergold Trails.",
            "Then arrive at The Flats (x: -6239, y: 1753) in the same hunt.",
            "Then arrive at Fred's Last Stand (x: -5166, y: 940) in the same hunt.",
            "Then arrive at Firewatch Tower (x: -4977, y: 3) in the same hunt.",
            "At any point during the same hunt, spot a Grey Wolf.",
            "At any point during the same hunt, harvest a male Grey Wolf.",
            "At any point during the same hunt, harvest a Mule Deer with any ethical rifle except a Muzzleloader.",
            "At any point during the same hunt, harvest another Mule Deer with any ethical rifle except a Muzzleloader."
          ],
        },
        {
          missionID: "r11-7",
          name: "The Increasing Problem",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/7/75/Tt_mission_7.png",
            link: ""
          },
          goals: [
            "Begin at Everfall Lodge in Timbergold Trails.",
            "Then arrive at Howling Heights (x: -2288, y: 1112) in the same hunt.",
            "Then arrive at Dusty Paws (x: -5700, y: 2116) in the same hunt.",
            "At any point during the same hunt, ID footprints from a Grizzly Bear.",
            "At any point during the same hunt, ID footprints or droppings from a Puma.",
            "At any point during the same hunt, harvest a Mule Deer.",
            "At any point during the same hunt, harvest another Mule Deer.",
            "At any point during the same hunt, harvest a Rocky Mountain Elk.",
            "At any point during the same hunt, harvest another Rocky Mountain Elk."
          ],
        },
        {
          missionID: "r11-8",
          name: "Double Threat",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w23"],
              text: ".30 R O/U Break Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/23/Tt_mission_8.png",
            link: ""
          },
          goals: [
            "Begin at Everfall Lodge in Timbergold Trails.",
            "Then arrive at the Eastern Tunnel entrance located at (x: -3083, y: -572) in the same hunt. Go through the tunnel (default key: E).",
            "Then arrive at Ol 'Reynold Lost Nugget (x -5404, y -2010) in the same hunt.",
            "Then arrive at the Ol' Reynold's Tunnel entrance located at (x: -5406, y: -1613) in the same hunt. Go through the tunnel (default key: E).",
            "Then arrive at Porcupine Ridge (x -6019, y -1152) in the same hunt.",
            "Then arrive at Fred's Last Stand (x: -5166, y: 940) in the same hunt.",
            "At any point during the same hunt, ID footprints from a Grey Wolf.",
            "At any point during the same hunt, ID droppings from a Grey Wolf.",
            "At any point during the same hunt, ID any clue (footprints, droppings, or audio) from a Puma.",
            "At any point during the same hunt, spot a Bighorn Sheep.",
            "At any point during the same hunt, harvest a Bighorn Sheep with a score of at least 144 points.",
            "At any point during the same hunt, harvest another Bighorn Sheep with any .30 R O/U Break Action Rifle.",
            "At any point during the same hunt, harvest a Grizzly Bear."
          ],
        },
        {
          missionID: "r11-9",
          name: "Mountain Bastion",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56", "w57", "w58"],
              text: "Use Heavy Recurve Bow, Recurve Bow, Longbow or Cable-backed Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/3/33/Tt_mission_9.png",
            link: ""
          },
          goals: [
            "Start at Goldhorn Pass in Timbergold Trails.",
            "Then arrive at Dusty Paws (x: -5700, y: 2116) in the same hunt.",
            "Then arrive at Riverpine Cabin (x: -4583, y: 1060) in the same hunt.",
            "Then arrive at Howling Heights (x: -2288, y: 1112) in the same hunt.",
            "Then arrive at Everfall Lodge in the same hunt.",
            "At any point during the same hunt, spot a Puma.",
            "At any point during the same hunt, harvest a Puma.",
            "At any point during the same hunt, harvest a Grizzly Bear.",
            "At any point during the same hunt, harvest a Grey Wolf with any traditional bow."
          ],
        },
        {
          missionID: "r11-10",
          name: "Settling Matters",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w45"],
              text: ".454 Revolver"
            },
            {
              weapons: ["w37"],
              text: "12 GA Blaser F3 Game O/U Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/4a/Tt_mission_10.png",
            link: ""
          },
          goals: [
            "Start at Goldhorn Pass in Timbergold Trails.",
            "Then arrive at Riverpine Cabin (x: -4583, y: 1060).",
            "Then arrive at the Eastern Tunnel entrance located at (x: -3083, y: -572). Go through the tunnel (default key: E).",
            "Then arrive at Ol 'Reynold Lost Nugget (x -5404, y -2010).",
            "Harvest a Grizzly Bear with any .454 Revolver.",
            "Harvest a Grey Wolf.",
            "Harvest a Puma.",
            "Harvest a male Rocky Mountain Elk.",
            "Harvest a male Mule Deer.",
            "Harvest a Bighorn Sheep.",
            "Harvest an airborne White-tailed Ptarmigan using a 12 GA Blaser F3 Game O/U Shotgun."
          ],
        },
      ],
    },
    {
      id: "r12",
      name: "Piccabeen Bay Missions",
      displayName: "Piccabeen Bay Travel",
      animalID: "r12",
      filterArray: ["r12"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/c3/PB_icon.png",
      bgURL: "https://i.postimg.cc/BQQxkWM8/bc9b968c-1453-40ca-ae01-1cd5d929f8f7.jpg",
      missionsList: [
        {
          missionID: "r12-1",
          name: "If I must, I must",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/6f/PB_Mission_1.png",
            link: ""
          },
          goals: [
            "Start at Cicada Cove Lodge",
            "Then arrive at Bumpy Ridge (X: 7164, Y: 9870) in the same hunt.",
            "Then arrive at Banteng Bay (X: 5595, Y: 8783) in the same hunt.",
            "At any point in the same hunt, ID a footprint from a Rusa Deer.",
            "At any point in the same hunt, ID droppings from a Rusa Deer.",
            "At any point in the same hunt, ID a footprint from a Feral Hog.",
            "At any point in the same hunt, ID droppings from a Feral Hog.",
            "At any point in the same hunt, ID any clue (footprints, droppings, or audio) from a Banteng."
          ],
        },
        {
          missionID: "r12-2",
          name: "Go do… something",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/25/PB_Mission_2.png",
            link: ""
          },
          goals: [
            "Start at Rooingong Lodge.",
            "Then arrive at The Tributary (X: 4941, Y: 6481) in the same hunt.",
            "Then arrive at Dawg's Secret Spot (X: 5929, Y: 5734) in the same hunt.",
            "At any point in the same hunt, ID a footprint from a Sambar Deer.",
            "At any point in the same hunt, ID droppings from a Sambar Deer.",
            "At any point in the same hunt, ID any clue (footprints, droppings, or audio) from a Feral Hog."
          ],
        },
        {
          missionID: "r12-3",
          name: "Knowledge is power",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/d/df/PB_Mission_3.png",
            link: ""
          },
          goals: [
            "Start at Rooingong Lodge",
            "Then arrive at Sambar Center (X: 5825, Y: 6918) in the same hunt.",
            "Then arrive at Dawg's Secret Spot (X: 5929, Y: 5734) in the same hunt.",
            "Then arrive at The Edge (X: 6653, Y: 6436) in the same hunt.",
            "At any point in the same hunt, ID any clue (footprints, droppings, or audio) from a Rusa Deer.",
            "At any point in the same hunt, harvest a Feral Hog."
          ],
        },
        {
          missionID: "r12-4",
          name: "It's efficiency, not laziness",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w8", "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31", "w13", "w22", "w15", "w28",
                "w16", "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .300 Bolt Action Rifle,
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                8x57 IS K98k Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/63/PB_Mission_4.png",
            link: ""
          },
          goals: [
            "Start at Rooingong Lodge.",
            "Then arrive at Bunyip Lair (X: 5540, Y: 7756) in the same hunt.",
            "Then arrive at Old Abandoned Steam Train (X: 6151, Y: 8241) in the same hunt.",
            "Then arrive at The Plateau (X: 7065, Y: 7475) in the same hunt.",
            "At any point in the same hunt, ID any 3 clues from different Banteng.",
            "At any point in the same hunt, ID any 3 clues from different Water Buffalo.",
            "At any point in the same hunt, harvest a Banteng."
          ],
        },
        {
          missionID: "r12-5",
          name: "Too many coddlers out there",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31",
                "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/cf/PB_Mission_5.png",
            link: ""
          },
          goals: [
            "Start at Cicada Cove Lodge.",
            "Then arrive at Saint Pauli's Lighthouse (X: 7555, Y: 8733).",
            "Then arrive at Banteng Bay (X: 5595, Y: 8783).",
            "Then arrive at Bunyip Lair (X: 5540, Y: 7756).",
            "Then arrive at The Tributary (X: 4941, Y: 6481).",
            "Spot a Water Buffalo.",
            "Harvest a Water Buffalo.",
            "Spot a Rusa Deer.",
            "Harvest a Rusa Deer.",
            "Spot a Banteng.",
            "Harvest a Banteng."
          ],
        },
        {
          missionID: "r12-6",
          name: "I'll get the knife later",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/6f/PB_Mission_6.png",
            link: ""
          },
          goals: [
            "Start at Rooingong Lodge.",
            "Then arrive at Banteng Bay (X: 5595, Y: 8783).",
            "Then arrive at Bunyip Lair (X: 5540, Y: 7756).",
            "Then arrive at Sambar Center (X: 5825, Y: 6918).",
            "Then arrive at The Pocket (X: 6700, Y: 6672).",
            "Then arrive at The Plateau (X: 7065, Y: 7475).",
            "Then arrive at Saint Pauli's Lighthouse (X: 7555, Y: 8733).",
            "Harvest a male Sambar Deer weighing more than 420 kg (Approx. 926 lbs).",
            "Harvest a Water Buffalo scoring more than 200.",
            "Harvest a male Feral Hog."
          ],
        },
        {
          missionID: "r12-7",
          name: "Unreasonable demands",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54", "w55", "w56", "w57", "w58", "w59", "w60"],
              text: "Use any bow or crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/d/d4/PB_Mission_7.png",
            link: ""
          },
          goals: [
            "Start at Cicada Cove Lodge.",
            "Then arrive at Saint Pauli's Lighthouse (X: 7555, Y: 8733).",
            "Then arrive at The Plateau (X: 7065, Y: 7475).",
            "Then arrive at The Pocket (X: 6700, Y: 6672).",
            "Then arrive at Sambar Center (X: 5825, Y: 6918).",
            "Then arrive at Bunyip Lair (X: 5540, Y: 7756).",
            "Then arrive at Old Abandoned Steam Train (X: 6151, Y: 8241).",
            "Harvest an unspooked male Sambar Deer with any bow or crossbow.",
            "Harvest an unspooked female Sambar Deer with any bow or crossbow.",
            "Harvest an unspooked male Rusa Deer with any bow or crossbow.",
            "Harvest an unspooked female Rusa Deer with any bow or crossbow."
          ],
        },
        {
          missionID: "r12-8",
          name: "Should've hidden better",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: [
                "w17", "w20", "w21", "w30", "w45", "w49", "w50", "w31",
                "w24", "w51", "w52", "w53", "w54", "w55", "w56", "w59", "w60"
              ],
              text: `
                .340 Weatherby Magnum Bolt Action Rifle,
                .405 Lever Action Rifle,
                .45-70 Government Lever Action Rifle,
                .45-70 Buffalo Rifle,
                .454 Revolver,
                .50 Inline Muzzleloader,
                .50 Inline Muzzleloading Pistol,
                16GA/9.3x74R Drilling,
                9.3x74R O/U Break Action Rifle,
                any Compound bow,
                any Recurve bow,
                any Crossbow
              `
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/9/9b/PB_Mission_8.png",
            link: ""
          },
          goals: [
            "Start at Cicada Cove Lodge.",
            "Then arrive at Saint Pauli's Lighthouse (X: 7555, Y: 8733).",
            "Then arrive at The Plateau (X: 7065, Y: 7475).",
            "Then arrive at Bunyip Lair (X: 5540, Y: 7756).",
            "Then arrive at Banteng Bay (X: 5595, Y: 8783).",
            "Harvest a charging Water Buffalo.",
            "Harvest a Dark Banteng.",
            "Harvest a Feral Hog scoring more than 800."
          ],
        },
        {
          missionID: "r12-9",
          name: "Persistence really does pay off",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/e/e1/PB_Mission_9.png",
            link: ""
          },
          goals: [
            "Start at Cicada Cove Lodge.",
            "Then arrive at Saint Pauli's Lighthouse (X: 7555, Y: 8733).",
            "Then arrive at Old Abandoned Steam Train (X: 6151, Y: 8241).",
            "Then arrive at Bunyip Lair (X: 5540, Y: 7756).",
            "Then arrive at Banteng Bay (X: 5595, Y: 8783).",
            "Then arrive at Bumpy Ridge (X: 7164, Y: 9870).",
            "ID any clue from a Magpie Goose.",
            "Harvest an airborne Magpie Goose.",
            "Harvest a second airborne Magpie Goose.",
            "Harvest a third airborne Magpie Goose.",
            "Harvest a female Rusa Deer.",
            "Harvest a Feral Hog."
          ],
        },
        {
          missionID: "r12-10",
          name: "Go map the coast or something",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56", "w57", "w58"],
              text: "Use Heavy Recurve Bow, Recurve Bow, Longbow or Cable-backed Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/4/47/PB_Mission_10.png",
            link: ""
          },
          goals: [
            "Start at Rooingong Lodge.",
            "Then arrive at The Tributary (X: 4941, Y: 6481).",
            "Then arrive at Dawg's Secret Spot (X: 5929, Y: 5734).",
            "Then arrive at The Pocket (X: 6700, Y: 6672).",
            "Then arrive at The Plateau (X: 7065, Y: 7475).",
            "Then arrive at Saint Pauli's Lighthouse (X: 7555, Y: 8733).",
            "Then arrive at Cicada Cove Lodge.",
            "Harvest a Feral Hog with any traditional bow.",
            "Harvest a Rusa Deer with any traditional bow.",
            "Harvest a Sambar Deer with any traditional bow.",
            "Harvest a Banteng with any traditional bow.",
            "Harvest a Water Buffalo with any traditional bow.",
            "Harvest an airborne Magpie Goose with any traditional bow."
          ],
        },
      ],
    },
    // weapons and ither missions
    {
      id: "wp1",
      name: "Advanced Firearms Missions",
      displayName: "Advanced Firearms",
      animalID: "wp1",
      filterArray: ["f1", "r2", "r7", "r4", "r3", "r5", "r6"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://i.postimg.cc/vTDvyj6P/iSr91k-F.jpg",
      bgURL: "https://i.postimg.cc/vTDvyj6P/iSr91k-F.jpg",
      missionsList: [
        {
          missionID: "wp1-1",
          name: "Advanced Firearms: Logger's Point",
          earnings: "750",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [
            {
              weapons: ["w31"],
              text: "16GA/9.3x74R Drilling"
            },
            {
              weapons: ["w32"],
              text: "7mm-08 Scout Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Cottontail Rabbit in Logger's Point using the 16GA/9.3x74R Drilling Combination Gun.",
            "Harvest a male Whitetail Deer in Logger's Point scoring more than 120 using 7mm-08 ammunition.",
            "Harvest a Coyote in Logger's Point using the 16GA/9.3x74R Drilling Combination Gun."
          ],
        },
        {
          missionID: "wp1-2",
          name: "Advanced Firearms: Rougarou Bayou",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w31"],
              text: "16GA/9.3x74R Drilling"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Mallard Duck with a single shot in Rougarou Bayou using the 16GA/9.3x74R Drilling Combination Gun.",
            "Harvest a second airborne Mallard Duck with a single shot in Rougarou Bayou using the 16GA/9.3x74R Drilling Combination Gun.",
            "Harvest an airborne Gadwall with a single shot in Rougarou Bayou using the 16GA/9.3x74R Drilling Combination Gun.",
            "Harvest a second airborne Gadwall with a single shot in Rougarou Bayou using the 16GA/9.3x74R Drilling Combination Gun.",
            "Harvest an airborne Northern Pintail with a single shot in Rougarou Bayou using the 16GA/9.3x74R Drilling Combination Gun.",
            "Harvest a second airborne Northern Pintail with a single shot in Rougarou Bayou using the 16GA/9.3x74R Drilling Combination Gun.",
            "Harvest an airborne American Black Duck with a single shot in Rougarou Bayou using the 16GA/9.3x74R Drilling Combination Gun.",
            "Harvest a second airborne American Black Duck with a single shot in Rougarou Bayou using the 16GA/9.3x74R Drilling Combination Gun."
          ],
        },
        {
          missionID: "wp1-3",
          name: "Advanced Firearms: Redfeather Falls",
          earnings: "1500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w31", "w32"],
              text: "16GA/9.3x74R Drilling or 7mm-08 Scout Bolt Action Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Blacktail Deer from more than 150m (Approx. 492 ft) in Redfeather Falls using a 16GA/9.3x74R Drilling Combination Gun or the 7mm-08 Scout Bolt Action Rifle with 7mm-08 Ammunition (HV).",
            "Harvest a Black Bear scoring more than 21 in Redfeather Falls using a 16GA/9.3x74R Drilling Combination Gun or the 7mm-08 Scout Bolt Action Rifle with 7mm-08 Ammunition (HP).",
            "Harvest a male Light Moose from more than 75m (Approx. 246 ft) in Redfeather Falls with a shot to the heart and/or lungs using the 16GA/9.3x74R Drilling Combination Gun or the 7mm-08 Scout Bolt Action Rifle with 7mm-08 Ammunition (HP) without a scope."
          ],
        },
        {
          missionID: "wp1-4",
          name: "Advanced Firearms: Hirschfelden",
          earnings: "2250",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w31"],
              text: "16GA/9.3x74R Drilling"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Chocolate Fallow Deer in Hirschfelden using any ethical ammunition from the 16GA/9.3x74R Drilling Combination Gun.",
            "Harvest an airborne male Pheasant in Hirschfelden scoring more than 25 using the 16GA/9.3x74R Drilling Combination Gun.",
            "Harvest a Red Fox with a single shot in Hirschfelden using the 16GA/9.3x74R Drilling Combination Gun. The skull must not be hit."
          ],
        },
        {
          missionID: "wp1-5",
          name: "Advanced Firearms: Hemmeldal",
          earnings: "2500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w31"],
              text: "16GA/9.3x74R Drilling"
            },
            {
              weapons: ["w32"],
              text: "7mm-08 Scout Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Grey coloured Eurasian Lynx in Hemmeldal using any ethical ammunition from the 16GA/9.3x74R Drilling Combination Gun or the 7mm-08 Scout Bolt Action Rifle.",
            "Harvest a male Roe Deer in Hemmeldal scoring more than 175 using any ethical ammunition from the 16GA/9.3x74R Drilling Combination Gun or the 7mm-08 Scout Bolt Action Rifle.",
            "Harvest a Brown Bear in Hemmeldal with a shot to the heart and/or lungs from over 100m (Approx 328ft) using any ethical ammunition from the 16GA/9.3x74R Drilling Combination Gun or the 7mm-08 Scout Bolt Action Rifle.",
            "Harvest an airborne Willow Ptarmigan in Hemmeldal from over 20m using the 16GA/9.3x74R Drilling Combination Gun.",
            "Harvest an airborne Willow Ptarmigan in Hemmeldal from over 25m using the 16GA/9.3x74R Drilling Combination Gun.",
            "Harvest an airborne Willow Ptarmigan in Hemmeldal from over 30m using the 16GA/9.3x74R Drilling Combination Gun."
          ],
        },
      ],
    },
    {
      id: "wp2",
      name: "Aimpoint Missions",
      displayName: "Aimpoint",
      animalID: "wp2",
      filterArray: ["f1", "r4", "r6", "r7", "r5", "r8", "r9"], // Reservati na kojim se nalazi
      missionPackValue: "5.000gm$",
      imageURL: "https://i.postimg.cc/fbwfQ0KL/tenpoint.png",
      bgURL: "https://i.postimg.cc/fbwfQ0KL/tenpoint.png",
      missionsList: [
        {
          missionID: "wp2-1",
          name: "Keep Your Eye Open",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [
            {
              weapons: ["s2"],
              text: "Aimpoint H34L"
            },
            {
              weapons: ["w9", "w13", "w22", "w15", "w16"],
              text: `
                .308 Anschütz 1780 D FL Bolt Action Rifle, 
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle
                `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer at Redfeather Falls using a rifle mounted with an Aimpoint sight.",
            "Harvest a Blacktail Deer at Redfeather Falls using a rifle mounted with an Aimpoint sight in the same hunt.",
            "Harvest a Black Bear at Redfeather Falls using a rifle mounted with an Aimpoint sight in the same hunt.",
            "Harvest a Roosevelt Elk at Redfeather Falls using a rifle mounted with an Aimpoint sight in the same hunt.",
            "Harvest a Moose at Redfeather Falls using a rifle mounted with an Aimpoint sight in the same hunt."
          ],
        },
        {
          missionID: "wp2-2",
          name: "Under Extreme Circumstances",
          earnings: "250",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["s2"],
              text: "Aimpoint H34L"
            },
            {
              weapons: ["w9", "w13", "w22", "w15", "w16"],
              text: `
                .308 Anschütz 1780 D FL Bolt Action Rifle, 
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle
                `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Feral Hog in Rougarou Bayou using a rifle mounted with an Aimpoint sight without using a tower, blind, tree stand or tripod.",
            "Harvest a Brown Bear in Hemmeldal using a rifle mounted with an Aimpoint sight without using a tower, a blind, tree stand or tripod."
          ],
        },
        {
          missionID: "wp2-3",
          name: "Timing A Shot",
          earnings: "500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["s2"],
              text: "Aimpoint H34L"
            },
            {
              weapons: ["w1"],
              text: ".223 Bolt Action Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a moving Red Fox using a .223 Bolt Action Rifle mounted with a Aimpoint sight."
          ],
        },
        {
          missionID: "wp2-4",
          name: "From Eyes To Trigger",
          earnings: "1250",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["s1"],
              text: "Aimpoint Micro H-1"
            },
            {
              weapons: ["w11"],
              text: "6.5x55 Blaser R8 Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a spooked Roe Deer using a 6.5x55 Blaser R8 Bolt Action Rifle mounted with a Aimpoint Micro H-1 Sight from under 20 meter.",
            "Harvest another spooked Roe Deer using a 6.5x55 Blaser R8 Bolt Action Rifle mounted with a Aimpoint Micro H-1 Sight from under 20 meter."
          ],
        },
        {
          missionID: "wp2-5",
          name: "The Heart Of The Matter",
          earnings: "2900",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["s2"],
              text: "Aimpoint H34L"
            },
            {
              weapons: ["w9", "w13", "w22", "w15", "w16"],
              text: `
                .308 Anschütz 1780 D FL Bolt Action Rifle, 
                7mm Magnum Bullpup Rifle,
                7mm Magnum Break Action Rifle,
                8x57 IS Anschütz 1780 D FL Bolt Action Rifle,
                9.3x62 Anschütz 1780 D FL Bolt Action Rifle
                `
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Wild Boar with a shot through the heart using a rifle mounted with a Aimpoint H34L Sight."
          ],
        },
      ],
    },
    {
      id: "wp3",
      name: "Anschütz Missions",
      displayName: "Anschütz",
      animalID: "wp3",
      filterArray: ["f1", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r11"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://i.postimg.cc/fbK5VvLm/tenpoint.png",
      bgURL: "https://i.postimg.cc/fbK5VvLm/tenpoint.png",
      missionsList: [
        {
          missionID: "wp3-1",
          name: "Roe For Starters",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [
            {
              weapons: ["w9"],
              text: ".308 Anschütz 1780 D FL Bolt Action Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Roe Deer using a .308 Anschütz 1780 D FL Bolt Action Rifle.",
            "Harvest another Roe Deer using a .308 Anschütz 1780 D FL Bolt Action Rifle during the same hunt.",
            "Harvest another Roe Deer using a .308 Anschütz 1780 D FL Bolt Action Rifle during the same hunt."
          ],
        },
        {
          missionID: "wp3-2",
          name: "Everything Is Coming Up Mule Deer",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w9"],
              text: ".308 Anschütz 1780 D FL Bolt Action Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Mule Deer with a heart or lung shot using a .308 Anschütz 1780 D FL Bolt Action Rifle."
          ],
        },
        {
          missionID: "wp3-3",
          name: "Blacktail From Afar",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w15"],
              text: "8x57 IS Anschütz 1780 D FL Bolt Action Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Blacktail Deer using a 8x57 IS Anschütz 1780 D FL Bolt Action Rifle from a minimum of 100 meters (approx. 328 ft).",
            "Harvest another Blacktail Deer using a 8x57 IS Anschütz 1780 D FL Bolt Action Rifle from a minimum of 120 meters (approx. 328 ft) during the same hunt.",
            "Harvest another Blacktail Deer using a 8x57 IS Anschütz 1780 D FL Bolt Action Rifle from a minimum of 140 meters (approx. 459 ft.) during the same hunt."
          ],
        },
        {
          missionID: "wp3-4",
          name: "Whitetail Up Close",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w15"],
              text: "8x57 IS Anschütz 1780 D FL Bolt Action Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer using a 8x57 IS Anschütz 1780 D FL Bolt Action Rifle without a scope.",
            "Harvest another Whitetail Deer using a 8x57 IS Anschütz 1780 D FL Bolt Action Rifle without a scope in the same hunt."
          ],
        },
        {
          missionID: "wp3-5",
          name: "Chunky Red Deer",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w16"],
              text: "9.3x62 Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Deer weighing at least 190 kg (approx. 419 lbs) using a 9.3x62 Anschütz 1780 D FL Bolt Action Rifle.",
            "Harvest another Red Deer weighing at least 190 kg (approx. 419 lbs) using a 9.3x62 Anschütz 1780 D FL Bolt Action Rifle."
          ],
        },
        {
          missionID: "wp3-6",
          name: "Big Boned Roosevelt Elk",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w16"],
              text: "9.3x62 Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Roosevelt Elk weighing at least 400 kg (approx. 882 lbs.) using a 9.3x62 Anschütz 1780 D FL Bolt Action Rifle.",
            "Harvest another Roosevelt Elk weighing at least 400 kg (approx. 882 lbs.) using a 9.3x62 Anschütz 1780 D FL Bolt Action Rifle."
          ],
        },
        {
          missionID: "wp3-7",
          name: "Mighty Moose",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w9", "w15", "w16"],
              text: ".308 Anschütz 1780 D FL Bolt Action Rifle, 8x57 IS Anschütz 1780 D FL Bolt Action Rifle or 9.3x62 Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Moose with at least 16 typical points using either a .308, 8x57 or a 9.3x62 Anschütz Rifle."
          ],
        },
        {
          missionID: "wp3-8",
          name: "Wild Boar Galore",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w9", "w15", "w16"],
              text: ".308 Anschütz 1780 D FL Bolt Action Rifle, 8x57 IS Anschütz 1780 D FL Bolt Action Rifle or 9.3x62 Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Wild Boar with both tusks at least 4 inches in length using either a .308, 8x57 or a 9.3x62 Anschütz Rifle"
          ],
        },
        {
          missionID: "wp3-9",
          name: "Rather Far Away",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w16"],
              text: "9.3x62 Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Brown Bear from a minimum of 180 meters using a 9.3x62 Anschütz 1780 D FL Bolt Action Rifle"
          ],
        },
        {
          missionID: "wp3-10",
          name: "Eyes of the Hawk",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w9"],
              text: ".308 Anschütz 1780 D FL Bolt Action Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Coyote from a minimum of 80 meters using a .308 Anschütz 1780 D FL Bolt Action Rifle without using a scope."
          ],
        },
      ],
    },
    {
      id: "wp4",
      name: "Blaser Missions",
      displayName: "Blaser",
      animalID: "wp4",
      filterArray: ["f1", "r4", "r6", "r10", "r5", "r2", "r3", "r7", "r9", "r12", "r8"], // Reservati na kojim se nalazi
      missionPackValue: "5.000gm$",
      imageURL: "https://i.postimg.cc/SRtvJfgD/tenpoint.png",
      bgURL: "https://i.postimg.cc/SRtvJfgD/tenpoint.png",
      missionsList: [
        {
          missionID: "wp4-1",
          name: "Moose Hunt Up Close",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [
            {
              weapons: ["w37"],
              text: "12 GA Blaser F3 Game O/U Shotgun"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Moose from under 30 meters (approx. 98 ft) using a 12 GA Blaser F3 Game O/U Shotgun loaded with Slug shells.",
            "Harvest another Moose from under 30 meters (approx. 98 ft) using a 12 GA Blaser F3 Game O/U Shotgun loaded with Slug shells.",
            "Harvest another Moose from under 30 meters (approx. 98 ft) using a 12 GA Blaser F3 Game O/U Shotgun loaded with Slug shells."
          ],
        },
        {
          missionID: "wp4-2",
          name: "Pigs From Afar",
          earnings: "250",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w11"],
              text: "6.5x55 Blaser R8 Bolt Action Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Wild Boar or a Feral Hog from over 150 meters (approx. 492 ft.) using the 6.5x55 Blaser R8 Bolt Action Rifle.",
            "Harvest a Wild Boar or a Feral Hog from over 150 meters (approx. 492 ft.) using the 6.5x55 Blaser R8 Bolt Action Rifle.",
            "Harvest a Wild Boar or a Feral Hog from over 150 meters (approx. 492 ft.) using the 6.5x55 Blaser R8 Bolt Action Rifle."
          ],
        },
        {
          missionID: "wp4-3",
          name: "Running Roe Deers",
          earnings: "500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w37"],
              text: "12 GA Blaser F3 Game O/U Shotgun"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a moving Roe Deer using a 12 GA Blaser F3 Game O/U Shotgun loaded with Buckshot shells.",
            "Harvest a moving Roe Deer using a 12 GA Blaser F3 Game O/U Shotgun loaded with Buckshot shells.",
            "Harvest a moving Roe Deer using a 12 GA Blaser F3 Game O/U Shotgun loaded with Buckshot shells."
          ],
        },
        {
          missionID: "wp4-4",
          name: "The Majestic Red Deer",
          earnings: "1250",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w11"],
              text: "6.5x55 Blaser R8 Bolt Action Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Deer of at least a 200 point score using the 6.5x55 Blaser R8 Bolt Action Rifle.",
            "Harvest another Red Deer of at least a 200 point score using the 6.5x55 Blaser R8 Bolt Action Rifle.",
            "Harvest another Red Deer of at least a 200 point score using the 6.5x55 Blaser R8 Bolt Action Rifle."
          ],
        },
        {
          missionID: "wp4-5",
          name: "Pheasant Hunting Done Right",
          earnings: "2900",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w37"],
              text: "12 GA Blaser F3 Game O/U Shotgun"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest an airborne Pheasant using a 12 GA Blaser F3 Game O/U Shotgun loaded with Birdshot shells.",
            "Harvest another airborne Pheasant using a 12 GA Blaser F3 Game O/U Shotgun loaded with Birdshot shells during the same hunt.",
            "Harvest another airborne Pheasant using a 12 GA Blaser F3 Game O/U Shotgun loaded with Birdshot shells during the same hunt.",
            "Harvest another airborne Pheasant using a 12 GA Blaser F3 Game O/U Shotgun loaded with Birdshot shells during the same hunt.",
            "Harvest another airborne Pheasant using a 12 GA Blaser F3 Game O/U Shotgun loaded with Birdshot shells during the same hunt."
          ],
        },
      ],
    },
    {
      id: "wp5",
      name: "Laura Francese Missions",
      displayName: "Laura Francese",
      animalID: "wp5",
      filterArray: ["f1", "r1", "r2", "r3", "r4", "r6", "r10", "r5", "r8", "r9", "r7", "r12"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/21/Laura_francese_avatar_256.png",
      bgURL: "https://static.wikia.nocookie.net/thehuntergame/images/2/21/Laura_francese_avatar_256.png",
      missionsList: [
        {
          missionID: "wp5-1",
          name: "Prove Yourself",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "This mission can only be completed in the Redfeather Falls reserve.",
            imageURL: "",
            link: ""
          },
          goals: [
            "ID tracks from a Whitetail Deer.",
            "ID tracks from a Blacktail Deer during the same hunt.",
            "ID tracks from a Roosevelt Elk during the same hunt.",
            "ID tracks from a Black Bear during the same hunt.",
            "ID tracks from a Moose during the same hunt"
          ],
        },
        {
          missionID: "wp5-2",
          name: "Off With A Bang",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w48"],
              text: ".50 Cap Lock Muzzleloader"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Moose using a .50 Cap Lock Muzzleloader"
          ],
        },
        {
          missionID: "wp5-3",
          name: "The Good, The Bad and the Ugly",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w41"],
              text: ".22 Pistol"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Turkey of at least 9 kg (approx. 19.8 lbs) using a .22 Pistol.",
            "Harvest a male Turkey of at least 9 kg (approx. 19.8 lbs) using a .22 Pistol during the same hunt."
          ],
        },
        {
          missionID: "wp5-4",
          name: "Straight Shooter",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w42"],
              text: ".357 Revolver"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Fox using a .357 Revolver without using a scope"
          ],
        },
        {
          missionID: "wp5-5",
          name: "Main Ingredients",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w59", "w60"],
              text: "Any crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Wild Boar using a Crossbow",
            "Harvest a Feral Hog using a Crossbow"
          ],
        },
        {
          missionID: "wp5-6",
          name: "Bull's Eye",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w59", "w60"],
              text: "Any crossbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Roosevelt Elk Bull using a Crossbow from under 18.28 m (approx. 60 ft) without using a platform or blind"
          ],
        },
        {
          missionID: "wp5-7",
          name: "First Step To Greatness",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54"],
              text: "Any Compound bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Mule Deer using a Compound Bow.",
            "Harvest a Whitetail Deer using a Compound Bow during the same hunt.",
            "Harvest a Feral Hog using a Compound Bow during the same hunt."
          ],
        },
        {
          missionID: "wp5-8",
          name: "Over The Fields And Far Away",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w51", "w52", "w53", "w54"],
              text: "Any Compound bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Coyote from over 39.62 m (approx. 130 feet) using a Compound Bow.",
            "Harvest a Coyote from over 39.62 m (approx. 130 feet) using a Compound Bow.",
            "Harvest a Coyote from over 39.62 m (approx. 130 feet) using a Compound Bow."
          ],
        },
        {
          missionID: "wp5-9",
          name: "Closing in",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56"],
              text: "Heavy Recurve Bow or Recurve Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest Red Deer from under 30.48 m (approx. 100 ft) with a Recurve Bow weighing at least 215.456 kg (approx. 475 lbs) and bringing in a score of at least 220 points. Stands, blinds and towers are not allowed."
          ],
        },
        {
          missionID: "wp5-10",
          name: "The Ultimate Challenge",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56"],
              text: "Heavy Recurve Bow or Recurve Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Black Bear through a shot to the heart using a Recurve Bow"
          ],
        },
      ],
    },
    {
      id: "wp6",
      name: "Nosler Missions",
      displayName: "Nosler",
      animalID: "wp6",
      filterArray: ["f1", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "r11", "r12"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/5/50/Nosler_logo.jpg",
      bgURL: "https://static.wikia.nocookie.net/thehuntergame/images/5/50/Nosler_logo.jpg",
      missionsList: [
        {
          missionID: "wp6-1",
          name: "The Big Mystery",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Mule Deer using .243 ammunition.",
            "Harvest another Mule Deer using .243 ammunition in the same hunt."
          ],
        },
        {
          missionID: "wp6-2",
          name: "Varmint Hunting",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w1", "w2"],
              text: ".223 Bolt Action Rifle or .223 Semi-Automatic Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Fox or a Coyote using .223 ammunition.",
            "Harvest another Red Fox or a Coyote using .223 ammunition.",
            "Harvest another Red Fox or a Coyote using .223 ammunition."
          ],
        },
        {
          missionID: "wp6-3",
          name: "Loud Bangs",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w19", "w25", "w26"],
              text: ".30-06 Lever Action Rifle, .30-06 Bolt Action Rifle or .30-06 Stutzen Bolt Action Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Roosevelt Elk bull weighing at least 400kg using .30-06 ammunition.",
            "Harvest another Roosevelt Elk bull weighing at least 400kg using .30-06 ammunition in the same hunt."
          ],
        },
        {
          missionID: "wp6-4",
          name: "Hog Slogging",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w43"],
              text: ".44 Revolver"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Feral Hog from a maximum distance of 30 meters (approx. 98 ft.) using .44 ammunition and without using a scope.",
            "Harvest another Feral Hog from a maximum distance of 30 meters (approx. 98 ft.) using .44 ammunition and without using a scope.",
            "Harvest a Wild Boar from a maximum distance of 30 meters (approx. 98 ft.) using .44 ammunition and without using a scope.",
            "Harvest another Wild Boar from a maximum distance of 30 meters (approx. 98 ft.) using .44 ammunition and without using a scope."
          ],
        },
        {
          missionID: "wp6-5",
          name: "Far Flung Bullet",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w8"],
              text: ".300 Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Moose from over a 180 meter (approx. 591 ft.) distance using .300 ammunition"
          ],
        },
        {
          missionID: "wp6-6",
          name: "White Lung",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w11", "w12"],
              text: "6.5x55 Blaser R8 Bolt Action Rifle or 6.5x55 Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer with a lung shot using 6.5x55 ammunition"
          ],
        },
        {
          missionID: "wp6-7",
          name: "White Heart",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w9", "w10", "w46"],
              text: ".308 Anschütz 1780 D FL Bolt Action Rifle, .308 Bolt Action Rifle or .308 Handgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer with a heart shot using .308 ammunition."
          ],
        },
        {
          missionID: "wp6-8",
          name: "Bear",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w15", "w28"],
              text: "8x57 IS Anschütz 1780 D FL Bolt Action Rifle or 8x57 IS K98k Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Black Bear weighing at least 200kg (approx. 441 lbs.) using 8x57 ammunition."
          ],
        },
        {
          missionID: "wp6-9",
          name: "Bear II: Rearmed",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w16"],
              text: "9.3x62 Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Brown Bear weighing at least 340kg (approx. 750 lbs.) using 9.3x62 ammunition"
          ],
        },
        {
          missionID: "wp6-10",
          name: "Field Test Day From Hell",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w1", "w2"],
              text: ".223 Bolt Action Rifle or .223 Semi-Automatic Rifle"
            },
            {
              weapons: ["w7"],
              text: ".270 Bolt Action Rifle"
            },
            {
              weapons: ["w8"],
              text: ".300 Bolt Action Rifle"
            },
            {
              weapons: ["w19", "w25", "w26"],
              text: ".30-06 Lever Action Rifle, .30-06 Bolt Action Rifle or .30-06 Stutzen Bolt Action Rifle"
            },
            {
              weapons: ["w9", "w10", "w46"],
              text: ".308 Anschütz 1780 D FL Bolt Action Rifle, .308 Bolt Action Rifle or .308 Handgun"
            },
            {
              weapons: ["w11", "w12"],
              text: "6.5x55 Blaser R8 Bolt Action Rifle or 6.5x55 Bolt Action Rifle"
            },
            {
              weapons: ["w15", "w28"],
              text: "8x57 IS Anschütz 1780 D FL Bolt Action Rifle or 8x57 IS K98k Bolt Action Rifle"
            },
            {
              weapons: ["w16"],
              text: "9.3x62 Anschütz 1780 D FL Bolt Action Rifle"
            },
            {
              weapons: ["w42"],
              text: ".357 Revolver"
            },,
            {
              weapons: ["w43"],
              text: ".44 Revolver"
            },
            {
              weapons: ["w13", "w22"],
              text: "7mm Magnum Bullpup Rifle or 7mm Magnum Break Action Rifle"
            },
            {
              weapons: ["w18"],
              text: ".30-30 Lever Action Rifle"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Roe Deer using .223 ammunition.",
            "Harvest another Roe Deer using .270 ammunition in the same hunt.",
            "Harvest another Roe Deer using .300 ammunition in the same hunt.",
            "Harvest another Roe Deer using .30-06 ammunition in the same hunt.",
            "Harvest another Roe Deer using .308 ammunition in the same hunt.",
            "Harvest another Roe Deer using 6.5x55 ammunition in the same hunt.",
            "Harvest another Roe Deer using 8x57 ammunition in the same hunt.",
            "Harvest another Roe Deer using 9.3x62 ammunition in the same hunt.",
            "Harvest another Roe Deer using .243 ammunition in the same hunt.",
            "Harvest another Roe Deer using .357 ammunition in the same hunt.",
            "Harvest another Roe Deer using .44 ammunition in the same hunt.",
            "Harvest another Roe Deer using 7mm Magnum ammunition in the same hunt.",
            "Harvest another Roe Deer using .30-30 ammunition in the same hunt."
          ],
        },
      ],
    },
    {
      id: "wp7",
      name: "Parker Bows Missions",
      displayName: "Parker Bows",
      animalID: "wp7",
      filterArray: ["f1", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9"], // Reservati na kojim se nalazi
      missionPackValue: "5.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/c1/Parker_logo.jpg",
      bgURL: "https://static.wikia.nocookie.net/thehuntergame/images/c/c1/Parker_logo.jpg",
      missionsList: [
        {
          missionID: "wp7-1",
          name: "Take Your Pick",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [
            {
              weapons: ["w52"],
              text: "Compound Bow Parker Python"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest one animal from Logger's Point reserve using a Parker Python Compound Bow.",
            "Harvest another animal from Logger's Point reserve using a Parker Python Compound Bow in the same hunt.",
            "Harvest another animal from Logger's Point reserve using a Parker Python Compound Bow in the same hunt."
          ],
        },
        {
          missionID: "wp7-2",
          name: "Join The Herd",
          earnings: "250",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
             {
              weapons: ["w52"],
              text: "Compound Bow Parker Python"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Roe Deer from under 20 meters using a Parker Python Compound Bow.",
            "Harvest another Roe Deer from under 20 meters using a Parker Python Compound Bow in the same hunt.",
            "Harvest another Roe Deer from under 20 meters using a Parker Python Compound Bow in the same hunt.",
            "Harvest another Roe Deer from under 20 meters using a Parker Python Compound Bow in the same hunt."
          ],
        },
        {
          missionID: "wp7-3",
          name: "Pin Them Down",
          earnings: "500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
             {
              weapons: ["w52"],
              text: "Compound Bow Parker Python"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Fox from a minimum of 20 meters using a Parker Python Compound Bow"
          ],
        },
        {
          missionID: "wp7-4",
          name: "Pins And Needles",
          earnings: "1250",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
             {
              weapons: ["w52"],
              text: "Compound Bow Parker Python"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Coyote from a minimum of 40 meters using a Parker Python Compound Bow"
          ],
        },
        {
          missionID: "wp7-5",
          name: "Pinhead",
          earnings: "2900",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
             {
              weapons: ["w52"],
              text: "Compound Bow Parker Python"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer from a minimum of 60 meters using a Parker Python Compound Bow"
          ],
        },
      ],
    },
    {
      id: "wp8",
      name: "Shotgun Missions",
      displayName: "Shotgun",
      animalID: "wp8",
      filterArray: ["f1", "r1", "r2", "r3", "r4", "r6", "r7", "r8", "r9", "r10", "r11"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/6a/Shells_16ga_buckshot.png",
      bgURL: "https://static.wikia.nocookie.net/thehuntergame/images/6/6a/Shells_16ga_buckshot.png",
      missionsList: [
        {
          missionID: "wp8-1",
          name: "The Birdshot Chapter",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Turkey in Settler Creeks using any permitted birdshot ammo.",
            "Harvest a Cottontail Rabbit in Settler Creeks using any permitted birdshot ammo in the same hunt."
          ],
        },
        {
          missionID: "wp8-2",
          name: "The Buckshot Chapter",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Fox in Hemmeldal using any permitted buckshot ammo.",
            "Harvest an Eurasian Lynx in Hemmeldal using any permitted buckshot ammo in the same hunt.",
            "Harvest a Roe Deer in Hemmeldal using any permitted buckshot ammo in the same hunt."
          ],
        },
        {
          missionID: "wp8-3",
          name: "The Slug Chapter",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Feral Hog in Logger's Point using any permitted slug ammo.",
            "Harvest a male Whitetail Deer in Logger's Point using any permitted slug ammo in the same hunt.",
            "Harvest a male Mule Deer in Logger's Point using any permitted slug ammo in the same hunt."
          ],
        },
        {
          missionID: "wp8-4",
          name: "The Cold Chapter",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Snowshoe Hare using any permitted shotgun ammunition.",
            "Harvest an Arctic Fox using any permitted shotgun ammunition in the same hunt.",
            "Harvest a Dall Sheep using any permitted shotgun ammunition in the same hunt.",
            "Harvest a Sitka Deer using any permitted shotgun ammunition in the same hunt."
          ],
        },
        {
          missionID: "wp8-5",
          name: "The Hot Chapter",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a European Rabbit at 100% Harvest Value in Bushrangers Run using any permitted shotgun ammunition.",
            "Harvest a Feral Goat at 100% Harvest Value in Bushrangers Run using any permitted shotgun ammunition in the same hunt.",
            "Harvest a Red Kangaroo at 100% Harvest Value in Bushrangers Run using any permitted shotgun ammunition in the same hunt."
          ],
        },
        {
          missionID: "wp8-6",
          name: "The Autumn Chapter",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a White-tailed Ptarmigan in Timbergold Trails using any permitted shotgun ammunition.",
            "Then harvest another White-tailed Ptarmigan in Timbergold Trails using any permitted shotgun ammunition in the same hunt.",
            "Then harvest another White-tailed Ptarmigan in Timbergold Trails using any permitted shotgun ammunition in the same hunt.",
            "Harvest a Grey Wolf in Timbergold Trails using any permitted shotgun ammunition in the same hunt.",
            "Then harvest another Grey Wolf in Timbergold Trails using any permitted shotgun ammunition in the same hunt.",
            "Harvest a Mule Deer in Timbergold Trails using any permitted shotgun ammunition in the same hunt."
          ],
        },
        {
          missionID: "wp8-7",
          name: "The Poker Chapter",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w37"],
              text: "12 GA Blaser F3 Game O/U Shotgun"
            },
            {
              weapons: ["w36", "w39"],
              text: "12 GA Side By Side Shotgun or 16 GA Side By Side Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Black Bear in Redfeather Falls using permitted ammo with the 12 GA Single Shot Shotgun.",
            "Then harvest another Black Bear in Redfeather Falls using permitted ammo with the 12 GA Single Shot Shotgun.",
            "Then harvest another Black Bear in Redfeather Falls using permitted ammo with the 12 GA Single Shot Shotgun.",
            "Then harvest another Black Bear in Redfeather Falls using permitted ammo with the 12 GA Single Shot Shotgun.",
            "Harvest a Whitetail Deer in Redfeather Falls using permitted ammo with any Side by Side Shotgun (12 GA Side By Side Shotgun, 16 GA Side By Side Shotgun) in the same hunt.",
            "Then harvest another Whitetail Deer in Redfeather Falls using permitted ammo with any Side by Side Shotgun (12 GA Side By Side Shotgun, 16 GA Side By Side Shotgun) in the same hunt.",
            "Then harvest another Whitetail Deer in Redfeather Falls using permitted ammo with any Side by Side Shotgun (12 GA Side By Side Shotgun, 16 GA Side By Side Shotgun) in the same hunt.",
            "Then harvest another Whitetail Deer in Redfeather Falls using permitted ammo with any Side by Side Shotgun (12 GA Side By Side Shotgun, 16 GA Side By Side Shotgun) in the same hunt.",
            "Harvest a Roosevelt Elk in Redfeather Falls using permitted ammo with a 12 GA Blaser F3 Game O/U Shotgun in the same hunt.",
            "Harvest a Roosevelt Elk in Redfeather Falls using permitted ammo with a 12 GA Blaser F3 Game O/U Shotgun in the same hunt.",
            "Harvest a Roosevelt Elk in Redfeather Falls using permitted ammo with a 12 GA Blaser F3 Game O/U Shotgun in the same hunt.",
            "Harvest a Roosevelt Elk in Redfeather Falls using permitted ammo with a 12 GA Blaser F3 Game O/U Shotgun in the same hunt."
          ],
        },
        {
          missionID: "wp8-8",
          name: "The Diversity Chapter",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w33"],
              text: "10 GA Lever Action Shotgun"
            },
            {
              weapons: ["w34"],
              text: "12 GA Pump Action Shotgun"
            },
            {
              weapons: ["w35", "w40"],
              text: "Maisto 12 GA Semi-Automatic Shotgun or 20 GA Semi-Automatic Shotgun"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Coyote in Whitehart Island using permitted ammo with any 12 GA Pump Action Shotgun.",
            "Then harvest another Coyote in Whitehart Island using permitted ammo with any 12 GA Pump Action Shotgun in the same hunt.",
            "Then harvest another Coyote in Whitehart Island using permitted ammo with any 12 GA Pump Action Shotgun in the same hunt.",
            "Then harvest another Coyote in Whitehart Island using permitted ammo with any 12 GA Pump Action Shotgun in the same hunt.",
            "Then harvest another Coyote in Whitehart Island using permitted ammo with any 12 GA Pump Action Shotgun in the same hunt.",
            "Harvest a Turkey in Whitehart Island using permitted ammo with any semi-auto shotgun (20 GA Semi-Automatic Shotgun, Maisto 12 GA Semi-Automatic Shotgun) in the same hunt.",
            "Then harvest another Turkey in Whitehart Island using permitted ammo with any semi-auto shotgun (20 GA Semi-Automatic Shotgun, Maisto 12 GA Semi-Automatic Shotgun) in the same hunt.",
            "Then harvest another Turkey in Whitehart Island using permitted ammo with any semi-auto shotgun (20 GA Semi-Automatic Shotgun, Maisto 12 GA Semi-Automatic Shotgun) in the same hunt.",
            "Then harvest another Turkey in Whitehart Island using permitted ammo with any semi-auto shotgun (20 GA Semi-Automatic Shotgun, Maisto 12 GA Semi-Automatic Shotgun) in the same hunt.",
            "Then harvest another Turkey in Whitehart Island using permitted ammo with any semi-auto shotgun (20 GA Semi-Automatic Shotgun, Maisto 12 GA Semi-Automatic Shotgun) in the same hunt.",
            "Harvest a Blacktail Deer in Whitehart Island using permitted ammo with 10 GA Lever Action Shotgun in the same hunt.",
            "Then harvest another Blacktail Deer in Whitehart Island using permitted ammo with 10 GA Lever Action Shotgun in the same hunt.",
            "Then harvest another Blacktail Deer in Whitehart Island using permitted ammo with 10 GA Lever Action Shotgun in the same hunt.",
            "Then harvest another Blacktail Deer in Whitehart Island using permitted ammo with 10 GA Lever Action Shotgun in the same hunt.",
            "Then harvest another Blacktail Deer in Whitehart Island using permitted ammo with 10 GA Lever Action Shotgun in the same hunt."
          ],
        },
        {
          missionID: "wp8-9",
          name: "The Scope Chapter",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w34", "w35"],
              text: "12 GA Pump Action Shotgun or Maisto 12 GA Semi-Automatic Shotgun"
            },
            {
              weapons: ["s3", "s4"],
              text: "2-6x32mm Slug Scope or Maisto 2x Red Dot Shotgun Scope"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Roe Deer in Val-des-Bois using permitted buckshot ammo from a distance of 30 meters or higher using a scope.",
            "Then harvest another Roe Deer in Val-des-Bois using permitted buckshot ammo from a distance of 30 meters or higher using a scope in the same hunt.",
            "Then harvest another Roe Deer in Val-des-Bois using permitted buckshot ammo from a distance of 30 meters or higher using a scope in the same hunt.",
            "Harvest a Rock Ptarmigan in Val-des-Bois using permitted birdshot ammo from a distance of 40 meters or higher using a scope in the same hunt.",
            "Then harvest another Rock Ptarmigan in Val-des-Bois using permitted birdshot ammo from a distance of 40 meters or higher using a scope in the same hunt.",
            "Then harvest another Rock Ptarmigan in Val-des-Bois using permitted birdshot ammo from a distance of 40 meters or higher using a scope in the same hunt.",
            "Harvest a Brown Bear in Val-des-Bois using permitted slug ammo from a distance of 60 meters or higher using a scope in the same hunt.",
            "Then harvest another Brown Bear in Val-des-Bois using permitted slug ammo from a distance of 60 meters or higher using a scope in the same hunt.",
            "Then harvest another Brown Bear in Val-des-Bois using permitted slug ammo from a distance of 60 meters or higher using a scope in the same hunt."
          ],
        },
        {
          missionID: "wp8-10",
          name: "Two Deer With One Stone",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Kill two Whitetail Deer in Rougarou Bayou with a single shot using any permitted shotgun ammo."
          ],
        },
      ],
    },
    {
      id: "wp9",
      name: "Smoke Pole Missions",
      displayName: "Smoke Pole",
      animalID: "wp9",
      filterArray: ["f1", "r1", "r8", "r9", "r10", "r11", "r12"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/8d/Balls_lead_50_256.png",
      bgURL: "https://static.wikia.nocookie.net/thehuntergame/images/8/8d/Balls_lead_50_256.png",
      missionsList: [
        {
          missionID: "wp9-1",
          name: "Smoke Poles: Whitehart Island",
          earnings: "750",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [
            {
              weapons: ["w48"],
              text: ".50 Cap Lock Muzzleloader"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Turkey in Whitehart Island using a .50 Patched Round Ball.",
            "Harvest a Blacktail Deer in Whitehart Island using any Muzzleloader.",
            "Harvest a Coyote in Whitehart Island using any Muzzleloader."
          ],
        },
        {
          missionID: "wp9-2",
          name: "Smoke Poles: Val-des-Bois",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w49", "w50"],
              text: ".50 Inline Muzzleloader or .50 Inline Muzzleloading Pistol"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a female Brown Bear in Val-des-Bois using any Muzzleloader.",
            "Harvest a Red Deer scoring more than 200 in Val-des-Bois from less than 25m (approx. 82 ft) using a .50 Conical Bullet or a .50 Lead Bullet.",
            "Harvest an Alpine Ibex with a shot to the heart and/or lungs in Val-des-Bois using a .45 Saboted Bullet or a .45 Copper Bullet."
          ],
        },
        {
          missionID: "wp9-3",
          name: "Smoke Poles: Bushrangers Run",
          earnings: "1500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
             {
              weapons: ["w49"],
              text: ".50 Inline Muzzleloader"
            },
            {
              weapons: ["w50"],
              text: ".50 Inline Muzzleloading Pistol"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Piebald Feral Goat in Bushrangers Run using a .50 Patched Round Ball.",
            "Harvest a male Axis Deer scoring more than 150 in Bushrangers Run using a .45 Saboted Bullet.",
            "Harvest a Red Kangaroo scoring more than 65 in Bushrangers Run using a .45 Copper Bullet."
          ],
        },
        {
          missionID: "wp9-4",
          name: "Smoke Poles: Piccabeen Bay",
          earnings: "2000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Sambar Deer from more than 35m (Approx. 115 ft) in Piccabeen Bay using a .50 Conical Bullet or a .50 Lead Bullet.",
            "Harvest a Banteng from more than 35m (Approx. 115 ft) in Piccabeen Bay using a .50 Conical Bullet or a .50 Lead Bullet.",
            "Harvest a Grey Water Buffalo from more than 35m (Approx. 115 ft) in Piccabeen Bay using a .50 Conical Bullet or a .50 Lead Bullet.",
            "Harvest a Rusa Deer from more than 35m (Approx. 115 ft) in Piccabeen Bay using any permitted Muzzleloader ammo."
          ],
        },
        {
          missionID: "wp9-5",
          name: "Smoke Poles: Timbergold Trails",
          earnings: "2250",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Rocky Mountain Elk with a shot to the heart using a .50 Patched Round Ball or a .50 Lead Bullet.",
            "Harvest a Puma with a shot to the lungs using a .50 Patched Round Ball or a .45 Copper Bullet.",
            "Harvest a charging Grizzly Bear using a .50 Conical Bullet or a .50 Patched Round Ball.",
            "Harvest a male Bighorn Sheep scoring more than 150 without hitting the skull using a .45 Saboted Bullet or a .50 Patched Round Ball."
          ],
        },
        {
          missionID: "wp9-6",
          name: "Smoke Poles: Whiterime Ridge",
          earnings: "2500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
             {
              weapons: ["w52"],
              text: "Compound Bow Parker Python"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Dall Sheep with a single shot without hitting the liver in Whiterime Ridge using a .50 Patched Round Ball or a .45 Copper Bullet.",
            "Harvest a charging Bison scoring more than 110 with a single shot in Whiterime Ridge using any Muzzleloader.",
            "Harvest an unspooked female Polar Bear from under 35 m (approx. 115ft) with a single shot in Whiterime Ridge using a .50 Conical Bullet or a .50 Patched Round Ball.",
            "Harvest an unspooked Sitka Deer with a single shot in Whiterime Ridge using a .45 Saboted Bullet or a .50 Patched Round Ball.",
            "Harvest a Moose scoring more than 160 with a single shot to the heart and/or lungs from more than 40m (Approx. 164 ft), no scope, in Whiterime Ridge using a .50 Patched Round Ball or a .50 Lead Bullet."
          ],
        },
      ],
    },
    {
      id: "wp10",
      name: "Tenpoint Missions",
      displayName: "Tenpoint",
      animalID: "wp10",
      filterArray: ["f1", "r1", "r2", "r4", "r5", "r6", "r8", "r9", "r11"], // Reservati na kojim se nalazi
      missionPackValue: "5.000gm$",
      imageURL: "https://static.wikia.nocookie.net/thehuntergame/images/a/a8/Tenpoint_logo.jpg",
      bgURL: "https://static.wikia.nocookie.net/thehuntergame/images/a/a8/Tenpoint_logo.jpg",
      missionsList: [
        {
          missionID: "wp10-1",
          name: "Skittish Game",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [
            {
              weapons: ["w60"],
              text: "Tenpoint Carbon Fusion Crossbow"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Coyote on Whitehart Island using a Tenpoint Carbon Fusion Crossbow.",
            "Harvest a Turkey on Whitehart Island using a Tenpoint Carbon Fusion Crossbow in the same hunt."
          ],
        },
        {
          missionID: "wp10-2",
          name: "Keep Your Head Down",
          earnings: "250",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
             {
              weapons: ["w60"],
              text: "Tenpoint Carbon Fusion Crossbow"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Fox from under 20 meters (approx 66 ft.) using a Tenpoint Carbon Fusion Crossbow"
          ],
        },
        {
          missionID: "wp10-3",
          name: "Keep Your Head Up",
          earnings: "500",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
             {
              weapons: ["w60"],
              text: "Tenpoint Carbon Fusion Crossbow"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Blacktail Deer from over 40 meters (approx 131 ft.) using a Tenpoint Carbon Fusion Crossbow"
          ],
        },
        {
          missionID: "wp10-4",
          name: "The Importance Of Shot Placement",
          earnings: "1250",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
             {
              weapons: ["w60"],
              text: "Tenpoint Carbon Fusion Crossbow"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Mule Deer with a lung or heart shot using a Tenpoint Carbon Fusion Crossbow"
          ],
        },
        {
          missionID: "wp10-5",
          name: "Pinhead",
          earnings: "2900",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w60"],
              text: "Tenpoint Carbon Fusion Crossbow"
            },
            {
              weapons: ["s5"],
              text: "3x Tenpoint Crossbow Scope"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Roosevelt Elk using a scoped Tenpoint Carbon Fusion Crossbow.",
            "Harvest a Moose using a scoped Tenpoint Carbon Fusion Crossbow in the same hunt."
          ],
        },
      ],
    },
    {
      id: "wp11",
      name: "The Boone And Crockett Club Missions",
      displayName: "The B&C Club",
      animalID: "wp11",
      filterArray: ["f1", "r1", "r2", "r3", "r4", "r6", "r7", "r10", "r11"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://i.postimg.cc/ZqHHdRjB/bic.png",
      bgURL: "https://i.postimg.cc/ZqHHdRjB/bic.png",
      missionsList: [
        {
          missionID: "wp11-1",
          name: "The Knowledge To Hunt",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Locate five set of tracks from one and the same Mule Deer during one hunt."
          ],
        },
        {
          missionID: "wp11-2",
          name: "Learning To Listen",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Identify the call of a male Mule Deer.",
            "Identify the call of a female Mule Deer."
          ],
        },
        {
          missionID: "wp11-3",
          name: "Learn To Observe",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Spot 3 Mule Deers during the same hunt"
          ],
        },
        {
          missionID: "wp11-4",
          name: "Fair Chase",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Mule Deer at a 100% Harvest Value"
          ],
        },
        {
          missionID: "wp11-5",
          name: "Choosing The Right Equipment",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Moose at a 100% Harvest Value from a hunting tower using a scoped weapon",
          ],
        },
        {
          missionID: "wp11-6",
          name: "Trophy Hunting",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w11"],
              text: "6.5x55 Blaser R8 Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail with at least 10 typical points at a 100% Harvest Value using a 6.5x55 Blaser R8 Bolt Action Rifle.",
            "Harvest another Whitetail with at least 10 typical points at a 100% Harvest Value using a 6.5x55 Blaser R8 Bolt Action Rifle."
          ],
        },
        {
          missionID: "wp11-7",
          name: "Wild Life Conservation",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              equipments: ["eq1"],
              text: "Ground Blind"
            },
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Blacktail with at least 8 typical points at a 100% Harvest Value from a Ground Blind."
          ],
        },
        {
          missionID: "wp11-8",
          name: "Big Game Hunting",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w16"],
              text: "9.3x62 Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Brown Bear at a 100% Harvest Value using a 9.3x62 Anschütz 1780 D FL Bolt Action Rifle."
          ],
        },
        {
          missionID: "wp11-9",
          name: "Saved From Extinction",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w15"],
              text: "8x57 IS Anschütz 1780 D FL Bolt Action Rifle"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Roosevelt Elk at 100% Harvest Value from at least 100 meters (approx. 328 ft.) using a 8x57 IS Anschütz 1780 D FL Bolt Action Rifle"
          ],
        },
        {
          missionID: "wp11-10",
          name: "Big Head",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Black Bear at 100% Harvest Value bringing in a total score of at least 19."
          ],
        },
      ],
    },
    {
      id: "wp12",
      name: "Traditional Bow Missions",
      displayName: "Traditional Bow",
      animalID: "wp12",
      filterArray: ["f1", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "r12"], // Reservati na kojim se nalazi
      missionPackValue: "10.000gm$",
      imageURL: "https://i.postimg.cc/YScD3pmt/NRB5UbIw.jpg",
      bgURL: "https://i.postimg.cc/YScD3pmt/NRB5UbIw.jpg",
      missionsList: [
        {
          missionID: "wp12-1",
          name: "Sustainability",
          earnings: "100",
          singleplayer: false,
          sameHunt: true,
          selected: false, // da li je zavrsena misija
          passable: true,
          require: [
            {
              weapons: ["w57"],
              text: "Longbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Cottontail Rabbit from a distance of at least 15 meters (approx. 49 ft) using a Longbow.",
            "Harvest a European Rabbit from a distance of at least 15 meters (approx. 49 ft) using a Longbow.",
            "Harvest a Snowshoe Hare from a distance of at least 15 meters (approx. 49 ft) using a Longbow."
          ],
        },
        {
          missionID: "wp12-2",
          name: "Big Game",
          earnings: "200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w58"],
              text: "Cable-backed Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a bull Moose using the Cable-backed Bow."
          ],
        },
        {
          missionID: "wp12-3",
          name: "Accuracy",
          earnings: "300",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w57"],
              text: "Longbow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Roosevelt Elk bull with a heart shot using the Longbow. Other organs may be hit, but the heart must be the hit with the killing shot."
          ],
        },
        {
          missionID: "wp12-4",
          name: "Pork Recipe",
          earnings: "400",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56"],
              text: "Any Recurve Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Feral Hog from under a distance of 28 meter (approx. 92 ft.) using any Recurve Bow",
            "Harvest a female Feral Hog from under a distance of 28 meter (approx. 92 ft.) using any Recurve Bow in the same hunt."
          ],
        },
        {
          missionID: "wp12-5",
          name: "Up Close and Personal",
          earnings: "600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56", "w57", "w58"],
              text: "Any Recurve Bow, a Longbow or Cable-backed Bow."
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Whitetail Deer buck with at least ten typical points from within 25 (approx. 82 ft.) meters using any Recurve Bow, a Longbow or Cable-backed Bow.",
          ],
        },
        {
          missionID: "wp12-6",
          name: "Testing Your Stealth",
          earnings: "800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56", "w57", "w58"],
              text: "Any Recurve Bow, a Longbow or Cable-backed Bow."
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Black Bear from a maximum of 30 meters (approx. 98 ft.) using any traditional bow."
          ],
        },
        {
          missionID: "wp12-7",
          name: "Go Paleolithic",
          earnings: "1000",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56"],
              text: "Any Recurve Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Wild Boar weighing more than 180kg (approx. 397lbs) using any Recurve Bow."
          ],
        },
        {
          missionID: "wp12-8",
          name: "Getting Serious with Stealth",
          earnings: "1200",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56", "w57", "w58"],
              text: "Any Recurve Bow, a Longbow or Cable-backed Bow."
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Red Fox using any traditional bow.",
            "Harvest an Arctic Fox using any traditional bow.",
            "Harvest a Coyote using any traditional bow."
          ],
        },
        {
          missionID: "wp12-9",
          name: "Specific Accuracy",
          earnings: "1800",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55"],
              text: "Heavy Recurve Bow"
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a Blacktail Deer buck scoring more than 135 using the Heavy Recurve Bow. Other organs may be hit, but the heart must be hit with the killing shot."
          ],
        },
        {
          missionID: "wp12-10",
          name: "Going Uphill",
          earnings: "3600",
          singleplayer: false,
          sameHunt: true,
          selected: false,
          passable: true,
          require: [
            {
              weapons: ["w55", "w56", "w57", "w58"],
              text: "Any Recurve Bow, a Longbow or Cable-backed Bow."
            }
          ],
          hint: {
            text: "",
            imageURL: "",
            link: ""
          },
          goals: [
            "Harvest a male Alpine Ibex using any traditional bow."
          ],
        },
      ],
    },
  ])

  function selectMission(id, packName) {
    missions.value.forEach(missionPack => {
      if(missionPack.displayName === packName){
        missionPack.missionsList.forEach(mission => {
          if(mission.missionID === id){
            mission.selected = !mission.selected
          }
        })
      }
    })
  }
  
  return { missions, selectMission }
})
