import React from "react";
import Alert, {AlertProps} from "./Alert";

export interface AlertListProps {
    alerts: AlertProps[],
    onDismiss: (id:number) => void,
}

export default class AlertList extends React.Component<AlertListProps> {
    render() {
        const {alerts, onDismiss} = this.props;
        return (
            <div>
                {alerts.map(alert => (<Alert key={alert.id} {...alert} onDismiss={onDismiss} />))}
            </div>
        )
    }
}
