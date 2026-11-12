"use client";

import * as React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { navItems, type NavItem } from "@/lib/nav";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function MegaPanel({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-white/12 bg-ink-2/95 p-3 shadow-soft backdrop-blur-2xl lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="grid gap-1 p-3 sm:grid-cols-2">
          {item.children?.map((child, index) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className="group rounded-2xl p-4 transition-colors duration-300 hover:bg-white/[0.055]"
            >
              <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-azure">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-2 flex items-center justify-between gap-3 font-display text-[19px] leading-tight text-porcelain">
                {child.label}
                <ArrowUpRight className="size-4 shrink-0 text-mist/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky" />
              </span>
              {child.description && (
                <span className="mt-2 block max-w-[28ch] text-[12px] leading-relaxed text-mist/75">
                  {child.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
      {item.image && (
        <div className="relative hidden min-h-64 overflow-hidden rounded-2xl lg:col-span-5 lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-display text-2xl leading-tight text-porcelain">
              {item.featureTitle}
            </p>
            <p className="mt-2 max-w-[32ch] text-[12px] leading-relaxed text-mist/70">
              {item.featureCopy}
            </p>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between border-t border-white/10 p-4 text-[11px] text-mist/75 lg:col-span-12">
        <span>Not sure where to begin?</span>
        <Link
          href="/contact"
          onClick={onNavigate}
          className="inline-flex items-center gap-1.5 font-semibold text-sky transition-colors hover:text-white"
        >
          Talk to our team
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}

function DesktopNav() {
  const [open, setOpen] = React.useState<string | null>(null);
  const navRef = React.useRef<HTMLElement | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = React.useRef<Record<string, HTMLButtonElement | null>>(
    {},
  );

  const cancelClose = React.useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = React.useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      if (!navRef.current?.contains(document.activeElement)) {
        setOpen(null);
      }
    }, 150);
  }, [cancelClose]);

  React.useEffect(() => cancelClose, [cancelClose]);

  React.useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpen(null);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const trigger = triggerRefs.current[open];
      trigger?.focus();
      setOpen(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className="relative hidden xl:block"
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpen(null);
        }
      }}
    >
      <ul className="flex items-center gap-0.5">
        {navItems.map((item, index) => {
          const isOpen = open === item.href;
          const panelId = `nav-panel-${index}`;

          return (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() => {
                cancelClose();
                setOpen(item.children ? item.href : null);
              }}
            >
              {item.children ? (
                <>
                  <button
                    type="button"
                    ref={(node) => {
                      triggerRefs.current[item.href] = node;
                    }}
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? panelId : undefined}
                    onClick={() => setOpen(isOpen ? null : item.href)}
                    onFocus={() =>
                      setOpen((current) =>
                        current === item.href ? current : null,
                      )
                    }
                    className={cn(
                      "group flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-2 text-[10.5px] font-semibold uppercase tracking-[0.13em] text-porcelain/75 transition-colors duration-300 hover:bg-white/[0.055] hover:text-porcelain",
                      isOpen && "bg-white/[0.07] text-porcelain",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-3 text-mist/75 transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div
                      id={panelId}
                      data-state="open"
                      className="mega-menu fixed left-1/2 top-[77px] z-50 w-[min(72rem,calc(100vw-2rem))] -translate-x-1/2"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <MegaPanel
                        item={item}
                        onNavigate={() => setOpen(null)}
                      />
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onFocus={() => setOpen(null)}
                  className="rounded-full px-3 py-2 text-[10.5px] font-semibold uppercase tracking-[0.13em] text-porcelain/75 transition-colors duration-300 hover:bg-white/[0.055] hover:text-porcelain"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function MobileNav({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [expanded, setExpanded] = React.useState<string | null>(null);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-ink/70 backdrop-blur-md data-[state=closed]:animate-[fade-out_180ms_ease-in] data-[state=open]:animate-[fade-in_220ms_ease-out]" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-[90] flex w-full max-w-md flex-col border-l border-white/10 bg-ink-2/98 shadow-soft outline-none data-[state=closed]:animate-[slide-out_220ms_ease-in] data-[state=open]:animate-[slide-in_320ms_cubic-bezier(0.22,1,0.36,1)]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
            <Dialog.Title asChild>
              <div>
                <Logo />
              </div>
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="grid size-10 cursor-pointer place-items-center rounded-full border border-white/15 text-porcelain transition-colors hover:border-sky/50 hover:bg-white/[0.06]"
                aria-label="Close menu"
              >
                <X className="size-4" />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className="sr-only">
            Site navigation and contact options.
          </Dialog.Description>

          <div className="hide-scrollbar flex-1 overflow-y-auto px-5 py-6">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.href} className="border-b border-white/10">
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                      className="flex w-full cursor-pointer items-center justify-between py-5 text-left font-display text-2xl text-porcelain"
                      aria-expanded={expanded === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-4 text-mist transition-transform duration-300",
                          expanded === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1 pb-5 pl-1">
                            <Link
                              href={item.href}
                              onClick={() => onOpenChange(false)}
                              className="rounded-xl px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-azure"
                            >
                              View all
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => onOpenChange(false)}
                                className="rounded-xl px-3 py-2.5 text-sm text-mist/80 transition-colors hover:bg-white/[0.05] hover:text-porcelain"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => onOpenChange(false)}
                    className="border-b border-white/10 py-5 font-display text-2xl text-porcelain"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          <div className="border-t border-white/10 p-5">
            <Button asChild className="w-full" size="lg">
              <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
                Request an appointment
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <a
              href={site.phoneHref}
              className="mt-3 flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 text-sm font-semibold text-porcelain"
            >
              <Phone className="size-4 text-sky" />
              {site.phoneDisplay}
            </a>
            <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-mist/75">
              {site.address.city}, {site.address.state}
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-ink/85 py-2.5 backdrop-blur-2xl"
            : "border-b border-transparent bg-gradient-to-b from-ink/75 to-transparent py-3.5",
        )}
      >
        <div className="shell flex items-center justify-between gap-4">
          <Logo />

          <div className="flex items-center gap-2">
            <DesktopNav />

            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-[11px] font-semibold text-porcelain/80 transition-colors hover:border-sky/40 hover:text-white md:flex"
            >
              <Phone className="size-3.5 text-sky" />
              {site.phoneDisplay}
            </a>

            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
                Schedule
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/15 text-porcelain transition-colors hover:border-sky/40 hover:bg-white/[0.06] xl:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={menuOpen} onOpenChange={setMenuOpen} />
    </>
  );
}
