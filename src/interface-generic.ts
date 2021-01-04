interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c']
};

const numericArr: Items<number> = {
  list: [1, 2, 3, 4, 5]
}