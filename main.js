let this_is_a_way = "Away We Happened. Who could forget. Even though this was released in 2012. Our friendship was ignited from the sparks of WongFu and a very very enjoyable Geo Project.";
let missing_piece = "Also featured in Away We Happened. This is by far my favorite song, but I know 'By My Side' is your more preferred David Choi song.";
let michael_buble = "This was your favourite song in year 10. Maybe it still is? All I know is that it’s still one of your top favourites, so this was brought up in one of our earlier conversations. In that very same conversation. Haven’t met you met was also mentioned and sung.";
let by_my_side = "Mid year 10. Do you like missing piece more or By My Side?"
let bygone_years = "Friendship and nostalgia and romance and tears all bundled in a neat two hour package. This gem appeared was excavated near the end of year 10 and at the beginning of PP, remember that?"
let thinking_about_you = "I can’t pin point the exact date on this, but I’m sure we brought it up in a convo fingerling about the one and only, David Choi"
let wang_leehom = "You recommended these songs in a cs class I thiiink? I’ve listened to them a bajillion times ever since";
let kris_allen= " While coding, I saw you playing this song on your computer and freaked out because I absolutely adored this song as well. Ofc, My Weakness was also brought up.";
let best_friend = "Being one of the most memorable song recommendations. I went back to our convos to find that you brought this up while studying for a math test";
let my_time_with_you = "I can’t remember when we talked about this song before our hangout at Stanley, but I’m definitely sure we did. We both knew the song before but rediscovered it during our hangout, so I think it rightfully belongs here."
let all_my_life = "Year 12 - 13 Do I need to say anymore? I like Kina Grannis rendition edges out the og. "
let one_day_at_a_time = "Sam Smith exploded in Y10 and Y11, I love this newest addition to my playlist.";
let dancing_in_moonlight = "Anytime, anywhere. I wished clubs played this song more often. Update: In our recent boat trip hang, I think you told me you heard from your ‘18th’ playlist.";
let love_is_an_open_door = "I’m so glad I found this song. It’s pretty cheesy, but I can’t help but sing along every time I hear it. ";
let first_day_of_life = "To those nights I guess";
let sunday_morning = "To better days that always follow :)"
let by_chance_you_and_i = "A classic WongFu song. It’s an A.S.S song. That’s Agents of Scrent Stuff, by the way."


const songs = {
    this_is_a_way: this_is_a_way,
    missing_piece: missing_piece,
    michael_buble: michael_buble,
    by_my_side: by_my_side,
    those_bygone_years: bygone_years,
    wang_leehom: wang_leehom,
    kris_allen: kris_allen,
    best_friend: best_friend,
    my_time_with_you: my_time_with_you,
    one_day_at_a_time: one_day_at_a_time,
    dancing_in_the_moonlight: dancing_in_moonlight,
    love_is_an_open_door: love_is_an_open_door,
    first_day_of_my_life: first_day_of_life,
    sunday_morning: sunday_morning,
    by_chance: by_chance_you_and_i
}


const load_screen = document.querySelector('.load-screen');
const birthday_text = document.querySelector('.birthday-text');
const description_box = document.querySelector('.description-box');
const back_button = document.querySelector('.back-button');
let song_btns = document.querySelectorAll('.song')
song_btns = [...song_btns]
let new_p = ''


birthday_text.classList.toggle('show');

song_btns.forEach((btn)=> {
    btn.addEventListener('click', (e)=>{
        song_title = e.target.className.split(' ')[1];
        console.log(song_title)
        message = songs[song_title]
         new_p = document.querySelector('.description-box p')
        new_p.textContent = songs[song_title]
        description_box.classList.toggle('show')
        back_button.classList.toggle('show')
        new_p.classList.toggle('description-text')
    })
})

back_button.addEventListener('click', (e)=>{
    description_box.classList.toggle('show')
    new_p.classList.toggle('description-text')
    back_button.classList.toggle('show')
})
