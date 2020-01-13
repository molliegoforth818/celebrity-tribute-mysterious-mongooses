const newsFeed = [{
        imageURL: "https://fomofestival.com.au/wp-content/uploads/2019/06/FOMO20_LOGO_LONG_G_OUTLINE_O.png",
        date: "01/15/20",
        location: "FOMO AUCKLAND 2020 TRUSTS ARENA AUCKLAND NEW ZEALAND",
        type: "tour",
        collaborators: "Kaytranada",
        tickets: "https://fomofestival.com.au/auckland"
    },
    {
        imageURL: "https://images.sk-static.com/images/media/profile_images/events/39378995/huge_avatar",
        date: "06/13/20",
        location: "BONNAROO MUSIC & ARTS FESTIVAL 2020 GREAT STAGE PARK MANCHESTER, TN, US",
        type: "tour",
        collaborators: "",
        tickets: "https://www.bonnaroo.com/?utm_source=songkick&utm_medium=web&utm_content=songkick&utm_campaign=2020-songkick"
    },
    {
        imageURL: "https://www.lizzomusic.com/goodashell/images/lizzo-good-as-hell.jpg",
        date: "06/13/20",
        location: "BONNAROO MUSIC & ARTS FESTIVAL 2020 GREAT STAGE PARK MANCHESTER, TN, US",
        type: "tour",
        collaborators: "",
        tickets: ""
    },
    {
        imageURL: "https://www.lizzomusic.com/goodashell/images/lizzo-good-as-hell.jpg",
        date: "06/13/20",
        location: "BONNAROO MUSIC & ARTS FESTIVAL 2020 GREAT STAGE PARK MANCHESTER, TN, US",
        type: "tour",
        collaborators: "",
        tickets: ""
    },
    {
        imageURL: "https://www.lizzomusic.com/goodashell/images/lizzo-good-as-hell.jpg",
        date: "06/13/20",
        location: "BONNAROO MUSIC & ARTS FESTIVAL 2020 GREAT STAGE PARK MANCHESTER, TN, US",
        type: "",
        collaborators: "",
        tickets: ""
    },
    {
        imageURL: "https://www.lizzomusic.com/goodashell/images/lizzo-good-as-hell.jpg",
        date: "06/13/20",
        location: "BONNAROO MUSIC & ARTS FESTIVAL 2020 GREAT STAGE PARK MANCHESTER, TN, US",
        type: "tour",
        collaborators: "",
        tickets: ""
    }
];

let populateNewsFeed = (item, i) => {
    if (newsFeed[i].type == "tour"){
        $(".tour-cards").append(`
        <div class="card">
        <img src="${newsFeed[i].imageURL}"">
        <div class="container">
            <h4><b>${newsFeed[i].date}</b></h4>
            <p>${newsFeed[i].location}</p>
            <p>${newsFeed[i].collaborators}</p>
            <p>here:<a>Get Tickets</a>${newsFeed[i].tickets}</p>
        </div>
        </div>
    `);
    } else {
        $(".other-cards").append(`
        <div class="card">
        <img src="${newsFeed[i].imageURL}"">
        <div class="container">
            <h4><b>${newsFeed[i].location}</b></h4>
            <p>Architect & Engineer</p>
        </div>
        </div>
    `);
    }
    
};

// Select event type to show only those

newsFeed.forEach(populateNewsFeed);