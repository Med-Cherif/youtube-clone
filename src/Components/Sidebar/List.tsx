import { IconType } from 'react-icons';
import Item from './Item'

interface Item {
    Icon: IconType,
    text: string; 
    id: number;
    border?: boolean
}

interface IProps {
    items: Item[];
}

const List = ({ items }: IProps) => {
    return (
        <ul className="mr-1 py-4 first:pt-0 border-b last:border-b-0">
            {items.map((item) => (
                <Item key={item.id} Icon={<item.Icon className="text-xl" />} text={item.text} />
            ))}
        </ul>
    )
}

export default List