import {getLetters} from './getLetters';


describe('getLetters', () => {
  it('get two letters from two first worlds', () => {
    const result = getLetters('Abraao Alves');

    expect(result).toBe('AA');
  })
})