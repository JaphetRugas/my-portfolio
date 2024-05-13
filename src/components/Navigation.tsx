"use client"

import React from 'react'
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu" 

export default function Navigation() {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-4 md:gap-6">
                    <NavigationMenuLink asChild>
                        <Link className="text-sm font-medium hover:underline" href="#">
                            Home
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link className="text-sm font-medium hover:underline" href="#">
                            About
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link className="text-sm font-medium hover:underline" href="#">
                            Projects
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link className="text-sm font-medium hover:underline" href="#">
                            Skills
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link className="text-sm font-medium hover:underline" href="#">
                            Experience
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link className="text-sm font-medium hover:underline" href="#">
                            Contact
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
