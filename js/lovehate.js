LoveHate = (function(){
    // Private
    var hat = [
        "Doomed",
        "Not a chance",
        "Destined for failure",
        "Next WebVan",
        "Next Pets.com",
        "Really???"
    ];

    var lov = [
        "Next Facebook",
        "Next Pinterest",
        "Next Dropbox",
        "Next AirBNB",
        "This. Changes. Everything.",
        "They stole my idea.",
        "Why didn't I think of this"
    ];


    return {
        // Public
        love: function(){
            return lov[Math.floor(Math.random()*lov.length)];
        },

        hate: function(){
            return hat[Math.floor(Math.random()*hat.length)];
        }
    }
})();
