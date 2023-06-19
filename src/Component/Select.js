import React from "react";
import {MDBSelect} from "mdbreact";

const Select = (data) => {
    const value = data.value;
    const checked = data.checked;
    const className = data.className;

    function createOptions() {
        let options = [];
        if (value === undefined)
            return;
        value.map(item => {
            options.push({
                text: item.name,
                value: item.code.toString(),
                checked: item.code === checked
            })
        })
        return options;
    }

    function handleSelect(valueChoose) {
        value.map(item => {
            if (parseInt(valueChoose[0]) === item.code) {
                data.passData(item);
            }
        })
    }

    return (
        <div>
            <MDBSelect
                search
                options={createOptions()}
                selected="Choose your option"
                label={data.label}
                // getTextContent={handleSelect}
                getValue={handleSelect}
                labelClass={className}
            />
        </div>
    );

}

export default Select;