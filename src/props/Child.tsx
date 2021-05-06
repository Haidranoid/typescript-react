import React from "react";

interface ChildProps {
    name: string
}

const Child: React.FC<ChildProps> = ({name}) => {
    return <div>
        {name}
    </div>
}

export default Child;