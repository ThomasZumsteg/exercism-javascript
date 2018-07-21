module.exports =  {
    encode: function(text) {
        return text.replace(/([\w])\1+/g, function(group, chr) {
            return group.length + chr});
    },
    decode: function(text) {
        return text.replace(/(\d+)(\w)/g, function(_, number, chr) {
            return chr.repeat(number);
        });
    }};
