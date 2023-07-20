import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { Content } from "./Content"

test("renders Content component correctly", () => {
  render(<Content />)
  const linkElement = screen.getByText(/expected text in Content/i)
  expect(linkElement).toBeInTheDocument()
})