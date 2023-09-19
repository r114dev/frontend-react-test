import { SeperateRegion } from "./types";

export function solution(regions: string[][]) {
  let seperateRegions: SeperateRegion[] = [];
  const splits = [2, 3, 3, 2];

  const regist = (
    region: string[],
    seperateRegions: SeperateRegion[],
    depth: number
  ) => {
    const [code, region1, region2, region3, region4] = region;

    const regionNames = [region1, region2, region3, region4];

    const sliceIndex = splits
      .slice(0, depth + 1)
      .reduce((prev, current) => prev + current);

    const slicedCode = code.slice(0, sliceIndex);

    const seperateRegion = seperateRegions.find(
      (seperateRegion) => seperateRegion.code === slicedCode
    );

    if (!seperateRegion) {
      const seperateRegion: SeperateRegion = {
        code: slicedCode,
        name: regionNames[depth],
        children: [],
      };

      seperateRegions.push(seperateRegion);
    }

    if (depth < 4 && slicedCode.length < 10) {
      const seperateRegion = seperateRegions.find(
        (seperateRegion) => seperateRegion.code === slicedCode
      );

      if (seperateRegion) {
        regist(region, seperateRegion.children, depth + 1);
      }
    }
  };

  for (let region of regions) {
    regist(region, seperateRegions, 0);
  }

  return seperateRegions;
}
