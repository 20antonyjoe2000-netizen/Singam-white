"use client"

import { useActionState } from "react"
import { applyAction, type ApplyState } from "@/app/actions/apply"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const initialState: ApplyState = {}

export function CTAForm() {
  const [state, formAction, isPending] = useActionState(applyAction, initialState)

  if (state.success) {
    return (
      <div className="text-center py-xl">
        <h3 className="font-headline-lg text-headline-lg mb-sm">
          Application received.
        </h3>
        <p className="text-body-lg text-secondary">
          We&apos;ll be in touch within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md text-left">
        <div className="flex flex-col">
          <label className="font-label-sm text-label-sm mb-xs uppercase tracking-widest text-secondary">
            Full Name
          </label>
          <Input name="name" placeholder="Janardhan Singh" type="text" />
          {state.fieldErrors?.name && (
            <p className="text-error font-label-sm text-label-sm mt-xs">
              {state.fieldErrors.name}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-label-sm text-label-sm mb-xs uppercase tracking-widest text-secondary">
            Email Address
          </label>
          <Input
            name="email"
            placeholder="janardhan@singam.com"
            type="email"
          />
          {state.fieldErrors?.email && (
            <p className="text-error font-label-sm text-label-sm mt-xs">
              {state.fieldErrors.email}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col text-left">
        <label className="font-label-sm text-label-sm mb-xs uppercase tracking-widest text-secondary">
          Current Goal
        </label>
        <select
          name="goal"
          className="bg-surface-container-low border-none rounded-xl p-md focus:ring-2 focus:ring-black focus:bg-white transition-all outline-none"
        >
          <option>Sub-3 Marathon</option>
          <option>First Ironman</option>
          <option>Ultra-Endurance</option>
          <option>General Fitness</option>
        </select>
      </div>
      <Button
        type="submit"
        variant="primary"
        size="full"
        disabled={isPending}
        className="mt-md shadow-lg hover:scale-[1.01]"
      >
        {isPending ? "Submitting…" : "Submit Application"}
      </Button>
      <p className="font-label-sm text-label-sm text-secondary mt-md">
        By submitting, you agree to our elite performance standards and terms of
        training.
      </p>
    </form>
  )
}
