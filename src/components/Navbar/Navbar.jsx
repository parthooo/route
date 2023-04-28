import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { "id": 1, "name": "home", "path": "/" },
        { "id": 2, "name": "about", "path": "/about" },
        { "id": 3, "name": "blog", "path": "/blog" },
        { "id": 4, "name": "contact", "path": "/contact" },
        { "id": 5, "name": "products", "path": "/products" }
    ]

    return (
        <nav>
            <ul className='md:flex'>
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