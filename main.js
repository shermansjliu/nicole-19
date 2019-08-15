let this_is_a_way = "Away We Happened. Who could forget. Even though this was released in 2012. Our friendship was ignited from the sparks of WongFu and a very very enjoyable and not so productive Geo Poster Projects";
let missing_piece = "Also featured in Away We Happened. This is by far my favorite song, but I know 'By My Side' is your more preferred David Choi song >:(.";
let michael_buble = "Everything was your favourite song in year 10. Maybe it still is? All I know is that it’s still one of your top favourites. This was brought up in one of our earlier conversations. In that very same conversation. Haven’t met you met was also mentioned and sung.";
let by_my_side = "Discovered @ Mid year 10. BUT you know Missing Piece is better… right?"
let bygone_years = "Friendship and nostalgia and romance and tears all bundled in a neat two hour package. This gem appeared was excavated near the end of year 10 and at the beginning of PP, haha 'PP'... moving on"
let thinking_about_you = "I can’t pin point the exact date on this, but I’m sure we brought it up in a convo fangirling about the one and only, David Choi"
let wang_leehom = "You recommended 依然愛你和我們的歌 in cs class, and I’ve listened to them a bajillion times ever since";
let kris_allen= " While coding, I saw you playing this song on your computer and freaked out because I absolutely adored this song as well, which sparked a whole conversation about Kris Allen's songs, so My Weakness was also brought up.";
let best_friend = "Being one of the most memorable song recommendations. I searched a primary source, our fb convo, for its origins. You brought this up while we were studying for a math test. Fun times";
let my_time_with_you = "I can’t remember when we talked about this song before our hangout at Stanley, but I’m definitely sure we did. Since we both knew the song before but rediscovered it during our hangout, I think it rightfully belongs here."
let all_my_life = "Year 12 - 13. I think Kina Grannis' rendition edges out the O.G... Having said that, we all know who did the best cover *ahem *ahem *ahem... fckin allergies man"
let one_day_at_a_time = "Sam Smith exploded in Y10 and Y11, and I love this newest addition to my playlist.";
let dancing_in_moonlight = "Anytime, anywhere. I wished clubs played this song more often. Update: In our recent boat trip hang, I think you told me you heard from your ‘18th’ Spotify playlist.";
let love_is_an_open_door = "I’m so glad I found this song. It’s pretty cheesy, but I can’t help and sing along every time I hear it. ";
let first_day_of_life = "To those nights I guess";
let sunday_morning = "To better days that always follow :)"
let by_chance_you_and_i = "A classic WongFu song. It’s an A.S.S song. SEE what I diD Th3Re. Agents of Scrent Stuff. nuff said"


const songs = {
    this_is_a_way: this_is_a_way,
    missing_piece: missing_piece,
    michael_buble: michael_buble,
    by_my_side: by_my_side,
    those_bygone_years: bygone_years,
    thinking_about_you: thinking_about_you,
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
const song_grid = document.querySelector('.song-grid')
const description_box = document.querySelector('.description-box');
const back_button = document.querySelector('.back-button');
let song_btns = document.querySelectorAll('.song-title')
song_btns = [...song_btns]
let new_p = ''
let title_box = ''


// setTimeout(function(){
//     birthday_text.classList.toggle('loaded');
// }, 500);
//
// birthday_text.addEventListener('click', ()=>{
//     birthday_text.classList.toggle('loaded');
//     load_screen.classList.toggle('loaded');
// });

song_grid.classList.toggle('show')

song_btns.forEach((btn)=> {
    btn.addEventListener('click', (e)=>{
        if (e.target.classList[0] == 'song-overlay'){
            song_title = e.path[1].className.split(' ')[1];
            title = e.target.children[0].textContent
        }else{
            song_title = e.path[2].className.split(' ')[1];
            title = e.target.textContent;
        }


        message = songs[song_title]
        title_box = document.querySelector('.description-box h1')
        new_p = document.querySelector('.description-box p')
        new_p.textContent = songs[song_title]
        description_box.classList.toggle('show')
        back_button.classList.toggle('show')
        title_box.textContent = title
        new_p.classList.toggle('description-text')
        song_grid.classList.toggle('show')
    })
})

    function toggle_overlay (e) {
        let overlay_text = e.target.children[0];
        overlay_text.classList.toggle('overlay-text-show')
    }
    let song_overlay = document.querySelectorAll('.song-overlay');
    song_overlay = [...song_overlay]
    song_overlay.forEach((overlay)=> {
        overlay.addEventListener('mouseenter', (e)=> {
            toggle_overlay(e);
        })
        overlay.addEventListener('mouseleave', (e)=> {
            toggle_overlay(e);
        })
    })

back_button.addEventListener('click', (e)=>{
    description_box.classList.toggle('show')
    new_p.classList.toggle('description-text')
    back_button.classList.toggle('show')
    song_grid.classList.toggle('show')
    title_box.classList.toggle('show')
})
