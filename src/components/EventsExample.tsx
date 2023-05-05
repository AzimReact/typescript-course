import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setisDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("drag");
    };
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setisDrag(true);
    };
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setisDrag(false);
    };
    const dropHAndler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setisDrag(false);
        console.log("drop");
    };

    return (
        <div>
            <input
                value={value}
                onChange={changeHandler}
                type="text"
                placeholder="Управляемый"
            />
            <input
                ref={inputRef}
                value={value}
                onChange={changeHandler}
                type="text"
                placeholder="Неуправляемый"
            />
            <button onClick={clickHandler}>click</button>
            <div
                draggable
                onDrag={dragHandler}
                style={{ width: 200, height: 200, background: "red" }}
            ></div>
            <div
                onDrop={dropHAndler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{
                    width: 200,
                    height: 200,
                    background: isDrag ? "blue" : "red",
                    marginTop: "15px",
                }}
            ></div>
        </div>
    );
};

export default EventsExample;
