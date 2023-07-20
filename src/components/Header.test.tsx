import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { Header } from "./Header"

test("renders Header component correctly", () => {
  render(<Header />)
  const linkElement = screen.getByText(/expected text in Header/i)
  expect(linkElement).toBeInTheDocument()
})