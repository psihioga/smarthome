import React from 'react' 
import  {Build}  from "@/icons/index";



export type MenuItem= {
    text: string;
    icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

 
function ListItem(props: {element: MenuItem}) {
    const text = props.element.text;
    const Icon = props.element.icon;

    
    return (
        <li className='menulist_item'>
           <Icon className='fill-white' />
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
            <Build className="fill-white"/>
            <ul className='menulist flex flex-col items-center'>
                {elements}
            </ul>
        </div>
    );
  };
