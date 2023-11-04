import dogReducer, { fetchDogAsync, DogState } from './dogSlice'

describe('counter reducer', () => {
  const initialState: DogState = {
    url: '',
    status: 'idle',
  }
  it('should handle initial state', () => {
    expect(dogReducer(undefined, { type: 'unknown' })).toEqual({
      url: '',
      status: 'idle',
    })
  })

  it('should handle fetch pending', () => {
    const actual = dogReducer(initialState, fetchDogAsync.pending)
    expect(actual.status).toEqual('loading')
  })
})
