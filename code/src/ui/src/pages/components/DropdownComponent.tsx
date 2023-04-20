import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { MenuItem } from '@mui/material';
import { DropDown } from '../../mui-a11y-tb/components/DropDown';


interface Props {
}

export const DropdownComponent: React.FC<Props> = () => {

    const [age, setAge] = React.useState('');
    const handleChange = (value: any) => {
        setAge(value as string);
    };

    const refContainer = React.useRef(null);

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Dropdown'></HeadingSection>
            <ExampleSection>
                <DropDown label="age" selectSx={{ m: 2, minWidth: 80 }} changeHandler={handleChange}>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </DropDown>
            </ExampleSection>
        </div>
    )
}
