const Link = ({route}) => {

    const { name, path} = route;
    return (
        <li>
            
            <a href={path}>{name}</a>
        </li>
    );
};

export default Link;