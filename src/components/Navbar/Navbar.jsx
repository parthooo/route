import { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { "id": 1, "name": "Home", "path": "/" },
        { "id": 2, "name": "About", "path": "/about" },
        { "id": 3, "name": "Blog", "path": "/blog" },
        { "id": 4, "name": "Contact", "path": "/contact" },
        { "id": 5, "name": "Products", "path": "/products" }
    ];

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                {
                open === true ? 
                <XMarkIcon className="h-6 w-6 text-purple-500" /> 
                : 
                <Bars3Icon className="h-6 w-6 text-purple-500" />
                }
            </div>

            <ul className={`md:flex ${open ? 'top-6' : '-top-96'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    >
                    </Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;