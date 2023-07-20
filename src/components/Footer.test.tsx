import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { Footer } from "./Footer"

test("renders Footer component correctly", () => {
  render(<Footer />)
  const linkElement = screen.getByText(/expected text in Footer/i)
  expect(linkElement).toBeInTheDocument()
})