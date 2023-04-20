import React, {ReactNode, useEffect, useState} from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

interface Props {
    label?: string;
    selectClassName?: string;
    selectSx?: SxProps<Theme>;
    value?: any;
    changeHandler?: (changedValue: any) => void;
    children?: ReactNode;
}

// DropdownComponent was written to ensure that the dropdowns for
// our Select components were able to be styled by CSS in both
// lightmode and darkmode.  By default Select dropdowns are Mui
// Popovers, but by default they live under HTML <body/>.  This code
// will, using the container property, insert the dropdown into a
// node in the DOM that is a sibling of the Select component.  Thus,
// if the class 'darkmode' is placed on a containing element
// of the Select component, then it would affect the styling of
// the dropdown, too.
export const DropDown: React.FC<Props> = ({label, selectClassName, selectSx, value, changeHandler, children}) => {

    /*
    const [selectValue, setSelectValue] = useState<any>(value);
    useEffect(() => {
        if (value) {
            setSelectValue(value);
        }
    }, [value]);
    */

    const handleChange = (event: SelectChangeEvent) => {
        if (changeHandler) {
            changeHandler(event.target.value);
        }
    };

    const refContainer = React.useRef(null);

    return (
        <div>
            <FormControl sx={selectSx}>
                <InputLabel id="demo-simple-select-label">{label || ""}</InputLabel>
                <Select
                className={selectClassName || ""}
                labelId="demo-simple-select-label"
                value={value}
                label={label || ""}
                onChange={handleChange}
                MenuProps={{
                    container: refContainer.current
                }}
                >
                    {children}
                </Select>
            </FormControl>
            <div ref={refContainer} ></div>
        </div>
    )
}
