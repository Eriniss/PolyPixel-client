import { useState } from "react";
import { Button } from "../components";

export const Test = () => {
    const [test, setTest] = useState<string>("테스트!")

    return (
        <div>
            <div>{test}</div>
            <Button buttonType="warning" children="안녕!" handleClick={() => setTest("테스트1111")} />
        </div>
    );
};
