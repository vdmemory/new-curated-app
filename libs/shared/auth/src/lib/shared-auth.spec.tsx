import { render } from '@testing-library/react';

import SharedSingUp from './SharedSingUp';

describe('SharedSingUp', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SharedSingUp />);
        expect(baseElement).toBeTruthy();
    });
});
