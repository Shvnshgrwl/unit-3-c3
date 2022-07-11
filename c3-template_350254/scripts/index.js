let id;

async function searchHotel(){
    try{
        let query = document.querySelector("#search").value;
        let res = await fetch(`https://masai-mock-api.herokuapp.com/hotels/search?city=goa`)
        let data = await res.json()

        const hotels = data.results;
        return hotels
    }
    catch(err){
        console.log(err)
    }
}
function appendHotels(data){
    document.querySelector("#hotels_list").innerHTML = null

    data.forEach(function(elem){
        let div = document.createElement("div")

        let Title = document.createElement("h3")
        Title.innerHTML = elem.Title;

        let Images = document.createElement("img")
        Images.src = elem.Images

        let Rooms = document.createElement("room")
        Rooms.innerHTML = elem.rooms

        let Ac = document.createElement("ac")
        Ac.innerHTML = elem.ac

        let Rating = document.createElement("rating")
        Rating.innerHTML = elem.Rating

        let btn = document.createElement("button")
        btn.innerText = "Book Now"
        btn.setAttribute("class","book")
        btn.addEventListener("click",function(){
            let arr = []
            arr.push(elem)
            localStorage.setItem("hotel",JSON.stringify(arr))
            window.location.href = "checkout.html"
        })
        div.append(Title,Images,Rooms,Ac,Rating)
        document.querySelector("#hotels_list").append(div)



    })
}
async function main(){
    let data = await searchHotel()

    if(data === undefined)
    {
        document.querySelector("#hotels_list").innerHTML = null
        return false
    }
    appendHotels(data)
}