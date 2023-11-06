function findMaximumPairs(N: number, preferences: number[][]): number {
  const gentlemenPreferences: number[][] = [];
//   const paired: boolean[] = new Array(2 * N + 1).fill(false);
  const paired: any[] = new Array(2 * N + 1).fill(false);

  for (let i = 0; i < N; i++) {
    const ladyId = i + 1;
    const gentlemenIds = preferences[i];
    gentlemenPreferences[ladyId] = gentlemenIds;
  }

  let pairs = 0;

  for (let ladyId = 1; ladyId <= N; ladyId++) {
    if (findPartner(ladyId, gentlemenPreferences, paired)) {
      pairs++;
    }
  }

  return pairs;
}

function findPartner(ladyId: number, gentlemenPreferences: number[][], paired: boolean[]): boolean {
  for (const gentlemanId of gentlemenPreferences[ladyId]) {
    if (!paired[gentlemanId]) {
      paired[gentlemanId] = true;
      return true;
    }
  }
  return false;
}

// const N = 3; // Replace with the desired number of guests.
const N = 19; // Replace with the desired number of guests.
const preferences = [
  [25], // Lady 1's preferences
  [20, 25, 28], // Lady 2's preferences
  [27, 32, 37], // Lady 3's preferences
  [22], // Lady 1's preferences
  [32, 38], // Lady 3's preferences
  [32, 34, 35],
  [22, 34, 37],
  [30, 35, 38],
  [20, 23],
  [24, 29],
  [29, 32],
  [23, 26, 31],
  [21, 25, 34],
  [21, 27],
  [20],
  [23, 31, 38],
  [22, 27, 28],
  [35],
  [24, 25],
  // Add more lines for additional ladies
];

const maximumPairs = findMaximumPairs(N, preferences);
console.log(maximumPairs);
