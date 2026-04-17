"use client"

import { useState } from "react"
import { BookOpen, Search, User } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type SearchType = "libros" | "socios"

export function GlobalSearch() {
  const [searchType, setSearchType] = useState<SearchType>("libros")
  const [query, setQuery] = useState("")

  const placeholders = {
    libros: "Buscar por código de barras o título del libro...",
    socios: "Buscar por DNI o nombre del socio...",
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Tabs
          value={searchType}
          onValueChange={(v) => setSearchType(v as SearchType)}
          className="w-full sm:w-auto"
        >
          <TabsList className="grid w-full grid-cols-2 sm:w-auto">
            <TabsTrigger value="libros" className="gap-2">
              <BookOpen className="size-4" />
              Libros
            </TabsTrigger>
            <TabsTrigger value="socios" className="gap-2">
              <User className="size-4" />
              Socios
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholders[searchType]}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={cn(
            "h-14 w-full rounded-xl border-border/50 bg-card pl-12 pr-4 text-lg",
            "placeholder:text-muted-foreground/60",
            "focus-visible:ring-2 focus-visible:ring-primary"
          )}
        />
      </div>
      {query && (
        <p className="text-center text-sm text-muted-foreground">
          Presioná <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">Enter</kbd> para buscar
        </p>
      )}
    </div>
  )
}
