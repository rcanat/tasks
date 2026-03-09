import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🎄" | "🥚" | "🎃" | "🪩" | "🦃";
    const [holiday, setHoliday] = useState<Holiday>("🪩");

    const nextYear: Record<Holiday, Holiday> = {
        "🪩": "🥚",
        "🥚": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🪩",
    };

    const nextAlphabet: Record<Holiday, Holiday> = {
        "🎄": "🥚",
        "🥚": "🎃",
        "🎃": "🪩",
        "🪩": "🦃",
        "🦃": "🎄",
    };

    return (
        <div>
            <Button
                onClick={() => {
                    setHoliday(nextAlphabet[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextYear[holiday]);
                }}
            >
                Advance by Year
            </Button>
            <p>Holiday: {holiday}</p>
        </div>
    );
}
