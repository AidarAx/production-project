import React from 'react'
import { RoutePath } from 'shared/config/RouteConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главное',
    Icon: MainIcon
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    Icon: AboutIcon
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfileIcon
  }
]
