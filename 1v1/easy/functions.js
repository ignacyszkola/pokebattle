function Healh_pokemon_player( hp, maxhp ) {
    const health = document.getElementById("health_bar_player");
    health.style.width = `${hp * 100 / maxhp}%`;
}

function Healh_pokemon_bot( hp, maxhp ) {
    const health = document.getElementById("health_bar_bot");
    health.style.width = `${hp * 100 / maxhp}%`;
}


function player_move(player, bot, num_move) {
    return bot.hp = bot.hp - player.moves[num_move].power;
}