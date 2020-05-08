import React from 'react'
import AlertContext from '../../context/gthub/AlertContext'

const Alert = () => {
    const alertContext = useContext(AlertContext)
    const{alert} = alertContext
    return (
        alert != null &&
        <div className={`alert alert-${alert.type}`}> 
            {alert.msg}
        </div>
    )
}

export default Alert
