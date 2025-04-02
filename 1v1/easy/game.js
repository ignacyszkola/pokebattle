// creating pokemons for player to choose and for bot
let random_poke1 = Math.floor(Math.random() * pokemons_pl.length);
let random_poke2;
do {
    random_poke2 = Math.floor(Math.random() * pokemons_pl.length);
} while (random_poke2 == random_poke1);

let choose_pokemon3 = Math.floor(Math.random() * pokemons_pl.length);

let choose_pokemon1 = pokemons_pl[random_poke1];
let choose_pokemon2 = pokemons_pl[random_poke2];
let bot_pokemon = pokemons_bot[choose_pokemon3];

pokemon1 = document.getElementById("write_a_pokemon1");
pokemon1.innerHTML = choose_pokemon1.name;
//pokemon1.setAttribute("onclick", `main_game(${random_poke1}, ${choose_pokemon3})`);

pokemon1.addEventListener("click", () => {
    main_game(random_poke1, choose_pokemon3)
})

pokemon2 = document.getElementById("write_a_pokemon2");
pokemon2.innerHTML = choose_pokemon2.name; 
//pokemon2.setAttribute("onclick", `main_game(${random_poke2}, ${choose_pokemon3})`);
pokemon2.addEventListener("click", () => {
    main_game(random_poke2, choose_pokemon3)
})

function main_game(indexP, indexB) {
    document.getElementById("buttons").innerHTML = "";

    let players_pokemon = pokemons_pl[indexP];
    let bots_pokemon = pokemons_bot[indexB];
    
        document.getElementById("bot_pokemon").innerHTML = `
        <div id="health_bot"><div id="health_bar_bot"></div></div><br>
        <img src="../../pokemons_pictures/enemy/${bots_pokemon.name}.png" width="150" height="150"/>
        <div id="pokemon_info_bot">${bots_pokemon.name} (Type: ${bots_pokemon.type1}${bots_pokemon.type2 ? "/" + bots_pokemon.type2 : ""})
        <br>hp: ${bots_pokemon.hp}/${bots_pokemon.maxhp}</div>
        `;
        
        document.getElementById("player_pokemon").innerHTML = `
        ${players_pokemon.hp}/${players_pokemon.maxhp}hp
        <div id="health_player"><div id="health_bar_player"></div></div><br>
        <img src="../../pokemons_pictures/player/${players_pokemon.name}.png" width="150" height="150"/>
        <div id="pokemon_info_player">${players_pokemon.name}<br>(Type: ${players_pokemon.type1}${players_pokemon.type2 ? "/" + players_pokemon.type2 : ""})<br>
        attack: ${players_pokemon.attack}<br>
        defense: ${players_pokemon.defense}<br>
        spec.attack: ${players_pokemon.spec_attack}<br>
        spec.defense: ${players_pokemon.spec_defense}<br>
        speed: ${players_pokemon.speed}</div>
        <br /><br />
        `;
    do{        
        bots_pokemon.hp=0;
        players_pokemon.hp=10;


        
        move1 = document.getElementById("move1_button");
        move1.innerHTML = `<div class="move1">${players_pokemon.moves[0].name}</div>`;
        move1.addEventListener("click", () => {
            player_move(players_pokemon, bots_pokemon, 0);
        });
        
        move2 = document.getElementById("move2_button");
        move2.innerHTML = `<div class="move2">${players_pokemon.moves[1].name}</div>`;
        move2.addEventListener("click", () => {
            player_move(players_pokemon, bots_pokemon, 1);
        });

        
        move3 = document.getElementById("move3_button");
        move3.innerHTML = `<div class="move3">${players_pokemon.moves[2].name}</div>`;
        move3.addEventListener("click", () => {
            player_move(players_pokemon, bots_pokemon, 2);
        });

        
        move4 = document.getElementById("move4_button");
        move4.innerHTML = `<div class="move4">${players_pokemon.moves[3].name}</div>`;
        move4.addEventListener("click", () => {
            player_move(players_pokemon, bots_pokemon, 3);
        });



        Healh_pokemon_bot(bots_pokemon.hp, bots_pokemon.maxhp);
        Healh_pokemon_player(players_pokemon.hp, players_pokemon.maxhp);
    }while(bots_pokemon.hp>0 && players_pokemon.hp>0);
}