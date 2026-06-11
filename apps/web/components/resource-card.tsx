import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import type { Resource } from "@/lib/catalog"

export function ResourceCard({ item }: { item: Resource }) {
  return (
    <Card className="glass min-h-48 transition-transform duration-300 hover:-translate-y-1">
      <CardHeader>
        <CardTitle>
          <Link href={`/recursos/${item.slug}`} className="after:absolute after:inset-0">
            {item.name}
          </Link>
        </CardTitle>
        <CardDescription>{item.description}</CardDescription>
        <CardAction>
          <ArrowUpRight className="size-4 text-muted-foreground" />
        </CardAction>
      </CardHeader>
      <div className="mt-auto flex flex-wrap gap-2 px-4">
        <Badge variant="secondary">{item.type}</Badge>
        {item.frameworks.slice(0, 2).map((framework) => (
          <Badge key={framework} variant="outline">{framework}</Badge>
        ))}
      </div>
    </Card>
  )
}
