import reducer from './images-reducer';

describe('Images reducer', () => {
    test('returns a state object', () => {
        const result:any = reducer(undefined, {type: 'ANYTHING'})
        expect(result).toBeDefined()
    })
})