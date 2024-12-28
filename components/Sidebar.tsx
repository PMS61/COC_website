"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { domains } from "@/config/navigation";
import { 
  LayoutDashboard, 
//   Info, 
//   Sparkles, 
  Users, 
  Code2, 
//   Users2, 
  BookOpen,
  Boxes 
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const navLinks = [
//   { name: 'About', href: '/about', icon: Info },
//   { name: 'Features', href: '/features', icon: Sparkles },
  { name: 'Teams', href: '/teams', icon: Users },
//   { name: 'Community', href: '/community', icon: Users2 },
  { name: 'Home', href: '/', icon: BookOpen },
];

const clubs = [
  { name: 'Dev Club', href: '/dev-club', icon: Code2 },
  { name: 'CP Club', href: '/cp-club', icon: Code2 },
  { name: 'AI Group', href: '/ai-group', icon: Boxes },
  { name: 'ETH Club', href: '/eth-club', icon: Boxes },
  { name: 'Proj X', href: '/proj-x', icon: Code2 },
];

export function Sidebar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const isLoading = status === "loading";

  return (
    <aside className="fixed left-0 flex h-screen w-72 flex-col border-r border-neutral-800 bg-black/95 backdrop-blur-xl">
      <div className="flex flex-col p-8">
        <div className="flex items-center gap-4">
          {isLoading ? (
            <>
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </>
          ) : (
            <>
              <Avatar className="h-10 w-10 ring-2 ring-emerald-500/20">
                <AvatarImage src={session?.user?.image || ""} />
                <AvatarFallback className="bg-emerald-950 text-emerald-200">
                  {session?.user?.name?.[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium text-neutral-200">
                  {session?.user?.name?.split(" ")[0]}
                </span>
                <span className="text-xs text-neutral-500">VJTI Student</span>
              </div>
            </>
          )}
        </div>
      </div>

      <Separator className="bg-neutral-800/50" />

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-6 overflow-y-auto scrollbar-none">
        {/* Overview Link */}
        {isLoading ? (
          <Skeleton className="h-10 w-full rounded-lg" />
        ) : (
          <Link href="/dashboard">
            <div className={cn(
              "flex items-center gap-3 rounded-lg px-5 py-3.5 text-sm font-medium transition-colors",
              pathname === "/dashboard"
                ? "bg-emerald-500/10 text-emerald-400"
                : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
            )}>
              <LayoutDashboard className="h-4 w-4" />
              <span>Overview</span>
            </div>
          </Link>
        )}

        {/* Navigation Links */}
        <div className="mt-6">
          <h3 className="px-5 py-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
            Navigation
          </h3>
          <div className="space-y-1 mt-1">
            {navLinks.map(({ name, href, icon: Icon }) => (
              <Link key={name} href={href}>
                <div className={cn(
                  "flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium transition-colors",
                  pathname === href
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
                )}>
                  <Icon className="h-4 w-4" />
                  <span>{name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Clubs Section */}
        <div className="mt-6">
          <h3 className="px-5 py-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
            Clubs
          </h3>
          <div className="space-y-1 mt-1">
            {clubs.map(({ name, href, icon: Icon }) => (
              <Link key={name} href={href}>
                <div className={cn(
                  "flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium transition-colors",
                  pathname === href
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
                )}>
                  <Icon className="h-4 w-4" />
                  <span>{name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-6">
          <h3 className="px-5 py-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
            Resources
          </h3>
          <div className="space-y-1 mt-1">
            {domains.map((domain) => {
              const isActive = pathname === `/dashboard/${domain.resources}`;
              const Icon = domain.icon;
              return (
                <Link key={domain.name} href={`/dashboard/${domain.resources}`}>
                  <div className={cn(
                    "flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
                  )}>
                    <Icon className="h-4 w-4" />
                    <span>{domain.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-8">
        <Separator className="bg-neutral-800/50 mb-6" />
        <p className="text-xs text-neutral-500 text-center">
          © 2024 VJTI Resources
        </p>
      </div>
    </aside>
  );
} 