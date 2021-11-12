function star(delta: (state: number, char: number) => number): (state: number, char: number) => number {
  return delta;
}

function oddDelta(state: number, char: number): number {
  if (state < 6) {
    switch (char) {
      case 1: return state + 1
      case 2: return state + 2
      case 5: return state + 5
    }
  }  
  else if (state === 6) {
    switch (char) {
      case 1: return state + 1
      case 2: return state + 2
      case 5: return state + 5
      case -6: return state -6
    }
  }
  else if (state === 7) {
    switch (char) {
      case 1: return state + 1
      case 2: return state + 2
      case 5: return state + 5
      case -6: return state - 6
      case -7: return state - 7
    }
  }
  else if (state >= 8) {
    switch (char) {
      case 1: return state + 1
      case 2: return state + 2
      case 5: return state + 5
      case -6: return state -6
      case -7: return state - 7
      case -8: return state - 8
    }
  }

  return state;
}

export {star, oddDelta};