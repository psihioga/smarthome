import React from 'react' 
import  {Build}  from "@/icons/index";
import Arrow from "@/icons/arrow.svg";
import Brick from "../../images/icons/bricks.svg";


export type MenuItem= {
    text: string;
    icon?: any;
}

 
function ListItem(props: {element: MenuItem}) {
    const text = props.element.text;
    
    return (
        <li className='menulist_item'>
            {/* {props.element?.icon ? <Image alt={text} 
                src={props.element?.icon} width={30} height={30}
                className='menulist_icon'/> 
                : text} */}
                {text}
        </li>
    )
}

export const Menu = (props: {items:MenuItem[]}) => {

    const items:MenuItem[] = props.items;

    const elements = items.map(item => {
        return <ListItem  key={item.text} element={item} />
    })

    return (
        <div id="nav" className='h-screen bg-primary-600 flex flex-col flex-wrap items-center'>
            {/* <Image priority={true}  className='logo' src={'/logo.svg'} alt='logo'  width={30} height={30}/> */}
            
            <Build className="fill-primary-600"/>
            <ul className='menulist flex flex-col items-center'>
                {elements}
            </ul>
        </div>
    );
  };
