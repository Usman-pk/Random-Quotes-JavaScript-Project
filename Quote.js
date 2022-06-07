var Quotes = ["You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.",
    "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
    "We write to taste life twice, in the moment and in retrospect.",
    "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
    "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
    "Read, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window.",
    "Words can be like X-rays if you use them properly -- they'll go through anything. You read and you're pierced.",
    "Here is a lesson in creative writing. First rule: Do not use semicolons. They are transvestite hermaphrodites representing absolutely nothing. All they do is show you've been to college.",
    "You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write."
]




var author = ["Madeleine L'Engle", "Stephen King", "Anaïs Nin", "Mark Twain", "Toni Morrison", "Robert Frost", "William Faulkner",
        "Aldous Huxley", "Kurt Vonnegut Jr.", "Annie Proulx" 
]


function getQuote()
{
    var Value = Math.floor(Math.random() * Quotes.length);

    document.getElementById("authorName").innerHTML = author[Value];
    document.getElementById("quote").innerHTML = Quotes[Value];
}