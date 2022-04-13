export const NumberedList = ({ items, resourceName, itemComponent: ItemComponent }) => {
    return (
        <>
            {items.map((item, index) => (
                <div key={index}>
                    <h3>{index + 1}</h3>
                    <ItemComponent {...{ [resourceName]: item }}/>
                </div>
            ))}
        </>
    );
}
