import React from 'react'
import { LandingPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl';
import * as S from './styles'

const Logo = ({ data }: LandingPageProps) => {
  const { attributes: { logo: { data: { attributes }} } } = data;
  const { alternativeText, url } = attributes;

  return (
    <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
  )
}

export default Logo
