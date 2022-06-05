import { CommonType } from "../constants/types"

export const Utils = {
  filter: (arr: Array<CommonType>, term: string) => {
    const _result = arr.map((item: CommonType) => item[term])
    return _result.reduce((result: Array<string | number>, currentVal: string | number) => {
      if (result.includes(currentVal)) {
        return result
      }
      return [...result, currentVal]
    }, [])
  }
}