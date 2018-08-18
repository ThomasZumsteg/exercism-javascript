const days = [
    { day: "first", gift: "a Partridge in a Pear Tree"},
    { day: "second", gift: "two Turtle Doves"},
    { day: "third", gift: "three French Hens"},
    { day: "fourth", gift: "four Calling Birds"},
    { day: "fifth", gift: "five Gold Rings"},
    { day: "sixth", gift: "six Geese-a-Laying"},
    { day: "seventh", gift: "seven Swans-a-Swimming"},
    { day: "eighth", gift: "eight Maids-a-Milking"},
    { day: "ninth", gift: "nine Ladies Dancing"},
    { day: "tenth", gift: "ten Lords-a-Leaping"},
    { day: "eleventh", gift: "eleven Pipers Piping"},
    { day: "twelfth", gift: "twelve Drummers Drumming"},
];

class TwelveDays {
    verse(verses) {
        var start = verses[0] - 1;
        var end = verses[1] || start + 1;
        var result = [];
        for(var current = start; current < end; current++) {
            var line = "On the " + days[current].day;
            line += " day of Christmas my true love gave to me";
            for(var v = current; 0 <= v; v--) {
                line += ", "  + (v == 0 && current != 0 ? "and " : "");
                line += days[v].gift;
            }
            result.push(line + ".\n");
        }
        return result.join('\n');
    }

    sing() { return this.verse([1, 12]); }
}

module.exports = TwelveDays;
