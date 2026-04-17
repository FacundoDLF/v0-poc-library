"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

interface Loan {
  id: string
  book: string
  bookCode: string
  member: string
  memberDni: string
  loanDate: string
  dueDate: string
  status: "al_dia" | "vencido"
}

const recentLoans: Loan[] = [
  {
    id: "1",
    book: "Cien años de soledad",
    bookCode: "978-0307474728",
    member: "María González",
    memberDni: "32.456.789",
    loanDate: "10/04/2026",
    dueDate: "24/04/2026",
    status: "al_dia",
  },
  {
    id: "2",
    book: "El túnel",
    bookCode: "978-8432248375",
    member: "Juan Pérez",
    memberDni: "28.123.456",
    loanDate: "02/04/2026",
    dueDate: "16/04/2026",
    status: "vencido",
  },
  {
    id: "3",
    book: "Rayuela",
    bookCode: "978-8437604572",
    member: "Ana Rodríguez",
    memberDni: "35.789.012",
    loanDate: "12/04/2026",
    dueDate: "26/04/2026",
    status: "al_dia",
  },
  {
    id: "4",
    book: "La invención de Morel",
    bookCode: "978-8420638935",
    member: "Carlos López",
    memberDni: "30.567.890",
    loanDate: "01/04/2026",
    dueDate: "15/04/2026",
    status: "vencido",
  },
  {
    id: "5",
    book: "Ficciones",
    bookCode: "978-0802130303",
    member: "Laura Martínez",
    memberDni: "33.234.567",
    loanDate: "14/04/2026",
    dueDate: "28/04/2026",
    status: "al_dia",
  },
]

export function RecentLoansTable() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Últimos Préstamos Registrados
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="text-muted-foreground">Libro</TableHead>
              <TableHead className="text-muted-foreground">Código</TableHead>
              <TableHead className="text-muted-foreground">Socio</TableHead>
              <TableHead className="text-muted-foreground">DNI</TableHead>
              <TableHead className="text-muted-foreground">
                F. Préstamo
              </TableHead>
              <TableHead className="text-muted-foreground">
                F. Devolución
              </TableHead>
              <TableHead className="text-right text-muted-foreground">
                Estado
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentLoans.map((loan) => (
              <TableRow
                key={loan.id}
                className="cursor-pointer border-border/50 transition-colors hover:bg-accent/50"
              >
                <TableCell className="font-medium">{loan.book}</TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {loan.bookCode}
                </TableCell>
                <TableCell>{loan.member}</TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {loan.memberDni}
                </TableCell>
                <TableCell>{loan.loanDate}</TableCell>
                <TableCell>{loan.dueDate}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant="outline"
                    className={cn(
                      "font-medium",
                      loan.status === "al_dia"
                        ? "border-success/30 bg-success/10 text-success"
                        : "border-destructive/30 bg-destructive/10 text-destructive"
                    )}
                  >
                    {loan.status === "al_dia" ? "Al día" : "Vencido"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
