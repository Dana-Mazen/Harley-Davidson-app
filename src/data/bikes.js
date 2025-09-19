const bikes =[
    {
        id:1,
        name: "ROAD KING SPECIAL",
        nickName : "REIGN IN BLACK.",
        desc: "Drenched in black from headlamp to exhaust tips, the 2025 Road King Special has custom bagger style with touring comfort and capability. Its fairing-free design, mini “ape hanger” handlebars, Milwaukee-Eight 114 V-twin engine, and subtly integrated tech ensure you get the most out of every ride.",
        category: "GRAND AMERICAN TOURING",
        img:"/assets/2025-road-king-special-m12b-motorcycle-red.png", //default is red
        colors:[
            {name: "darkred", img:"/assets/2025-road-king-special-m12b-motorcycle-red.png" },
           {name: "grey", img:"/assets/2025-road-king-special-m02b-motorcycle-grey.png"},
           { name: "black", img:"/assets/2025-road-king-special-m04b-motorcycle-black.png"}
        ]
    },
    {
        id:2,
        name: "STREET GLIDE",
        nickName : "HISTORY REWRITTEN.",
        desc: "After nearly two decades spent on the open road, the Street Glide® redefines touring with a liquid-cooled Milwaukee-Eight® 117 V-twin engine that puts out 175Nm of torque, hand-adjustable rear shocks that smooth out the ride, and an easy-to-use touchscreen infotainment system that puts total control at your fingertips. Iconic style meets modern tech for an unforgettable riding experience.",
        category: "GRAND AMERICAN TOURING",
        img:"/assets/2025-street-glide-m07b-motorcycle-silver.png", //default silver
         colors:[
            {name: "silver", img:"/assets/2025-street-glide-m07b-motorcycle-silver.png" },
           {name: "black", img:"/assets/2025-street-glide-m04-motorcycle-black.png"},
           { name: "navy", img:"/assets/2025-street-glide-m13-motorcycle-blue.png"}
        ]
    },
  {
        id:3,
        name: "ROAD GLIDE",
        nickName : "TOUR DE FORCE.",
        desc: "The Road Glide has an aerodynamic Sharknose fairing and a liquid-cooled Milwaukee-Eight® 117 engine that produces 175 Nm of torque, while reduced weight makes handling more responsive. With customizable ride modes, Bluetooth connectivity, and a 312 mm touchscreen display, the Road Glide offers a refined mix of tech, style, and power.",
        category: "GRAND AMERICAN TOURING",
        img:"/assets/2025-road-glide-m04b-motorcycle-black.png", //default black
         colors:[
            {name: "black", img:"/assets/2025-road-glide-m04b-motorcycle-black.png" },
           {name: "silver", img:"/assets/2025-road-glide-f87-motorcycle-silver.png"},
           { name: "navy", img:"/assets/2025-road-glide-m13-motorcycle-blue.png"},
            { name: "darkred", img:"/assets/2025-road-glide-m44-motorcycle-red.png"}
        ]
    },
 {
        id:4,
        name: "STREET GLIDE ULTRA",
        nickName : "RIDE FARTHER, GET CLOSER",
        desc: "The Street Glide Ultra is made for two-up touring, with a powerful V-twin engine, spacious storage, and modern amenities refined over decades of cross-country riding. ",
        category: "GRAND AMERICAN TOURING",
        img:"/assets/2025-street-glide-ultra-m50b-motorcycle-red.png", //default red
          colors:[
            {name: "darkred", img:"/assets/2025-street-glide-ultra-m50b-motorcycle-red.png" },
           {name: "grey", img:"/assets/2025-street-glide-ultra-m02-motorcycle-grey.png"},
           { name: "black", img:"/assets/2025-street-glide-ultra-m04-motorcycle-black.png"},
            { name: "navy", img:"/assets/2025-street-glide-ultra-m13-motorcycle-blue.png"}
        ]
    },
 { 
        id:5,
        name: "CVO STREET GLIDE",
        nickName : "MASTERPIECE IN MOTION.",
        desc: "Equipped with the best of everything straight from the factory, the CVO Street Glide is a Batwing bagger loaded with the latest tech and premium custom detailing—like the VVT 121 engine, high-performance audio, exclusive paint, and contrast-cut wheels—setting the stage for unmatched performance and style.",
        category: "GRAND AMERICAN TOURING",
        img:"/assets/2025-cvo-street-glide-m32-motorcycle-grey.png", //default grey
        colors:[
            {name: "grey", img:"/assets/2025-cvo-street-glide-m32-motorcycle-grey.png" },
           {name: "darkslateblue", img:"/assets/2025-cvo-street-glide-m31-motorcycle-purple.png"},
           { name: "navy", img:"/assets/2025-cvo-street-glide-m30-motorcycle-blue.png"}
        ]
    },
     {
        id:6,
        name: "CVO ROAD GLIDE",
        nickName : "EVERYTHING ELEVATED.",
        desc: "The CVO Road Glide not only has an iconic Sharknose fixed fairing, but also the best of absolutely everything installed from the factory, including the Milwaukee-Eight® VVT 121 V-twin engine and next-level custom trim and finishes uniquely designed to match each world-class paint scheme.",
        category: "GRAND AMERICAN TOURING",
        img:"/assets/2025-cvo-road-glide-m30-motorcycle-blue.png", //default blue
        colors:[
            {name: "navy", img:"/assets/2025-cvo-road-glide-m30-motorcycle-blue.png" },
           {name: "darkslateblue", img:"/assets/2025-cvo-road-glide-m31-motorcycle-purple.png"},
           { name: "grey", img:"/assets/2025-cvo-road-glide-m32-motorcycle-grey.png"}
        ]
    },
  {
        id:7,
        name: "CVO ROAD GLIDE ST",
        nickName : "BUILT FOR BRAGGING RIGHTS.",
        desc: "Inspired by our MotoAmerica® King of the Baggers™ race bikes, the CVO Road Glide ST features lightweight carbon-fiber parts, competition-inspired electronic assists, and the Milwaukee-Eight® 121 High Output V-twin engine, bringing track-ready performance and engineering to the streets.",
        category: "GRAND AMERICAN TOURING",
        img:"/assets/2025-cvo-road-glide-st-m34b-motorcycle-red.png", //default red
         colors:[
            {name: "darkred", img:"/assets/2025-cvo-road-glide-st-m34b-motorcycle-red.png" },
           {name: "black", img:"/assets/2025-cvo-road-glide-st-m61b-motorcycle-black.png"},
           { name: "grey", img:"/assets/2025-cvo-road-glide-st-m33b-motorcycle-grey.png"}
        ]
    },
{
        id:8,
        name: "FREEWHEELER",
        nickName : "FREE ON THREE.",
        desc: "The Freewheeler has the storage and stability benefits of three wheels with the style and attitude of a traditional, stripped-down Harley-Davidson cruiser. ",
        category: "TRIKE",
        img:"/assets/2025-freewheeler-m02b-motorcycle-grey.png", //default grey
        colors:[
            {name: "grey", img:"/assets/2025-freewheeler-m02b-motorcycle-grey.png" },
           {name: "black", img:"/assets/2025-freewheeler-m04b-motorcycle-black.png"},
           { name: "darkred", img:"/assets/2025-freewheeler-m12b-motorcycle-red.png"}
        ]
    },
{
        id:9,
        name: "TRI GLIDE ULTRA",
        nickName : "THE LONG-HAUL TRIKE.",
        desc: "A full-dresser, long-haul trike with room for cargo, the Tri Glide Ultra is available in classic chrome or all-new dark finishes. Load up the trunk and King Tour-Pak® luggage carrier with amenities for days on the road and enjoy the comfort and confidence of three-wheels on your greatest adventures. ",
        category: "TRIKE",
        img:"/assets/2025-tri-glide-ultra-m50b-motorcycle-red.png", //default red
        colors:[
            {name: "darkred", img:"/assets/2025-tri-glide-ultra-m50b-motorcycle-red.png" },
           {name: "grey", img:"/assets/2025-tri-glide-ultra-m02-motorcycle-grey.png"},
           { name: "black", img:"/assets/2025-tri-glide-ultra-m04-motorcycle-black.png"}
        ]
    },
{
        id:10,
        name: "STREET BOB",
        nickName : "BORN TO BE YOURS",
        desc: "The Street Bob is a lean, mean bobber with mini-ape handlebars, mid-mounted foot controls, and a massive new Milwaukee-Eight® 117 Classic V-Twin Engine, which makes the slim-but-tough Softail® quicker than ever.",
        category: "CRUISER",
        img:"/assets/2025-street-bob-m45lc-motorcycle-yellow.png", //default yellow
        colors:[
            {name: "goldenrod", img:"/assets/2025-street-bob-m45lc-motorcycle-yellow.png" },
           {name: "grey", img:"/assets/2025-street-bob-m02-motorcycle-grey.png"},
           { name: "black", img:"/assets/2025-street-bob-m04-motorcycle-black.png"},
            { name: "darkslateblue", img:"/assets/2025-street-bob-m48-motorcycle-purple.png"}
        ]
    },
{
        id:11,
        name: "LOW RIDER S",
        nickName : "FEARLESS FROM THE FACTORY",
        desc: "With bold styling, an aggressive stance, and unrelenting power from the Milwaukee-Eight® 117 High Output V-Twin Engine the Low Rider S is a custom-style cruiser that is ready to rip from the factory. ",
        category: "CRUISER",
        img:"/assets/2025-low-rider-s-m44b-motorcycle-red.png", //default red
        colors:[
           {name: "darkred", img:"/assets/2025-low-rider-s-m44b-motorcycle-red.png" },
           {name: "grey", img:"/assets/2025-low-rider-s-m02b-motorcycle-grey.png"},
           { name: "black", img:"/assets/2025-low-rider-s-m04b-motorcycle-black.png"},
           { name: "darkslateblue", img:"/assets/2025-low-rider-s-m57b-motorcycle-purple.png"}
        ]
    },
  {
        id:12,
        name: "LOW RIDER ST",
        nickName : "ATTITUDE COMES STANDARD",
        desc: "Heritage-inspired tank graphics and an FXRT-style fairing look retro, but the Low Rider ST is a modern performance motorcycle with a new Milwaukee-Eight® 117 High Output V-Twin Engine.",
        category: "CRUISER",
        img:"/assets/2025-low-rider-st-m13-motorcycle-blue.png", //default blue
        colors:[
           {name: "navy", img:"/assets/2025-low-rider-st-m13-motorcycle-blue.png" },
           {name: "grey", img:"/assets/2025-low-rider-st-m02-motorcycle-grey.png"},
           { name: "black", img:"/assets/2025-low-rider-st-m04-motorcycle-black.png"},
           { name: "darkred", img:"/assets/2025-low-rider-st-m44b-motorcycle-red.png"}
        ]
    },
 {
        id:13,
        name: "BRREAKOUT",
        nickName : "DARE TO STARE",
        desc: "With a wide rear tire, bobtail rear fender, long rake, straight handlebars, and a 21-inch front wheel, the Breakout marries classic chopper style with the performance of a Milwaukee-Eight® 117 Custom V-Twin Engine.",
        category: "CRUISER",
        img:"/assets/2025-breakout-m55-motorcycle-black.png", //default black
         colors:[
           {name: "black", img:"/assets/2025-breakout-m55-motorcycle-black.png" },
           {name: "grey", img:"/assets/2025-breakout-m02-motorcycle-grey.png"},
           { name: "goldenrod", img:"/assets/2025-breakout-m45-motorcycle-yellow.png"},
           { name: "darkred", img:"/assets/2025-breakout-m44-motorcycle-red.png"}
        ]
    },
     {
        id:14,
        name: "FAT BOY",
        nickName : "A HEAVYWEIGHT KNOCKOUT",
        desc: "Adored since day one, the singular Fat Boy stands out with bright chrome and bold finishes, and now it is better than ever with the new Milwaukee-Eight® 117 Custom V-Twin Engine. ",
        category: "CRUISER",
        img:"/assets/2025-fat-boy-m13-motorcycle-blue.png", //default blue
         colors:[
           {name: "navy", img:"/assets/2025-fat-boy-m13-motorcycle-blue.png" },
           {name: "grey", img:"/assets/2025-fat-boy-m02-motorcycle-grey.png"},
           { name: "black", img:"/assets/2025-fat-boy-m04-motorcycle-black.png"},
           { name: "darkred", img:"/assets/2025-fat-boy-m50-motorcycle-red.png"}
        ]
    },
       {
        id:15,
        name: "HERITAGE CLASSIC",
        nickName : "CLASSICALLY MODERN",
        desc: "Classic cruiser vibes meet hot rod swagger—the Heritage Classic lets you switch things up fast, giving you the versatility to roll out for a weekend trip or strip it down for a laid-back ride around town.",
        category: "CRUISER",
        img:"/assets/2025-heritage-classic-m50lb-motorcycle-red.png", //default red
          colors:[
           {name: "darkred", img:"/assets/2025-heritage-classic-m50lb-motorcycle-red.png" },
           {name: "grey", img:"/assets/2025-heritage-classic-m02b-motorcycle-grey.png"},
           { name: "black", img:"/assets/2025-heritage-classic-m04b-motorcycle-black.png"},
           { name: "silver", img:"/assets/2025-heritage-classic-m07b-motorcycle-silver.png"}
        ]
    },
      {
        id:16,
        name: "FAT BOY GRAY GHOST",
        nickName : "BORN A LEGEND. BACK TO RAISE HELL.",
        desc: "Some bikes make history. Others rewrite it. In 1988 and 1989, Willie G. Davidson rode early Fat Boy® prototypes into Daytona, seeking direct feedback from riders and igniting a legacy that would span generations. By 1990, the Fat Boy was born, quickly becoming one of the most legendary models in Harley-Davidson history. Now, 35 years later, the new 2025 Fat Boy® Gray Ghost charges forward, bringing that legacy full circle. Inspired by the riders who made it an icon, this tribute honors the past while the next generation keeps the fire burning.",
        category: "CRUISER",
        img:"/assets/2025-fat-boy-gray-ghost-m53-motorcycle-silver.png", //default n only silver 
         colors:[
           { name: "silver", img:"/assets/2025-fat-boy-gray-ghost-m53-motorcycle-silver.png"}
        ]
    },
     {
        id:17,
        name: "PAN AMERICA 1250 SPECIAL",
        nickName : "GET LOST.",
        desc: "Go anywhere and everywhere on the Pan America 1250 Special, with high-revving liquid-cooled V-twin power, semi-active suspension, and top-shelf components engineered to endure and explore.",
        category: "ADVENTURE TOURING",
        img:"/assets/2025-pan-america-1250-special-m13lb-motorcycle-blue.png", //default blue
         colors:[
           {name: "navy", img:"/assets/2025-pan-america-1250-special-m13lb-motorcycle-blue.png" },
           {name: "grey", img:"/assets/2025-pan-america-1250-special-m02b-motorcycle-grey.png"},
           { name: "black", img:"/assets/2025-pan-america-1250-special-m04b-motorcycle-black.png"},
           { name: "darkred", img:"/assets/2025-pan-america-1250-special-m52b-motorcycle-red.png"}
        ]
    },
      {
        id:18,
        name: "PAN AMERICA 1250 ST",
        nickName : "BUILT TO LEAN, BORN TO ROAM.",
        desc: "Building on the proven performance of the Pan America platform, the 2025 Pan America 1250 ST is reimagined for faster, more comfortable, and capable pavement performance, with lowered suspension, quick-shifting, 432 mm wheels high-performance tires, and a slimmer, lighter profile. ",
        category: "ADVENTURE TOURING",
        img:"/assets/2025-pan-america-1250-st-m04b-motorcycle-black.png", //default black
         colors:[
           {name: "black", img:"/assets/2025-pan-america-1250-st-m04b-motorcycle-black.png" },
           {name: "grey", img:"/assets/2025-pan-america-1250-st-m02b-motorcycle-grey.png"},
           { name: "darkred", img:"/assets/2025-pan-america-1250-st-m44b-motorcycle-red.png"}
        ]
    },
        {
        id:19,
        name: "CVO PAN AMERICA",
        nickName : "LEAVE ORDINARY BEHIND.",
        desc: "The most functional go-anywhere motorcycle in Harley-Davidson’s lineup, with limited-edition paint and all the factory-installed accessories you could ever want, the CVO Pan America is ready to go as far as you want, straight from the showroom floor.",
        category: "ADVENTURE TOURING",
        img:"/assets/2025-cvo-pan-america-m35lb-motorcycle-grey.png", //default n only grey
         colors:[
           { name: "grey", img:"/assets/2025-cvo-pan-america-m35lb-motorcycle-grey.png"}
        ]
    },
       {
        id:20,
        name: "NIGHTSTER SPECIAL",
        nickName : "OWN THE NIGHT",
        desc: "The Nightster Special marries iconic Sportster® design with modern, high-revving, liquid-cooled engine performance and rider-focused tech that keeps you connected on the road.",
        category: "SPORT",
        img:"/assets/2025-nightster-special-016b-motorcycle-black.png", // default black
         colors:[
           {name: "black", img:"/assets/2025-nightster-special-016b-motorcycle-black.png" },
           {name: "grey", img:"/assets/2025-nightster-special-m02b-motorcycle-grey.png"},
           { name: "darkred", img:"/assets/2025-nightster-special-m12b-motorcycle-red.png"},
            { name: "navy", img:"/assets/2025-nightster-special-m13b-motorcycle-blue.png"}
        ]
    },
    {
        id:21,
        name: "SPORTSTER S",
        nickName : "BORN TO OUTPERFORM.",
        desc: "Engineered to thrill, the Sportster® S is built around the big and powerful Revolution® Max 1250T engine that puts out 90 kW @ 7500 rpm and 125Nm of torque. With rider-assist electronics, optimized handling, and a lightweight frame, this next-generation Sportster is all about performing rather than conforming.",
        category: "SPORT",
        img:"/assets/2025-sportster-s-m57b-motorcycle-purple.png", //default purple
         colors:[
           {name: "darkslateblue", img:"/assets/2025-sportster-s-m57b-motorcycle-purple.png" },
           {name: "grey", img:"/assets/2025-sportster-s-m02b-motorcycle-grey.png"},
           { name: "black", img:"/assets/2025-sportster-s-m04b-motorcycle-black.png"},
            { name: "darkred", img:"/assets/2025-sportster-s-m44b-motorcycle-red.png"}
        ]
    }
];
export default bikes;