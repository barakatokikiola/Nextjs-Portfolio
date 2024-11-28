import { BtnList } from "@/app/data";
import NavButton from "./NavButton";



const Navigation =()=>{

    const angleIncrement = 360/BtnList.length;

    return(
   <div className="flex w-full h-screen fixed items-center justify-center">
     <div className="flex items-center justify-between relative">
        {
            BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI)/180;
                const radius = 'calc(20vw - 1rem)';
                const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                const y = `calc(${radius} * ${Math.sin(angleRad)})`;
                return (
                    <NavButton key={btn.label} x={x} y={y} {...btn} />
                    
                )
            })
        }
    </div>
   </div>
    )
}


export default Navigation;