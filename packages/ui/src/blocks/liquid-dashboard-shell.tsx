import { Activity, Command, ScanLine } from "lucide-react"

import { LiquidGlass } from "@workspace/ui/components/liquid-glass"

const metrics = [
  ["Revenue", "$128k", "+18.4%"],
  ["Active users", "42.8k", "Live"],
  ["Health", "99.99", "Stable"],
]

export function LiquidDashboardShell() {
  return (
    <LiquidGlass className="rounded-[2rem] p-3 sm:p-4" style={{ "--glass-x": "18%", "--glass-y": "0%" }}>
      <div className="overflow-hidden rounded-[1.5rem] border bg-background/80">
        <div className="flex h-12 items-center gap-2 border-b px-4">
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-amber-300" />
          <span className="size-2 rounded-full bg-emerald-300" />
          <p className="ml-3 text-xs text-muted-foreground">Command center</p>
          <Command className="ml-auto size-4 text-primary" />
        </div>
        <div className="grid min-h-[440px] md:grid-cols-[170px_1fr]">
          <aside className="hidden border-r p-3 md:block">
            {["Overview", "Signals", "Automations", "Reports"].map((item, index) => (
              <div key={item} className={`mb-1 rounded-xl px-3 py-2 text-sm ${index === 0 ? "bg-primary/12 text-primary" : "text-muted-foreground"}`}>
                {item}
              </div>
            ))}
          </aside>
          <div className="p-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {metrics.map(([label, value, status]) => (
                <div key={label} className="rounded-2xl border bg-background/45 p-4 shadow-2xl shadow-primary/10 backdrop-blur-xl">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="mt-5 text-3xl font-semibold tracking-[-0.05em]">{value}</p>
                  <p className="mt-1 text-xs text-primary">{status}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-2xl border bg-background/45 p-5 shadow-2xl shadow-primary/10 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Network activity</p>
                <ScanLine className="size-4 text-primary" />
              </div>
              <div className="mt-10 flex h-40 items-end gap-1.5">
                {[32, 52, 44, 68, 58, 84, 64, 92, 72, 100, 82, 94].map((height, index) => (
                  <span key={height + index} className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/20 to-cyan-300/80" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border bg-background/45 p-4 shadow-2xl shadow-primary/10 backdrop-blur-xl">
                <Activity className="size-5 text-primary" />
                <p className="mt-5 text-sm">Conversion anomaly resolved automatically.</p>
              </div>
              <div className="rounded-2xl border bg-background/45 p-4 shadow-2xl shadow-primary/10 backdrop-blur-xl">
                <p className="text-sm text-muted-foreground">System status</p>
                <p className="mt-5 text-sm font-medium">All systems operational</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LiquidGlass>
  )
}
