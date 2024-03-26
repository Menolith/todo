import {render, screen} from "@testing-library/react";
import {TodoList} from "./TodoList";

it("renders No Task Found when the list is empty", ()=>{
	render(<TodoList/>);
	const linkedElement = screen.getByText(/No tasks found/);
	expect(linkedElement).toBeInTheDocument();
});