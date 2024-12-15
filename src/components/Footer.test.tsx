import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"

test("App component renders correctly", () => {
  expect(() => render(<App />)).not.toThrow()
})

test("Expected elements are present in the document", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})
