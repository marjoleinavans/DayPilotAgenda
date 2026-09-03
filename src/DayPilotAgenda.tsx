import { ReactElement, useEffect, useRef } from "react";
import { DayPilot as DayPilotLibrary } from "@daypilot/daypilot-lite-javascript";
import { DayPilotAgendaContainerProps } from "../typings/DayPilotAgendaProps";

import "./ui/DayPilotAgenda.css";

export function DayPilotAgenda(
    props: DayPilotAgendaContainerProps
): ReactElement {
    const calendarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!calendarRef.current) {
            return;
        }

        const calendar = new DayPilotLibrary.Calendar(calendarRef.current);

        calendar.viewType = "WorkWeek";
        calendar.startDate = DayPilotLibrary.Date.today();

        calendar.businessBeginsHour = 8;
        calendar.businessEndsHour = 18;

        calendar.cellDuration = 30;
        calendar.cellHeight = 30;
        calendar.useEventBoxes = "Never";

        calendar.eventMoveHandling = "Disabled";
        calendar.eventResizeHandling = "Disabled";

        calendar.headerDateFormat = "ddd d/M";

        const events = (props.agendaItems.items ?? [])
            .map(item => {
                const title = props.titleAttribute.get(item);
                const start = props.startAttribute.get(item);
                const end = props.endAttribute.get(item);
                const type = props.typeAttribute.get(item);

                if (start.value === undefined || end.value === undefined) {
                    return null;
                }


                const typeValue = type.value ?? "";
            
                let backColor = "#808080";

                if (typeValue === "Registered") {
                    backColor = "#4472C4"; // blue
                } else if (typeValue === "Open") {
                    backColor = "#70AD47"; // green
                }

                return {
                    id: item.id.toString(),
                    text: title.value ?? "",
                    start: start.value.toISOString(),
                    end: end.value.toISOString(),
                    backColor,
                    borderColor: "#FFF",
                    fontColor: "#FFFF",
                    cssClass: "agenda-event"
                };
            })
            .filter(
                (event): event is NonNullable<typeof event> => event !== null
            );

        calendar.events.list = events;

        calendar.init();

        return () => {
            calendar.dispose();
        };
    }, [
        props.agendaItems,
        props.titleAttribute,
        props.startAttribute,
        props.endAttribute,
        props.typeAttribute
    ]);

    return <div ref={calendarRef} className="daypilot-calendar" />;
}