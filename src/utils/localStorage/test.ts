import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return the item from localStorage', () => {
    window.localStorage.setItem('ELK_PROFILE_myKey', JSON.stringify(['1', '2']))

    expect(getStorageItem('myKey')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add the item to localStorage', () => {
    setStorageItem('myKey', ['1', '2'])

    expect(window.localStorage.getItem('ELK_PROFILE_myKey')).toStrictEqual(
      JSON.stringify(['1', '2'])
    )
  })
})
