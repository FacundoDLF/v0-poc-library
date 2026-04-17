"use client"

import { AlertCircle, Calendar, Repeat } from "lucide-react"

import { GlobalSearch } from "@/components/global-search"
import { MetricCard } from "@/components/metric-card"
import { RecentLoansTable } from "@/components/recent-loans-table"

export function DashboardContent() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Bienvenido/a al panel de gestión de la biblioteca
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Préstamos Activos"
          value={47}
          description="Libros actualmente en préstamo"
          icon={Repeat}
          trend={{ value: 12, isPositive: true }}
        />
        <MetricCard
          title="Membresías por Vencer"
          value={8}
          description="En los próximos 30 días"
          icon={AlertCircle}
        />
        <MetricCard
          title="Cupos de Actividades"
          value="23/50"
          description="Taller de lectura - Sábado"
          icon={Calendar}
        />
      </div>

      {/* Search Box */}
      <div className="mx-auto w-full max-w-3xl py-4">
        <GlobalSearch />
      </div>

      {/* Recent Loans Table */}
      <RecentLoansTable />
    </div>
  )
}
