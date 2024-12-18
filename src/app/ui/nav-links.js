'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { inter } from "./fonts";

const links = [
    {
        name: 'Home', href: '/'
    },
    {
        name: 'Story', href: '/story'
    },
    {
        name: 'Albums', href: '/albums'
    },
    {
        name: 'Members', href: '/members'
    },
    {
        name: 'Reality', href: '/reality'
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          {/*const LinkIcon = link.icon;*/}
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex w-full h-[48px] items-center justify-between gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )}
            >
              {/*<LinkIcon className="w-6" />*/}
              <p className={`${inter.className} block`}>{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }