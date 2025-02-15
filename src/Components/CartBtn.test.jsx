import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CartBtn from "./CartBtn";
import styles from "./CartBtn.module.css";

describe('CartBtn', () => {
    it('renders button correctly', () => {
        const mockCart = [{ id: 1, quantity: 2 }];
        render( <CartBtn onClick={() => {}} showingCart={false} cart={mockCart} />)
        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByAltText("cart")).toBeInTheDocument();
        expect(screen.getByAltText("back")).toBeInTheDocument();    
    })
    
    it('runs onClick when button pressed', async () => {
        const user = userEvent.setup();
        const mockOnClick = vi.fn(); 

        render(
            <CartBtn onClick={mockOnClick} showingCart={false} cart={[]} />
          );

          await user.click(screen.getByRole("button"));

          expect(mockOnClick).toHaveBeenCalledOnce()
    })

    it('shows quantity only if cart showingCart is false', () => {
        const mockCart = [{quantity:1}, {quantity:3}]
        const {rerender} = render(
            <CartBtn onClick={()=>{}} showingCart={false} cart={mockCart} />
          );
        expect(screen.getByText('4')).toBeInTheDocument()
        rerender(
            <CartBtn onClick={() => {}} showingCart={true} cart={mockCart} />
          );
          expect(screen.queryByText("4")).not.toBeInTheDocument();
    })

    it('doesnt show quantity if cart is empty', () => {
        const mockCart = []
        render(<CartBtn onClick={()=>{}} showingCart={false} cart={mockCart} />)
        expect(screen.queryByText(/[0-9]+/)).not.toBeInTheDocument();
    })
    
    it('applies flip classname when showingCart is true', () => {
        const { container } = render(
            <CartBtn onClick={() => {}} showingCart={true} cart={[]} />
          );
        const button = container.querySelector("button");
        expect(button).toHaveClass(styles.flip); 
    })

    it('matches snapshot', () => {
        const mockCart = [{quantity:1}, {quantity:3}]
        const { container } = render(
            <CartBtn onClick={() => {}} showingCart={false} cart={mockCart} />
          );
        expect(container).toMatchSnapshot()
    })
})

