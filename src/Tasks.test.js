import Tasks from "./components/Tasks";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tasks", () => {
  it('complete button should be called once', () => {
    const togFunction = jest.fn();
    const tasks = [
        {
          "text": "Dishes",
          "complete": false,
          "id": 2
        }
      ];
    render(<Tasks
    taskItem={tasks} 
    onToggle={togFunction}
    />)
    const completeBtn = screen.getByTestId("complete-btn");
    userEvent.click(completeBtn);
    expect(togFunction).toHaveBeenCalledTimes(1);
  })
  it('delete function should be called once', () => {
    const delFunction = jest.fn();
    const tasks = [
        {
          "text": "Dishes",
          "complete": false,
          "id": 2
        }
      ];
      render(<Tasks
        taskItem={tasks} 
        onDelete={delFunction}
        />)
        const deleteBtn = screen.getByTestId("delete-btn");
        userEvent.click(deleteBtn);
        expect(delFunction).toHaveBeenCalledTimes(1);
  })
})