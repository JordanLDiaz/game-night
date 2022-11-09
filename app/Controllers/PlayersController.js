import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"



export class PlayersController {
  constructor() {
    console.log('drawing players')
    this.drawPlayers()
  }
  drawPlayers() {
    let template = ''
    appState.players.forEach(p => template += p.template)
    console.log('drawing players', Player)
  }
}
