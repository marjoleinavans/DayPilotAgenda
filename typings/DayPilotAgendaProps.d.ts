/**
 * This file was generated from DayPilotAgenda.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ListAttributeValue, ListValue } from "mendix";
import { CSSProperties } from "react";

export interface DayPilotAgendaContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    agendaItems: ListValue;
    titleAttribute: ListAttributeValue<string>;
    startAttribute: ListAttributeValue<Date>;
    endAttribute: ListAttributeValue<Date>;
    typeAttribute: ListAttributeValue<string>;
}

export interface DayPilotAgendaPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    agendaItems: {} | { caption: string } | { type: string } | null;
    titleAttribute: string;
    startAttribute: string;
    endAttribute: string;
    typeAttribute: string;
}
