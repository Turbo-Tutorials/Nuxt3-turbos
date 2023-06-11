import { defineStore } from "pinia"

export const useFriendsStore = defineStore({
  id: "friends-store",
  state: () => {
    return {
      characters: [{
        name: "Rachel",
        line: "...Maybe we should just take a break!",
      },
      {
        name: "Ross",
        line: "Let's cool off. Let's get some frozen yogurt or something.",
      }]
    }
  },

  actions: {
    addCharacter(name: string, line: string) {
      this.characters.push({
        name,
        line,
      })
    }
  },

  getters: {
    getLineByName: (state) => {
      return (name: string) => state.characters.find((character) => character.name === name)?.line
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFriendsStore, import.meta.hot));
}