const newsUrl = "http://api.mediastack.com/v1/news?access_key=612ec1eaba4a8b511c9e7fccd566a9a8&languages=en&sort=published_desc&sources=bbc";

fetch(newsUrl, { method: "GET" })
    .then(res => res.json())
    .then(info => {
        const table = document.getElementById('table');
        const header = table.createTHead().insertRow(0);
        header.insertCell(0).innerHTML = '#';
        header.insertCell(1).innerHTML = 'Category';
        header.insertCell(2).innerHTML = 'Source';
        header.insertCell(3).innerHTML = 'Title'

        for (let i = 0; i < info.data.length; i++) {
            const row = table.insertRow(i + 1);
            row.insertCell(0).innerHTML = i;
            row.insertCell(1).innerHTML = info.data[i].category;
            row.insertCell(2).innerHTML = info.data[i].source;
            const title = row.insertCell(3).innerHTML = info.data[i].title;
            row.className = 'rowTable'
        }
    })