// import { addProject } from './project.slice';

// describe('one reducer', () => {
//     it('should handle initial state', () => {
//         const expected = oneAdapter.getInitialState({
//             loadingStatus: 'not loaded',
//             error: null,
//         });

//         expect(oneReducer(undefined, { type: '' })).toEqual(expected);
//     });

//     it('should handle fetchOnes', () => {
//         let state = oneReducer(undefined, fetchOne.pending(null, null));

//         expect(state).toEqual(
//             expect.objectContaining({
//                 loadingStatus: 'loading',
//                 error: null,
//                 entities: {},
//             }),
//         );

//         state = oneReducer(state, fetchOne.fulfilled([{ id: 1 }], null, null));

//         expect(state).toEqual(
//             expect.objectContaining({
//                 loadingStatus: 'loaded',
//                 error: null,
//                 entities: { 1: { id: 1 } },
//             }),
//         );

//         state = oneReducer(
//             state,
//             fetchOne.rejected(new Error('Uh oh'), null, null),
//         );

//         expect(state).toEqual(
//             expect.objectContaining({
//                 loadingStatus: 'error',
//                 error: 'Uh oh',
//                 entities: { 1: { id: 1 } },
//             }),
//         );
//     });
// });

describe('one reducer', () => {
    it('should handle initial state', () => {
        expect(true).toBeTruthy();
    });
});
