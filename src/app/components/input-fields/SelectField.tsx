import { useState } from 'react'
import styled from 'styled-components'
import { ExpandIcon } from '../../../assets/svgs/ExpandIcon'
import { COLOR } from '../../constants/color.constant'
import { Body2 } from '../Texts'
import { Label } from './Label'
import { SelectFieldButton } from './SelectFieldButton'

interface SelectField {
    options: string[],
    selectedOption: string,
    onOptionChange: (value: string) => void
}

interface Props {
    label: string
    style?: React.CSSProperties
    data: SelectField
    className?: string
}

export function SelectField({ className, style, label, data }: Props) {
    const [isFocused, setIsFocused] = useState(false)
    const { onOptionChange, options, selectedOption } = data

    function handleBlur(event: React.FocusEvent<HTMLDivElement, Element>) {
        const { relatedTarget, currentTarget } = event

        if (!currentTarget.contains(relatedTarget)) {
            setIsFocused(false)
        }
    }

    return <Container
        className={className}
        style={style}
        onBlur={(e) => handleBlur(e)}
    >
        <InputContainer isFocused={isFocused}>
            <Text isFocused={isFocused}>{selectedOption}</Text>
            <Label isFocused={isFocused}>{label}</Label>
            <InputButton onClick={() => setIsFocused(!isFocused)} />
            <IconContainer>
                <ExpandIcon style={{ transform: isFocused ? 'rotate(180deg)' : '' }} color={isFocused ? COLOR.primary : COLOR.disabled} />
            </IconContainer>
        </InputContainer>
        {isFocused ?
            <OptionsContainer>
                {options.map((option, index) => {
                    return <SelectFieldButton index={index} text={option} onClick={() => {
                        onOptionChange(option)
                        setIsFocused(false)
                    }} />
                })}
            </OptionsContainer>
            : null}
    </Container>
}

interface FocusProps {
    isFocused?: boolean
}

const Container = styled.div`
    position: relative;
`

const InputContainer = styled.div<FocusProps>`
    height: 48rem;
    border-radius: ${({ isFocused }) => isFocused ? '4rem 4rem 0 0' : '4rem'};
    border-style: solid;
    border-width: ${({ isFocused }) => isFocused ? '2rem 2rem 0 2rem' : '2rem'};;
    border-color: ${({ isFocused }) => isFocused ? COLOR.primary : COLOR.disabled};
    background-color: ${COLOR.neutral};
`

const IconContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    right: 12rem;
    top: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
    pointer-events: none;
`

const InputButton = styled.button`
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border: 0;
    border-radius: 4rem;
    background-color: ${COLOR.neutral};
    cursor: pointer;
`

const Text = styled(Body2) <FocusProps>`
    width: calc(100% - 48rem);
    position: absolute;
    overflow: hidden;
    padding: 4rem 0rem 0rem 16rem;
    top: 50%;
    color: ${({ isFocused }) => isFocused ? COLOR.highEmphasis : COLOR.mediumEmphasis};
    white-space: nowrap;
    text-overflow: ellipsis;
    transform: translateY(-50%);
    pointer-events: none;
`

const OptionsContainer = styled.div`
    top: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 0 0 4rem 4rem;
    border-style: solid;
    border-width: 0 2rem 2rem 2rem;
    border-color: ${COLOR.primary};
    background-color: ${COLOR.neutral};
`