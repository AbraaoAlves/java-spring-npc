

export function getLetters(name: string = '') {
  const list = name.split(' ');
  const [first = '', second = ''] = list || [];

  return (first[0] ?? '') + (second[0] ?? '');
}
