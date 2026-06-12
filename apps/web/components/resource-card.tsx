import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
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
    <Card className="glass group gap-0 overflow-hidden py-0 transition-transform duration-300 hover:-translate-y-1">
      <Link
        href={`/recursos/${item.slug}`}
        className="relative block aspect-[16/9] overflow-hidden border-b bg-muted"
        aria-label={`Ver ${item.name}`}
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />
      </Link>
      <CardHeader>
        <CardTitle>
          <Link href={`/recursos/${item.slug}`}>
            {item.name}
          </Link>
        </CardTitle>
        <CardDescription>{item.description}</CardDescription>
        <CardAction>
          <ArrowUpRight className="size-4 text-muted-foreground" />
        </CardAction>
      </CardHeader>
      <div className="mt-auto flex flex-wrap gap-2 px-4 pb-5">
        <Badge variant="secondary">{item.type}</Badge>
        {item.frameworks.slice(0, 2).map((framework) => (
          <Badge key={framework} variant="outline">{framework}</Badge>
        ))}
      </div>
    </Card>
  )
}
