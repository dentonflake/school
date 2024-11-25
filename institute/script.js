let quotes = [
    {
        author: "Luke 15:10",
        quote: "There is joy in the presence of the angels of God over one sinner that repenteth."
    },
    {
        author: "2 Nephi 32:3",
        quote: "Angels speak by the power of the Holy Ghost; wherefore, they speak the words of Christ. Wherefore, I said unto you, feast upon the words of Christ; for behold, the words of Christ will tell you all things what ye should do."
    },
    {
        author: "Neil L. Andersen",
        quote: "There are three beloved friends that help bring about the prerequisites and indispensable circumstances that are preparatory conditions of repentance for those making their journey toward forgiveness: a broken heart, a contrite spirit, and godly sorrow."
    },
    {
        author: "President Ezra Taft Benson",
        quote: "Godly sorrow is a gift of the Spirit. It is a deep realization that our actions have offended our Father and our God."
    },
    {
        author: "Neil L. Andersen",
        quote: "Repentance is turning away from our sins and from the thinking of the world, and turning toward the Savior."
    },
    {
        author: "Gary E. Stevenson",
        quote: "Along the way you will most likely stumble and fall—perhaps many, many times. You are not perfect; falling is part of the qualifying process that allows you to refine your character."
    },
    {
        author: "Neil L. Andersen",
        quote: "Repent and come unto me. Five simple words He speaks to me and you; not always so simple for us to do, yet forever worthy of our greatest efforts."
    },
    {
        author: "Joseph Smith",
        quote: "The nearer a person approaches the Lord, a greater power will be manifested by the adversary to prevent the accomplishment of His purposes."
    },
    {
        author: "Henry B. Eyring",
        quote: "That temptation to delay comes from our enemy, Lucifer. He knows that we can never be truly happy unless we have hope in this life and then realization, in the next, of eternal life."
    },
    {
        author: "Neil L. Andersen",
        quote: "We come realizing that the great gift of forgiveness will come only through the grace and power of the Savior Jesus Christ, and in no other way."
    },
    {
        author: "C. S. Lewis",
        quote: "Christ says, ‘Give me All. I don’t want so much of your time and so much of your money and so much of your work. I want You. . . . No half-measures are any good. I don’t want to cut off a branch here and a branch there; I want to have the whole tree down. . . . Hand over the whole natural self, all the desires which you think innocent as well as the ones you think wicked—the whole outfit. I will give you a new self instead. In fact, I will give you Myself: my own will shall become yours.'"
    },
    {
        author: "Neal A. Maxwell",
        quote: "The submission of one’s will is really the only uniquely personal thing we have to place on God’s altar. The many other things we ‘give,’ . . . are actually the things He has already given or loaned to us. However, when you and I finally submit ourselves, by letting our individual wills be swallowed up in God’s will, then we are really giving something to Him! It is the only possession which is truly ours to give!"
    },
    {
        author: "Enos 1:4",
        quote: "And my soul hungered; and I kneeled down before my Maker, and I cried unto him in mighty prayer and supplication for mine own soul; and all the day long did I cry unto him; yea, and when the night came I did still raise my voice high that it reached the heavens."
    },
    {
        author: "Mosiah 4:1-2",
        quote: "And they all cried aloud with one voice, saying: O have mercy, and apply the atoning blood of Christ that we may receive forgiveness of our sins, and our hearts may be purified; for we believe in Jesus Christ."
    },
    {
        author: "Neil L. Andersen",
        quote: "We come realizing that the great gift of forgiveness will come only through the grace and power of the Savior Jesus Christ, and in no other way."
    },
]

let lastQuote = null

function handleGenerateQuote() {
    let random = Math.round(Math.random() * (quotes.length - 1))
    lastQuote = random;

    document.getElementById('p-quote').innerHTML = quotes[random].quote;
    document.getElementById('p-author').innerHTML = "-" + quotes[random].author;
}

