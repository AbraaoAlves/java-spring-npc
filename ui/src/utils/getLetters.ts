



export function getLetters(name: string = '') {
  const list = name.split(' ');
  console.log('list', list);
  const [first = '', second = ''] = list || [];
  console.log('first', first);
  console.log('second', second);

  return (first[0] ?? '') + (second[0] ?? '');
}
