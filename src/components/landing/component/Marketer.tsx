import React, { useState, useRef, useEffect } from "react";

export default function Marketer(WrappedComponent: React.ComponentType<any>) {
    const Component = (props: any) => {
        const [open, setOpen] = useState(false);

        const ref = useRef<HTMLElement | undefined>();

        useEffect(() => {
            const handleClickOutside = (event: globalThis.MouseEvent) => {
                if (!ref.current?.contains(event.target as HTMLElement)) {
                    setOpen(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
        }, [ref]);

        return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />;
    };

    return Component;
}
