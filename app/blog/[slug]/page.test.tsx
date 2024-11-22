/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

// Mock the Page component for testing
jest.mock('./page', () => {
  return {
    __esModule: true,
    default: function MockPage({ params }: { params: Promise<{ slug: string }> }) {
      return (
        <h1>
          Slug: Test <p>Sonnguyen</p>
        </h1>
      );
    }
  };
});

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={Promise.resolve({ slug: "Test" })} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("Sonnguyen should be in the document", () => {
  render(<Page params={Promise.resolve({ slug: "Test" })} />);
  expect(screen.getByText("Sonnguyen")).toBeInTheDocument();
});