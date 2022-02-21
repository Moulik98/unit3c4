async function apiCall(url) {


    //add api call logic here
    try{

        let res = await fetch(url)

        let data = await res.json()

        return data;

    }catch(error){
        console.log("error:",error)


    }


}


function appendArticles(articles, main) {

    //add append logic here

    articles.forEach((element) => {
        let div = document.createElement("div")
        let image = document.createElement("img")

        image.src= element.urlToImage
        let p = document.createElement("p")
        p.innerHTML= element.source.name

        div.append(image,p);
        main.append(div);
    });

}

export { apiCall, appendArticles }