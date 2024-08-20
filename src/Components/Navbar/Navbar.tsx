import React, { useState } from 'react'
import Logo from '@/src/Icons/Logo';
import Button from '../Button/Button';
import Link from 'next/link';
import MenuIcon from '@/src/Icons/MenuIcon';
import ProfileIcon from '@/src/Icons/ProfileIcon';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import confetti from 'canvas-confetti';
import { showCustomToast } from '../customToast/customToast';

const NavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "Service",
        "Feature",
        "Product",
        "Testimonial",
        "FAQ"
    ];

    const handleConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    return (
        <>
            {/* <header className='sticky top-0 z-40 w-full h-[60px] lg:h-[84px] bg-neutral-silver border-b border-gray-200'>
                <div className='px-4 md:px-auto md:container md:mx-auto h-full'>
                    <div className='flex items-center justify-between h-full'>
                        <div className='items-center gap-7 hidden md:flex'>
                            <MenuIcon className="max-w-[24px] max-h-[24px] md:max-w-[26px] md:max-h-[26px] xl:hidden cursor-pointer" onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
                            <Link href="/" className='xl:ml-[73px]'>
                                <Logo className="ml-[105pxs] h-[18px] md:h-[20px] lg:h-auto" />
                            </Link>
                        </div>
                        <MenuIcon className="max-w-[24px] max-h-[24px] md:max-w-[26px] md:max-h-[26px] md:hidden" />
                        <Link href="/" className='xl:ml-[73px] md:hidden'>
                            <Logo className="ml-[105pxs] h-[18px] md:h-[20px] lg:h-auto" />
                        </Link>
                        <div className='hidden xl:block'>
                            <ul className='flex items-center gap-[50px]'>
                                <li>
                                    <Link href="/" className='link active'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className='link'>
                                        Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className='link'>
                                        Feature
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className='link'>
                                        Product
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className='link'>
                                        Testimonial
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className='link'>
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <ProfileIcon className="max-w-[24px] max-h-[24px] md:max-w-[26px] md:max-h-[26px] md:hidden" />
                        <div className='space-x-[14px] xl:mr-[88px] hidden md:block'>
                            <Button
                                className="tertiaryBtn md:py-2 lg:py-2.5"
                            // onClick={() => toast({ title: "Coming Soon!" })}
                            >
                                Login

                            </Button>
                            <Button
                                className="primaryBtn md:py-2 lg:py-2.5"
                            // onClick={() => toast({ title: "Coming Soon!" })}
                            >
                                Sign up

                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex ">
                    <input type="checkbox" id="drawer-toggle" className="relative sr-only peer" checked />
                    <label htmlFor="drawer-toggle" className="absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64">
                        <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
                        <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
                    </label>
                    <div className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
                        <div className="px-6 py-4">
                            <h2 className="text-lg font-semibold">Drawer</h2>
                            <p className="text-gray-500">This is a drawer.</p>
                        </div>
                    </div>
                </div>
            </header> */}
            <Navbar onMenuOpenChange={setIsMenuOpen} className='h-[60px] lg:h-[80px]'>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="xl:hidden max-w-[24px] max-h-[24px] md:max-w-[26px] md:max-h-[26px]"
                    />
                    <NavbarBrand>
                        <Logo className="ml-[105pxs] h-[18px] md:h-[20px] lg:h-auto hidden md:block" />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="gap-4" justify="center">
                    <Link href="/" className='xl:ml-[73px] md:hidden'>
                        <Logo className="ml-[105pxs] h-[18px] md:h-[20px] lg:h-auto" />
                    </Link>
                    <div className='hidden xl:block'>
                        <ul className='flex items-center gap-[35px]'>
                            <li>
                                <Link href="/" className='link active'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className='link'>
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className='link'>
                                    Feature
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className='link'>
                                    Product
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className='link'>
                                    Testimonial
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className='link'>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className='space-x-[14px] hidden md:block'>
                        <Button
                            className="tertiaryBtn md:py-2 lg:py-2.5"
                            onClick={() => showCustomToast({ message: "Coming Soon!", type: "error" })}
                        >
                            Login
                        </Button>
                        <Button
                            className="primaryBtn md:py-2 lg:py-2.5"
                        // onClick={() => toast({ title: "Coming Soon!" })}
                        >
                            Sign up
                        </Button>
                    </NavbarItem>
                    <ProfileIcon className="max-w-[24px] max-h-[24px] md:max-w-[26px] md:max-h-[26px] md:hidden" />
                </NavbarContent>
                <NavbarMenu className='px-4 lg:mt-4 md:px-auto md:container md:mx-auto h-full border border-t-0'>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="/"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    )
}

export default NavBar
