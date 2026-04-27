import { render, screen } from "@testing-library/react"
import { BookOpen } from "lucide-react"
import { describe, expect, it } from "vitest"

import { MetricCard } from "@/components/metric-card"

describe("MetricCard", () => {
  it("muestra titulo, valor y descripcion", () => {
    render(
      <MetricCard
        title="Prestamos activos"
        value={25}
        description="Libros actualmente en prestamo"
        icon={BookOpen}
      />
    )

    expect(screen.getByText("Prestamos activos")).toBeInTheDocument()
    expect(screen.getByText("25")).toBeInTheDocument()
    expect(screen.getByText("Libros actualmente en prestamo")).toBeInTheDocument()
  })

  it("renderiza tendencia positiva con prefijo +", () => {
    render(
      <MetricCard
        title="Prestamos activos"
        value={25}
        icon={BookOpen}
        trend={{ value: 12, isPositive: true }}
      />
    )

    expect(screen.getByText("+12% vs. mes anterior")).toBeInTheDocument()
  })

  it("renderiza tendencia negativa sin prefijo +", () => {
    render(
      <MetricCard
        title="Prestamos activos"
        value={25}
        icon={BookOpen}
        trend={{ value: 5, isPositive: false }}
      />
    )

    expect(screen.getByText("5% vs. mes anterior")).toBeInTheDocument()
  })
})
