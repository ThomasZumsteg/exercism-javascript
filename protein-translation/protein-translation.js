const translate = {

    'AUG': 'Methionine',
    'UCA': 'Serine',
    'UCC': 'Serine',
    'UCG': 'Serine',
    'UCU': 'Serine',
    'UUA': 'Leucine', 
    'UUC': 'Phenylalanine',
    'UUG': 'Leucine',
    'UUU': 'Phenylalanine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGC': 'Cysteine',
    'UGU': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP',
}


module.exports = function(rna) {
    var result = [];
    var protein;
    for(var r = 3; r <= (rna == undefined ? 0 : rna.length); r += 3) {
        protein = translate[rna.slice(r-3, r)];
        if(protein == 'STOP') 
            break;
        if(protein == undefined)
            throw new Error('Invalid codon');
        result.push(protein);
    }
    return result;
}
