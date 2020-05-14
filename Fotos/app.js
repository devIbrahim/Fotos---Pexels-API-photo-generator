const form = document.querySelector('.form');
const userInput = document.querySelector('.search');
const grid = document.querySelector('.grid');

form.addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();
    getData(userInput.value.trim());
}

async function getData(query){
const apiKey = '563492ad6f91700001000001c605dc02beb04a5ca761b69cbb0678be';
    response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`, {
            headers: {
                'Authorization': apiKey
            }
        }
    )
    .then(data => data.json().then(data => {

        
        //SHOW IMAGES ON FRONTEND
        const gridChildren = Array.from(grid.children);
        const photos = data.photos
        const first5 = photos.slice(0, 5);
        const second5 = photos.slice(5,10);
        const last5 = photos.slice(10,15);
    
        first5.forEach(photo => {
            const html = `<div class="photo"><img class="image" src="${photo.src.original}"></div>`;
            gridChildren[0].innerHTML+=html;
        });
        second5.forEach(photo => {
            const html = `<div class="photo"><img class="image" src="${photo.src.original}"></div>`;
            gridChildren[1].innerHTML+=html;
        });
        last5.forEach(photo => {
            const html = `<div class="photo"><img class="image" src="${photo.src.original}"></div>`;
            gridChildren[2].innerHTML+=html;
        });
        
        
    })).catch(err => console.log(err));
}
