'use client'

import { useRef, useState } from 'react';
import { Root, Trigger, Content, Arrow } from '@radix-ui/react-popover';
import { NAV_LINKS, COMING_SOON_NAV_LINKS } from './_constants';
import Link from 'next/link';
import { cn } from '@/shared/utils';
import { useCurrentSectionStore } from '@/modules/home/_store';
import type { NavListItem } from './_types';

type Props = {
  isComingSoon: boolean
}

export function NavBar({ isComingSoon }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currenSection = useCurrentSectionStore((state) => state.currentSection);
  const navList = useRef<NavListItem[]>(
    isComingSoon ?
    COMING_SOON_NAV_LINKS :
    NAV_LINKS
  )

  return (
    <nav className="fixed text-slate-50 top-0 z-10 flex w-full items-center justify-between bg-linear-orange-black px-5 py-5 text-lg backdrop-blur-[100px] lg:px-8 lg:text-xl">
      <h1 className="text-xl font-bold lg:text-2xl">CE Smart Career 2025</h1>

      <Root onOpenChange={(open) => setIsMenuOpen(open)}>
        <Trigger className="md:hidden" aria-label="Open Menu">
          <svg
            className={cn(
              'h-6 w-6',
              isMenuOpen ? 'text-white' : 'hover:drop-shadow',
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </Trigger>

        {isMenuOpen && (
          <Content
            align="start"
            sideOffset={5}
            className="w-full rounded-lg bg-black p-4 text-white shadow-md md:hidden"
          >
            <ul className="flex flex-col space-y-4">
              {navList.current.map((navLink, index) => (
                <li key={index}>
                  <Link
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    href={navLink.href}
                    className={cn(
                      'transition-colors',
                      currenSection === navLink.href.slice(1)
                        ? 'text-orange-200 underline underline-offset-4'
                        : 'hover:text-shadow-orange text-white',
                    )}
                  >
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Arrow className="fill-current text-white" />
          </Content>
        )}
      </Root>

      <ul className="mx-2 hidden space-x-4 font-bold md:flex lg:space-x-10">
        {navList.current.map((navLink, index) => (
          <li key={index}>
            <Link
              href={navLink.href}
              className={cn(
                'transition-colors',
                currenSection === navLink.href.slice(1)
                  ? 'text-orange-200 underline underline-offset-4'
                  : 'text-white hover:text-orange-300',
              )}
            >
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
