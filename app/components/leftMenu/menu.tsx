import React from 'react' 
import  {Build}  from "@/icons/index";
import './style.css'


export type MenuItem= {
    text: string;
    icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

 
function ListItem(props: {element: MenuItem, active: boolean}) {
    const text = props.element.text;
    const Icon = props.element.icon;
    const active = props.active;
  
    return (
        <li className={`${active ? 'bg-primary-100' : 'bg-primary-600' } menulist_item p-6  mb-2 rounded-md w-8 h-8  content-center grid justify-center`}>
           {Icon ? <Icon className='fill-white' /> : text}
        </li>
    )
}

export const Menu = (props: {items:MenuItem[], activeItem: number}) => {

    const items:MenuItem[] = props.items;
    const activeItem = props.activeItem;

    const elements = items.map((item, index) => {
        
        return <ListItem  key={item.text} element={item} active={index == activeItem ? true : false}/>
    })

    return (
        <div id="nav" className='max-h-screen bg-primary-600 flex flex-col flex-wrap items-center overflow-y-scroll'>
            <Build className="fill-white m-4"/>
            <ul className='menulist flex flex-col items-center'>
                {elements}
            </ul>
        </div>
    );
  };
