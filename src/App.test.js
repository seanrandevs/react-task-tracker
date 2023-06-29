import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
const MockApp = () => {
    return(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    )
}
describe('App', () => {
    it('h1 should render Task Tracker', () => {
        render(<MockApp />);
        const taskInput = screen.getByRole('textbox');
        expect(taskInput).toBeInTheDocument();
        userEvent.type(taskInput, 'Clothes');
        const saveBtn = screen.getByRole('button', {  name: /save task/i});
        userEvent.click(saveBtn);
        const taskDiv = screen.getByRole('heading', {  name: /Clothes/i})
        expect(taskDiv).toBeInTheDocument();
    })
})