import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({to, children, classesProp, activeClassesProp}){
    const {navigate, currentPath} = useNavigation();
    const classes = classNames(
        'text-blue-500', 
        classesProp,
        currentPath === to && activeClassesProp
        )

    const handleClick = (event)=>{
        if(event.metakey || event.ctrlKey)  return;

        event.preventDefault();
        navigate(to);
    }
    
    return <a className={classes} onClick={handleClick} href={to}>{children}</a>
}

export default Link;