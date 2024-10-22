'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

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
        name: 'Members and Subunits', href: '/members'
    },
    {
        name: 'Reality', href: '/reality'
    },
]