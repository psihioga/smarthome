import React from 'react' 
import Image from 'next/image'


export type MenuItem= {
    text: string;
    icon?: any;
}

 
function ListItem(props: {element: MenuItem}) {
    const text = props.element.text;
    
    return (
        <li >
            {/* {text} */}
            {props.element?.icon ? <Image alt={text} 
                src={props.element?.icon} width={30} height={30}/> 
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
        <div id="nav" className='bg-primary-600 w-14'>
            <Image src={'/logo.svg'} alt='logo'  width={30} height={30}/>
            <ul >
                {elements}
            </ul>
        </div>
    );
  };
