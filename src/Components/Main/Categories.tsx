import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"
import Arrow from "./Arrow";
import CategoryItem from "./CategoryItem";

const categories = [
    'all',
    'gaming', 
    'music',
    'cars',
    'test drives',
    'javascript',
    'movies & series',
    'phones',
    'blogs',
    'news',
    'sports',
    'football',
    'programming',
]

const movingValue = 100;

const Categories = () => {
    const [activeItem, setActiveItem] = useState(categories[0]);

    const lastItemRef = useRef<HTMLLIElement>(null);
    const firstItemRef = useRef<HTMLLIElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const listRef = useRef<HTMLUListElement>(null)

    function getMovingValue() {

    }

    const navigateCategory = (item: string) => {
        setActiveItem(item);
    }

    const handleRightClick = () => {
        const list = listRef.current;
        const firstItem = firstItemRef.current;
        const wrapper = wrapperRef.current

        if (!list || !firstItem || !wrapper) return;

        const firstItemCoordinates = firstItem.getBoundingClientRect();
        const wrapperCoordinates = wrapper.getBoundingClientRect();


        if (firstItemCoordinates.left + movingValue > wrapperCoordinates.left) {
            list.style.left = `0px`
        } else {
            list.style.left = `${list.offsetLeft + movingValue}px`
        }
    }

    const handleLeftClick = () => {
        const list = listRef.current;
        const lastItem = lastItemRef.current;
        const wrapper = wrapperRef.current

        if (!list || !lastItem || !wrapper) return;

        const lastItemCoordinates = lastItem.getBoundingClientRect();
        const wrapperCoordinates = wrapper.getBoundingClientRect();

        const position = wrapperCoordinates.right;
        const rightCoordinate = lastItemCoordinates.right - movingValue;
        const leftCoordinate = lastItemCoordinates.left - movingValue;

        const restArea = rightCoordinate - position;

        if (leftCoordinate < window.innerWidth) {
            list.style.left = `${list.offsetLeft - (movingValue + restArea)}px`;
        } else {
            list.style.left = `${list.offsetLeft - movingValue}px`;
        }

    }


    return (
        <div className="border py-2 border-x-0 bg-white z-10 flex items-center h-14 sticky top-[66px]">
            <div 
                ref={wrapperRef} 
                className="overflow-hidden relative w-[calc(100%_-_128px)] h-full flex items-center mx-auto"
            >
                <ul ref={listRef} className="flex left-0 gap-2 absolute transition-[left] duration-100">
                    {categories.map((category, index) => {
                        let reference;
                        if (index === 0) reference = firstItemRef;
                        if (index === categories.length - 1) reference = lastItemRef
                        return <CategoryItem 
                            reference={reference}
                            key={category} 
                            text={category} 
                            isActive={activeItem === category} 
                            navigateCategory={navigateCategory} 
                        />
                    })}
                </ul>
            </div>
            <Arrow handleClick={handleLeftClick} position="left">
                <MdKeyboardArrowLeft />
            </Arrow>
            <Arrow handleClick={handleRightClick} position="right">
                <MdKeyboardArrowRight />
            </Arrow>
        </div>
    )
}

export default Categories