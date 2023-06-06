import NavigationContext from "../contexts/navigation";
import { useContext } from "react";

function useNavigation(){
    return useContext(NavigationContext);
}

export default useNavigation;