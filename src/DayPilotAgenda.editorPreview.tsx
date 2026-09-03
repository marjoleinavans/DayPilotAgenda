import { ReactElement } from "react";

export function preview(): ReactElement {
    return (
        <div
            style={{
                padding: "20px",
                border: "1px dashed #999",
                textAlign: "center"
            }}
        >
            DayPilot Calendar
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/DayPilotAgenda.css");
}
