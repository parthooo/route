const Link = ({route}) => {

    const { name, path} = route;
    
    return (
        <li className="mr-12 hover:bg-purple-800 p-2">
            <a href={path}>{name}</a>
        </li>
    );
};

export default Link;