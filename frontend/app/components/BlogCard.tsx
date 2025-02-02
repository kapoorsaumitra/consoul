"use client"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"
import type { BlogPost } from "../lib/data"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden border-none shadow-none">
      <Link href={`/blog/${post.id}`}>
        <div className="relative aspect-[1.5] overflow-hidden rounded-lg">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="mt-4 space-y-2 p-0">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <Link href={`/blog/${post.id}`} className="group">
          <h2 className="line-clamp-2 text-xl font-semibold leading-snug tracking-tight group-hover:underline">
            {post.title}
          </h2>
        </Link>
        <p className="line-clamp-2 text-muted-foreground">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

