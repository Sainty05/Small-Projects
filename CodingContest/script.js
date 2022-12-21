let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
        return v.json()
}).then((contests) => {
        console.log(contests)
        ihtml = ""
        for (item in contests) {
                console.log(contests[item])
                let img = ["img/First.jpeg","img/download.jpeg","img/Second.jpeg","img/Third.jpeg","img/Forth.jpeg","img/Fifth.jpeg","img/Sixth.jpeg","img/Eighth.jpeg","img/Tenth.jpeg"]
                let i = Math.floor(Math.random()*(img.length-1))
                let im = img[i]
                ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <img src=${im} class="card-img-top img-sub" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${contests[item].name}</h5>
                                        <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                                        <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
                                        <p>Starts at: ${contests[item].start_time}
                                        <p>Starts at: ${contests[item].end_time}
                                        <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
                `
        }
        cardContainer.innerHTML = ihtml
})
