import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../pages/index';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const Wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);
describe('Home', () => {
    it('renders', async () => {
        render(<Wrapper><Home /></Wrapper>)
        const inputNode = screen.getByPlaceholderText('Enter a Value');
        fireEvent.change(inputNode, { target: { value: 'behzad1234' } });
        const inputNodeValue = screen.getByDisplayValue('behzad1234');
        expect(inputNodeValue).toBeInTheDocument();
        fireEvent.keyDown(inputNode, { key: 'Enter', code: 'Enter', charCode: 13 });
        const progress = await screen.getByRole('progressbar');
        expect(progress).toBeInTheDocument();
    })
})