/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useEffect, useState } from 'react';
import { MenuItem } from '@mui/material';
import { DesignSystem, Dropdowns } from 'a11y-theme-builder-sdk';
import { StringSelectable } from '../../components/editors/StringSelectable';
//import './DropdownsMolecule.css';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { ExampleSection } from '../content/ExampleSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';
import { LightModeSection } from '../content/LightModeSection';
import { DarkModeSection } from '../content/DarkModeSection';
import { DropDown } from '../../mui-a11y-tb/components/DropDown';

interface Props {
    molecule: Dropdowns;
    designSystem: DesignSystem;
}

export const DropdownsMolecule: React.FC<Props> = ({ molecule, designSystem }) => {
    const grid = designSystem.atoms.gridSettings.grid.getValue();

    useEffect(() => {
        console.log("DropdownsMolecule mounted");
    }, []);

    const [sampleLM, setSampleLM] = useState<string>("option1");
    const [sampleDM, setSampleDM] = useState<string>("option1");
    const refContainer = React.useRef(null);

    return (
        <div>
            <HeadingSection item={molecule} title="Apply Styles">
                You can stylize your dropdown menu items in their hover and focus states.
            </HeadingSection>
            <ExampleSection>
                <LightModeSection>
                    <div className="form-row">
                        <DropDown selectClassName="dropdownFocus" selectSx={{ width: "300px" }} value={sampleLM} changeHandler={(value) => setSampleLM(value)}>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </DropDown>
                    </div>
                </LightModeSection>
                <DarkModeSection>
                    <div className="form-row">
                        <DropDown selectSx={{ width: "300px" }} value={sampleDM} changeHandler={(value) => setSampleDM(value)}>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </DropDown>
                    </div>
                </DarkModeSection>
            </ExampleSection>
            <SettingsSection>
                <StringSelectable property={molecule.menuFocusState} defaultValue="true" variant="radio" />
            </SettingsSection>
            <GeneratedCodeSection item={molecule} />
        </div >
    )
}
