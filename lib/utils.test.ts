import { describe, expect, it } from "vitest"

import { cn } from "@/lib/utils"

describe("cn", () => {
  it("combina clases simples", () => {
    expect(cn("p-2", "text-sm")).toBe("p-2 text-sm")
  })

  it("prioriza clases de tailwind que colisionan", () => {
    expect(cn("p-2", "p-4")).toBe("p-4")
  })
})
