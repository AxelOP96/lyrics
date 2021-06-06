document.body.style.background.color = 'cyan';
async function fetchData() {
    const inputValue = document.getElementById('buscador').value;
    const data = await fetch(`https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/${inputValue}`);
    const json = await data.json();
    document.getElementById('artist').innerText = json.artist;
    document.getElementById('title').innerText = json.title;
}

