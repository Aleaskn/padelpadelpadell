import React from 'react'
import SVGs from './svgs'
import styled from '@emotion/styled';

export interface IGlyphProps {
    glyph: string
}

//export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
//TODO : change size type inside IProps interface, below

interface IProps {
    glyph: keyof IGlyphs
    size?: any
    marginRight?: string
    color?: string
    onClick?: () => void
}

export type availableGlyphs =
    | 'facebook'
    | 'instagram'
    | 'youtube'
    | 'linkedin'
    | 'twitch'
    | 'telegram'
    | 'shower'
    | 'personBoth'
    | 'creditCard'
    | 'racquet'
    | 'magnifyLens'
    | 'ball'

export type IGlyphs = { [k in availableGlyphs]: JSX.Element }

export const glyphs: IGlyphs = {
    facebook: SVGs.facebook,
    instagram: SVGs.instagram,
    youtube: SVGs.youtube,
    linkedin: SVGs.linkedin,
    twitch: SVGs.twitch,
    telegram: SVGs.telegram,
    shower: SVGs.shower,
    personBoth: SVGs.personBoth,
    creditCard: SVGs.creditCard,
    racquet: SVGs.racquet,
    magnifyLens: SVGs.magnifyLens,
    ball: SVGs.ball
}

type WrapperProps = IProps

const IconWrapper = styled('div')<WrapperProps>`
  display: inline-block;
`;

const Glyph = ({ glyph = '' }: IGlyphProps) => {
    // @ts-ignore
    return glyphs[glyph] || null
}

export const Icon : React.FC<WrapperProps> = (props : WrapperProps) => {
         const { glyph } = props

         const sizeMap : any = {
             xs: 8,
             sm: 12,
             md: 16,
             lg: 20,
             xl: 24,
         }

         let { size } = props
         const isSizeNumeric = size - parseFloat(size) + 1 >= 0
         size = isSizeNumeric ? size : sizeMap[size]
         size = size || '16px'

        let iconWrapper =
            <>
                <IconWrapper
                    {...props}
                    style={{marginRight: props.marginRight, width: size}}
                >
                    <Glyph glyph={glyph as string}/>
                </IconWrapper>
            </>;

        return iconWrapper;
}
export default Icon
