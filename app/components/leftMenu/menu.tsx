import React from 'react' 
import Image from 'next/image'
import Verc  from "@/images/vercel.svg";

export type MenuItem= {
    text: string;
    icon?: string;
}

 
function ListItem(props: {element: MenuItem}) {
    const text = props.element.text;
    
    return (
        <li >
            {text}
            {props.element?.icon ? <Image alt={text} 
                src={Verc} width={300} height={300}/> 
                : null}
        </li>
    )
}

export const Menu = (props: {items:MenuItem[]}) => {

    const items:MenuItem[] = props.items;

    const elements = items.map(item => {
        return <ListItem  key={item.text} element={item} />
    })

    return (
        <div id="nav" className='bg-primary-600 w-20'>
            <Image src={'/logo.svg'} alt='logo'  width={30} height={30}/>
            <ul >
                {elements}
            </ul>
        </div>
    );
  };
