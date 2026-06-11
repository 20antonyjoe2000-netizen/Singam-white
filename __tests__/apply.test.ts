import { describe, it, expect } from "vitest"
import { applyAction } from "@/app/actions/apply"

function makeFormData(data: Record<string, string>): FormData {
  const fd = new FormData()
  Object.entries(data).forEach(([k, v]) => fd.append(k, v))
  return fd
}

describe("applyAction", () => {
  it("returns name field error when name is empty", async () => {
    const result = await applyAction(
      {},
      makeFormData({ name: "", email: "a@b.com", goal: "Sub-3 Marathon" })
    )
    expect(result.fieldErrors?.name).toBe("Name is required")
  })

  it("returns email field error when email has no @", async () => {
    const result = await applyAction(
      {},
      makeFormData({ name: "Sivabalan", email: "notanemail", goal: "Sub-3 Marathon" })
    )
    expect(result.fieldErrors?.email).toBe("Valid email required")
  })

  it("returns success for valid name and email", async () => {
    const result = await applyAction(
      {},
      makeFormData({ name: "Sivabalan", email: "siva@singam.com", goal: "Sub-3 Marathon" })
    )
    expect(result.success).toBe(true)
  })
})
