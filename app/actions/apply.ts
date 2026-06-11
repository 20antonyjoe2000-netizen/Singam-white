"use server"

export type ApplyState = {
  success?: boolean
  error?: string
  fieldErrors?: {
    name?: string
    email?: string
  }
}

export async function applyAction(
  _prev: ApplyState,
  formData: FormData
): Promise<ApplyState> {
  const name = formData.get("name")?.toString().trim() ?? ""
  const email = formData.get("email")?.toString().trim() ?? ""
  const goal = formData.get("goal")?.toString() ?? ""

  if (!name) return { fieldErrors: { name: "Name is required" } }
  if (!email || !email.includes("@")) {
    return { fieldErrors: { email: "Valid email required" } }
  }

  console.log("New application:", { name, email, goal })
  return { success: true }
}
