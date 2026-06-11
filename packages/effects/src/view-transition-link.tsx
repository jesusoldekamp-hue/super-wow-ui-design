"use client"

import { type AnchorHTMLAttributes, type MouseEvent } from "react"

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> }
}

export function ViewTransitionLink({
  href,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return

    const documentWithTransitions = document as ViewTransitionDocument
    if (!documentWithTransitions.startViewTransition) return

    event.preventDefault()
    documentWithTransitions.startViewTransition(() => {
      if (href.startsWith("#")) {
        document.querySelector(href)?.scrollIntoView()
        window.history.replaceState(null, "", href)
        return
      }

      window.location.assign(href)
    })
  }

  return <a href={href} onClick={handleClick} {...props} />
}
