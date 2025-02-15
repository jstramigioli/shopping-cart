import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect, vi } from "vitest";

// Mock NavBar
vi.mock("./Components/NavBar", () => ({
    default: () => <div data-testid="nav-bar">NavBar Mock</div>,
  }));

  vi.mock("react-router-dom", () => ({
    Outlet: () => <div data-testid="outlet">Outlet Mock</div>,
  }));

describe('App component', () => {
    it('renders NavBar', () => {
        render(<App/>)
        expect(screen.getByTestId("nav-bar")).toBeInTheDocument();
        expect(screen.getByTestId("outlet")).toBeInTheDocument();
    })
})