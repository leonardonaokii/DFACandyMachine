type State = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | -1;

export type Alphabet = 1 | 2 | 5 | -6 | -7 | -8;

function dfa(delta: (state: State, symbol: Alphabet) => State, state: State, finalStates: State[],): (word: Alphabet[]) => boolean {
  return word => {
    const deltaStar = star(delta);
    return finalStates.includes(deltaStar(state, word));
  }
}

function star(delta: (state: State, symbol: Alphabet) => State): (state: State, word: Alphabet[]) => State {
  return (state, word) => {
    for (let symbol of word) { state = delta(state, symbol) }
    return state;
  }
}

function oddDelta(state: State, symbol: Alphabet): State {
  switch (state) {
    case -1:
      throw new Error("Final state reached.")
    case 0:
      switch (symbol) {
        case 1: return 1
        case 2: return 2
        case 5: return 5
        default: throw Error('Invalid symbol');
      }
    case 1:
      switch (symbol) {
        case 1: return 2
        case 2: return 3
        case 5: return 6
        default: throw Error('Invalid symbol');
      }
    case 2:
      switch (symbol) {
        case 1: return 3
        case 2: return 4
        case 5: return 7
        default: throw Error('Invalid symbol');
      }
    case 3:
      switch (symbol) {
        case 1: return 4
        case 2: return 5
        case 5: return 8
        default: throw Error('Invalid symbol');
      }
    case 4:
      switch (symbol) {
        case 1: return 5
        case 2: return 6
        case 5: return 8
        default: throw Error('Invalid symbol');
      }
    case 5:
      switch (symbol) {
        case 1: return 6
        case 2: return 7
        case 5: return 8
        default: throw Error('Invalid symbol');
      }
    case 6:
      switch (symbol) {
        case 1: return 7
        case 2: return 8
        case 5: return 8
        case -6: return -1
        default: throw Error('Invalid symbol');
      }
    case 7:
      switch (symbol) {
        case 1: return 8
        case 2: return 8
        case 5: return 8
        case -6: return -1
        case -7: return -1
        default: throw Error('Invalid symbol');
      }
    case 8:
      switch (symbol) {
        case 1: return 8
        case 2: return 8
        case 5: return 8
        case -6: return -1
        case -7: return -1
        case -8: return -1
        default: throw Error('Invalid symbol');
      }
  }
}

/**
 * initial state: 0
 * 
 * final states: [-1]
 * 
 * alphabet: [1, 2, 5, -6, -7, -8]
 * 
 * states: [0, 1, 2, 3, 4, 5, 6, 7, 8, -1]
 */
const dfaOdd = dfa(oddDelta, 0, [-1])

export { dfaOdd };