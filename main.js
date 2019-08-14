let this_is_a_way = "Away We Happened. Who could forget. Even though this was released in 2012. Our friendship was ignited from the sparks of Wong fu and a very very enjoyable Geo Project.";
let missing_piece = "Also featured in Away We Happened. This is by far my favorite song, but I know you prefer 'by my side' Grrr";
let everything = "";
let have_not_met_you = "";
let by_my_side = ""
let bygone_years = ""
let thinking_about_you = ""
let wang_leehom = "";
let better_with_you = "";
let sam_smith = "";
let best_friend = "";
let love_yourself_beautiful_wild = "";
let my_time_with_you = ""
let all_my_life = ""
let dancing_in_moonlight = "";
let love_is_an_open_door = "";
let first_day_of_life = "";
let sunday_morning = ""
let by_chance_you_and_i = ""


const songs = {
    this_is_a_way: this_is_a_way,
    missing_piece: missing_piece,
    everything: everything,
    have_not_met_you: have_not_met_you,
    by_my_side: by_my_side,
    those_bygone_years: bygone_years,
}



const description_box = document.querySelector('.description-box');
const back_button = document.querySelector('.back-button');
let song_btns = document.querySelectorAll('.song')
song_btns = [...song_btns]

song_btns.forEach((btn)=> {
    btn.addEventListener('click', (e)=>{
        song_title = e.target.className.split(' ')[1];
        console.log(song_title)
        message = songs[song_title]
        let new_p = document.createElement("p")
        new_p.textContent = songs[song_title]
        description_box.appendChild(new_p)
        description_box.classList.toggle('show')
        back_button.classList.toggle('show')
        new_p.classList.toggle('description-text')
    })
})

back_button.addEventListener('click', (e)=>{
    description_box.classList.toggle('show')
    back_button.classList.toggle('show')
})
