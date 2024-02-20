import { GoBellFill , GoDatabase , GoCloud } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () => {
        
    }
    return <div> 
        <div>
            <Button success rounded outline className="mb-5" onClick={handleClick} > 
            <GoBellFill/>
            click me! 
            </Button>
        </div>
        <div>
            <Button danger outline onMouseEnter={handleClick}> 
            <GoDatabase/> 
            Buy now! 
            </Button>
        </div> 
        <div>
            <Button warning> 
            <GoCloud/> 
            See Deals! 
            </Button>
        </div> 
        <div>
            <Button secondary outline> 
            Hide Ads! 
            </Button>
        </div> 
        <div>
            <Button primary outline> 
            Show Ads! 
            </Button>
        </div>
     </div>;
}

export default ButtonPage;
