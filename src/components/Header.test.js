import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import '@testing-library/jest-dom'

const MockHeader = () => {
    return(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
    )
}

describe('Header', () => {
    it('h1 should render Task Tracker', () => {
        render(<MockHeader />);
        const h1Element = screen.getByText("Task Tracker");
        expect(h1Element).toBeInTheDocument();
    })   
})
