"use client";

import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Vault", href: "#vault" },
    { name: "Agents", href: "#agents" },
    { name: "Early Access", href: "#early-access" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Research", href: "#" },
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "Token Design", href: "/whitepaper" },
  ],
  Network: [
    { name: "Contribute", href: "#network" },
    { name: "Roadmap", href: "#" },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">AURA</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                A private intelligence system for advanced health workflows.
              </p>

              {/* Contact */}
              <a
                href="mailto:hello@aura.health"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
              >
                Contact
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2025 Aura. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground/50 font-mono">
            Private intelligence for serious operators
          </p>
        </div>
      </div>
    </footer>
  );
}
