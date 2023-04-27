import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom'

const MockApp = () => {
    return(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    )
}

describe('App', () => {
    it('should render task input when add button is clicked', () => {
        render(<MockApp />)
        const addButton = screen.getByRole("button", { text: /Add/i });
        fireEvent.click(addButton);
        const formElement = screen.getByTestId("form-id");
        expect(formElement).toBeInTheDocument();
    });

    it('sending task to task list', () => {
        render(<MockApp />)
        const addButton = screen.getByRole("button", { text: /Add/i });
        fireEvent.click(addButton);
        const inputElement = screen.getByPlaceholderText(/Add Task/i);
        fireEvent.change(inputElement, { target: { value: "Grocery Shopping" } });
        const saveTaskBtn = screen.getByTestId("btn");
        fireEvent.click(saveTaskBtn);
        const divElement = screen.getByText(/Grocery Shopping/i);
        expect(divElement).toBeInTheDocument();
    })
})
