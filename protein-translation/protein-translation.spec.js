var translate = require('./protein-translation');

describe('ProteinTranslation', function () {
  it('Empty RNA has no proteins', function () {
    expect(translate()).toEqual([]);
  });

  it('Methionine codon translates into protein', function () {
    expect(translate('AUG')).toEqual(['Methionine']);
  });

  it('Phenylalanine codons translate into protein', function () {
    expect(translate('UUUUUC')).toEqual(['Phenylalanine', 'Phenylalanine']);
  });

  it('Leucine codons translate into protein', function () {
    expect(translate('UUAUUG')).toEqual(['Leucine', 'Leucine']);
  });

  it('Serine codons translate into protein', function () {
    expect(translate('UCUUCCUCAUCG')).toEqual(['Serine', 'Serine', 'Serine', 'Serine']);
  });

  it('Tyrosine codons translate into protein', function () {
    expect(translate('UAUUAC')).toEqual(['Tyrosine', 'Tyrosine']);
  });

  it('Cysteine codons translate into protein', function () {
    expect(translate('UGUUGC')).toEqual(['Cysteine', 'Cysteine']);
  });

  it('Tryptophan codon translates into protein', function () {
    expect(translate('UGG')).toEqual(['Tryptophan']);
  });

  it('Sequence starts with stop codon 1', function () {
    expect(translate('UAAUUUUUA')).toEqual([]);
  });

  it('Sequence starts with stop codon 2', function () {
    expect(translate('UAGAUGUAU')).toEqual([]);
  });

  it('Sequence starts with stop codon 3', function () {
    expect(translate('UGAUGU')).toEqual([]);
  });

  it('Small RNA strand', function () {
    expect(translate('AUGUUUUCU')).toEqual(['Methionine', 'Phenylalanine', 'Serine']);
  });

  it('Stop codon ends translation', function () {
    expect(translate('AUGUUUUCUUAAAUG')).toEqual(['Methionine', 'Phenylalanine', 'Serine']);
  });

  it('Invalid codon throws error', function () {
    expect(
      function () {
        translate('LOL');
      }
    ).toThrow(new Error('Invalid codon'));
  });
});
